function continueGame(){
    const alphabet = getARandomAlphabet()

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundById(alphabet);
}

function play(){
  hiddenElementById('home-screen');
  showElementById('play-ground');
  continueGame();
}


// function play(){
//   //sep-1: hide the home screen. to hide the screen add the class hidden to 
//   const homeSection = document.getElementById('home-screen');
//   // hidden the home section
//   homeSection.classList.add('hidden');  
//   // show the playgroudn section
//   const playGroundSect = document.getElementById('play-ground')
//   playGroundSect.classList.remove('hidden')
// }