let dayNumber = parseInt(prompt("enter a number from 1-7"))
let output = document.getElementById("output")

switch (dayNumber){
    case 1:
    output.textContent = "sunday"
    break;
    case 2:
     output.textContent = "monday"
        break;  
     case 3:
        output.textContent = "tuesday"
        break; 
    case 4:
        output.textContent = "wednesday"
        break; 
  case 5:
        output.textContent = "thursday"
        break; 
  case 6:
        output.textContent = "friday"
        break; 
 case 7:
        output.textContent = "saturday"
        break;
 default:
        output.textContent = "invalid daynumber"
}