import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class WebDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <Script
            defer
            id="gtm_script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NL3W835');`,
            }}
          ></Script>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#0a192f" />
          <link rel="apple-touch-icon" href="/public/apple-touch-icon.png" />
          <meta name="apple-mobile-web-app-status-bar" content="#0a192f" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Anek+Telugu:wght@400;600&family=Source+Code+Pro:wght@300;400;500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NL3W835"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>`,
          }}
        ></noscript>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default WebDocument;
