const points = prompt("input your point: ");
studentGrade(points);
function studentGrade(score){
   
    if(score >79){
        return grade = "A";
    }else if (score >= 60 && score <= 79){
        return grade = "B";
    }else if (score >= 49 && score <= 59){
        return grade = "C";
    }else if(score >= 40 && score <= 49){
        return grade = "D";
    }else if (score < 40){
       return  grade = "E";
    }
    document.getElementById("return").innerHTML = `Grade: ${grade}`;
}


 /*This function takes a score input as an argument and 
 returns the equivalent grade.
 
 We use if-else statement to check the input scores against the grades.
 
  */

