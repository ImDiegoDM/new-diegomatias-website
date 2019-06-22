import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { TemplateOptions } from '.';
import { dom } from '@fortawesome/fontawesome-svg-core'

export function componentToString(element:React.ReactNode,options:TemplateOptions){
  const sheet = new ServerStyleSheet();
  const content = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      {element}
    </StyleSheetManager>,
  );

  const styleTags = sheet.getStyleTags();
  const fontAwesomeStyle = `<style>${dom.css()}</style>`
  return `
  <!DOCTYPE html>
  <html>
    <head>
      ${options.title ? `<title>${options.title}</title>` : ''}
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
      ${options.description ? `<meta name="Description" content=${options.description}/>` : ''}
      ${styleTags}
      ${fontAwesomeStyle}
    </head>
    <body>
      ${content}
    </body>
  </html>
  `
}