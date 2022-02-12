import NextAuth from 'next-auth/next'
import SpotifyProvider from 'next-auth/providers/spotify'
import spotifyApi, { LOGIN_URL } from '../../../lib/spotify'

const refreshAccessToken = async (token) => {
  try {
    spotifyApi.setAccessToken(token.accessToken)
    spotifyApi.setRefreshToken(token.refreshToken)

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken()

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
      refreshToken: refreshedToken.refresh_token ?? token.refresh_token,
    }
  } catch (error) {
    console.error(error)

    return {
      ...token,
      error: 'RefreshAccessTokenError',
    }
  }
}

export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
  ],
  secret: process.env.JWT_SECRET,

  pages: {
    signIn: '/login',
  },

  callbacks: {
    jwt: async ({ token, account, user }) => {
      //initial signIn
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accountTokenExpiry: account.expires_at * 1000,
        }
      }

      // Return previous access token if the access token has not expired yet
      if (Date.now() < token.accessTokenExpires) {
        console.log('Access token is Valid')
        return token
      }

      // Access token has expired, try to refresh it
      console.log('Token has expired, needs refreshing')
      return await refreshAccessToken(token)
    },

    session: async ({ session, token }) => {
      session.user = token.username
      session.accessToken = token.accessToken
      session.refreshToken = token.refreshToken

      return session
    },
  },
})
