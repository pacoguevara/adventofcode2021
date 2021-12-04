const fs = require("fs");

const data1 = fs.readFileSync("day3/input.txt", "utf-8").split("\n");

const data2 = [
  "00100",
  "11110",
  "10110",
  "10111",
  "10101",
  "01111",
  "00111",
  "11100",
  "10000",
  "11001",
  "00010",
  "01010",
];

// Iterate each line
// Iterate each position
// Save zeros,ones count
// Iterate zeros,ones and compare
// If ones > zeros
// Gama >> 1, Epsilon 0
// else
// gama >> 0, Epsilon 1
// Parse binary to int
// Return int_gama * int_epsilon
function solve(lines) {
  const zeros = Array(lines[0].length).fill(0);
  const ones = Array(lines[0].length).fill(0);
  let gama = "";
  let epsilon = "";
  for (const line of lines) {
    const bits = [...line];
    for (let i = 0; i < bits.length; i++) {
      const bit = bits[i];
      if (bit == "1") {
        ones[i]++;
      } else {
        zeros[i]++;
      }
    }
  }

  for (let i = 0; i < zeros.length; i++) {
    const zero = zeros[i];
    const one = ones[i];
    if (one > zero) {
      gama += "1";
      epsilon += "0";
    } else {
      gama += "0";
      epsilon += "1";
    }
  }
  return parseInt(gama, 2) * parseInt(epsilon, 2);
}

// console.log(solve(data1));

// Part 2

// life support rating = oxy gen rating * co2 scrubber rating
// oxy gen rating
// Find most common value and keep only numbers with that bit in that position
// If 1 == 0 keep 1
// co2 scrubber rating
// Less common and keep only numbers with that bit in that position
// If 1 == 0 keep 0

// Just 1st bit
// Stop 1 remaining

function solve2(lines) {
  const oxyRating = oxygen_generator_rating(lines);
  const co2Rating = co2_generator_rating(lines);
  return oxyRating * co2Rating;
}

function oxygen_generator_rating(lines, index = 0) {
  const { zeros, ones } = getCount(lines);
  const mostCommon = zeros[index] > ones[index] ? "0" : "1";
  const filteredLines = lines.filter((line) => line[index] === mostCommon);
  if (filteredLines.length == 1) {
    return parseInt(filteredLines[0], 2);
  } else {
    return oxygen_generator_rating(filteredLines, index + 1);
  }
}

function co2_generator_rating(lines, index = 0) {
  const { zeros, ones } = getCount(lines);
  const leastCommon = zeros[index] > ones[index] ? "1" : "0";
  const filteredLines = lines.filter((line) => line[index] === leastCommon);
  if (filteredLines.length == 1) {
    return parseInt(filteredLines[0], 2);
  } else {
    return co2_generator_rating(filteredLines, index + 1);
  }
}

function getCount(lines) {
  const zeros = Array(lines[0].length).fill(0);
  const ones = Array(lines[0].length).fill(0);
  for (const line of lines) {
    const bits = [...line];
    for (let i = 0; i < bits.length; i++) {
      const bit = bits[i];
      if (bit == "1") {
        ones[i]++;
      } else {
        zeros[i]++;
      }
    }
  }
  return { zeros, ones };
}

console.log(solve2(data1));
