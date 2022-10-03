import React from "react";

import { CgDarkMode } from "react-icons/cg";

import { HeaderStyles, NavMenu, ThemeSwitch } from "./styles";

import { router } from "../../router";

import { NavLink } from "react-router-dom";

export const Header = ({ darkTheme, setDarkTheme }) => {
  return (
    <HeaderStyles>
      <h1>React Newspapper</h1>
      <ThemeSwitch
        className="btn btn-square "
        onClick={() => setDarkTheme(!darkTheme)}
      >
        <CgDarkMode />
      </ThemeSwitch>
      <NavMenu className="nav-menu">
        <ul className="nav-menu_list">
          {
            router.map(route => {

              if(route.name != 'Search') {
                return (
                  <li key={route.id}>
                    <NavLink to={route.path} end >{ route.name }</NavLink>
                  </li>
                )
              }
            })
          }
        </ul>
      </NavMenu>
    </HeaderStyles>
  );
};
