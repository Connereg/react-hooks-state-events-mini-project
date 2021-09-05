import React from "react";
import { useState } from "react/cjs/react.development";

function NewTaskForm(props) {
  const {
    categoryList,
    onTaskFormSubmit
  } = props;

  const [category, setCategoryChosen] = useState("Code")
  
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category })
    setText("");
    setCategoryChosen("Code")
    }
  

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        {/*Dropdown Functionality for New Form Submit */}
        <select value={category} name="category" onChange={(e) => setCategoryChosen(e.target.value)}>
          {/* render <option> elements for each category here */}
          {categoryList.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
