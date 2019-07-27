import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { TemplateOptions } from '.';
import { dom } from '@fortawesome/fontawesome-svg-core'

export function componentToString(element:React.ReactNode,options:TemplateOptions,scripts?:string[]){
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
      ${options.title ? `
        <title>${options.title}</title>
        <meta property="og:title" content="${options.title}" />
      ` : ''}
      <meta property="og:url" content="https://www.diegomatias.dev/" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
      ${options.description ? `
        <meta name="description" content="${options.description}"/>
        <meta property="og:description" content="${options.description}">
        ` : ''}
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://diegomatias.dev/public/web.png">
      ${styleTags}
      ${fontAwesomeStyle}
    </head>
    <body>
      ${content}

      ${scripts ? scripts.map(s=>`<script src="${s}"></script>`).reduce((acc,curr)=>acc+curr):''}
    </body>
  </html>
  `
}