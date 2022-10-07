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
  function splitAMandPM(array, am, pm) {
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
  splitAMandPM(time, am, pm);

  const timelineAM = timesArrayAM.map((hour, index) => {
    const convertedHours = hour.replace('am', '');
    if (am.includes(index)) {
      return (
        <div
          className={
            date.getHours() === index
              ? 'timeline-hour-active-current'
              : 'timeline-hour-active'
          }
        >
          {convertedHours}
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
        {convertedHours}
      </div>
    );
  });

  const timelimePM = timesArrayPM.map((hour) => {
    const convertedHours = hour.replace('pm', '');
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
          className={
            date.getHours() === miltaryTimeConverter()
              ? 'timeline-hour-active-current'
              : 'timeline-hour-active'
          }
        >
          {convertedHours}
        </div>
      );
    }
    return (
      <div
        className={
          date.getHours() === miltaryTimeConverter()
            ? 'timeline-hour-inactive-current'
            : 'timeline-hour-inactive'
        }
      >
        {convertedHours}
      </div>
    );
  });

  return (
    <div className='timeline-container'>
      <div className='timeline-mobile-hours-container'>
        <div className='active-hours'>Active Hours</div>
        <div className='timeline-mobile-am-container'>{timelineAM}</div>
        <div className='timeline-mobile-pm-container'>{timelimePM}</div>
      </div>
      <div className='am-pm-container'>
        <div className='timeline-am'>
          AM <div className='tests'>PM</div>
        </div>
      </div>
    </div>
  );
}
