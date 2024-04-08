// HTML elements
const divTime = document.getElementById('time')
const toastCard = document.getElementById('toast');
const startBtn = document.getElementById('start-btn')
const closeToast = document.getElementById('close-toast')
const toastMsg = document.getElementById('toast-message')

// Useful variables
const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

divTime.innerHTML = DURATION;


// ITERATION 1: Add event listener to the start button
startBtn.addEventListener('click', () => {
  startCountdown();
})


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  
  remainingTime = DURATION;
  timer = setInterval(test, 1000)
  
  function test() {
    if (remainingTime <= 0) {
      clearInterval(timer); 
    } else {
      remainingTime -= 1;
      divTime.innerHTML = remainingTime;

      if (remainingTime === 10) {
        showToast('⏰ Final countdown! ⏰')
      } 

      if (remainingTime === 5) {
        showToast('Start the engines! 💥')
      } 

      if (remainingTime === 0) {
        showToast('Lift off! 🚀')
      }
    }
  }
  showToast();
}



// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  if (message) {
    toastMsg.innerHTML = message
  } 
  
  toastCard.classList.add('show');

  setTimeout(() => {
    toastCard.classList.remove('show');
  }, 3000)
}

closeToast.addEventListener('click', () => {
  toastCard.classList.remove('show');
  clearInterval(timer);
  startCountdown();
  console.log('?')
})