// function accept a speet input
// should return "Ok" if the speed is <=70 
// return number of demerits per speed more than 70
//if the the demerit points are >12 to print "License suspended"
function speedDetector(speed) {
    let demeritPoints = 0;
    let response = "";
  
    if (speed >= 0 && speed <= 70) {
      response = "Ok";
    } else {
      demeritPoints = Math.floor((speed - 70) / 5);
      if (demeritPoints > 12) {
        response = "License suspended";
      } else {
        response = `Points: ${demeritPoints}`;
      }
    }
  
    return response;
  }
  Show(speedDetector(73))
  
  console.log(speedDetector(80)); // Points: 2
  console.log(speedDetector(90)); // Points: 4
  console.log(speedDetector(110)); // License suspended