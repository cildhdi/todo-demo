import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./add_item.less";

export const AddItem: React.FC<{
  text: string;
  onConfirm?: (text: string) => void;
}> = ({ text, onConfirm }) => {
  const [inp, setInp] = useState("");

  return (
    <div className="add-item">
      <FontAwesomeIcon icon={faPlus} className="icon" />
      <input
        type="text"
        placeholder={text}
        value={inp}
        onChange={(e) => setInp(e.target.value)}
        onKeyDown={(e) => {
          if (onConfirm && e.key === "Enter") {
            onConfirm(inp);
            setInp("");
          }
        }}
      />
    </div>
  );
};
