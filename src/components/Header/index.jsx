import React, { useState, useContext } from "react";
export const Header = ({ darkTheme, setDarkTheme }) => {

  return (

    <>
      <div className="header">
        <h1>React Newspapper</h1>
        <button onClick={() => setDarkTheme(!darkTheme)}>Switch Theme</button>
      </div>
    </>
  );
};
