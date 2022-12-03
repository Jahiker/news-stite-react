import styled from "styled-components";

export const SearchForm = styled.form`
  padding: 20px 14%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  .search-wrapper {
    width: 40%;
    position: relative;

    input[name="search"] {
      width: 100%;
      height: 40px;
      border: 2px solid var(--color-font);
      border-radius: 5px;
      padding: 5px;
      color: var(--color-dark);
    }

    button[type="submit"] {
      padding: 10px;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  @media (min-width: 990px) {
    width: 100%;
    padding: 20px;
  }
`;
