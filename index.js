var katzDeliLine = [];

function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
  return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var theLine = [] ;
    let i = 0;
    for (var i = 0; i < katzDeliLine.length; i++) {
    theLine.push([i+1] + ". " + katzDeliLine[i]);
    }
    return "The line is currently: " + theLine;
  }
}
