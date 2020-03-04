import React, { Component } from 'react';

import { Timer } from '../Timer/Timer';
import MinesLeft from '../MinesLeft/MinesLeftContainer';
import classes from './game-info.css';


export class GameInfo extends Component {
  constructor(props) {
    super(props);
  }

  restart = () => {
    const { history } = this.props
    history.push('./');
  }

  render() {
    return (
      <div className={classes['game-info']}>
        <Timer />
        <MinesLeft />
        <button onClick={this.restart} className={classes['button']}>restart</button>
      </div>
    )
  }
}