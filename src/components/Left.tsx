import React from "react";
import classNames from "classnames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBell,
  faCalendarAlt,
  faEnvelope,
  faStar,
  faSun,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { IconMenu } from "./IconMenu";
import "./left.less";
import { faCheck, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CategoryList } from "./CategoryList";
import { Space } from "./Space";

const menus: [string, IconProp][] = [
  ["我的一天", faSun],
  ["重要", faStar],
  ["已计划日程", faCalendarAlt],
  ["任务", faBell],
];

const bottomIcons: IconProp[] = [
  faEnvelope,
  faCalendarAlt,
  faUser,
  faPaperclip,
  faCheck,
];

export const Left: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={classNames("comp-left", className)}>
      <div className="items">
        <Space y={30} />
        {menus.map(([text, icon]) => (
          <IconMenu key={text} icon={icon} text={text} />
        ))}
        <Space y={30} />
        <CategoryList />
      </div>
      <div className="bottom">
        {bottomIcons.map((icon) => (
          <FontAwesomeIcon icon={icon} className="button" />
        ))}
      </div>
    </div>
  );
};
