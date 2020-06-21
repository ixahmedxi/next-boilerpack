import Head from 'next/head'

export const Layout: React.FC<{ title?: string }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </Head>
      {children}
    </>
  )
}
