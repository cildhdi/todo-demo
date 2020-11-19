import React from "react";
import classNames from "classnames";

export const Right: React.FC<{ className?: string }> = ({ className }) => {
  return <div className={classNames(className)}></div>;
};
