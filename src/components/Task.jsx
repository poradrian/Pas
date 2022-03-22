import * as React from "react";
import Tooltip from "@reach/tooltip";
import "@reach/tooltip/styles.css";
import { TrashIcon as TrashIconOutline } from "@heroicons/react/outline";
import { ExclamationIcon as ExclamationIconOutline } from "@heroicons/react/outline";
import { ArrowCircleDownIcon as ArrowCircleDownIconOutline } from "@heroicons/react/outline";
import { CheckIcon as CheckIconOutline } from "@heroicons/react/outline";

function Task({ text, task, tasks, when, setTasks }) {
  const now = new Date();
  const hour = `${now.getHours()}`.padStart(2, 0);
  const minutes = `${now.getMinutes()}`.padStart(2, 0);

  const deleteHandler = function () {
    setTasks(tasks.filter((element) => element.id !== task.id));
  };
  const highPrioHandler = function () {
    setTasks(
      tasks.map((currentTask) => {
        if (currentTask.id === task.id) {
          return {
            ...currentTask,
            status: "high",
          };
        } else return currentTask;
      })
    );
  };
  const lowPrioHandler = function () {
    setTasks(
      tasks.map((currentTask) => {
        if (currentTask.id === task.id) {
          return {
            ...currentTask,
            status: "low",
          };
        } else return currentTask;
      })
    );
  };

  const completedHandler = function () {
    setTasks(
      tasks.map((currentTask) => {
        if (currentTask.id === task.id) {
          return {
            ...currentTask,
            status: "completed",
            text: `${task.text} `,
            when: `«done at ${hour}:${minutes}»`,
          };
        } else return currentTask;
      })
    );
  };

  return (
    <div className="task">
      <div className="task-text ">
        {text} <span className="done-timestamp">{when}</span>
      </div>
      <div className="task-btns-box">
        <Tooltip label="Delete">
          <button type="button" className="btn" onClick={deleteHandler}>
            <TrashIconOutline className="icon-delete" aria-hidden="true" />
          </button>
        </Tooltip>

        {task.status !== "high" && task.status !== "completed" && (
          <Tooltip label="Add to High Prio">
            <button
              value="high"
              type="button"
              className="btn"
              onClick={highPrioHandler}
            >
              <ExclamationIconOutline
                className="icon-highprio"
                aria-hidden="true"
              />
            </button>
          </Tooltip>
        )}

        {task.status !== "low" && task.status !== "completed" && (
          <Tooltip label="Add to Low Prio">
            <button
              value="low"
              type="button"
              className="btn"
              onClick={lowPrioHandler}
            >
              <ArrowCircleDownIconOutline
                className="icon-lowprio"
                aria-hidden="true"
              />
            </button>
          </Tooltip>
        )}
        {task.status !== "completed" && task.status !== "pending" && (
          <Tooltip label="Mark as Completed">
            <button type="button" className="btn" onClick={completedHandler}>
              <CheckIconOutline className="icon-completed" aria-hidden="true" />
            </button>
          </Tooltip>
        )}
      </div>
    </div>
  );
}

export default Task;
