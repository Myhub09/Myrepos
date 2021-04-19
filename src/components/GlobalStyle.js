import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #dde3eb
}

button {
    font-weight: bold;
    font-size: 1.1 rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #009a82;
    color: #009a82;
    background:transparent;
    transition: all 0.5s ease;

    &:hover {
        background: #009a82;
        color: #dde3eb
    }
}

h2 {
    font-size:4rem;
    font-weight:700;
    color:#011627;
}
h3 {
    color:#011627;
}
h4 {
    font-size:2rem;
    font-weight:700;
}
span {
    font-weight:900;
    color:#009a82;
}
p {
    padding: 3rem 0rem;
    color:#011627;
    font-size:1.4em;
    line-height:150%;
}
`;

export default GlobalStyle;
