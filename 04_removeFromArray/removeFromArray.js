const removeFromArray = function(array, ...params) {
    let newArray = [];
    let found= false;
    for(var i=0; i<array.length; i++) {
        for (let j = 0; j < params.length; j++) {
           if(array[i] === params[j])
                found=true;
        }
        if (found!=true) 
            newArray.push(array[i]);
        found=false;
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
