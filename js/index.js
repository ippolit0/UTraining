let timerRange = document.querySelector('input[type="range"]');
let timer = document.querySelector('.clock');
let rangeBlock = document.querySelector('.range-block');
const body = document.body;
let startBtnTime = document.querySelector('#start-timer');
let clearBtn = document.querySelector('#clear-timer');

function numToTime(num) {
   let min = Math.trunc(num / 60);
   let sec = (num % 60) + '';
   if (+min < 10) min = '0' + min;
   if (+sec < 10) sec = '0' + sec;
   return min + ':' + sec;
}
timerRange.addEventListener('input', () => {
   let value = 18 * timerRange.value;
   timer.textContent = numToTime(value);
});
timer.onclick = () => {
   rangeBlock.classList.toggle('hidden');
};
clearBtn.onclick = () => {
   timer.textContent = '00:00';
   timerRange.value = 0;
};
const timeBack = document.createElement('div');
const timeOutBlock = document.createElement('div');
const timeOutBlockHead = document.createElement('h1');
let timeOutBlockPar = document.createElement('h2');
const timeBlockOutBtn = document.createElement('button');
timeBlockOutBtn.innerHTML = '<img src="../img/cross.png" />';
timeOutBlockPar.innerText = '00:00';
timeOutBlockHead.innerText = 'Время истекло';
timeBack.setAttribute('class', 'timeBack');
timeOutBlock.setAttribute('class', 'timeOut');
timeOutBlock.append(timeBlockOutBtn);
timeOutBlock.append(timeOutBlockHead);
timeOutBlock.append(timeOutBlockPar);
timeBack.append(timeOutBlock);

startBtnTime.onclick = () => {
   let value = 18 * timerRange.value;
   timeOutBlockPar.innerText = numToTime(value);
   timer.textContent = numToTime(value > 0 ? value - 1 : 0);
   let tId = setInterval(() => {
      timer.textContent = numToTime(value - 2);
      value--;
      if (value == 0 || timerRange.value == 0) {
         clearInterval(tId);
         timer.textContent = '00:00';
         if (value == 0) document.body.append(timeBack);
      }
   }, 1000);
};
timeBlockOutBtn.onclick = () => {
   document.body.removeChild(timeBack);
};

document.body.onclick = el => {
   if (el.target.className != 'clock' && el.target.id != 'time-range') {
      rangeBlock.classList.add('hidden');
   }
};
