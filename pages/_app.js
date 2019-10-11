import App, { Container } from "next/app";
import React from "react";
import { ThemeProvider as SCThemePRovider } from "styled-components";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Page from "../components/Page";
import theme from "../src/theme";

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        pageProps.pathname = ctx.pathname;
        pageProps.query = ctx.query;
        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <CssBaseline />
                <SCThemePRovider theme={theme}>
                    <MaterialThemeProvider theme={theme}>
                        <Page pageProps={pageProps}>
                            <Component {...pageProps} />
                        </Page>
                    </MaterialThemeProvider>
                </SCThemePRovider>
            </>
        );
    }
}

export default MyApp;
