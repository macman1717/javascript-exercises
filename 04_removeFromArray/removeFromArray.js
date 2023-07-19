function removeFromArray(list, ...theArgs) {
    let newList = list;
        for(const arg of theArgs){
            for(const item of list){
                newList = list.filter((element) => element !== arg);
            }list = newList;
        }
    return newList;
}

// Do not edit below this line
module.exports = removeFromArray;
