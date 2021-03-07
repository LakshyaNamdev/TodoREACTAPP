import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ListCom from "./ListCom";

const TodoList = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const cutIt = (event) => {
    setItem(event.target.value);
  };

  const update = () => {
    setList((olditems) => {
      return [...olditems, item];
    });
    setItem("");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <input
            type="text"
            placeholder="Add Tasks"
            onChange={cutIt}
            value={item}
          />
          <Button className="new_btn" onClick={update}>
            <AddIcon />
          </Button>
          <br />
          <ol>
            {list.map((val, index) => {
              return <ListCom text={val} key={index} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default TodoList;
