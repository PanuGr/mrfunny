let t = document.getElementById("temperature");
const age = document.getElementById('myAge');

//TEMPERATURE CONVERTER
function convertToF() {
  //get the input in numbers
  if (t.value === "") {//check for empty inputs
    alert('Add a temperature to convert');
  }
  else { //convert to Fahrenheit
    const celsius = parseFloat(t.value);
    const fahre = _.round(10 * ((celsius * 1.8) + 32)) / 10;
    alert(fahre + ' degrees');
  }
}
function convertToC() {
  if (t.value === "") {
    alert('Add a temperature to convert');
  }
  else {//convert Celsius
    const fahre = parseFloat(t.value);
    const celsius = _.round(10 * ((fahre - 32) * 5 / 9)) / 10;
    alert(celsius + ' degrees');
  }
}


//PET AGE CONVERTER
function dogToHuman() {
  const myAge = parseFloat(document.getElementById('myAge').value);
  if (myAge < 1) {
    alert(`Your dog is a ${myAge * 15}-years old.`);
  }
  else if (myAge === 1) {
    alert('Your dog is a 15-years old.');
  }
  else if (myAge > 1 && myAge <= 2) {  //calculate till the 2nd dog-year
    const earlyYears = ((myAge * 9) / 2 + 15);
    alert(`Your dog is a young adult. ${earlyYears} years old.`);
  }
  else {//calculate the late years without counting the 2 early dog-years
    const lateYears = 24 + (myAge - 2) * 5;
    alert(`Your dog is growing older. ${lateYears} years old by now.`);
  }
}
function catToHuman() {
  const myAge = parseFloat(document.getElementById('myAge').value);
  if (myAge <= 2) {
    const earlyYears = (myAge * 25) / 2;
    alert(`Your cat is ${earlyYears} years old.`);
  } else {
    const lateYears = 25 + (myAge - 2) * 4;
    alert(`Your cat is growing older.  ${lateYears} years old by now.`);
  }
}
function rabbitToHuman() {
  const myAge = parseFloat(document.getElementById('myAge').value);
  if (myAge <= 1) {
    const earlyYears = myAge * 20;
    alert(`Your rabbit is ${earlyYears} years old.`);
  } else {
    const lateYears = 20 + (myAge - 1) * 8;
    alert(`Your rabbit is growing older. He is ${lateYears} years old by now.`);
  }
}

