// Right Angle Triangle
let n1 = 5;
for(let i = 1; i <= n1; i++){
    for(let j = 1; j <= i; j++){
        process.stdout.write("* ")
    }
    console.log()
}

// Inverted Right Angle Triangle
let n2 = 5;
for(let i = 1; i <= n2; i++){
    for(let j = n2; j >= i; j--){
        process.stdout.write("* ")
    }
    console.log()
}

//Both Inverted and Right Angle Triangle
let n3 = 5;
for(let i = 1; i <= n3; i++){
    for(let j = n3; j >= i; j--){
        process.stdout.write("  ")
    }
    for(let k = 1; k  <= i; k++){
        process.stdout.write("* ")
    }
    console.log()
}

// Triangle
let n4 = 5; 
for(let i = 1; i <= n4; i++){
    for(let j = n4; j >= i; j--){
        process.stdout.write(" ")
    }
    for(let k = 1; k <= i; k++){
        process.stdout.write("* ")
    }
    console.log()
}

//Cross 
let n5 = 5;
for(let i = 1; i <= n5; i++){
    for(let j = 1; j <= n5; j++){
        if(i === j || i + j === n5 + 1){
            process.stdout.write("* ")
        }else{
            process.stdout.write("  ")
        }
    }
    console.log()
}

//V pattern
let n6 = 5;
for(let i = 1; i <= n6; i++){
    for(let j = 1; j <= 2*n6; j++){
        if(i === j || i + j == 2*n6){
            process.stdout.write("* ")
        }else{
            process.stdout.write(" ")
        }
    }
    console.log()
}