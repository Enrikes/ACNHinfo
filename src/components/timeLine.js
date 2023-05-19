import React from "react";
import TimelineCSS from "./timeline.module.css";

export default function Timeline({ time, timeFormat }) {
  function grabStartEndTime(time, arrayIndex) {
    let rawTime = time[arrayIndex];
    let formattedTime = rawTime.replace(/–|\s/g, "");
    const startTime = formattedTime.substr(0, 3); // Extracts the first 3 characters (4AM)
    const endTime = formattedTime.substr(3);
    const startStyle = startTime.toLowerCase();
    const endStyle = endTime.toLowerCase();
    const styleTime = [startStyle, endStyle];
    return styleTime;
  }
  const startStyle = grabStartEndTime(timeFormat, 0)[0];
  const endStyle = grabStartEndTime(timeFormat, 0)[1];

  let startStyle2;
  let endStyle2;
  if (time.length === 2) {
    startStyle2 = grabStartEndTime(timeFormat, 1)[0];
    endStyle2 = grabStartEndTime(timeFormat, 1)[1];
  }

  // let ampm = timeFormat.join('');
  // const startingTimeIndicator = ampm.slice(2, 4);
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
  let am2 = [];
  let pm = [];
  let pm2 = [];
  const date = new Date();

  function processHourArray(array, am, pm) {
    for (const hour of array) {
      if (hour < 12) {
        am.push(hour);
      } else {
        pm.push(hour);
      }
    }
  }
  function splitAMandPM(array, am, pm) {
    if (time.length === 2) {
      processHourArray(array[0], am, pm);
      processHourArray(array[1], am, pm);
    }
    processHourArray(array, am, pm);
  }
  splitAMandPM(time, am, pm);

  const lastAM = am[am.length - 1] + "am";
  const lastAM2 = am2[am2.length - 1] + "am";

  const lastPM = (pm[pm.length - 1] % 12 || 12) + "pm";
  const lastPM2 = (pm2[pm2.length - 1] % 12 || 12) + "pm";
  function shouldStyleHour(key, boolean) {
    if (key === startStyle2) {
      return "time-start2";
    } else if (key === lastAM2) {
      return "time-end2";
    }

    if (key === startStyle) {
      return "time-start";
    } else if (endStyle === "day" || key === "11am" || key === "11pm") {
      return "active";
    } else if (key === endStyle || key === lastAM || key === lastPM) {
      return "time-end";
    } else {
      return "active";
    }
  }

  const hours = date.getHours();

  let formattedHours = hours % 12; // Get the remainder after dividing by 12
  if (formattedHours === 0) {
    formattedHours = 12; // Convert 0 to 12 for 12-hour format
  }

  const timelineAM = timesArrayAM.map((hour, index) => {
    const convertedHours = hour.replace("am", "");
    if (am.includes(index)) {
      return (
        <div
          key={index}
          className={
            date.getHours() === index
              ? TimelineCSS["active-current"]
              : hour === startStyle || hour === lastAM
              ? TimelineCSS[shouldStyleHour(hour)]
              : TimelineCSS.active
          }
        >
          {convertedHours}
        </div>
      );
    }
    if (am2.includes(index)) {
      return (
        <div
          key={index}
          className={
            date.getHours() === index
              ? TimelineCSS["active-current"]
              : hour === startStyle || hour === lastAM2
              ? TimelineCSS[shouldStyleHour(hour)]
              : TimelineCSS.active2
          }
        >
          {convertedHours}
        </div>
      );
    }
    return (
      <div
        key={index}
        className={
          date.getHours() === index
            ? TimelineCSS["inactive-current"]
            : TimelineCSS.inactive
        }
      >
        {convertedHours}
      </div>
    );
  });

  const timelimePM = timesArrayPM.map((hour) => {
    const convertedHours = hour.replace("pm", "");
    function miltaryTimeConverter() {
      const time = parseInt(convertedHours);
      if (time === 12) {
        return 12;
      }
      return time + 12;
    }
    if (pm.includes(miltaryTimeConverter())) {
      return (
        <div
          key={hour}
          className={
            date.getHours() === miltaryTimeConverter()
              ? TimelineCSS["active-current"]
              : hour === startStyle || hour === lastPM
              ? TimelineCSS[shouldStyleHour(hour)]
              : TimelineCSS.active
          }
        >
          {convertedHours}
        </div>
      );
    }
    if (pm2.includes(miltaryTimeConverter())) {
      return (
        <div
          key={hour}
          className={
            date.getHours() === miltaryTimeConverter()
              ? TimelineCSS["active-current2"]
              : hour === startStyle2 || hour === lastPM2
              ? TimelineCSS[shouldStyleHour(hour)]
              : TimelineCSS.active2
          }
        >
          {convertedHours}
        </div>
      );
    }
    const standardTime = time + 12;

    return (
      <div
        key={standardTime}
        className={
          date.getHours() === miltaryTimeConverter()
            ? TimelineCSS["inactive-current"]
            : TimelineCSS.inactive
        }
      >
        {convertedHours}
      </div>
    );
  });

  return (
    <div className={TimelineCSS.container}>
      <div className={TimelineCSS["timeline-wrapper"]}>
        <div className={TimelineCSS["active-hours"]}>
          Active Hours <p id="display-hours">{timeFormat}</p>
        </div>
        <div className={TimelineCSS["am-container"]}>{timelineAM}</div>
        <div className={TimelineCSS["pm-container"]}>{timelimePM}</div>
      </div>
    </div>
  );
}
