export function getCellsAround(index, size) {
  let cellsAround = {
    leftTop: index - 1 - size,
    middleTop: index - size,
    rightTop: index + 1 - size,
    leftMiddle: index - 1,
    rightMiddle: index + 1,
    leftBottom: index - 1 + size,
    middleBottom: index + size,
    rightBottom: index + 1 + size 
  }

  if (index % size === 0) { // corner left
    cellsAround.leftTop = null;
    cellsAround.leftMiddle = null;
    cellsAround.leftBottom = null;
  }

  if (index % size === (size - 1)) { // corner right
    cellsAround.rightTop = null;
    cellsAround.rightMiddle = null;
    cellsAround.rightBottom = null;
  }

  return cellsAround;
}