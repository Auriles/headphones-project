import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='fr'>
        <Head>

          {/* FAVICON */}
          <link rel="stylesheet" href="../images/favicon.png" type="image/x-icon" />

          {/* REMIXICONS */}
          <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />

        </Head>
        <body>
          <Main />
          <NextScript />

          <script id="__bs_script__">
            {/* <![CDATA[document.write("<script async src='http://HOST:4000/browser-sync/browser-sync-client.js?v=2.27.5'><\/script>".replace("HOST", location.hostname));]]> */}
          </script>
        </body>
      </Html>
    );
  }
}