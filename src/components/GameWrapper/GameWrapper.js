import React, { Component } from 'react';

import Game from '../Game/GameContainer';
import GameInfo from '../GameInfo/GameInfoContainer';

import classes from './game-wrapper.css';

export const GameWrapper = props => {
  return  (
    <div className={classes['game-wrapper']}>
      <Game />
      <GameInfo />
    </div>
  )
};