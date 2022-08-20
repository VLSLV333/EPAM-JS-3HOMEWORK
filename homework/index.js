// Your code goes here
function isEquals (a, b){
return a === b;
}
// console.log(isEquals(3, 3)) // => true
function isBigger (a, b){
return a > b;
}
// console.log(isBigger(5, -1)) // => true
function storeNames (a, ...b){
    let answer = [];
    answer.push(a, ...b);
    return answer
}
// console.log(storeNames('Tommy Shelby', 'Ragnar Lodbrok', 'Tom Hardy',));
function getDifference(a, b){
    let answer = a - b;
    if (answer > 0){
        return answer;
    } else if (answer < 0){
        return -answer;
    } else {
        return 0;
    }
}
// console.log(getDifference(-5, 10))// => 2
function negativeCount (arr){
    let keyArray = [];
    for (let key of arr){
        if (key < 0){
            keyArray.push(key);
        }
    }
    return keyArray.length;
}
// console.log(negativeCount([0, -3, 5, 7])) // => 1
function letterCount (str, piece){
    let answer = [];
    let arrayOfAllLetters = str.split('');
    for (let key of arrayOfAllLetters){
        if (key === piece){
            answer.push(key);
        }
    }
    return answer.length;
}
// console.log(letterCount("Marry", "r")) // => 2
function countPoints(arr){
    let points = 0;
    let pointsForWinning = 3;
    for (let key of arr){
        let matchPoints = key.split(':');
        if(+matchPoints[0] > +matchPoints[1]){
            points += pointsForWinning;
        } else if (+matchPoints[0] === +matchPoints[1]){
            points += 1
        } 
    }
    return points;
}
// console.log(countPoints(['100:90', '110:98', '100:100', '95:46', '54:90', '99:44', '90:90', '111:100'])) // => 17