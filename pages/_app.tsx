import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider, createGlobalStyle } from "styled-components";

export interface ITheme {
  niceBlack: string;
}

export interface IThemeWrapper {
  theme: ITheme;
}

export const theme: ITheme = {
  niceBlack: "#001F3F",
};

const GlobalStyle = createGlobalStyle<IThemeWrapper>`
  body {
    margin: 0 auto;
    color: ${props => props.theme.niceBlack}; 
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>환기타임</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
