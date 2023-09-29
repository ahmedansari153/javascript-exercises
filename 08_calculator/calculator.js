const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(sumArray) {
  let result=0;
	sumArray.forEach(element => {
    result+=element;
  });
  return result
};

const multiply = function(multArray) {
  let result = 1;
  multArray.forEach(element => {
    result *= element;
  });
  return result
};

const power = function(a, b) {
	let result = 1;
  for (let i = b; i > 0; i--) {
    result *= a;
  }
  return result;
};

const factorial = function(a) {
  let factored = 1;
  for (let i = a; i > 0; i--) {
    factored *= i;
  }
  return factored;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
