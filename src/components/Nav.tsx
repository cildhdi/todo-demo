import React from "react";
import { NavBtn } from "./NavBtn";
import {
  faTh,
  faCog,
  faQuestion,
  faBullhorn,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { SearchBar } from "./SearchBar";

import "./nav.less";

export function Nav() {
  return (
    <div className="nav">
      <NavBtn icon={faTh} />
      <span className="logo"> ToDo </span>
      <div className="search">
        <SearchBar />
      </div>
      <NavBtn icon={faCog} />
      <NavBtn icon={faQuestion} />
      <NavBtn icon={faBullhorn} />
      <NavBtn icon={faUser} />
    </div>
  );
}
