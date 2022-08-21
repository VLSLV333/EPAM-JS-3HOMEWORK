function isEquals (a, b){
return a === b;
}
function isBigger (a, b){
return a > b;
}
function storeNames (a, ...b){
    let answer = [];
    answer.push(a, ...b);
    return answer
}
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
function negativeCount (arr){
    let keyArray = [];
    for (let key of arr){
        if (key < 0){
            keyArray.push(key);
        }
    }
    return keyArray.length;
}
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