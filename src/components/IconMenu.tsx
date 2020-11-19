import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./icon_menu.less";

export const IconMenu: React.FC<{
  icon: IconProp;
  text: string;
  selected?: boolean;
}> = ({ icon, selected, text }) => {
  return (
    <div className="icon-menu">
      <FontAwesomeIcon icon={icon} className="icon" />
      <span>{text}</span>
    </div>
  );
};
