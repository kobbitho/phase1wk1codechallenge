function tax(taxableIncome){
    let paye = 0;
    let grossTax = 0;
    let rated = 0; 
    let personalRelief = 2400;

    if(taxableIncome > 0 && taxableIncome <= 24000){
        grossTax = (taxableIncome *0.10);
    
    }else if (taxableIncome >= 24001 && taxableIncome <= 32333){
        rated = (taxableIncome - 24000) * 0.25;
        grossTax = 2400 + rated
    
    }else if (taxableIncome >= 32334 && taxableIncome <= 500000){
        rated = (taxableIncome - 32333) * 0.30;
        grossTax = 2400 + 2083.25 + rated
    
    }else if (taxableIncome >= 500001 && taxableIncome  <= 800000){
        rated = (taxableIncome - 500000) * 0.325;
        grossTax = 2400 + 2083.25 + 140300.1 + rated
  
    }else if(taxableIncome > 800000){
        rated = (taxableIncome - 800000) * 0.35;
        grossTax = 2400 + 2083.25 + 140300.1 + 97500 + rated
        
    }
    

        paye = ~~ (grossTax - personalRelief);
        netSalary = (taxableIncome -paye);
    } 

console.log(tax(75000));
/*
gross salary = 75000
nssf = (75000 * 0.06) = 4500
nhif = 1400//(1400 * 0.15) =210 *
75000 -(nssf + nhif)
let taxableIncome = 75000 - (nssf + nhif) //69100

let net tax (taxableIncome);
nssf deductions = 4500
nhif deductions = 1400
payee (i.e. tax) = 51186.65
gross salary = 75000
net salary =1(taxable income - payee) = 17913.35

*/ 
