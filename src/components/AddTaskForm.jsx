import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { PlusCircleIcon } from "@heroicons/react/solid";

function AddTaskForm({ tasks, setTasks }) {
  const input = useRef("");
  const focusInput = () => input.current.focus();

  const handleSubmitTask = function (e) {
    e.preventDefault();
    if (input.current.value === "") return;

    setTasks([
      ...tasks,
      {
        text: input.current.value,
        status: "pending",
        id: uuidv4(),
      },
    ]);

    input.current.value = "";
    focusInput();
  };

  return (
    <form className="form" onSubmit={handleSubmitTask}>
      <input
        id="text"
        className="form-input"
        type="text"
        ref={input}
        placeholder="Add Task"
      />
      <button type="submit" aria-label="Add Task" className="btn-add-task">
        <PlusCircleIcon className="icon-add-task" aria-hidden="true" />
      </button>
    </form>
  );
}

export default AddTaskForm;
