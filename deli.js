var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
};

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var served = katzDeli.shift();
    return `Currently serving ${served}.`;
  };
};

function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  } else {
    var line = [];
    for (i = 0; i < katzDeli.length; i++) {
      line.push(`${i + 1}. ${katzDeli[i]}`)
    }
    return `The line is currently: ${line.join(", ")}`
  }
}