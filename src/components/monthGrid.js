import React from 'react';
import CSS from './monthGrid.module.css';

export default function MonthGrid({ months }) {
  const monthArray = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const newMonths = months.map(function (value) {
    return value - 1;
  });
  const displayGrid = monthArray.map((month, index) => {
    if (newMonths.includes(index)) {
      return (
        <div key={month} className={CSS.month}>
          <div className={CSS['month-selector']}>{month}</div>
        </div>
      );
    }
    return (
      <div key={month} className={CSS.month}>
        <div id={CSS['month-idle']}>{month}</div>
      </div>
    );
  });
  return <div id={CSS['month-grid']}>{displayGrid}</div>;
}
