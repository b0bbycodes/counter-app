// set initial count
let count = 0;

const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      let selectedButton =  e.currentTarget.classList;
      if(selectedButton.contains('decrease')){
        count--;
      }else if(selectedButton.contains('increase')){
        count ++;
      }else{
        count = 0;
      }

      if(count > 0){
        value.style.color = "green"
      }else if(count < 0){
        value.style.color = "red"
      }else{
        value.style.color = "black"
      }
      value.textContent = count;
    })
})