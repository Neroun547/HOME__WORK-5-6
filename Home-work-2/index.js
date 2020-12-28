function arraySum(el) {
    let responseSum = 0;
    for (let i = 0; i < el.length; i++) {
        if (!isNaN(el[i]) && typeof el[i] === 'number') {
            responseSum += el[i];
        }
        if(!isNaN(el[i]) && typeof el[i] === 'object' && el[i] !== null && typeof el[i][0] === 'number'){
            responseSum += el[i][0];
        }
    }
    return responseSum;
}
console.log(arraySum([NaN, [1], null, undefined, -123, 1123]));
console.log('-----');
//max
function arrayMax(el) {
    let val = null;
    for (let i = 0; i < el.length; i++) {
        if(val === null && typeof el[i] === 'number' && !isNaN(val)){
            val = el[i];
        }
        if (typeof el[i] === 'number' && el[i] > val && !isNaN(el[i])) {
            val = el[i];
        }
        if(typeof el[i] === 'object' && el[i] !== null && el[i][0] > val && !isNaN(el[i][0]) && typeof el[i][0] === 'number'){
            val = el[i];
        }
    }
    return val;
}

console.log(arrayMax([1, [false], null]));
console.log('-----');
//min
function arrayMin(el) {
    let val = null;
    for (let i = 0; i < el.length; i++) {
        if(val === null && typeof el[i] === 'number' && !isNaN(val)){
            val = el[i];
        }
        if (typeof el[i] === 'number' && el[i] < val && !isNaN(el[i])) {
            val = el[i];
        }
        if(typeof el[i] === 'object' && el[i] !== null && el[i][0] < val && !isNaN(el[i][0]) && typeof el[i][0] === 'number'){
            val = el[i];
        }
    }
    return val;
}

console.log(arrayMin([1, [false], null]));
console.log('-----');
//water 

/* To do...... */
// function array(el) {
//     let result = 0;
//     let num;
//     for (let i = 0; i < el.length; i++) {
//         if (el[i] >= el[i + 2] && el[i + 2] >= el[i + 1] && el[i] !== num) {
//             result += el[i + 2] - el[i + 1];
            
//             if(el[i] !== el[i+1] && el[i+2]!==el[i+1]){
//                 num = el[i + 1];
//             }
//         } else if (el[i] <= el[i + 2] && el[i] >= el[i + 1] && el[i] !== num) {
//             result += el[i] - el[i + 1];
            
//             if(el[i] !== el[i+1] && el[i+2]!==el[i+1]){
//                 num = el[i + 1];
//             }
//         } else if (el[i] <= el[i + 2] && el[i] <= el[i + 1] && el[i] !== num) {
//             result += el[i + 2] - el[i + 1];
            
//             if(el[i] !== el[i+1] && el[i+2]!==el[i+1]){
//                 num = el[i + 1];
//             }
//         } else if (el[i + 2] <= el[i] && el[i + 2] <= el[i + 1] && el[i] !== num) {
//             result += el[i] - el[i + 1];
//             if(el[i] !== el[i+1] && el[i+2]!==el[i+1]){
//                 num = el[i + 1];
//             }
//         }
//     }
//     return result;
// }

// console.log(array([2, 1, 5, 5, 4, 5, 5, 3, 6]));