import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background-color: #ffffff;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    .temporary-test {
        padding-top: 5rem;
        height: 100vh;
    }

    .temporary-test:last-child {
        height: 200vh;
    }
`;
