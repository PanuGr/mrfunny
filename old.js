//WELCOME MESSAGE
const welcome = () => {
    const link = "http://panagiotis.netlify.app/";
    const name = prompt("Hello stranger! What's your name?");
    if (name) {
        alert(`Welcome ${name}. This project contains a series of small javascript applications, mostly calculators. 
If you like this project, you can find more of my projects on my personal site: ${link}. 
Enjoy 😀`)
    }
}
window.addEventListener('load', welcome)



//WHALE LANGUAGE


//SLEEP CALCULATOR
const getSleepHours = () => {
    let m = document.getElementById('monday').valueAsNumber;
    let t = document.getElementById('tuesday').valueAsNumber;
    let w = document.getElementById('wednesday').valueAsNumber;
    let th = document.getElementById('thursday').valueAsNumber;
    let f = document.getElementById('friday').valueAsNumber;
    let s = document.getElementById('saturday').valueAsNumber;
    let su = document.getElementById('sunday').valueAsNumber;
    let array = [];
    array.push(m, t, w, th, f, s, su);
    return array.reduce((a, b) => { return a + b });
};
const calculateSleepDebt = () => {
    const SleepHours = getSleepHours(), idealHours = 49;
    if (SleepHours === idealHours) {
        alert("You sleep perfectly");
    } else if (SleepHours > idealHours) {
        alert("You've slept " + (SleepHours - idealHours) + " hours extra");
    } else {
        console.log(
            alert("You should sleep " + (idealHours - SleepHours) + " hours more")
        );
    }
};

let t = document.getElementById("temperature");
const age = document.getElementById('myAge');

//TEMPERATURE CONVERTER
const convertToF = () => {
    //get the input in numbers
    if (t.value === "") {//check for empty inputs
        alert('Add a temperature to convert');
    }
    else { //convert to Fahrenheit
        const celsius = parseFloat(t.value);
        const fahre = Math.round(10 * ((celsius * 1.8) + 32)) / 10;
        alert(fahre + ' degrees');
    }
}
const convertToC = () => {
    if (t.value === "") {
        alert('Add a temperature to convert');
    }
    else {//convert Celsius
        const fahre = parseFloat(t.value);
        const celsius = Math.round(10 * ((fahre - 32) * 5 / 9)) / 10;
        alert(celsius + ' degrees');
    }
}


//PET AGE CONVERTER
const dogToHuman = () => {
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
const catToHuman = () => {
    const myAge = parseFloat(document.getElementById('myAge').value);
    if (myAge <= 2) {
        const earlyYears = (myAge * 25) / 2;
        alert(`Your cat is ${earlyYears} years old.`);
    } else {
        const lateYears = 25 + (myAge - 2) * 4;
        alert(`Your cat is growing older.  ${lateYears} years old by now.`);
    }
}
const rabbitToHuman = () => {
    const myAge = parseFloat(document.getElementById('myAge').value);
    if (myAge <= 1) {
        const earlyYears = myAge * 20;
        alert(`Your rabbit is ${earlyYears} years old.`);
    } else {
        const lateYears = 20 + (myAge - 1) * 8;
        alert(`Your rabbit is growing older. He is ${lateYears} years old by now.`);
    }
}

