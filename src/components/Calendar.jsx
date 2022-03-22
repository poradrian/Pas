import React from "react";

function Calendar() {
  const now = new Date();
  const day = now.getDate();
  const weekday = now.toLocaleDateString("default", { weekday: "long" });
  const month = now.toLocaleString("default", { month: "long" });
  const year = now.getFullYear();

  return (
    <div className="calendar">
      <div className="date-box">
        <div className="day">{day}</div>
        <div className="month-year">
          <div>{month}</div>
          <div>{year}</div>
        </div>
      </div>
      <div>{weekday}</div>
    </div>
  );
}

export default Calendar;
