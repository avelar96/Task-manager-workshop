import React, { useState } from "react";
import Important from "./important";
import "./taskinfo.css";

const TaskInfo = (props) => {
  const [task, setTask] = useState({});

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };


  const onImportantChange = (val) => {
    console.log("Important", val);

    let newVal = { ...task }; //create a copy of current object
    newVal.important = val; // modify
    setTask(newVal); // set it back

    //setTask({...task, important: val});
  };
  const handleSave = () => {
      console.log(task);
      props.onSave?.(task);
  }

  return (
    <div className="task-info">
      <h3>Create new Task</h3>

      <div className="control">
        <label className="form-label">Is it important?</label>
        <Important test="hello" onChange={onImportantChange}></Important>
      </div>
      <div className="form">
        <div className="control">
          <label className="form-label">Title</label>
          <input
            name="title"
            onChange={handleChange}
            type="text"
            className="form-control"
          />
        </div>

        <div className="control">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            onChange={handleChange}
            type="text"
            className="form-control"
          ></textarea>
        </div>

        <div className="control">
          <label className="form-label">Location</label>
          <input
            type="text"
            name="location"
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="control text-center">
          <button
            className="btn btn-dark btn-large btn-save"
            onClick={handleSave}
          >
            Save Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskInfo;
