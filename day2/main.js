const fs = require("fs");

const data1 = fs
  .readFileSync("day2/input.txt", "utf-8")
  .split("\n")
  .map((x) => x.split(" "));

const data2 = [
  ["forward", 5],
  ["down", 5],
  ["forward", 8],
  ["up", 3],
  ["down", 8],
  ["forward", 2],
];

function parseToObj(data) {
  return data.map((x) => {
    return { direction: x[0], steps: Number(x[1]) };
  });
}

function solve(data) {
  let position = 0;
  let depth = 0;
  const commands = parseToObj(data);
  commands.forEach((command) => {
    if (command.direction === "forward") {
      position += command.steps;
    } else if (command.direction === "up") {
      depth -= command.steps;
    } else if (command.direction === "down") {
      depth += command.steps;
    } else {
      console.log("Command not valid");
    }
  });
  return position * depth;
}

function solve2(data) {
  let position = 0;
  let depth = 0;
  let aim = 0;
  const commands = parseToObj(data);
  commands.forEach((command) => {
    if (command.direction === "forward") {
      position += command.steps;
      depth += aim * command.steps;
    } else if (command.direction === "up") {
      aim -= command.steps;
    } else if (command.direction === "down") {
      aim += command.steps;
    } else {
      console.log("Command not valid");
    }
  });
  return position * depth;
}

console.log(solve2(data1));
