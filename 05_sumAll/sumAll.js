const sumAll = function(start, end) {
    if(start < 0)
        return "ERROR";
    if(typeof start != "number" || typeof end != "number") {
        return "ERROR";
    }
    let a = start>end ? end : start;
    let b = start>end ? start: end;

    let sum = 0;
    for (var i = a; i <= b; i++) {
        sum = sum+i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
