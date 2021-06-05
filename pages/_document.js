import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="robots" content="noindex, nofollow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>
            Ebn Sina - Full Stack Developer &amp; JavaScript Evangelist
          </title>
          <meta
            name="description"
            content="Ebn Sina is a Full Stack Developer, mostly works with JavaScript (JS), React.js, Next.js, Node.js, Deno, MongoDB, GraphQL, MySQL and all kind of cutting edge technology."
          />
          <meta
            name="keywords"
            content="JavaScript, React, Node, MongoDB, GraphQL, MySQL, Frontend, Backend, Full Stack."
          />
          <meta property="og:site_name" content="Ebn Sina" />
          <meta property="twitter:site" content="@ebns1na" />
          <meta
            property="og:title"
            content="Ebn Sina - Full Stack Developer &amp; JavaScript Evangelist"
          />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/preview-card.jpg" />
          <meta property="og:url" content="https://www.ebnsina.vercel.app" />
          <link rel="icon" href="/favicon.ico" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-WEL4V8QKY4"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WEL4V8QKY4');`,
            }}
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
export default MyDocument;
