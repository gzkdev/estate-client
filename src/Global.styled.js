import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    }

    html {
    font-size: 100%;
    scroll-behavior: smooth;
    }

    :root {
    /* COLORS */
    --primary-color: #242424;
    --secondary-color: #555;
    --neutral-color: #fff;

    /* FONT */

    /* LAYOUT */
    --max-width: 1140px;
    }

    html,
    body {
    width: 100%;
    height: 100%;
    }

    body {
    font-size: 1.125rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    line-height: 1.5;
    }

    /* section:not(:first-child){
        padding: 15vh 0px 10vh; ;
    } */

    .section-header{
        max-width: 540px;
    }

    .section-header h2 {
        font-size: clamp(1.4rem, 4vw + 1rem, 36px);
        line-height: 1.2;
        margin-bottom: 16px;
    }

    input{
        height: 48px;
    }

`