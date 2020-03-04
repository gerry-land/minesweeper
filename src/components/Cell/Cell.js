import React from 'react';
import classes from './cell.css';
import Mine from '@material-ui/icons/Memory';

export const Cell = (props) => { 
    const { isMine = false, isOpen = false, minesAround = 0, isMaybeMine = false } = props.cell;
    const { cellClick, potentialMineClick } = props;
    const assignedClasses = [classes.cell];
    
    let cellContent = minesAround;

    if (isMaybeMine) {
      assignedClasses.push(classes['maybe-mine']);
    }
    
    if (isMine) {
      cellContent = <Mine/>
    }

    if (isOpen) {
      assignedClasses.push(classes['open']);
    }

    return <div className={assignedClasses.join(' ')} onClick={cellClick} onContextMenu={potentialMineClick}>{cellContent}</div>
}