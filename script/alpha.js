

function handleKeyboardButtonPress(e){
  const playerPressed = e.key;

  //stop the game id pressed 'Esc'

  if(playerPressed === 'Escape'){
    gameOver();
  }

  // get the expection key
  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();

  // check the condition
  if(playerPressed === expectedAlphabet){

    const currentScore = getTextElementValueById('current-score');
    const updatedLife = currentScore + 1;
    setTextElementValueById('current-score', updatedLife);

    removeBackgroundById(expectedAlphabet);
    continueGame();
  }else{
    const currentLife = getTextElementValueById('current-life');
    const updatedLife = currentLife - 1;
    setTextElementValueById('current-life', updatedLife);

    if(updatedLife === 0){ 
      gameOver()
    }
  }
}

document.addEventListener('keyup', handleKeyboardButtonPress);

/*******************/

function continueGame(){
    const alphabet = getARandomAlphabet()

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundById(alphabet);
}

function play(){
  hiddenElementById('home-screen');
  hiddenElementById('final-score');
  showElementById('play-ground');

  // reset score and life
  setTextElementValueById('current-life', 5);
  setTextElementValueById('current-score', 0);

  continueGame();
}

function gameOver(){  
  hiddenElementById('play-ground');
  showElementById('final-score');

  // update final scor
    // step-1 the final score  
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet background
    const alphabet = getElementTextById('current-alphabet');
    removeBackgroundById(alphabet);
    
    
}