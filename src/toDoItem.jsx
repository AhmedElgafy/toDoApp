import { useState, useEffect } from "react";
let startIndex;

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

  // console.log(ele, data);
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
    removeItem(e.target.id);
  };
  const onDragOverH = (e) => {
    e.preventDefault();
  };
  const handelDragStart = (e) => {
    startIndex = +e.target.getAttribute("data-index");
    console.log(startIndex);
  };
  const onDropHandler = (e) => {
    let endIndex = +e.target.getAttribute("data-index");
    let newData = [...data];
    let tem = data[startIndex];
    newData[startIndex] = data[endIndex];
    newData[endIndex] = tem;
    setToDoList(newData);
  };

  return (
    <>
      <div
        className={"toDoCreator toDoItem moveAble " + styling.inputStyle}
        draggable="true"
        onDragOver={onDragOverH}
        onDragStart={handelDragStart}
        data-index={data.indexOf(ele)}
        onDrop={onDropHandler}
      >
        <div className="insideToDoItem" data-index={data.indexOf(ele)}>
          <div
            className="circle insertPointerCru"
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
            data-index={data.indexOf(ele)}
          ></div>
          <h4
            className="moveAble"
            style={{
              textDecoration: `${ele.completed ? "line-through" : ""}`,
              color: `${
                ele.completed ? "hsl(236deg 9% 61% / 61%)" : "hsl(236, 9%, 61%)"
              }`,
            }}
            data-index={data.indexOf(ele)}
          >
            {ele.data}
          </h4>
        </div>
        <div className="insertPointerCru" onClick={(e) => handelExit(e)}>
          <img src="../icon-cross.svg" key={5} alt="" />
        </div>
      </div>
    </>
  );
};
export default ToDoItem;
