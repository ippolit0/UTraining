const workOutBtnsBlock = document.querySelector('.btn_time_inner');
const clock = document.querySelector('.clock');
const mainImg = document.querySelector('.train_img');
const mainHead = document.querySelector('.doc_head');
const mainBody = document.querySelector('.doc_body');
const headerContent = document.querySelector('.header_content');
const queueOutBlock = document.querySelector('.imgQueueBlock');
const nextBtn = document.querySelector('.nextWorkout');

const workOutPack = {
   ten: [
      {
         src: 'train_22.png',
         gif: 'train_22.gif',
         name: 'Я прыгающая морская звезда',
         id: 'train22',
         time: 30,
      },
      {
         src: 'train_13.png',
         gif: 'train_13.gif',
         name: 'Я достану до этих ног 3.0',
         id: 'train13',
         time: 60,
      },
      {
         src: 'train_20.png',
         gif: 'train_20.gif',
         name: 'Я сам без понятия, что это',
         id: 'train20',
         time: 60,
      },
      { src: 'train_11.png', gif: 'train_11.gif', name: 'Альпинист', id: 'train11', time: 30 },
      {
         src: 'train_30.png',
         gif: 'train_30.gif',
         name: 'Поднимание точки №5',
         id: 'train30',
         time: 30,
      },
      { src: 'train_15.png', gif: 'train_15.gif', name: 'Мост', id: 'train15', time: 30 },
      { src: 'train_29.png', gif: 'train_29.gif', name: 'Толкание земли', id: 'train29', time: 60 },
      { src: 'train_5.png', gif: 'train_5.gif', name: 'Велосипед', id: 'train5', time: 60 },
      { src: 'train_7.png', gif: 'train_7.gif', name: 'Погоня за добычей', id: 'train7', time: 30 },
      {
         src: 'train_12.png',
         gif: 'train_12.gif',
         name: 'Я достану до этих ног 2.0',
         id: 'train12',
         time: 30,
      },
      {
         src: 'train_32.png',
         gif: 'train_32.gif',
         name: 'Косплей на мост',
         id: 'train32',
         time: 60,
      },
      { src: 'train_16.png', gif: 'train_16.gif', name: 'Геройская поза', id: 'train16', time: 30 },
      {
         src: 'train_18.png',
         gif: 'train_18.gif',
         name: 'Толкание ногами',
         id: 'train18',
         time: 30,
      },
      {
         src: 'train_6.png',
         gif: 'train_6.gif',
         name: 'И как это назвать?',
         id: 'train6',
         time: 30,
      },
      {
         src: 'train_24.png',
         gif: 'train_24.gif',
         name: 'Что это?',
         id: 'train24',
         time: 30,
      },
   ],
   twenty: [
      { src: 'train_16.png', gif: 'train_16.gif', name: 'Геройская поза', id: 'train16', time: 30 },
      {
         src: 'train_22.png',
         gif: 'train_22.gif',
         name: 'Я прыгающая морская звезда',
         id: 'train22',
         time: 30,
      },
      { src: 'train_11.png', gif: 'train_11.gif', name: 'Альпинист', id: 'train11', time: 30 },
      {
         src: 'train_17.png',
         gif: 'train_17.gif',
         name: 'Поднимание туловища',
         id: 'train17',
         time: 60,
      },
      {
         src: 'train_8.png',
         gif: 'train_8.gif',
         name: 'Что-то сложное (нет)',
         id: 'train8',
         time: 30,
      },
      {
         src: 'train_30.png',
         gif: 'train_30.gif',
         name: 'Поднимание точки №5',
         id: 'train30',
         time: 60,
      },
      {
         src: 'train_26.png',
         gif: 'train_26.gif',
         name: 'Катание на коньках (но без коньков)',
         id: 'train26',
         time: 30,
      },
      {
         src: 'train_2.png',
         gif: 'train_2.gif',
         name: 'Я достану до этих ног',
         id: 'train2',
         time: 30,
      },
      { src: 'train_1.png', gif: 'train_1.gif', name: 'Прием каратэ', id: 'train1', time: 30 },
      { src: 'train_10.png', gif: 'train_10.gif', name: 'Жук. На спине!', id: 'train10', time: 30 },
      {
         src: 'train_32.png',
         gif: 'train_32.gif',
         name: 'Косплей на мост',
         id: 'train32',
         time: 60,
      },
      { src: 'train_31.png', gif: 'train_31.gif', name: 'Хватание ног', id: 'train31', time: 30 },
      { src: 'train_5.png', gif: 'train_5.gif', name: 'Велосипед', id: 'train5', time: 60 },
      { src: 'train_4.png', gif: 'train_4.gif', name: 'Отжимания 2.0', id: 'train4', time: 60 },
      {
         src: 'train_3.png',
         gif: 'train_3.gif',
         name: 'Прыжки... Опираясь на пол?',
         id: 'train3',
         time: 30,
      },
      {
         src: 'train_12.png',
         gif: 'train_12.gif',
         name: 'Я достану до этих ног 2.0',
         id: 'train12',
         time: 60,
      },
      { src: 'train_29.png', gif: 'train_29.gif', name: 'Толкание земли', id: 'train29', time: 60 },
      {
         src: 'train_24.png',
         gif: 'train_24.gif',
         name: 'Что это?',
         id: 'train24',
         time: 60,
      },
      { src: 'train_7.png', gif: 'train_7.gif', name: 'Погоня за добычей', id: 'train7', time: 30 },
      {
         src: 'train_28.png',
         gif: 'train_28.gif',
         name: 'Косплей на перпендикуляр',
         id: 'train28',
         time: 60,
      },
      {
         src: 'train_6.png',
         gif: 'train_6.gif',
         name: 'И как это назвать?',
         id: 'train6',
         time: 30,
      },
      {
         src: 'train_23.png',
         gif: 'train_23.gif',
         name: 'Косплей на ножницы',
         id: 'train23',
         time: 30,
      },
      {
         src: 'train_27.png',
         gif: 'train_27.gif',
         name: 'Обычные приседания',
         id: 'train27',
         time: 30,
      },
      {
         src: 'train_9.png',
         gif: 'train_9.gif',
         name: 'Пытается танцевать',
         id: 'train9',
         time: 30,
      },
      {
         src: 'train_13.png',
         gif: 'train_13.gif',
         name: 'Я достану до этих ног 3.0',
         id: 'train13',
         time: 30,
      },
      { src: 'train_14.png', gif: 'train_14.gif', name: 'Бег в пол', id: 'train14', time: 60 },
      {
         src: 'train_18.png',
         gif: 'train_18.gif',
         name: 'Толкание ногами',
         id: 'train18',
         time: 30,
      },
      {
         src: 'train_19.png',
         gif: 'train_19.gif',
         name: 'Безводное плавание',
         id: 'train19',
         time: 30,
      },
      { src: 'train_15.png', gif: 'train_15.gif', name: 'Мост', id: 'train15', time: 60 },
      {
         src: 'train_25.png',
         gif: 'train_25.gif',
         name: 'Чередование ног и рук',
         id: 'train25',
         time: 30,
      },
   ],
   thirty: [
      {
         src: 'train_22.png',
         gif: 'train_22.gif',
         name: 'Я прыгающая морская звезда',
         id: 'train22',
         time: 30,
      },
      {
         src: 'train_27.png',
         gif: 'train_27.gif',
         name: 'Обычные приседания',
         id: 'train27',
         time: 60,
      },
      {
         src: 'train_30.png',
         gif: 'train_30.gif',
         name: 'Поднимание точки №5',
         id: 'train30',
         time: 60,
      },
      {
         src: 'train_9.png',
         gif: 'train_9.gif',
         name: 'Пытается танцевать',
         id: 'train9',
         time: 60,
      },
      {
         src: 'train_24.png',
         gif: 'train_24.gif',
         name: 'Что это?',
         id: 'train24',
         time: 60,
      },
      { src: 'train_4.png', gif: 'train_4.gif', name: 'Отжимания 2.0', id: 'train4', time: 60 },
      {
         src: 'train_2.png',
         gif: 'train_2.gif',
         name: 'Я достану до этих ног',
         id: 'train2',
         time: 60,
      },
      {
         src: 'train_6.png',
         gif: 'train_6.gif',
         name: 'И как это назвать?',
         id: 'train6',
         time: 60,
      },
      {
         src: 'train_17.png',
         gif: 'train_17.gif',
         name: 'Поднимание туловища',
         id: 'train17',
         time: 60,
      },
      {
         src: 'train_26.png',
         gif: 'train_26.gif',
         name: 'Катание на коньках (но без коньков)',
         id: 'train26',
         time: 60,
      },
      {
         src: 'train_25.png',
         gif: 'train_25.gif',
         name: 'Чередование ног и рук',
         id: 'train25',
         time: 30,
      },
      { src: 'train_16.png', gif: 'train_16.gif', name: 'Геройская поза', id: 'train16', time: 30 },
      {
         src: 'train_3.png',
         gif: 'train_3.gif',
         name: 'Прыжки... Опираясь на пол?',
         id: 'train3',
         time: 60,
      },
      {
         src: 'train_13.png',
         gif: 'train_13.gif',
         name: 'Я достану до этих ног 3.0',
         id: 'train13',
         time: 30,
      },
      { src: 'train_29.png', gif: 'train_29.gif', name: 'Толкание земли', id: 'train29', time: 60 },
      {
         src: 'train_20.png',
         gif: 'train_20.gif',
         name: 'Я сам без понятия, что это',
         id: 'train20',
         time: 60,
      },
      {
         src: 'train_21.png',
         gif: 'train_21.gif',
         name: 'Поднимание гантель',
         id: 'train21',
         time: 60,
      },
      { src: 'train_10.png', gif: 'train_10.gif', name: 'Жук. На спине!', id: 'train10', time: 60 },
      {
         src: 'train_12.png',
         gif: 'train_12.gif',
         name: 'Я достану до этих ног 2.0',
         id: 'train12',
         time: 60,
      },
      { src: 'train_1.png', gif: 'train_1.gif', name: 'Прием каратэ', id: 'train1', time: 60 },
      { src: 'train_14.png', gif: 'train_14.gif', name: 'Бег в пол', id: 'train14', time: 60 },
      { src: 'train_31.png', gif: 'train_31.gif', name: 'Хватание ног', id: 'train31', time: 60 },
      {
         src: 'train_32.png',
         gif: 'train_32.gif',
         name: 'Косплей на мост',
         id: 'train32',
         time: 60,
      },
      { src: 'train_15.png', gif: 'train_15.gif', name: 'Мост', id: 'train15', time: 60 },
      { src: 'train_11.png', gif: 'train_11.gif', name: 'Альпинист', id: 'train11', time: 60 },
      {
         src: 'train_18.png',
         gif: 'train_18.gif',
         name: 'Толкание ногами',
         id: 'train18',
         time: 30,
      },
      { src: 'train_5.png', gif: 'train_5.gif', name: 'Велосипед', id: 'train5', time: 60 },
      {
         src: 'train_8.png',
         gif: 'train_8.gif',
         name: 'Что-то сложное (нет)',
         id: 'train8',
         time: 60,
      },
      {
         src: 'train_23.png',
         gif: 'train_23.gif',
         name: 'Косплей на ножницы',
         id: 'train23',
         time: 60,
      },
      {
         src: 'train_19.png',
         gif: 'train_19.gif',
         name: 'Безводное плавание',
         id: 'train19',
         time: 60,
      },
      {
         src: 'train_28.png',
         gif: 'train_28.gif',
         name: 'Косплей на перпендикуляр',
         id: 'train28',
         time: 60,
      },
      { src: 'train_7.png', gif: 'train_7.gif', name: 'Погоня за добычей', id: 'train7', time: 60 },
   ],
};

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

function numToTime(num) {
   if (num <= 0) return '00:00';
   let min = Math.trunc(num / 60);
   let sec = (num % 60) + '';
   if (+min < 10) min = '0' + min;
   if (+sec < 10) sec = '0' + sec;
   return min + ':' + sec;
}

const parentBlock = document.createElement('div');
parentBlock.classList.add('workBlockOutParent');
const block = document.createElement('div');
block.classList.add('workBlockOut');
const h1 = document.createElement('h1');
const h2 = document.createElement('h2');
const outBtn = document.createElement('button');
outBtn.innerHTML = '<img src="../img/cross.png" />';
h1.textContent = 'Время вышло';
h2.textContent = '00:00';
block.append(outBtn);
block.append(h1);
block.append(h2);
parentBlock.append(block);

function infoOut(time) {
   let value;
   switch (time) {
      case 'ten':
         value = '10:00';
         break;
      case 'twenty':
         value = '20:00';
         break;
      case 'thirty':
         value = '30:00';
         break;
      default:
         break;
   }
   h2.textContent = value;
   document.body.appendChild(parentBlock);
}
outBtn.onclick = () => document.body.removeChild(parentBlock);

let postersImg = [];
function viewQueuePosters(data) {
   function doPoster(img) {
      let div = document.createElement('div');
      div.classList.add('imgQueue');
      div.innerHTML = `<img src="../img/train_img/${img}"></img>`;
      return div;
   }
   data.forEach(i => {
      let elem = doPoster(i);
      postersImg.push(elem);
      queueOutBlock.append(elem);
   });
}

function workOutShow(key) {
   let data = workOutPack[key];
   let queue = [],
      timeQueue = [],
      nameH = [],
      packId = [],
      queueImg = [];
   let i = 0;
   for (val of data) {
      queue.push(val.gif);
      timeQueue.push(val.time * 1000);
      nameH.push(val.name);
      packId.push(val.id);
      queueImg.push(val.src);
   }
   viewQueuePosters(queueImg);
   function timeOutClock(data) {
      let timeID;
      clearTimeout(timeID);
      function on() {
         if (!data) return;
         clock.textContent = numToTime(data);
         data -= 1;
         timeID = setTimeout(on, 998);
      }
      on();
   }

   function workOutEnd() {
      infoOut(key);
      workOutBtnsBlock.parentElement.parentElement.classList.remove('hidden');
      headerContent.classList.remove('active-train');
      queueOutBlock.innerHTML = '';
      queueOutBlock.classList.add('hidden');
      clock.textContent = '00:00';
      mainImg.innerHTML = '<img src="../gif/workout_gif.gif" width="100%">';
      mainHead.textContent = 'Что тут у нас?';
      mainBody.textContent =
         'Можете поробовать изначально изготовленный перечень упражнений. Десять минут вполне хватит для утренней зарядки, но если хотите большего, попробуйте двадцать или тридцать минут (вполне сгодится и для полноценной тренировки). Не переутомляйтесь!';
   }

   function changeImg() {
      if (i == queue.length) {
         workOutEnd();
         return;
      }
      headerContent.classList.add('active-train');
      nextBtn.classList.add('hidden');
      mainImg.innerHTML = `<img src="../gif/${queue[i]}" width="100%">`;
      mainHead.textContent = nameH[i];
      mainBody.textContent = trainInstruct[packId[i]];
      postersImg[i].classList.add('activePoster');
      i += 1;
      function viewScipBtn() {
         nextBtn.classList.remove('hidden');
         let auto = 20;
         let timeId2;
         nextBtn.addEventListener('click', () => {
            clearInterval(timeId2);
            clock.textContent = '00:00';
         });
         timeId2 = setInterval(() => {
            clock.textContent = numToTime(auto);
            auto -= 1;
            if (auto == -2) {
               clearInterval(timeId2);
               nextBtn.click();
            }
         }, 1000);
      }
      timeForClock = timeQueue[i - 1];
      timeOutClock(timeQueue[i - 1] / 1000);
      let timerValue = 0;
      let timeId = setInterval(() => {
         timerValue += 1;
         if (timerValue == timeQueue[i - 1] / 1000) {
            postersImg[i - 1].classList.add('pastPoster');
            postersImg[i - 1].classList.remove('activePoster');
            mainImg.innerHTML = '<img src="../gif/rest_gif.gif" width="100%">';
            mainHead.textContent = 'Отдыхать тоже важно';
            mainBody.textContent =
               'На отдых отведено целых двадцать секунд, но вы (по своем усмотрению) можете лишить себя этого времени и перейти к следующему упражнению. Не забывайте: не стоит переутомляться.';
            headerContent.classList.remove('active-train');
            clock.textContent = '00:00';
            clearInterval(timeId);
            viewScipBtn();
         }
      }, 1000);
   }
   nextBtn.addEventListener('click', changeImg);
   changeImg();
}

function workOutOn(e) {
   let targ = e.target,
      key,
      pack;
   if (targ.tagName == 'BUTTON') {
      key = targ.value;
      pack = workOutPack[key];
   } else if (targ.tagName == 'SPAN') {
      let parent = targ.parentElement;
      key = parent.value;
      pack = workOutPack[key];
   }
   workOutShow(key);
   workOutBtnsBlock.parentElement.parentElement.classList.add('hidden');
   headerContent.classList.add('active-train');
   queueOutBlock.classList.remove('hidden');
}

workOutBtnsBlock.onclick = workOutOn;
