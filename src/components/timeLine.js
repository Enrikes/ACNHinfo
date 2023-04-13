import React from 'react';
import TimelineCSS from './timeline.module.css';

export default function Timeline({ time, timeFormat }) {
  // let ampm = timeFormat.join('');
  // const startingTimeIndicator = ampm.slice(2, 4);
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
          key={index}
          className={
            date.getHours() === index
              ? TimelineCSS['active-current']
              : TimelineCSS.active
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
            ? TimelineCSS['inactive-current']
            : TimelineCSS.inactive
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
      const standardTime = time + 12;
      if (time === 12) {
        return 12;
      }
      return time + 12;
    }
    if (pm.includes(miltaryTimeConverter())) {
      return (
        <div
          key={miltaryTimeConverter()}
          className={
            date.getHours() === miltaryTimeConverter()
              ? TimelineCSS['active-current']
              : TimelineCSS.active
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
            ? TimelineCSS['inactive-current']
            : TimelineCSS.inactive
        }
      >
        {convertedHours}
      </div>
    );
  });

  return (
    <div className={TimelineCSS.container}>
      <div className={TimelineCSS['timeline-wrapper']}>
        <div className={TimelineCSS['active-hours']}>
          Active Hours <p id='display-hours'>{timeFormat}</p>
        </div>
        <div className={TimelineCSS['am-container']}>{timelineAM}</div>
        <div className={TimelineCSS['pm-container']}>{timelimePM}</div>
      </div>
      <div className={TimelineCSS['am-pm-container']}>
        <div className={TimelineCSS['timeline-am']}>
          AM <div className='tests'>PM</div>
        </div>
      </div>
    </div>
  );
}
