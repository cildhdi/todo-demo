import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./icon_menu.less";

export const IconMenu: React.FC<{
  icon: IconProp;
  text: string;
  selected?: boolean;
  onClick?: () => void;
}> = ({ icon, selected, text, onClick }) => {
  return (
    <div
      className="icon-menu"
      style={selected ? { backgroundColor: "rgb(237,237,237)" } : {}}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} className="icon" />
      <span>{text}</span>
    </div>
  );
};
