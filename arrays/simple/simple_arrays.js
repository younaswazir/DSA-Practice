//Sum of an array
let arr1 = [1, 2, 3];
let sum = 0;
for(let i = 0; i < arr1.length; i++){
    sum += arr1[i]
}
console.log(sum)

// Maximum in array
let arr2 = [-11, -12, -1, -13];
let maximum = -Infinity;    // arr2[0]
for(let i = 0; i < arr2.length; i++){
    if(arr2[i] > maximum){
        maximum = arr2[i]
    };
}
console.log(maximum)

// Minimum in an array
let arr3 = [-1, -2, -13, -20, -4, 23, 22];
let minimum = +Infinity;    //arr3[0]
for(let i = 0; i < arr3.length; i++){
    if(arr3[i] < minimum){
        minimum = arr3[i];
    }
}
console.log(minimum)

// Max and 2nd Maxm in an array
let arr4 = [-1, -2, -13, -12];
let max = -Infinity;     //arr4[0]
let secondMax = -Infinity;    arr4[0]
for(let i = 0; i < arr4.length; i++){
    if(arr4[i] > max){
        secondMax = max;
        max = arr4[i];
    }else if(arr4[i] > secondMax && arr4[i] !== max){
        secondMax = arr4[i]
    }
}
console.log(max, secondMax);

// Min and 2nd Min in an array
let arr5 = [-1, -2, -3, -12];
let min = +Infinity;  //arr5[0] we can do this as well
let secondMin = +Infinity; // arr5[0] 
for(let i = 0; i < arr5.length; i++){
    if(arr5[i] < min){
        secondMin = min;
        min = arr5[i]
    }else if(arr5[i] < secondMin && arr5[i] !== min){
        secondMin = arr5[i]
    }
}
console.log(min, secondMin)