import { useState, useEffect } from "react";

const ToDoItem = ({
  styling,
  setStyling,
  ele,
  setItemsLeft,
  data,
  setToDoList,
  removeItemWithId,
}) => {
  //------------------------handlers-------------------
  const removeItem = (e) => {
    setItemsLeft((e) => (e -= 1));
    const newList = data.filter((item) => item.id !== ele.id);
    setToDoList(newList);
  };

  const toggleCheckMark = (e) => {
    e.stopPropagation();
    if (ele.completed) {
      ele.completed = false;
      ele.active = true;
      e.target.style.background = "";
      e.target.parentNode.children[1].style.textDecoration = "";
      e.target.parentNode.children[1].style.color = "hsl(236, 9%, 61%)";
    } else {
      ele.active = false;
      ele.completed = true;
      e.target.style.background = `url("../icon-check.svg") center no-repeat,
        linear-gradient(hsl(192, 100%, 67%),hsl(280, 87%, 65%))`;
      e.target.parentNode.children[1].style.textDecoration = "line-through";
      e.target.parentNode.children[1].style.color = "hsl(236deg 9% 61% / 61%)";
    }
  };
  const handelExit = (e) => {
    setItemsLeft((e) => (e = e - 1));
    // console.log(e.target.id)
    removeItem(e.target.id);
    // console.log(e.target)
  };
  return (
    <>
      <div className={"toDoCreator toDoItem " + styling.inputStyle}>
        <div className="insideToDoItem">
          <div
            className="circle"
            onClick={(e) => toggleCheckMark(e)}
            style={{
              background: `${
                ele.completed
                  ? `url('../icon-check.svg') center no-repeat,
                                                    linear-gradient(hsl(192, 100%, 67%),
                                                    hsl(280, 87%, 65%))`
                  : ""
              }`,
            }}
          ></div>
          <h4
            style={{
              textDecoration: `${ele.completed ? "line-through" : ""}`,
              color: `${
                ele.completed ? "hsl(236deg 9% 61% / 61%)" : "hsl(236, 9%, 61%)"
              }`,
            }}
          >
            {ele.data}
          </h4>
        </div>
        <div onClick={(e) => handelExit(e)}>
          <img src="../icon-cross.svg" key={5} alt="" />
        </div>
      </div>
    </>
  );
};
export default ToDoItem;
