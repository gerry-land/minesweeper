import React, { Component, Fragment } from 'react';

import { Cell } from '../Cell/Cell';
import classes from './game.css';

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
    } 
  }

  cellClick(index) {
    return function() {
      const { updateCells } = this.props;
      let { cells } = this.props.cells;
      cells[index].isOpen = true;

      if (cells[index].isMine) {
        alert('this is mine: you loose');
        const { history } = this.props;
        return history.push('./'); // go to home component
      }

      if (cells[index].isEmpty) {
        this.openFreeSpace(cells, index);
      }

      updateCells(cells); // maybe fail will be
    }
  }

  openFreeSpace(cells, index) {
    const cell = cells[index];
    const emptyCells = [];

    cell.cellsAround.forEach(el => {
      if (el.isEmpty && !el.isOpen) {
        emptyCells.push(el);
        el.isOpen = true;
      }
    });

    if (emptyCells.length) {
      emptyCells.forEach(el => {
        cells = this.openFreeSpace(cells, el.index);
      })
    }

    return cells;
  }

  potentialMineClick(index) {
    return function(event) {
      const { updateCells, updateMinesLeft, minesLeft } = this.props;
      updateMinesLeft(minesLeft.minesLeft - 1);
      event.preventDefault();
      const { cells } = this.props.cells;
      cells[index].isMaybeMine = true; 

      updateCells(cells);
    } 
  }
  
  render() {
    let { cells } = this.props.cells;
    
    cells = cells.length ? cells.map((cell,i) => {
      return <Cell 
      cellClick={this.cellClick(i).bind(this)}
      potentialMineClick={this.potentialMineClick(i).bind(this)}  
      cell={cell} key={i}></Cell>
    }) : 'empty';

    return <div className={classes.game}>{cells}</div>;
  }
}