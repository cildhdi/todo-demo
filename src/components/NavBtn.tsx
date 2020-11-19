import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import "./nav_btn.less";

export const NavBtn: React.FC<{
  icon: IconProp;
}> = ({ icon }) => {
  return (
    <div className="nav-btn">
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};
