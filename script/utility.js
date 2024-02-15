function hiddenElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}
function showElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
}

function setBackgroundById(elementId){
  const element = document.getElementById(elementId)
  element.classList.add('bg-orange-400');
}

function removeBackgroundById(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('bg-orange-400');
}

function getTextElementValueById(elementId){
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value; 
}

function setTextElementValueById(elementId, value){
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getElementTextById(elementId){
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}

function getARandomAlphabet(){
  const alphabetsString = 'abcdefghijklmnopqrstuvwxyz';
  const alphabets = alphabetsString.split('');

  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const alphabet = alphabets[index];
  return alphabet;  
}