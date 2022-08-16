import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <style jsx>{`
            #__next {
              width: 100%;
            }
          `}</style>
      </body>
    </Html>
  )
}