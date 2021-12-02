const fs = require("fs");

const data1 = fs
  .readFileSync("day1/input.txt", "utf-8")
  .split("\n")
  .map((n) => parseInt(n));

// console.log(data);
const data2 = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

function solve(data) {
  let increments = 0;
  let prev = data[0];
  for (let i = 1; i < data.length; i++) {
    if (prev < data[i]) {
      increments++;
    }
    prev = data[i];
  }
  return increments;
}

function solve2(data) {
  let increments = 0;
  let prev = data[0];
  for (let i = 3; i < data.length; i++) {
    if (prev < data[i]) {
      increments++;
    }
    prev = data[i - 2];
  }
  return increments;
}

console.log(solve(data1));
console.log(solve2(data1));
