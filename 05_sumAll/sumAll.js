function sumAll(x1,x2){
    if(typeof x1 !== "number" || typeof x2 !== "number" || x1 < 0 || x2 < 0){
        return "ERROR";
    }
let biggerNumber;
let smallerNumber;
if(x1 > x2){
    biggerNumber = x1;
    smallerNumber = x2;
}else{
    biggerNumber = x2;
    smallerNumber = x1;
}
let sum = 0;
while(biggerNumber >= smallerNumber){
    sum += biggerNumber;
    biggerNumber--;
}
return sum;
}

// Do not edit below this line
module.exports = sumAll;
