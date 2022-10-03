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
        font-family: 'Bodoni Moda', serif;
    }

    html {
        font-size: 62.5%;
        background-color: var(--color-bg);
    }

    .container {
      display: block;
      max-width: 1440px;
      margin: 0 auto;
    }

    .news-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
      justify-content: center;
      gap: 20px;
    }

    button, .btn {
      background-color: var(--color-bg);
      border: 2px solid var(--color-font);
      padding: 10px 30px;
      text-align: center;
      font-size: 1.6rem;
      font-weight: bold;
      text-transform: uppercase;
      border-radius: 5px;

      &.btn-square {
        padding: 0;
        width: 35px;
        height: 35px;

        svg {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    a {
      text-decoration: none;
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
