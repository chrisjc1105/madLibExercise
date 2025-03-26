// string
const weather = 'stormy';
const timeOfDay = 'night';
const sound = 'creaking'; 
const soundTwo = 'whisper';
const verb = 'floated';
let effect = 'darkness';

// number(s)
const num1 = 10; 
const num2 = 7;
const sub = num1 - num2;

// boolean
const isDayTime = (timeOfDay.includes("afternoon") || timeOfDay.includes("day") || timeOfDay.includes("morning")); 

// string (goes with boolean)
const endMsg = '';

// object & accessing w/ dot notation
const obj = { 
    name: 'haunted house',
    animal: 'ghost',
};

const nameOfObj = obj.name;
const animalOfObj = obj.animal;

// if-else statement 
if (isDayTime) {
    effect = 'light';
} else {
    effect = 'darkness';
}

let madLib = `On a ${weather} ${timeOfDay}, I ventured into the ${nameOfObj}. The ${sound} walls seemed to ${soundTwo}, sending chills down my spine. 
Suddenly, a ${animalOfObj} appeared, its glowing eyes piercing through the ${effect}. My heart raced as it ${verb} silently toward me. 
Did you know ${num1} - ${num2} equals ${sub}? Spooky, right?`;

document.getElementById("madlibs-output").textContent = madLib;

console.log(madLib);
