const reverseString = function(string) {
    let reverseString = "";
    let largo = string.length;
    
    for(i=0 ; i < largo ; i++){

        reverseString += string.charAt(string.length-1);

        string = string.slice(0,-1);
    }
    return reverseString;
}

module.exports = reverseString
