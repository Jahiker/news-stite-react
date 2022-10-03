import styled from "styled-components";

export const HeaderStyles = styled.header`
    position: relative;

    h1 {
        text-align: center;
        padding: 20px;
        font-size: 5rem;
    }
`
export const ThemeSwitch = styled.button`
    position: absolute;
    right: 20px;
    top: 20px;
`

export const NavMenu = styled.nav`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
        list-style: none;
        display: flex;
        gap: 20px;
    }

    li {
        font-size: 1.8rem;

        .active {
            text-decoration: underline;
            font-weight: 800;
        }
    }
`