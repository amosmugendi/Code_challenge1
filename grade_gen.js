
const readline= require('readline');
// create an object to read marks from the terminal using realine method
const rl =readline.createInterface({
    input: process.stdin,
    output: process.stdout

});
rl.question('Please enter your marks:', (marks)=>{
    grade(parseInt(marks));
    rl.close();
})
// write a funtion that assigns grade depending on the marks entered
function grade(marks){
    if(marks > 79 && marks <= 100){
        console.log(`Grade is A`)
    }else if(marks >= 60 && marks <= 79){
        console.log(`Grade is B`)
    }else if (marks > 49 && marks <=59 ){
        console.log(`Grade is C`)
    }else if(marks >= 40 && marks <= 49 ){
        console.log(`Grade is D`)
    }else if(marks<40 && marks>=0){
        console.log(`Grade is E`)
    }else[
        console.log("Invalid Marks!!") //alert the user if invalid marks are entered
    ]   
}







