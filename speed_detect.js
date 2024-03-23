let point=0;//declear point as a global variable for it to be accessible through the code

const readline= require('readline')
//create an object using the readline method to accept inputs froom the terminal
const rl= readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("Enter the Car speed:",(speed)=>{
    speedDetector(parseInt(speed))
    rl.close();
})

//function to check the speed limits 
function speedDetector(speed){
    if (speed <= 70){

        console.log("Ok")
    }
    else if(speed> 70){
        point= Math.floor((speed - 70)/5);// math meethod to calculate number of points a driver is awarded for every 5km/hr above 70kms/hr 
    }
    console.log("points:", point);
//if statement to suspend lincence if point exceed 12 
if(point>=12){
    console.log("Lincense suspended")
}

}
