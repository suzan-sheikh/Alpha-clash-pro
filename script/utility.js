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


function getARandomAlphabet(){
  const alphabetsString = 'abcdefghijklmnopqrstuvwxyz';
  const alphabets = alphabetsString.split('');

  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const alphabet = alphabets[index];
  return alphabet;  
}



// function getARandomAlphabet(){
//   // get of create an alphabet array
//   const alphabetsString = 'abcdefghijklmnopqrstuvwxyz';
//   const alphabets = alphabetsString.split('');
//   // console.log(alphabets);

//   // get a random index between 0-25
//   const randomNumber = Math.random()*25; //vognanso wala mane 12.0012121212 ola
//   const index = Math.round(randomNumber); // purno number a convart kora hoyca
//   // console.log(index)

//   const alphabet = alphabets[index];
//   // console.log(alphabet)
//   return alphabet;
// }
