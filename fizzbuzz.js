var output = [];
var n = 1;

function FizzBuzz(){
    while(n <= 100){
    if (n%3 === 0 && n%5 != 0){
        output.push("Fizz");
        n++;
    }
    else if (n%5 === 0 && n%3 != 0){
        output.push("Buzz");
        n++;
    }
    else if (n%3 === 0 && n%5 ===0) {
        output.push("FizzBuzz");
        n++;
    }
    else{
        output.push(n);
        n++;
    }
    }
    console.log(output);
}

