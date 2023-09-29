const fibonacci = function(endPoint) {
    if(endPoint<0)
        return "OOPS";
    let end = Number(endPoint);
    let a = 1;
    let b = 0;
    let next = a+b;
    for (let i = 0; i < end; i++) {
        next = a+b;
        a=b;
        b=next;
    }
    return next;
};

// Do not edit below this line
module.exports = fibonacci;
