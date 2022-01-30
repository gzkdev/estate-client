import { createGlobalStyle } from "styled-components"

import InterRegular from "./assets/fonts/Inter-Regular.woff"
import InterSemiBold from "./assets/fonts/Inter-SemiBold.woff"
import InterBold from "./assets/fonts/Inter-Bold.woff"

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Inter;
        src: url(${InterRegular}) format('woff');
    }

    @font-face {
        font-family: Inter;
        src: url(${InterSemiBold}) format('woff');
        font-weight: 600;
    }

    @font-face {
        font-family: Inter;
        src: url(${InterBold}) format('woff');
        font-weight: bold;
    }

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
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
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
        padding: 0px 16px ;
    }

    input, button{
        height: 48px;
        border: none;
        outline: none;
        font-family: inherit;
        font-size: 0.96rem;
    }

    .logo{
        text-decoration: none;
        color: inherit;
        font-size: 0.9rem;

        & > span{
            display: block;
            line-height: 1;

            &:nth-child(2){
                font-weight: bold;
            }
        }
    }

`