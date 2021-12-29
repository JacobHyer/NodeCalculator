var rs = require('readline-sync')

function promptUser(msg) {
  return rs.question(msg)
}

function testOperation(operation) {
  if (operation.trim() === "+") {
    return "add"
  } else if (operation.trim() === "-") {
    return "subtract"
  } else if (operation.trim() === "*") {
    return "multiply"
  } else if (operation.trim() === "/") {
    return "divide"
  } else {
    return ""
  }
}

function testNum(numStr) {
  if (Number(numStr) !== NaN) {
    return Number(numStr)
  } else {
    return null
  }
}

function add(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1 / num2
}

function main() {
  let repeat = true
  let operation = ''
  let num1 = null;
  let num2 = null;

  while (repeat) {
    operation = testOperation(promptUser("What operation would you like to preform [+, -, *, /]? "));
    if (operation) {
      repeat = false
    } else {
      console.log("That is not an accepted operation. Try again.")
    }
  }

  repeat = true

  while (repeat) {
    num1 = testNum(promptUser("Please enter the first number? "))
    if (num1) {
      repeat = false
    } else {
      console.log("That is not recognized as a number. Please try again.")
    }
  }

  repeat = true

  while (repeat) {
    num2 = testNum(promptUser("Please enter the second number? "))
    if (num2) {
      repeat = false
    } else {
      console.log("That is not recognized as a number. Please try again.")
    }
  }

  if(operation === "add") {
    console.log(`Your result is ${add(num1, num2).toFixed(2)}`)
  } else if (operation === "subtract") {
    console.log(`Your result is ${subtract(num1, num2).toFixed(2)}`)
  } else if (operation === "multiply") {
    console.log(`Your result is ${multiply(num1, num2).toFixed(2)}`)
  } else if (operation === "divide") {
    console.log(`Your result is ${divide(num1, num2).toFixed(2)}`)
  }

}

main()