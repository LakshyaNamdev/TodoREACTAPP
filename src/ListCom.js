import React, { useState } from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const ListCom = (props) => {
  const [line, setLine] = useState(false);
  const cutIt = () => {
    setLine(true);
  };
  return (
    <div className="todo_style">
      <span onClick={cutIt}>
        <DeleteOutlineIcon />
      </span>
      <li style={{ textDecoration: line ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
};
export default ListCom;
