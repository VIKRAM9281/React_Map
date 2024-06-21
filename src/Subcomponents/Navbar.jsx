import React from "react";
import { pages } from "../Utils/constant";
import globalcss from "../Css/Global.module.css"
const Navbar = () => {
  return (
    <div>
      <navbar>
        <ul className={`d-flex justify-content-between ${globalcss.ul}`}>
          {pages.map((item, ind) => {
           return <li key={ind}>{item}</li>;
          })}
        </ul>
      </navbar>
    </div>
  );
};

export default Navbar;
