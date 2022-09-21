import React from 'react';

export default function Timeline({ time }) {
  const timesArrayAM = [
    '12am',
    '1am',
    '2am',
    '3am',
    '4am',
    '5am',
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
  ];
  const timesArrayPM = [
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    '8pm',
    '9pm',
    '10pm',
    '11pm',
  ];
  let am = [];
  let pm = [];
  const date = new Date();
  // This split creature array into AM and PM arrays.
  function splitCreatureArrayAM(array, am, pm) {
    for (const hour of array) {
      if (hour < 12) {
        am.push(hour);
      }
      if (hour === 12) {
        pm.push(hour);
      }
      if (hour > 12) {
        pm.push(hour);
      }
    }
  }
  splitCreatureArrayAM(time, am, pm);

  //Timeline AM
  const hoursAM = timesArrayAM.map((hour, index) => {
    if (am.includes(index)) {
      return (
        <div
          className={
            date.getHours() === index
              ? 'timeline-hour-active-current'
              : 'timeline-hour-active'
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
            ? 'timeline-hour-inactive-current'
            : 'timeline-hour-inactive'
        }
      >
        {hour}
      </div>
    );
  });

  // Timeline PM
  const hoursPM = timesArrayPM.map((hour) => {
    function slicer(hour, date) {
      const convertedHour = parseInt(hour.replace('pm', ''));
      // Converts time to miltary time
      function miltaryTime(newHour) {
        if (newHour === 12) {
          return 12;
        }
        return newHour + 12;
      }
      return miltaryTime(convertedHour);
    }
    console.log(slicer(hour));
    slicer(hour);

    if (pm.includes(slicer(hour))) {
      return (
        <div
          className={
            date.getHours() === slicer(hour)
              ? 'timeline-hour-active-current'
              : 'timeline-hour-active'
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
            ? 'timeline-hour-inactive-current'
            : 'timeline-hour-inactive'
        }
      >
        {hour}
      </div>
    );
  });
  //Mobile Timeline AM
  const mobileHoursAM = timesArrayAM.map((hour, index) => {
    const mobileHours = hour.replace('am', '');

    if (am.includes(index)) {
      return (
        <div
          className={
            date.getHours() === index
              ? 'timeline-hour-active-current'
              : 'timeline-hour-active'
          }
        >
          {mobileHours}
        </div>
      );
    }

    return (
      <div
        className={
          date.getHours() === index
            ? 'timeline-hour-inactive-current'
            : 'timeline-hour-inactive'
        }
      >
        {mobileHours}
      </div>
    );
  });

  const mobileHoursPM = timesArrayPM.map((hour) => {
    const mobileHours = hour.replace('pm', '');
    function slicer(hour, date) {
      const convertedHour = parseInt(hour.replace('am', 'deez'));
      function miltaryTime(newHour) {
        if (newHour === 12) {
          return 12;
        }
        console.log(newHour + 12);
        return newHour + 12;
      }
      return miltaryTime(convertedHour);
    }
    if (pm.includes(slicer(hour))) {
      return (
        <div
          className={
            date.getHours() === slicer(hour)
              ? 'timeline-hour-active-current'
              : 'timeline-hour-active'
          }
        >
          {mobileHours}
        </div>
      );
    }
    return (
      <div
        className={
          date.getHours() === slicer(hour)
            ? 'timeline-hour-inactive-current'
            : 'timeline-hour-inactive'
        }
      >
        {mobileHours}
      </div>
    );
  });
  return (
    <div className='timeline-container'>
      {/* <div className="timeline-hours-container">
        <div className="timeline-am-container">{hoursAM}</div>
        <div className="timeline-pm-container">{hoursPM}</div>
      </div> */}
      <div className='timeline-mobile-hours-container'>
        <div className='timeline-mobile-am-container'>{mobileHoursAM}</div>
        <div className='timeline-mobile-pm-container'>{mobileHoursPM}</div>
      </div>
      <div className='am-pm-container'>
        <div className='timeline-am'>
          AM <div className='tests'>PM</div>
        </div>
        {/* <div className='timeline-pm'>PM</div> */}
      </div>
    </div>
  );
}
