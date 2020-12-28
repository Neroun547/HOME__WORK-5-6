function forItems(el, method) {
    if (el !== 0 && el > 0) {
        if (typeof method === 'function') {
            method();
            return forItems(el -= 1, method);
        }
    }
    if (el < 0) {
        if (typeof method === 'function') {
            method();
            return forItems(el += 1, method);
        }
    }
}

function test() {
    console.log(true);
}

console.log(forItems(10, test));
// Sum array
function sum(a) {
    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function () {
        return currentSum;
    };

    return f;
}

console.log(sum(10)(3)(5));

//Function calculate
function calculate(num){
    let number = num;
    let obj = {
    add:Function.prototype.add = function(num){
        number += num; 
        return obj;
    },
    multiply:Function.prototype.multiply = function(num){
        number *= num;
        return obj;
    },
    result:Function.prototype.result = function(){
        return number;
    }
    }
    return obj;
}

console.log(calculate(10).add(12).multiply(2).result());
//ForEach
Array.prototype.myforEach = function (method) {
    for (let i = 0; i < this.length; i++) {
        method(this[i], i);
    }
}

let b = [1, 2, 3, 4].myforEach((el, i) => {
    return el, i;
})

console.log(b);

//map 

Array.prototype.myMap = function(method){
    let arr = [];
    for(let i = 0; i < this.length; i++){
        arr.push(method(this[i], i, this));
    }
    return arr;
}

[1, 4, 2, 5, 2].myMap((el, i, arr) => {
    return el + i;
})

//sort
Array.prototype.mySort = function (method) {
    let inArr = [];
    let arr = [];
    let min;
    if (arguments.length === 0) {
        for (let i = 0; i < this.length; i++) {
            inArr.push(String(this[i]));
        }
        for (let i = 0; i < inArr.length; i++) {
            min = inArr[i];
            for (let j = 0; j < inArr.length; j++) {
                if (inArr[j] < min) {
                    min = inArr[j];
                }
            }
            arr.push(min);
            for (let i = 0; i < inArr.length; i++) {
                if (inArr[i] === min) {
                    inArr.splice(i, 1, Infinity);
                }
            }
        }
        for (let i = 0; i < this.length; i++) {
            if (typeof this[i] === 'number') {
                console.log(true);
                arr.splice(i, 1, Number(arr[i]));
            }
        }
        return arr;
    } else {
        let res = [];
        let flag = true;
        while (res.length !== this.length) {
            for (let i = 0; i < this.length; i++) {
                for (let j = 0; j < this.length; j++) {
                    if (method(this[i], this[j]) > 0) {
                        flag = false;
                    }
                }
                if (flag) {
                    res.push(this[i]);
                    for (let j = 0; j < this.length; j++) {
                        if (this[i] === this[j]) {
                            this.splice(j, 1, Infinity);
                        }
                    }
                }
                let inf = true;
                for (let i = 0; i < this.length; i++) {
                    if (this[i] !== Infinity) {
                        inf = false;
                    }
                }
                if (inf) {
                    return res;
                }
                flag = true;
            }
        }
        return res;
    }
}

console.log([2, 5, 1, 10, 2].mySort((a, b) => {
    return a - b;
}));


//my Find
Array.prototype.myFind = function(method){
    for(let i = 0; i < this.length; i++){
        if(method(this[i]) === true){
            return this[i];
        }
    }
}

let a = [1, 4, 3].myFind((a) => {
    return a > 1 && a < 4;
})

console.log(a);

//filter
Array.prototype.myFilter = function(method){
    let arr = [];
    for(let i = 0; i < this.length; i++){
        if(method(this[i], i, this) === true){
            arr.push(this[i]);
        }
    }
    return arr;
}

[1, 4, 23, 3, 1, 10, 32, 10].myFilter((el, index, arr) => {
    return el > 4;
})





