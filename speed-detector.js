const points = prompt("Input your speed: ");
// function accept a speed input
// should return "Ok" if the speed is <=70 
// return number of demerits per speed more than 70
//if the the demerit points are >12 to print "License suspended"
function speedDetector(speed) {

    let response = "";
    let demeritPoints = "";
    let htmlfeedback = document.getElementById("feedback");
    let prefeedback = "";
   
  
    if (speed >= 0 && speed <= 70) {
      feedback = "Ok";
      htmlfeedback.innerHTML ='<i> ${feedback}</i>';

    } else {
      demeritPoints = Math.floor((speed - 70) / 5);//1 demerit point for every 5km above speed limit
      prefeedback = (demeritPoints > 12 )? "License suspended: " : "points: ";
      htmlfeedback.innerHTML = `<i> ${prefeedback} ${demeritPoints}</i>`;
      response = prefeedback + demeritPoints;
             //using math.floor helps round down our value to the nearest integer.
    

      }
    
  
    return response;
}
  Show(speedDetector(points))
  
  console.log(speedDetector(80)); // Points: 2
  console.log(speedDetector(90)); // Points: 4
  console.log(speedDetector(110)); // License suspended