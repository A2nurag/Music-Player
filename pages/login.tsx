import { getProviders, signIn } from 'next-auth/react'
import Head from 'next/head'

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
    <div className="dark">
      <Head>
        <title>Log In</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid h-screen w-full select-none place-items-center bg-gray-100 dark:bg-zinc-700">
        <div className="flex min-w-max flex-col items-center gap-16">
          <div className="flex flex-row items-center gap-2 md:gap-6">
            <img
              src="/not-spotify-logo.svg"
              className="pointer-events-none w-16 md:w-40"
            />
            <h1 className="pt-3 text-3xl font-bold text-[#75ba2f] md:pt-6 md:text-5xl">
              Not Spotify
            </h1>
          </div>

          <button
            type="button"
            className="w-4/5 rounded-lg bg-gray-300 py-3 px-4 text-center text-base font-semibold text-black shadow-sm transition duration-200 ease-in hover:bg-[#75ba2f] focus:outline-none focus:ring-2 focus:ring-[#75ba2f] focus:ring-offset-2 focus:ring-offset-gray-200  dark:bg-zinc-600 dark:text-gray-50 dark:hover:bg-[#75ba2f] dark:focus:outline-none dark:focus:ring-2 dark:focus:ring-[#75ba2f] dark:focus:ring-offset-zinc-600"
            onClick={(_) => signIn('spotify', { callbackUrl: '/' })}
          >
            Log In With Spotify
          </button>
        </div>
      </main>
    </div>
  )
}
