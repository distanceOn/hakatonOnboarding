import { createGlobalStyle } from 'styled-components'

import './index.css'

import { Inter } from '@/shared/lib/Inter'

export const GlobalStyle = createGlobalStyle`
    
    @font-face {
        font-family: 'Inter';
        src: url(${Inter}) format('ttf'),
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
	    color: #111827;
    }
    html {
        font-size: 62.5%;
        font-style: normal;
        font-weight: 400;
    }
    *:before,
    *:after {
        box-sizing: border-box;
    }
    a,
    a:visited {
        text-decoration: none;
        cursor: pointer;
    }
    button {
        cursor: pointer;
    }
    ul li {
        list-style: none;
    }
    input,
    button,
    textarea,
    select {
        font: inherit;
    }
    h1, h2, h3, h4, h5, h6, p {
        all: unset;
    }
    body {
        width: 100%;
        height: 100%;
        font-family: 'Inter', sans-serif;
    }
`
