const repeatString = function(theString, i) {
    output = "";
    if(i>-1) {
        for(var j = 0; j < i; j++) {
            output+=theString;
        }
    }
    else
        output="ERROR";
    return output;
};

// Do not edit below this line
module.exports = repeatString;
