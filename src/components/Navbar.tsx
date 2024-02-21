/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand text-success">
            Zewail Task
          </div>    
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
