import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }
    body{
        height: 100vh;
        width: 100vw;
        font-size: 62.5%;
        background: url("https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");
        background-size: cover;
        background-position: center;
    }
`;

export default GlobalStyle;
