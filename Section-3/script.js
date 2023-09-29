let user_inout = prompt("enter a number, please.");

for(let i = 2; i < math.sqrt(user_inout); i++){
    if(user_inout % i != 0)
    console.log(i+" ")
}

