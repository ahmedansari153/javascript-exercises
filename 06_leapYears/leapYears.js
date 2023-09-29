const leapYears = function(year) {
    let isLeap = false;
    let isLeap2 = false;
    let isLeap3 = false;
    if(year%4==0) {
        isLeap = true;
        if(year%100==0) {
            isLeap2 = true;
            if(year%400==0) {
                isLeap3 = true;
            }
        }
    }

    if(isLeap == true && isLeap2 == false)
        return true;
    else if(isLeap==true && isLeap2 ==true && isLeap3 == true)
        return true;
    else 
        return false;
};

// Do not edit below this line
module.exports = leapYears;
