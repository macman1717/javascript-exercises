function reverseString(word){
    if (word == ''){
        return '';
    }
    let reversedWord = '';
    for(let i = word.length; i > 0; i--){
        reversedWord += word.charAt(i-1);
    }
    return reversedWord;
}

// Do not edit below this line
module.exports = reverseString;
