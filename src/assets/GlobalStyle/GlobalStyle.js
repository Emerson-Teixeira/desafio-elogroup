import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        background: ${({ theme }) => theme.background};
        color:  ${({ theme }) => theme.text} !important;
        font-family: 'Nunito Sans', sans-serif;
        font-size:16px;
        min-width: 375px;
        max-width:1200px;
        margin: 0 auto;
    }
    html,body,#root{
        height: 99%;
    }
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
        .Toastify__toast--error {
            background: ${({ theme }) => theme.backgroundInverted} !important;
            color:  ${({ theme }) => theme.textInverted} !important;
    }
    .Toastify__toast--success {
            background: ${({ theme }) => theme.backgroundInverted} !important;
            color:  ${({ theme }) => theme.textInverted} !important;
    }
`;
