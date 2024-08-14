const checkButton = document.querySelector('#check-btn');
const inputElement = document.querySelector('#text-input');
const resultsContainer = document.querySelector('.result-container');
const resultsText = document.querySelector('#result')
const checkEnteredText = (text) => {
  text = inputElement.value;
  if (text === '') {
    alert('Please input a value')
  }else{
    const modifiedText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let stringToCompare ='';
    for(let i = modifiedText.length-1; i>=0; i--){
      stringToCompare+=modifiedText[i];
    }
    resultsContainer.style.display = 'block';
    if(stringToCompare === modifiedText){
      
      resultsText.innerText = `${text} is a palindrome`;
    }else{
      resultsText.innerText = `${text} is not a palindrome`;
    }
  }

}
checkButton.addEventListener('click', checkEnteredText)