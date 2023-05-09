const workOutPageBtn = document.querySelector('.card_1');
const trainPageBtn = document.querySelector('.card_2');
const infoPageBtn = document.querySelector('.card_3');

workOutPageBtn.addEventListener('click', () => {
   window.location.assign('/UTraining/html/work-out');
});
trainPageBtn.addEventListener('click', () => {
   window.location.assign('/UTraining/html/train');
});
infoPageBtn.addEventListener('click', () => {
   window.location.assign('/UTraining/html/info');
});
