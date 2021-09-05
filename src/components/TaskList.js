import React from "react";
import Task from './Task'
import { v4 as uuid } from "uuid";

function TaskList(props) {
  const { taskData, onDeleteTask } = props;

  const taskList = taskData.map(task => {
    (
      <Task 
        key={task.text}
        text={task.text}
        category={task.category}
        onDeleteTask={onDeleteTask} 
        />
    )
  })


  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskList}
    </div>
  );
}

export default TaskList;
