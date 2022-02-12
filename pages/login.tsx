import { getProviders, signIn } from 'next-auth/react'

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}

export default function Login({ providers }) {
  const providersList = Object.values(providers)
  return (
    <div>
      <button onClick={() => signIn('spotify')}>Spotify</button>
    </div>
  )
}
