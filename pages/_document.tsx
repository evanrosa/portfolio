import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class WebDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
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
