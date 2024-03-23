

// const readline=require('readline');

// const rl= readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Please Enter Basic Pay and Benefits:',(basic, benefits)=>{
//     netSalary(parseInt(basic, benefits));
//     rl.close();
// })
// function netSalary(basic, benefits){

//     // let gross, basic, benefits

//     gross= basic+benefits;

//     let net= gross - (payee+ NHIF+ NSSF);

//     return net;


// function CalPayee(gross){
//     if(gross<= 24000 && gross>=0){
//         payee= gross* 0.1;
//     }
//     else if(gross> 24000 && gross <= 32,333){
//         payee= gross * 0.25;
//     }
//     else if(gross > 32,333 && gross <= 500000){
//         payee= gross * 0.3
//     }
//     else if(gross > 500000 && gross <= 800000){
//         payee= gross*0.325
//     }
//     else if (gross> 800000){
//         payee= gross* 0.35
//     }
//     return payee;
// }

// function NHIFCalc(gross){
//     if(gross<= 5999){
//         NHIF= 150
//     }
//     else if(gross>= 6000 && gross <= 7999){
//         NHIF= 300
//     }
//     else if(gross>= 8000 && gross <= 11999){
//         NHIF= 400
//     }
//     else if(gross>= 12000 && gross <= 14999){
//         NHIF= 500
//     }
//     else if(gross>= 150000 && gross <= 19999){
//         NHIF= 600
//     }
//     else if(gross>= 20000 && gross <= 24999){
//         NHIF= 750
//     }
//     else if(gross>= 25000 && gross <= 29999){
//         NHIF= 850
//     }
//     else if(gross>= 30000 && gross <= 34999){
//         NHIF= 900
//     }
//     else if(gross>= 35000 && gross <= 39999){
//         NHIF= 950
//     }
//     else if(gross>= 40000 && gross <= 44999){
//         NHIF= 1000
//     }
//     else if(gross>= 45000 && gross <= 49999){
//         NHIF= 1100
//     }
//     else if(gross>= 50000 && gross <= 59999){
//         NHIF= 1200
//     }
//     else if(gross>= 60000 && gross <= 69999){
//         NHIF= 1300
//     }
//     else if(gross>= 70000 && gross <= 79999){
//         NHIF= 1400
//     }
//     else if(gross>= 80000 && gross <= 89999){
//         NHIF= 1500
//     }
//     else if(gross>= 90000 && gross <= 99999){
//         NHIF= 1600
//     }
//     else if(gross>= 90000 && gross <= 99999){
//         NHIF= 1600
//     }
//     else if(gross>100000){
//         NHIF= 1700
//     }

//     return NHIF;
// }

// function NSSFCalc(gross){
//     if(gross=== tier1){
//         NSSF= 7000;
//     } else if(gross=== tier2){
//         NSSF= 36000;
//     }else{
//         NSSF= gross* 0.06;
//     }
//     return NSSF
// }
// }


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let basic, benefits;

rl.question('Please Enter Basic Pay: ', (basicInput) => {
    basic = parseInt(basicInput);
    rl.question('Please Enter Benefits: ', (benefitsInput) => {
        benefits = parseInt(benefitsInput);
        const netSalaryResult = netSalary(basic, benefits);
        console.log('Net Salary:', netSalaryResult.net);
        console.log('NHIF:', netSalaryResult.nhif);
        console.log('NSSF:', netSalaryResult.nssf);
        console.log('Payee:', netSalaryResult.payee);
        rl.close();
    });
});

function netSalary(basic, benefits) {
    const gross = basic + benefits;
    const payee = CalPayee(gross);
    const nhif = NHIFCalc(gross);
    const nssf = NSSFCalc(gross);
    const net = gross - (payee + nhif + nssf);

    return {
        net: net,
        nhif: nhif,
        nssf: nssf,
        payee: payee
    };
}

function CalPayee(gross) {
    let payee;
    if (gross <= 24000 && gross >= 0) {
        payee = gross * 0.1;
    } else if (gross > 24000 && gross <= 32333) {
        payee = gross * 0.25;
    } else if (gross > 32333 && gross <= 500000) {
        payee = gross * 0.3;
    } else if (gross > 500000 && gross <= 800000) {
        payee = gross * 0.325;
    } else if (gross > 800000) {
        payee = gross * 0.35;
    }
    return payee;
}

function NHIFCalc(gross) {
    let nhif;
    if (gross <= 5999) {
        nhif = 150;
    } else if (gross >= 6000 && gross <= 7999) {
        nhif = 300;
    } else if (gross >= 8000 && gross <= 11999) {
        nhif = 400;
    } else if (gross >= 12000 && gross <= 14999) {
        nhif = 500;
    } else if (gross >= 15000 && gross <= 19999) {
        nhif = 600;
    } else if (gross >= 20000 && gross <= 24999) {
        nhif = 750;
    } else if (gross >= 25000 && gross <= 29999) {
        nhif = 850;
    } else if (gross >= 30000 && gross <= 34999) {
        nhif = 900;
    } else if (gross >= 35000 && gross <= 39999) {
        nhif = 950;
    } else if (gross >= 40000 && gross <= 44999) {
        nhif = 1000;
    } else if (gross >= 45000 && gross <= 49999) {
        nhif = 1100;
    } else if (gross >= 50000 && gross <= 59999) {
        nhif = 1200;
    } else if (gross >= 60000 && gross <= 69999) {
        nhif = 1300;
    } else if (gross >= 70000 && gross <= 79999) {
        nhif = 1400;
    } else if (gross >= 80000 && gross <= 89999) {
        nhif = 1500;
    } else if (gross >= 90000 && gross <= 99999) {
        nhif = 1600;
    } else if (gross >= 100000) {
        nhif = 1700;
    }

    return nhif;
}

function NSSFCalc(gross) {
    const tier1 = 18000;
    const tier2 = 27000;

    let nssf;
    if (gross <= tier1) {
        nssf = 200;
    } else if (gross > tier1 && gross <= tier2) {
        nssf = 400;
    } else {
        nssf = gross * 0.06;
    }
    return nssf;
}

