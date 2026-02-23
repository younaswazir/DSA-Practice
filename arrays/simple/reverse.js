// First Method to Reverse an array
let arr1 = [90, 80, 70, 60];
let temp = [];
let j1 = arr1.length - 1;
for(let i = 0; i < arr1.length; i++){
    temp[i] = arr1[j1];
    j1--
}
console.log(temp)

// Second Method 
let arr2 = [1, 2, 3, 4];
let i = 0; j = arr2.length - 1;
while(i < j){
    let temp = arr2[i];
    arr2[i] = arr2[j];
    arr2[j] = temp;
    i++;
    j--;
}
console.log(arr2)

// Moving 0's to left and 1's on right 
let arr3 = [0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0,0];
let j2 = 0;
for(let i = 0; i < arr3.length; i++){
    if(arr3[i] == 0){
        let temp = arr3[i];
        arr3[i] = arr3[j2];
        arr3[j2] = temp;
        j2++
    }
}
console.log(arr3)

// Moving +ive to right and -ive to left
let arr4 = [1, 2, -3, 12, -11, -4, 9];
let j3 = 0;
for(let i = 0; i < arr4.length; i++){
    if(arr4[i] < 0){
        let temp = arr4[i];
        arr4[i] = arr4[j3];
        arr4[j3] = temp;
        j3++
    }
}
console.log(arr4)