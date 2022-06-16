import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        border: none;
        font-family: 'Quicksand', sans-serif;
    }

    html {
        box-sizing: border-box;
        font-family: 'Quicksand', sans-serif;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    input,select{
        outline: none;
    }

    button{
        background-color: transparent;
        cursor: pointer;
        :disabled{
            cursor: default;
        }
    }

    h1,h2,h3,h4,h5,h6{
        font-size: 1rem;
    }

    a{
        text-decoration: none;
        color: inherit;
        :visited{
            text-decoration: none;
            color: inherit;
        }
    }

    ul,ol,li{
        list-style: none;
    }

    html{
        font-size: 16px;
        ${props => props.theme.breakpoints.xl3} {
            font-size: 14px;
        }
        ${props => props.theme.breakpoints.xl} {
            font-size: 12px;
        }
        ${props => props.theme.breakpoints.xxs} {
            font-size: 10px;
        }
    }

`