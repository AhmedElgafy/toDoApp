import { useEffect, useState } from "react";
import ToDoItem from "./toDoItem";

// const mql = window.matchMedia("(max-width:

const ToDoItems = ({
  styling,
  setStyling,
  data,
  numOfItems,
  setToDoList,
  setItemsLeft,
}) => {
  //------------------------states-------------------
  const [filter, setFilter] = useState("");
  const [status, setStatus] = useState([
    { id: Math.random(), data: "All", nameClass: "active" },
    { id: Math.random(), data: "Active", nameClass: "" },
    { id: Math.random(), data: "Completed", nameClass: "" },
  ]);
  useEffect(() => {
    setViewList(
      data.map((ele) => (
        <ToDoItem
          ele={ele}
          key={ele.id}
          setItemsLeft={setItemsLeft}
          data={data}
          setToDoList={setToDoList}
          styling={styling}
          setStyling={setStyling}
        />
      ))
    );
  }, [data, styling]);
  const [viewList, setViewList] = useState(
    data.map((ele) => (
      <ToDoItem
        ele={ele}
        key={ele.id}
        setItemsLeft={setItemsLeft}
        data={data}
        styling={styling}
        setStyling={setStyling}
        setToDoList={setToDoList}
      />
    ))
  );

  //------------------------handlers-------------------
  const clearzList = () => {
    setToDoList(data.filter((ele) => !ele.completed));
  };
  const activeToggle = (e) => {
    const id = e.target.id;
    const clickedFilter = e.target.textContent.toLowerCase();
    setStatus(
      status.map((ele) => {
        if (ele.id == id) {
          ele.nameClass = "active";
          return ele;
        } else {
          ele.nameClass = "";
          return ele;
        }
      })
    );

    if (clickedFilter == "all" || !clickedFilter) {
      setFilter("");
    } else {
      setFilter(clickedFilter);
    }
  };
  //------------------------renderers------------------------------
  return (
    <>
      <div className={" toDoContainer " + styling.inputStyle}>
        {filter
          ? viewList.filter((ele) => {
              if (filter) {
                if (filter == "active" && ele.props.ele.active) {
                  return ele;
                }
                if (filter == "completed" && ele.props.ele.completed) {
                  return ele;
                }
              } else {
                return ele;
              }
            })
          : viewList}
        <div className={"toDoCreator status sm-font " + styling.inputStyle}>
          <p className="item-left"> {numOfItems} items left</p>
          <div id="statusMode" className="inside item-center insertPointerCru">
            {status.map((ele) => (
              <h4
                key={ele.id}
                onClick={(e) => activeToggle(e)}
                id={ele.id}
                className={ele.nameClass}
              >
                {ele.data}
              </h4>
            ))}
          </div>
          <p onClick={clearzList} className="item-right insertPointerCru">
            Clear Completed
          </p>
        </div>
      </div>
    </>
  );
};
export default ToDoItems;
