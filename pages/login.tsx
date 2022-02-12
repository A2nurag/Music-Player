import { getProviders, signIn } from 'next-auth/react'

export default function login({ providers }) {
  return (
    <div>
      This is the login page.
      {console.log(providers)}
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}
