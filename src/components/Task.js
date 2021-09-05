import React from "react";

function Task(props) {
  const {
    text,
    category,
    onDeleteTask
  } = props;
  
  function handleDelete(event){
    onDeleteTask(text);
  }




  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDelete} className="delete">X</button>
    </div>
  );
}

export default Task;
