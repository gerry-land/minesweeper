import React, { Component } from 'react';

import { calculateMinesAround } from '../../utils/calculateMinesAround';
import { GameSettings } from '../GameSettings/GameSettings';
import classes from './start-screen.css';

export class StartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
  }

  createCells() {
    const {updateCells, updateMinesLeft} = this.props;
    this.setState({
      isLoading: true
    })

    let { gameMode } = this.props;
    gameMode = gameMode.modes[gameMode.selected];

    prepareCells(gameMode, updateMinesLeft).then(cells => {
      updateCells(cells);
      const { history } = this.props;
      history.push('game'); // go to game component
    }).catch(err => {
      console.error(err);
    })
  }

  render() {
    const { isLoading } = this.state;
    console.log('is loading: ', isLoading);
    const {setGameMode, gameMode} = this.props;
    return (
      <div className={classes['start-screen']}>
        <GameSettings setSettings={setGameMode} gameMode={gameMode} />
        <button onClick={this.createCells.bind(this)} className={classes.button} value={gameMode.mode}> START GAME </button>
      </div>
    )
  }
}

function prepareCells(gameMode, updateMinesLeft) {
  return new Promise((resolve, reject) => {
    const cellsCount = gameMode.rows * gameMode.columns;
    const minesCoef = gameMode.mines / cellsCount;
    const columnsCount = gameMode.columns;
    const rowsCount = gameMode.rows;
    let cells = generateCellsArray(cellsCount, minesCoef, updateMinesLeft);
    cells = calculateMinesAround(cells, rowsCount, columnsCount);
    resolve(cells);
  })
}

function generateCellsArray(size, minesCoef, updateMinesLeft){
  let cells = [];
  let minesCounter = 0;
  for (let i = 0; i < size; i++) {
    const isMine = Math.random() < minesCoef;

    if (isMine) {
      minesCounter++
    }

    cells[i] = {
      isMine,
      isOpen: false,
      cellsAround: [],
      index: i,
      isMaybeMine: false
    }
  }

  updateMinesLeft(minesCounter)
  
  return cells;
}