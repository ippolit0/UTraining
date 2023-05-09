const checkBlock = document.querySelector('.work_cards_checkbox_inner');
const startBtn = document.querySelector('.start-btn');
const workCardsCheckbox = document.querySelector('.work_cards_checkbox_inner');
const blockOut = document.querySelector('.block-out');
const mainImg = document.querySelector('.train_img');
const mainHead = document.querySelector('.doc_head');
const mainBody = document.querySelector('.doc_body');
const skipBtn = document.querySelector('.skipTrain');
const clock = document.querySelector('.clock');
let timerRange = document.querySelector('input[type="range"]');
let timer = clock;
let clearBtn = document.querySelector('#clear-timer');
let rangeBlock = document.querySelector('.range-block');
let startClockBtn = document.querySelector('#start-timer');

const trainPack = [
   { src: 'train_1.png', gif: 'train_1.gif', name: 'Прием каратэ', id: 'train1' },
   {
      src: 'train_2.png',
      gif: 'train_2.gif',
      name: 'Я достану до этих ног',
      id: 'train2',
   },
   { src: 'train_3.png', gif: 'train_3.gif', name: 'Прыжки... Опираясь на пол?', id: 'train3' },
   { src: 'train_4.png', gif: 'train_4.gif', name: 'Отжимания 2.0', id: 'train4' },
   { src: 'train_5.png', gif: 'train_5.gif', name: 'Велосипед', id: 'train5' },
   { src: 'train_6.png', gif: 'train_6.gif', name: 'Кавказкий танец (ладно, шучу)', id: 'train6' },
   { src: 'train_7.png', gif: 'train_7.gif', name: 'Погоня за добычей', id: 'train7' },
   { src: 'train_8.png', gif: 'train_8.gif', name: 'Что-то сложное (нет)', id: 'train8' },
   { src: 'train_9.png', gif: 'train_9.gif', name: 'Кавказкий танец 2.0', id: 'train9' },
   { src: 'train_10.png', gif: 'train_10.gif', name: 'Жук. На спине!', id: 'train10' },
   { src: 'train_11.png', gif: 'train_11.gif', name: 'Альпинист', id: 'train11' },
   { src: 'train_12.png', gif: 'train_12.gif', name: 'Я достану до этих ног 2.0', id: 'train12' },
   { src: 'train_13.png', gif: 'train_13.gif', name: 'Я достану до этих ног 3.0', id: 'train13' },
   { src: 'train_14.png', gif: 'train_14.gif', name: 'Бег в пол', id: 'train14' },
   { src: 'train_15.png', gif: 'train_15.gif', name: 'Мост', id: 'train15' },
   { src: 'train_16.png', gif: 'train_16.gif', name: 'Геройская поза', id: 'train16' },
   { src: 'train_17.png', gif: 'train_17.gif', name: 'Поднимание туловища', id: 'train17' },
   { src: 'train_18.png', gif: 'train_18.gif', name: 'Толкание ногами', id: 'train18' },
   { src: 'train_19.png', gif: 'train_19.gif', name: 'Безводное плавание', id: 'train19' },
   { src: 'train_20.png', gif: 'train_20.gif', name: 'Я сам без понятия, что это', id: 'train20' },
   {
      src: 'train_21.png',
      gif: 'train_21.gif',
      name: 'Поднимание гантель',
      id: 'train21',
   },
   { src: 'train_22.png', gif: 'train_22.gif', name: 'Я прыгающая морская звезда', id: 'train22' },
   { src: 'train_23.png', gif: 'train_23.gif', name: 'Косплей на ножницы', id: 'train23' },
   { src: 'train_24.png', gif: 'train_24.gif', name: 'Молодежный кавказкий танец', id: 'train24' },
   { src: 'train_25.png', gif: 'train_25.gif', name: 'Чередование ног и рук', id: 'train25' },
   {
      src: 'train_26.png',
      gif: 'train_26.gif',
      name: 'Катание на коньках (но без коньков)',
      id: 'train26',
   },
   { src: 'train_27.png', gif: 'train_27.gif', name: 'Обычные приседания', id: 'train27' },
   { src: 'train_28.png', gif: 'train_28.gif', name: 'Косплей на перпендикуляр', id: 'train28' },
   { src: 'train_29.png', gif: 'train_29.gif', name: 'Толкание земли', id: 'train29' },
   { src: 'train_30.png', gif: 'train_30.gif', name: 'Поднимание точки №5', id: 'train30' },
   { src: 'train_31.png', gif: 'train_31.gif', name: 'Хватание ног', id: 'train31' },
   { src: 'train_32.png', gif: 'train_32.gif', name: 'Косплей на мост', id: 'train32' },
];

const trainInstruct = {
   train1:
      'Примите упор на колени и ладони. Голова поднята, колени согнуты под прямым углом. Вытяните одну ногу вверх и назад. Колено и бедро вытянуты. Выпоните 5-10 повторений, затем смените ногу.',
   train2:
      'Лягте на спину, ноги держите прямо на 90°, руки согнуты. Поднимая плечи старайтесь дотянуться руками до ног, останьтесь в таком положении на несколько секунд и вернитесь в исходное положение.',
   train3:
      'Лягте на пол, удерживая себя на вытянутых руках, ноги прямые. Немного подпрыгнув поместите колени к груди. Вернитесь в исходное положение.',
   train4:
      'Ладони на расстоянии 90см друг от друга, ноги согнуты. Поднимитесь, удерживая себя на вытянутых руках. Вернитесь в исходное положение.',
   train5:
      'Поднимите колени так, чтобы они оказались перпеникулярно полу, а голени - параллельно ему. Медленно имитируйте вращение педалей велосипеда.',
   train6:
      'Удерживайте себя на руках и ногах, согните колени, бедра не опускайте. Поднимите левую ноги и дотянитесь до нее правой рукой. Вернитесь в исходное положение. Повторите то же самое с правой ногой и левой рукой.',
   train7:
      'Удерживайте себя на руках и ступнях, ноги согнутые. По очереди поднимайте ноги, выпрямляя их. Колени не должны касаться земли.',
   train8:
      'Удерживайте себя на согнутых руках, ноги прямые. По очереди перемещайте ноги влево и вправо.',
   train9: 'Удерживайте себя на руках и ногах, спина прямая. По очереди поднимайте прямо ноги.',
   train10:
      'Ложитесь на спину, не опускайте ноги на пол. Согните колено левой ноги и поднимите прямо правую руку. Сделайте то же самое с правой ногой и левой рукой.',
   train11: 'Удерживайте себя руками, спина прямая. По очереди бысто сгибайте ноги, имитируя бег.',
   train12:
      'Ложитесь на спину. Ноги перпеникулярны полу. Старайтесь достать до ног руками, приподнимая плечи.',
   train13: 'Встаньте прямо. Поднимайте ногу, по очереди меняя правую и левую, и руки.',
   train14:
      'Удерживайте себя на согнутых руках, спина прямая. Поднимите прямо левую ногу, удерживая себя правой. Повторите то же самое по очереди меняя ноги.',
   train15:
      'Руки вытянуты по бокам, колени согнуты, стопы на ширине плеч. Отталкиваясь стопами, поднимите бедра вверх, спину держите прямо и останьтесь в таком положении на несколько секунд. Медленно опустите бедра.',
   train16:
      'Встаньте прямо. Левая нога впереди правой. Согните оба колена. Перенесите вес тела на левую ногу, оставив правую дальше назад. Вернитесь в исходное положение и повторите эти действия уже с правой ногой.',
   train17:
      'Ложитесь на спину. Колени согните, руки положите за голову. Поднимите туловище вперед и вернитесь в исходное положение. Повторите эти действия несколько раз.',
   train18:
      'Удерживайте себя тазом, не опускайте руки и ноги, держите их приподнятыми. Рук и ноги держите прямо, это исходное положение. Сгибайте колени и руки, туловище приподнимите ближе к ногам.',
   train19:
      'Ложитесь животом на пол. Не опускайте ноги. Поднимите выше левую ногу и правую руку. Опустите их и повторите то же самое с правой ногой и левой рукой.',
   train20:
      'Ложитесь на спину, перпендикулярно полу подняв ноги. Приподнимите плечи и вытяните руки вперед. Вернитесь в исходное положение.',
   train21:
      'Удерживайте себя на ступнях и на одной руке с гантелью. Поворачивайтесь в одну сторону, приподнимая другую руку с гантелью вверх. Выполните несколько раз, затем повторите с другой рукой.',
   train22:
      'Ноги вместе, руки вдоль туловища. Выполните прыжок, ставя ноги врозь и поднимая руки через стороны.',
   train23:
      'Руки остаются неподвижными во время всего упражнения. Поднимите ноги на 15см от пола. Это исходное положение. Поднимайте ноги по очереди на 45° и опускайте.',
   train24:
      'Ложитесь на спину, руки на пол. Одну ногу согните и, опираясь на нее, поднимите прямо другую ногу. Выполните эти действия несколько раз, повторите то же самое с другой ногой.',
   train25:
      'Удерживайте себя правой рукой и левой ногой. Левую руку и правую ногу поднимите прямо. Затем опустите их, подняв правую руку и левую ногу.',
   train26:
      'Встаньте прямо, руки держите на расстоянии от таза. Наклонитесь к ногам, одну ногу поднимите назад, удерживая прямо, и тянитесь руками к ногам. Вернитесь в исхожное положение.',
   train27:
      'Встаньте прямо, ноги на ширине плеч. Начинайте движение, сгибая ноги в коленях и бедрах, не наклоняйтесь вперед. Вернитесь в исходное положение.',
   train28:
      'Лягте. Выпрямите ноги. Выполните подъем ног (ноги лоджны быть прямыми). После небольшой паузы вернитесь в исходное положение.',
   train29:
      'Ладони на расстоянии 90см друг от друга. Поднимитесь, удерживая себя на вытянутых руках. Опуститесь на исходное положение.',
   train30:
      'Удерживайте себя руками, согнув их. Одной ногой также удерживайте себя, согнув колено. Другую ногу поднимите прямо. Отталкивайтесь от пола, выпрямив руки. Повторите несколько раз, затем поменяйте ноги местами.',
   train31:
      'Лягте на спину. Ноги и руки лежат вдоль. Поднимите ноги как можно ближе к себе, оставляя их прямыми, и дотенитесь до них руками, не отрывайте плечи от пола.',
   train32:
      'Держите вес тела на носках и предплечьях. Локти должны быть под плечевыми суставами. Ступни вместе. Держитесь.',
};

function createPoster(id, src) {
   let inputCheck = document.createElement('input');
   inputCheck.setAttribute('type', 'checkbox');
   inputCheck.setAttribute('name', 'workout_check');
   inputCheck.setAttribute('id', id);

   let img = document.createElement('img');
   let imgPath = '../img/train_img/' + src;
   img.src = imgPath;

   let labelPoster = document.createElement('label');
   labelPoster.setAttribute('for', id);
   labelPoster.setAttribute('id', id);
   labelPoster.append(img);

   return { inputCheck, labelPoster };
}

trainPack.forEach(card => {
   let objPack = createPoster(card.id, card.src);
   workCardsCheckbox.append(objPack.inputCheck);
   workCardsCheckbox.append(objPack.labelPoster);
});

const labelCard = document.querySelectorAll('label');
const checkPack = document.querySelectorAll('input[name="workout_check"]');

let setForTest = new Set();
function testAll(e) {
   let data = e.target;
   let value;
   if (data.tagName == 'IMG') value = data;
   else if (data.tagName == 'LABEL') value = data.firstChild;
   else return;
   setForTest.has(value) ? setForTest.delete(value) : setForTest.add(value);
   if (setForTest.size) startBtn.classList.remove('hidden');
   else startBtn.classList.add('hidden');
}

// place in line
let countDiv = document.createElement('div');
countDiv.setAttribute('class', 'place-in-line');

// // queue
let queue = { id: new Set(), body: new Set() };
function labelActive(e) {
   let data = e.target;
   if (data.tagName == 'IMG') {
      data.parentNode.classList.toggle('activeLabel');
      if (data.parentNode.classList.contains('activeLabel')) {
         queue.id.add(data.parentNode.id);
         queue.body.add(data.parentNode);
      } else {
         queue.id.delete(data.parentNode.id);
         queue.body.delete(data.parentNode);
      }
   } else if (data.tagName == 'LABEL') {
      data.classList.toggle('activeLabel');
      if (data.classList.contains('activeLabel')) {
         queue.id.add(data.id);
         queue.body.add(data);
      } else {
         queue.id.delete(data.id);
         queue.body.delete(data);
      }
   }
}

function openQueue() {
   queueDocument.classList.toggle('queue-active');
}

checkBlock.addEventListener('mousedown', testAll);
checkBlock.addEventListener('mousedown', labelActive);

function numToTime(value) {
   let min = Math.trunc(value / 60);
   min < 10 ? (min = '0' + min) : (min = min);
   let sec = value - min * 60;
   sec < 10 ? (sec = '0' + sec) : (sec = sec);
   let s = min + ':' + sec;
   return s;
}

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
startClockBtn.onclick = () => {
   let value = 18 * timerRange.value;
   timeOutBlockPar.innerText = numToTime(value);
   timer.textContent = numToTime(value > 0 ? value - 1 : 0);
   let tId = setInterval(() => {
      timer.textContent = numToTime(value - 1);
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
function skrollBlock(e) {
   window.scrollTo({ top: window.scrollX });
}
function viewTrainInfo(time) {
   let timeOut = document.querySelector('.trainingInfoBlock>h2');
   let blockOut = document.querySelector('.infoBackground');
   let btn = document.querySelector('.closeInfoBlock');
   timeOut.textContent = numToTime(time);
   blockOut.classList.remove('hidden');
   document.body.style.overflow = 'hidden';
   window.addEventListener('scroll', skrollBlock);
   btn.onclick = () => {
      blockOut.classList.add('hidden');
      document.body.style.overflow = '';
      window.removeEventListener('scroll', skrollBlock);
   };
}

let time;
function processStart(e) {
   if (startBtn.id == 'btnOn') {
      time = Date.now();
      startBtn.id = 'btnOff';
      startBtn.textContent = 'Стоп';
      blockOut.classList.remove('none');
      labelCard.forEach(card => {
         if (card.className !== 'activeLabel') {
            card.classList.add('selectCardOff');
         } else {
            card.classList.add('selectCardOn');
         }
      });
      startTrain();
      setForTest.clear();
   } else {
      startBtn.id = 'btnOn';
      startBtn.textContent = 'Старт';
      blockOut.classList.add('none');
      startBtn.classList.add('hidden');
      labelCard.forEach(card => {
         card.classList.remove('selectCardOff');
         card.classList.remove('activeLabel');
         card.classList.remove('selectCardOn');
      });
      checkPack.forEach(ch => {
         ch.checked = false;
      });
      if (!skipBtn.classList.contains('hidden')) {
         skipBtn.classList.add('hidden');
      }
      queue.id.clear();
      queue.body.clear();
      stopTrain();
      viewTrainInfo(Math.ceil((Date.now() - time) / 1000));
   }
}

function toMainContent(data, label) {
   label.classList.add('doNowActive');
   let i = trainPack.find(t => t.id == data.id);
   mainImg.innerHTML = `<img src="../gif/${i.gif}">`;
   mainHead.textContent = i.name;
   mainBody.textContent = trainInstruct[data.id];
}

function doQueueOfLabel(data) {
   data.forEach(lb => {
      workCardsCheckbox.append(lb);
   });
}

function startTrain() {
   mainImg.classList.add('train_img_active');
   let queueIn = [];
   let queueLabel = Array.from(queue.body);
   queue.id.forEach(qu => {
      checkPack.forEach(val => {
         if (val.id == qu) {
            queueIn.push(val);
         }
      });
   });
   doQueueOfLabel(queueLabel);
   let i = 0;
   function runTrain(i) {
      toMainContent(queueIn[i], queueLabel[i]);
      if (i > 0) {
         queueLabel[i - 1].classList.remove('doNowActive');
         queueLabel[i - 1].classList.add('pastActive');
      }
      skipBtn.classList.remove('hidden');
   }
   runTrain(i);
   skipBtn.onclick = () => {
      i += 1;
      if (i >= queueIn.length) {
         queueLabel[i - 1].classList.remove('doNowActive');
         queueLabel.forEach(lb => lb.classList.remove('pastActive'));
         startBtn.click();
      } else {
         runTrain(i);
      }
   };
}

function stopTrain() {
   mainImg.innerHTML = '<img src="../gif/training_gif.gif" width="100%">';
   mainHead.textContent = 'Это твой путь';
   mainBody.textContent =
      'Попробуйте собственноручно отобрать упражнения для своей собственной тренировки. У вас не будет ограничений по времени и строго отведенных секунд на отдых, все это вы учитываете сами (можете использовать таймер в правом вверхнем углу). В вашем арсенале все упражнения, что есть на этом сайте. Хорошей тренировки!';
   mainImg.classList.remove('train_img_active');
}

startBtn.addEventListener('click', processStart);
