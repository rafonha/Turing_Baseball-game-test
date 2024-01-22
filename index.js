var calPoints = (ops) => {
    var scoreArr = [];

    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === "C"){
            scoreArr.pop();
            
            console.log(`popped, so [${scoreArr}]`)
        } else if (ops[i] === "D"){
            scoreArr.push(scoreArr[i-3] * 2);

            console.log(`multiply previous number ${scoreArr[i-3]} by 2, pushed ${scoreArr[i-3] * 2}, so [${scoreArr}]`)
        } else if (ops[i] === "+"){
            scoreArr.push(scoreArr[i-3] + scoreArr[i-4]);

            console.log(`sum previous 2 numbers, pushed ${scoreArr[i-3] + scoreArr[i-4]}, so [${scoreArr}]`)
        } else {
            scoreArr.push(parseInt(ops[i]));
            console.log(`push: ${parseInt(ops[i])}, so [${scoreArr}]`);
        }
    }

    return scoreArr.reduce((a,b) => a + b, 0);
}

var ops1 = ["5","2","C","D","+"]
var ops2 = ["-3","4","C", "9","D", "-2", "+"]

console.log(calPoints(ops2));