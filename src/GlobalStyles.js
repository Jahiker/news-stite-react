import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-light: #ffffff;
        --color-dark: #202124;

        --color-bg: var(--color-light);
        --color-font: var(--color-dark);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: var(--color-font);
    }

    html {
        font-size: 62.5%;
        font-family: 'Bodoni Moda', serif;
        background-color: var(--color-bg);
    }

    ${(props) =>
      props.darkTheme &&
      css`
        :root {
          --color-bg: var(--color-dark);
          --color-font: var(--color-light);
        }
      `}

`;
