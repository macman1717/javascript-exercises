
function repeatString(word, numOfTimes){
    let repeatedWords = '';
    if(numOfTimes < 0){
        return "ERROR"
    }
    for(let i = 0; i < numOfTimes; i++){
        repeatedWords += word;
    }
    return repeatedWords;
}

// Do not edit below this line
module.exports = repeatString;
