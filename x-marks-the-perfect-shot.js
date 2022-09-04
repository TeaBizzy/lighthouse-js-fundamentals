const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

finalPosition(moves);
console.log(finalPosition(moves));

function finalPosition(movements) {
  let x = 0;
  let y = 0;
  for (var move of movements) {
    switch (move) {
    case "north":
      y += 1;
      break;
    case "east":
      x += 1;
      break;
    case "south":
      y -= 1;
      break;
    case "west":
      x -= 1;
      break;
    default:
      return "Array of movements contains an invalid move..."
    }
  }

  return [x, y];
}