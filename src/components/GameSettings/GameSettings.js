import React from 'react';

import classes from './game-settings.css';

export const GameSettings = (props) => {
  const labelClasses = [classes.label];
  const { setSettings, gameMode } = props;
  const { modes, selected } = gameMode;
  let modesArray = [];

  for (let key in modes) {
    modesArray.push(key);
  }

  function createRow(mode, index) {
    const isSelected = mode === selected ? true : '';
    const isDisabled = mode === 'hard' ? true : '';

    if (isDisabled) {
      labelClasses.push(classes.disabled);
    }

    return (
      <label htmlFor={mode} key={index} className={classes.row}>
        <input className={classes.radio} type='radio' disabled={isDisabled} defaultChecked={isSelected} onClick={setSettings.bind(null, mode)} name='mode' id={mode} />
        <label className={labelClasses.join(' ')} htmlFor={mode}>{mode}</label>
      </label>
      )
  }

  return (
    <div className={classes['game-settings']}>
      <h2> Select Game Mode </h2>
      {modesArray.map((mode, index) => {
        return createRow(mode, index)
      })}
    </div>
  )
};