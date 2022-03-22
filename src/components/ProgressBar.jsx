import React from "react";

function ProgressBar({ tasks, highPrioTask, lowPrioTask, completedTask }) {
  const totalAmount = tasks.length;
  const highPrioAmount = highPrioTask.length;
  const lowPrioAmount = lowPrioTask.length;
  const completedAmount = completedTask.length;

  let completedPercentage = completedAmount / totalAmount;
  let highPrioPercentage =
    (highPrioAmount + lowPrioAmount) / totalAmount + completedPercentage;
  let lowPrioPercentage = lowPrioAmount / totalAmount + completedPercentage;

  if (isNaN(completedPercentage)) {
    completedPercentage = 0;
  }
  if (isNaN(highPrioPercentage)) {
    highPrioPercentage = 0;
  }
  if (isNaN(lowPrioPercentage)) {
    lowPrioPercentage = 0;
  }

  return (
    <div className="progbar-container">
      <div
        className="progress highprio"
        style={{ width: `${highPrioPercentage * 100}%` }}
      ></div>
      <div
        className="progress lowprio"
        style={{ width: `${lowPrioPercentage * 100}%` }}
      ></div>
      <div
        className="progress completed"
        style={{ width: `${completedPercentage * 100}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
