import { getCellsAround } from './getCellsAround';

export function calculateMinesAround(cells, rows, columns) {
  const size = rows * columns;
  return cells.map((cell, i) => {
    let counter = 0;

    let cellsAround = getCellsAround(i, columns);

    for (let key in cellsAround) {

      let index = cellsAround[key];
      if (index === null) {
        continue;
      } 

      if (index < 0) {
        continue;
      }

      if (index >= columns**2) {
        continue;
      }

      cell.cellsAround.push(cells[cellsAround[key]]);

      if (cells[cellsAround[key]].isMine) {
        counter++
      }
    }

    cell.minesAround = counter;

    if (cell.isMine) {
      cell.minesAround = '';
      return cell
    }
    
    if (cell.minesAround === 0) {
      cell.isEmpty = true;
      cell.minesAround = '';
    }

    return cell;
  });
}