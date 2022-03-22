import React from "react";
import Task from "./Task";
import ProgressBar from "./ProgressBar";
import AddTaskForm from "./AddTaskForm";
import Joke from "./Joke";
import useLocalStorage from "../useLocalStorage";

import { ChevronRightIcon as ChevronRightIconOutline } from "@heroicons/react/outline";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion";
import "@reach/accordion/styles.css";

function TaskList() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const pendingTask = tasks.filter((task) => task.status === "pending");
  const highPrioTask = tasks.filter((task) => task.status === "high");
  const lowPrioTask = tasks.filter((task) => task.status === "low");
  const completedTask = tasks.filter((task) => task.status === "completed");

  return (
    <div>
      <ProgressBar
        tasks={tasks}
        highPrioTask={highPrioTask}
        lowPrioTask={lowPrioTask}
        completedTask={completedTask}
      />
      <AddTaskForm tasks={tasks} setTasks={setTasks} />
      {completedTask.length && !pendingTask.length ? (
        <div>
          <Joke />
        </div>
      ) : (
        <div className="tasks-container">
          {pendingTask.map((task) => (
            <Task
              text={task.text}
              key={task.id}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}
        </div>
      )}
      <Accordion collapsible multiple>
        {highPrioTask.length > 0 && (
          <AccordionItem>
            <h3>
              <AccordionButton className="accordion-toggle">
                <ChevronRightIconOutline aria-hidden="true" />
                High Prio
              </AccordionButton>
            </h3>
            <AccordionPanel className="accordion-animation tasks-container">
              {highPrioTask &&
                highPrioTask.map((task) => (
                  <Task
                    text={task.text}
                    key={task.id}
                    task={task}
                    tasks={tasks}
                    setTasks={setTasks}
                  />
                ))}
            </AccordionPanel>
          </AccordionItem>
        )}
        {lowPrioTask.length > 0 && (
          <AccordionItem>
            <h3>
              <AccordionButton className="accordion-toggle">
                <ChevronRightIconOutline aria-hidden="true" />
                Low Prio
              </AccordionButton>
            </h3>
            <AccordionPanel className="accordion-animation tasks-container">
              {lowPrioTask &&
                lowPrioTask.map((task) => (
                  <Task
                    text={task.text}
                    key={task.id}
                    task={task}
                    tasks={tasks}
                    setTasks={setTasks}
                  />
                ))}
            </AccordionPanel>
          </AccordionItem>
        )}
        {completedTask.length > 0 && (
          <AccordionItem>
            <h3>
              <AccordionButton className="accordion-toggle">
                <ChevronRightIconOutline aria-hidden="true" /> Completed
              </AccordionButton>
            </h3>
            <AccordionPanel className="accordion-animation tasks-container">
              {completedTask &&
                completedTask.map((task) => (
                  <Task
                    text={task.text}
                    key={task.id}
                    task={task}
                    when={task.when}
                    tasks={tasks}
                    setTasks={setTasks}
                  />
                ))}
            </AccordionPanel>
          </AccordionItem>
        )}
      </Accordion>
    </div>
  );
}

export default TaskList;
