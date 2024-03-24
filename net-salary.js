function tax(grossIncome){
    let paye = 0;
    let grossTax = 0;
    let rated = 0; 
    let personalRelief = 2400;

    if(grossIncome > 0 && grossIncome <= 24000){
        grossTax = (grossIncome *0.10);
    
    }else if (grossIncome >= 24001 && grossIncome <= 32333){
        rated = (grossIncome - 24000) * 0.25;
        grossTax = 2400 + rated
    
    }else if (grossIncome >= 32334 && grossIncome <= 500000){
        rated = (grossIncome - 32333) * 0.30;
        grossTax = 2400 + 2083.25 + rated
    
    }else if (grossIncome >= 500001 && grossIncome  <= 800000){
        rated = (grossIncome - 500000) * 0.325;
        grossTax = 2400 + 2083.25 + 140300.1 + rated
  
    }else if(grossIncome > 800000){
        rated = (grossIncome - 800000) * 0.35;
        grossTax = 2400 + 2083.25 + 140300.1 + 97500 + rated
        
    }
    

        paye = ~~ (grossTax - personalRelief);
        netSalary = (grossIncome -paye);
        return{ paye, netSalary}
    } 

let myGrossIncomerossIncome  = rewards(basicSalary,myRewards);
    let taxed = tax(myGrossIncome.grossIncome);

    return {
        NSSFDeductions:  myGrossIncome.nssf,
        NHIFDeductions:  myGrossIncome.nhif,
        payee:  taxed.paye,
        grosssalary:  basicSalary,
        netsalary:  taxed.netsalary
    }




console.log(tax(75000), 8222);
/*
gross salary = 75000
nssf = (75000 * 0.06) = 4500
nhif = 1400//(1400 * 0.15) =210 *
75000 -(nssf + nhif)
let taxableIncome = 75000 - (nssf + nhif) //69100

let net tax (taxableIncome);
nssf deductions = 4500
nhif deductions = 1400
payee (e.g tax) = 51186.65
gross salary = 75000
net salary =(taxable income - payee) = 17913.35

*/ 

function tax(basicSalary, benefits){
    let nssf = 0;
    let nhif = 0;

    function benefitsFunction(basicSalary, benefits){
        nssf = basicSalary * 0.6;
        if(basicSalary >0 && basicSalary <= 5999){
            nhifDeducted = 150

        }else if (basicSalary > 6000 && basicSalary <= 7999){
            nhifDeducted = 300
        }else if (basicSalary > 8000 && basicSalary <= 11999){
            nhifDeducted = 400
        }else if (basicSalary > 12000 && basicSalary <= 14999){
            nhifDeducted = 500
        }else if (basicSalary > 15000 && basicSalary <= 19999){
            nhifDeducted = 600
        }else if (basicSalary > 20000 && basicSalary <= 24999){
            nhifDeducted = 750
        }else if (basicSalary > 25000 && basicSalary <= 29999){
            nhifDeducted =850
        }else if (basicSalary > 30000 && basicSalary <= 34999){
            nhifDeducted =900
        }else if (basicSalary > 35000 && basicSalary <= 39999){
            nhifDeducted = 950
        }else if (basicSalary > 40000 && basicSalary <= 44999){
            nhifDeducted = 1000
        }else if (basicSalary > 45000 && basicSalary <= 49999){
            nhifDeducted = 1100
        }else if (basicSalary > 50000 && basicSalary <= 59999){
            nhifDeducted = 1200
        }else if (basicSalary > 60000 && basicSalary <= 69999){
            nhifDeducted = 1300
        }else if (basicSalary > 70000 && basicSalary <= 79999){
            nhifDeducted = 1400
        }else if (basicSalary > 80000 && basicSalary <= 89999){
            nhifDeducted = 1500
        }else if (basicSalary > 90000 && basicSalary <= 99999){
            nhifDeducted =1600
        }else if (basicSalary > 100000){
            nhifDeducted = 1700
        }
 }

nhif = nhifDeducted;
grossIncome = basicSalary(nssf + nhif);
        return{
            nssf,
            nhif,
            payableIncome: basicSalary - (nssf + nhif)
        }
    }
    
