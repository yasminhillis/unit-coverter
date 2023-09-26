/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById('convert-btn');
const input = document.getElementById('input-el');
const lengthEl = document.getElementById('length');
const volumeEl = document.getElementById('volume');
const massEl = document.getElementById('mass');

console.log(lengthEl);
console.log(volumeEl);
console.log(massEl);

convertBtn.addEventListener('click', function () {
  console.log(typeof input.value, input.value)
  if (input.value === '') {
    alert('Please enter a number')
  } else {
    convertLength();
    convertVolume();
    convertMass();
  }
  
});

function convertLength() {
  const metersToFeet = input.value * 3.281;
  const feetToMeters = input.value / 3.281;

  return lengthEl.textContent = `${input.value} meters = ${metersToFeet.toFixed(3)} feet | ${input.value} feet = ${feetToMeters.toFixed(3)} meters`;
}

function convertVolume() {
  const letersToGallon = input.value * 0.264
  const gallonToLeters = input.value / 0.264
  return volumeEl.textContent = `${input.value} liters = ${letersToGallon.toFixed(3)} gallons | ${input.value} gallons = ${gallonToLeters.toFixed(3)} liters`;
}

function convertMass() {
  const kiloToPounds = input.value * 2.204;
  const poundsToKilo = input.value / 2.204;
  return massEl.textContent = `${input.value} kilos = ${kiloToPounds.toFixed(3)} | ${input.value} pounds = ${poundsToKilo.toFixed(3)} kilos` 
}
