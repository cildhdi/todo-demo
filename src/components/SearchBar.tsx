import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./search_bar.less";

export const SearchBar: React.FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <div className={classNames("search-bar", className)}>
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input className="input"/>
    </div>
  );
};
