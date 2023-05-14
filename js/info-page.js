const mainHead = document.querySelector('.information_inner>h3');
const mainBody = document.querySelector('.information_inner>p');
const mainImg = document.querySelector('.info_img_train');
const slide = document.querySelector('.slide_inner');

const trainPack = [
   { src: 'train_1.png', gif: 'train_1.gif', name: 'Прием каратэ', id: 'train1' },
   { src: 'train_2.png', gif: 'train_2.gif', name: 'Я достану до этих ног', id: 'train2' },
   { src: 'train_3.png', gif: 'train_3.gif', name: 'Прыжки... Опираясь на пол?', id: 'train3' },
   { src: 'train_4.png', gif: 'train_4.gif', name: 'Отжимания 2.0', id: 'train4' },
   { src: 'train_5.png', gif: 'train_5.gif', name: 'Велосипед', id: 'train5' },
   { src: 'train_6.png', gif: 'train_6.gif', name: 'И как это назвать?', id: 'train6' },
   { src: 'train_7.png', gif: 'train_7.gif', name: 'Погоня за добычей', id: 'train7' },
   { src: 'train_8.png', gif: 'train_8.gif', name: 'Что-то сложное (нет)', id: 'train8' },
   { src: 'train_9.png', gif: 'train_9.gif', name: 'Пытается танцевать', id: 'train9' },
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
   { src: 'train_21.png', gif: 'train_21.gif', name: 'Поднимание гантель', id: 'train21' },
   { src: 'train_22.png', gif: 'train_22.gif', name: 'Я прыгающая морская звезда', id: 'train22' },
   { src: 'train_23.png', gif: 'train_23.gif', name: 'Косплей на ножницы', id: 'train23' },
   { src: 'train_24.png', gif: 'train_24.gif', name: 'Что это?', id: 'train24' },
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

function createRadio(id, name) {
   let input = document.createElement('input');
   input.setAttribute('type', 'radio');
   input.setAttribute('name', 'train');
   input.setAttribute('id', id);
   input.setAttribute('value', id);

   let label = document.createElement('label');
   label.setAttribute('for', id);
   label.setAttribute('id', id);
   label.textContent = name;

   return { input, label };
}

trainPack.forEach(data => {
   let elem = createRadio(data.id, data.name);
   slide.append(elem.input);
   slide.append(elem.label);
});

let radioBtns = document.querySelectorAll('input[name="train"]');
function colorLabel(value) {
   document.querySelectorAll('label').forEach(lab => {
      if (lab.id == value) {
         lab.classList.add('active-radio');
      } else {
         lab.classList.remove('active-radio');
      }
   });
}
function radioMode() {
   colorLabel(this.value);
   let elem = trainPack.find(i => this.value == i.id);
   let img = `<img src="../gif/${elem.gif}">`;
   mainImg.innerHTML = img;
   mainHead.textContent = elem.name;
   mainBody.textContent = trainInstruct[elem.id];
   mainImg.classList.add('img_train_active');
}
radioBtns.forEach(btn => {
   btn.addEventListener('change', radioMode);
});

let slideHeight = parseInt(getComputedStyle(slide).getPropertyValue('height'));
let _slidePosition = 0;
function scrollRadio(e) {
   _slidePosition += e.deltaY;
   let maxPos = slideHeight / 2 - _slidePosition + 300;
   if (_slidePosition < 0) {
      _slidePosition = 0;
   } else if (maxPos < 100) {
      _slidePosition -= e.deltaY;
   }
   slide.style.bottom = _slidePosition + 'px';
}
window.addEventListener('wheel', scrollRadio);

document.querySelector('.slide_on').onclick = () => {
   slide.style.display = 'block';
};
