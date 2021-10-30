import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        background: ${({ theme }) => theme.background};
        color:  ${({ theme }) => theme.text} !important;
        font-family: 'Nunito Sans', sans-serif;
        font-size:16px;
        min-width: 375px;
    }
    html,body,#root{
        height: 100%;
    }
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
`;
