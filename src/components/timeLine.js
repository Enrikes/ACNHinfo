import React from "react";

export default function Timeline({ time }) {
  const timesArrayAM = [
    "12am",
    "1am",
    "2am",
    "3am",
    "4am",
    "5am",
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
  ];
  const timesArrayPM = [
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
    "8pm",
    "9pm",
    "10pm",
    "11pm",
  ];
  let am = [];
  let pm = [];
  const date = new Date();
  function splitCreatureArrayAM(array, am, pm) {
    console.log(array);
    for (const hour of array) {
      if (hour < 12) {
        console.log(hour);
        am.push(hour);
      }
      if (hour === 12) {
        console.log(hour);
        pm.push(hour);
      }
      if (hour > 12) {
        pm.push(hour);

      }
    }
  }
  splitCreatureArrayAM(time, am, pm);
  console.log(am);
  console.log(pm);
  //Timeline AM
  const hoursAM = timesArrayAM.map((hour, index) => {
   if (am.includes(index)) {
      return (
        <div
          className={
            date.getHours() === index
              ? "timeline-hour-active-current"
              : "timeline-hour-active"
          }
        >
          {hour}
        </div>
      );
    }

    return (
      <div
        className={
          date.getHours() === index
            ? "timeline-hour-inactive-current"
            : "timeline-hour-inactive"
        }
      >
        {hour}
      </div>
    );
  });
  // Timeline PM
  const hoursPM = timesArrayPM.map((hour, index) => {
    function slicer(hour){
      const convertedHour = parseInt(hour.replace('pm',""))
      function miltaryTime(newHour){
        if (newHour === 12){
          return 12
        }
        return newHour + 12
      }
      return miltaryTime(convertedHour)
    }
    slicer(hour);
    console.log(slicer(hour))

    if (pm.includes(slicer(hour))) {
      return (
        <div
          className={
            date.getHours() === slicer(hour)
              ? "timeline-hour-active-current"
              : "timeline-hour-active"
          }
        >
          {hour}
        </div>
      );
    }

    return (
      <div
        className={
          date.getHours() === slicer(hour)
            ? "timeline-hour-inactive-current"
            : "timeline-hour-inactive"
        }
      >
        {hour}
      </div>
    );
  });
  return (
    <div className="timeline-hours-container">
      {hoursAM}
      {hoursPM}
    </div>
  );
}
