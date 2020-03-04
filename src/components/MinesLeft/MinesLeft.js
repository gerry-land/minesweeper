import React from 'react';

import classes from './mines-left.css';

export const MinesLeft = props => {
  const { minesLeft } = props.minesLeft

  return (
    <div className={classes['mines-left']}>{minesLeft} mines left</div>
  )
}