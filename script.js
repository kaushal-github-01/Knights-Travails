knightMoves = (start, end) => {
  const queue = [[start]];
  const visited = new Set([start.toString()]);

  while (queue.length) {
    const path = queue.shift();
    const [x, y] = path[path.length - 1];

    if (x === end[0] && y === end[1]) {
      return path;
    }

    for (const [X, Y] of KnightValidMoves(x, y)) {
      const newPath = [...path, [X, Y]];
      const newPathStr = newPath.toString();
      if (!visited.has(newPathStr)) {
        queue.push(newPath);
        visited.add(newPathStr);
      }
    }
  }
};

const KnightValidMoves = (x, y) => {
  const validMoves = [
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x - 1, y + 2],
    [x - 1, y - 2],
  ];

  return validMoves.filter(([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8);
};

console.log(knightMoves([0, 0], [0, 5]));
