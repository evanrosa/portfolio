import Document, { Html, Head, Main, NextScript } from 'next/document';

class WebDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#0a192f" />
          <link rel="apple-touch-icon" href="/public/apple-touch-icon.png" />
          <meta name="apple-mobile-web-app-status-bar" content="#0a192f" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Anek+Telugu:wght@400;600&family=Source+Code+Pro:wght@300;400;500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default WebDocument;
