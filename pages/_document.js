import Document, { Head, Main, NextScript, Html } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';
import { langs } from '@/db'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage, query }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );
    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();
    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags, query };
  }

  render() {
    const lang = langs.filter(l => l.key === this.props.query.lang)
    return (
      <Html lang={lang.length > 0 ? lang[0].key : 'pt'}>
        <Head>
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <div id="modal-root"/>
          <NextScript />
        </body>
      </Html>
    );
  }
}