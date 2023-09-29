const reverseString = function(theString) {
    var reversed = "";
    for(var i=theString.length-1; i>=0; i--) {
        reversed += theString[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
