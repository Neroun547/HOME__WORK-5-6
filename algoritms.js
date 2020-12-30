//factorial 
function factorial(n) {
    if (n <= 0) {
        return true;
    }
    if (n === 1) {
        return 1;
    }
    return n * factorial(n -= 1);
}

console.log(factorial(1));

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}

console.log(factorial(1));

//fibonachi
function fib(n) {
    if (n === 1) {
        return 0;
    } else if (n === 2 || n === 3) {
        return 1;
    }
    let a = 1;
    let b = 1;
    let c = 0;
    for (let i = 4; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}

console.log(fib(4));

//reverse

function reverse(el) {
    let arr = [];
    let test = el.split('');
    for (let i = test.length - 1; i >= 0; i--) {
        arr.push(test[i]);
    }
    return arr.join('');
}
console.log(reverse('abcd'));

//prime number
function primeNumber(n) {
    if (n === 1 || n === 0) {
        return false;
    }
    let flag = true;
    for (let i = n - 1; i > 1; i--) {
        if (n % i !== 0) {
            flag = true;
        } else {
            flag = false;
            break;
        }
    }

    return flag;
}

console.log(primeNumber(2));

//isSorted

function isSorted(arr){
    let flag = true;
    for(let j = 0; j < arr.length; j++){
        for(let i = j; i < arr.length; i++){
            if(arr[j] <= arr[i]){
                flag = true;
            }else {
                return false;
            }
        }
    }
    return flag;
}
console.log(isSorted([-Infinity, null, 1, 3, 4, 5, 6]))

//Polindrom

function polindrom(el){
    let word = el.trim().toLowerCase();
    let str = word.split('');
    let checkPolindrom = str.reverse();

    if(str === checkPolindrom){
        return true;
    }else{
        return false;
    }
}

console.log(polindrom('A man a plan a canal Panama'));

//IndexOf
function indexOf(arr, findEl){
    let flag = -1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === findEl){
            return i;
        }else {
            flag = -1;
        }
    }
    return flag;
}

console.log(indexOf([1, 2, 3, 4], 1));

//

function missing(el){
    let flag = false;
    let arr = el.sort((a, b) => {
        return a - b;
    });
    let arrTest = [];
    let result = [];
    let theBigestNum = arr[arr.length-1];
    for(let i = 1; i <= theBigestNum; i++){
        arrTest.push(i);
    }
    for(let i = arr.length; i < arrTest.length; i++){
        arr.push(undefined);
    } 
    for(let i = 0; i < arrTest.length; i++){
            for(let j = 0; j < arrTest.length; j++){
                if(arr[j] === arrTest[i]){
                    flag = true;
                }
            }
            if(!flag){
                result.push(arrTest[i]);
            }
            flag = false;
    }
    if(result.length === 0){
        return undefined;
    }   
    return result;
}

console.log(missing([2, 5, 6]), missing([]));

//Balanced

function isBalanced(el){
    let arr = el.split(' ');
    let countBracketsRight = 0;
    let countBracketsLeft = 0;
    let countWords = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '{'){
            countBracketsRight+=1;
        }
        if(arr[i] === '}'){
            countBracketsLeft +=1;
        }
        if(arr[i] !== ' ' && arr[i] !== '{' && arr[i] !== '}' && arr[i] !== '{}'){
            countWords +=1;
        }
    }
    if(countBracketsLeft === countBracketsRight && countWords !== 0){
        return true;
    }else{
        return false;
    }
}

console.log(isBalanced('foo { bar { baz }'));
