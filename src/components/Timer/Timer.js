import React, { useState } from 'react';

import classes from './timer.css';

export const Timer = () => {
  let [timeModel, setTime] = useState([0,0,0]);

  let timeOut = setTimeout(() => {
    setTime(incrementTimer(timeModel));
    clearTimeout(timeOut);
  }, 1000);

  const time = timeModel.reduce((acc, timeUnit, index) => {
    timeUnit = timeUnit.toString();
    if (timeUnit.length === 1) {
      timeUnit = '0' + timeUnit
    }

    timeUnit = ':' + timeUnit;
    
    return acc += timeUnit
  });
  
  incrementTimer(timeModel)

  return (
    <div className={classes.timer}>{time}</div>
  )
};



function incrementTimer(timeModel) {
  let [ hours, mins, secs ] = timeModel

  secs++;

  if (secs > 59) {
    mins++;
    secs = 0;
  }

  if (mins > 59) {
    hours++;
    mins = 0;
  }

  if (hours > 24) {
    // no way
  }

  return [hours, mins, secs]
}


