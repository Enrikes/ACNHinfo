import React from "react";

export default function MonthGrid({ months }) {
  const monthArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const newMonths = months.map(function (value) {
    return value - 1;
  });
  const displayGrid = monthArray.map((month, index) => {
    if (newMonths.includes(index)) {
      return (
        <div className="month">
          <div className="month-selector">{month}</div>
        </div>
      );
    }
    return (
      <div className="month">
        <div id="month-idle">{month}</div>
      </div>
    );
  });
  return <div id="month-grid">{displayGrid}</div>;
}
