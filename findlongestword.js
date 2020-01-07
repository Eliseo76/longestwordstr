function findLongestWordLength(str) {
    let arrOfString = str.split(/\s/);
    let currentLongest = [''];
    for (let i=0; i < arrOfString.length; i++){
        if (arrOfString[i].length > currentLongest.length){
            currentLongest = arrOfString[i];
        }
    }
    let answer = currentLongest;
    return answer.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
