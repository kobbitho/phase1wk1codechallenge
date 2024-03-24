function studentGrade(score){
   
    if(score >79){
        return "A";
    }else if (score >= 60 && score <= 79){
        return "B";
    }else if (score >= 49 && score <= 59){
        return "C";
    }else if(score >= 40 && score <= 49){
        return "D";
    }else if (score < 40){
        return "E";
    }
}
console.log(studentGrade(50));

 /*This function takes a score input as an argument and 
 returns the equivalent grade.
 
 We use if-else statement to check the input scores against the grades.
 
  */

