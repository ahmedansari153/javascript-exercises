const palindromes = function (query) {
    let palindrome = query.replace(/[,.!? ]/g, '').toLowerCase();
    let isPal = true;
    for (let i = 0, j=palindrome.length-1; i < palindrome.length; i++, j--) {
        if(palindrome[i]!=palindrome[j])
            isPal=false;
    }
    return isPal;
};

// Do not edit below this line
module.exports = palindromes;
