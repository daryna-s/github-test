// <<<<<<< HEAD
// const sortByAscendingBalance =
//    [...users].sort((firstUser, secondUser) =>
//     firstUser.balance - secondUser.balance);

// [...users].sort((firstUser, secondUser) => firstUser.balance.localeCompare(secondUser.balance));
// // Change code above this line
// =======
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

  
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     if (this.blacklistedEmails.includes(email)) {
//       return true;
//     }
//     return false;
//   }
  
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = [];
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true
// >>>>>>> c1cb4718e23ed1ceea0937a0a4e1905658f939f0
// За допомогою методу forEach потрібно заповнити масив uploadedFiles
// baseUrl потрібно передати, як this

// const imagesName = ['car', 'grass', 'avatar', 'user', 'sea', 'water', 'bird'];
// const baseUrl = 'domain-name.com';
// let uploadedFiles = [];
//
// task-01
// const resultUploadedFiles = [
//   'domain-name.com/upload/car',
//   'domain-name.com/upload/grass',
//   'domain-name.com/upload/avatar',
//   'domain-name.com/upload/user',
//   'domain-name.com/upload/sea',
//   'domain-name.com/upload/water',
//   'domain-name.com/upload/bird'
// ];
// imagesName.forEach(function (item) {
//   uploadedFiles.push(this + '/upload/' + item);
// }, baseUrl);

// task-02
// Потрібно отримати URL адресу із адресного рядка бразуера.
// Далі необхідно параметри запиту записати в об'єкт  (query) - ключ, значення (axios)

// url = https://www.npmjs.com/?query=axios&version=0.3&module=render&size=32&date=12212183311

// const url = 'https://www.npmjs.com/?query=axios&version=0.3&module=render&size=32&date=12212183311';

// const index = url.indexOf('?');
// const newUrl = url.slice(index + 1);

// const finalArr = newUrl.split('&').reduce((acc, item) => {
//   const [key, value] = item.split('=');
//   acc[key] = value;

//   return acc;
// }, {});

// console.log(finalArr);

// task - 03
// let total = 0;

// const product1 = {
//   id: 33,
//   title: 'T-shirt',
//   price: 99,
//   count: 1,
// }

// const product2 = {
//   id: 29,
//   title: 'Jeans',
//   price: 199,
//   count: 1,
// }


// const basketItems = [
//   {
//     id: 28,
//     title: 'iPhone 14',
//     price: 1599,
//     count: 3,
//   },
//   {
//     id: 29,
//     title: 'Jeans',
//     price: 199,
//     count: 2,
//   }
// ];

// task - 04
// Напишіть функцію, яка очищає масив від небажаних значень, таких як false, undefined, порожні рядки, нуль, null.
// Очікуваний результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
// function cleanArray(arr) {
//   // return arr.filter(item => !item === false);
//   // return arr.filter(item => !item);
//   return arr.filter(Boolean);
// }
// console.log(cleanArray([0, 1, false, 2, undefined, '', 3, null]) )

// task - 05
// Перетворіть масив об’єктів виборців на підрахунок кількості людей, які проголосували

// function totalVotes(arr) {
//   // your code here
// // }
// //
// const voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ];

// // console.log(totalVotes(voters)); // 7
// function totalVotes(arr) {
//  return arr.reduce((acc, {voted}) => {
//     if (voted) {
//       acc = acc+1
//     }
//     return acc
//   },0

//   )
// }

// task-06
// Напишіть функцію sortByAge(users), яка приймає масив об'єктів із властивістю age та сортує їх за ним.
// Наприклад:
//
// let bruce = {name: "Bruce", age: 25};
// let jhon = { name: "Jhon", age: 30};
// let maria = { name: "Maria", age: 28};

// let arr = [ bruce, jhon, maria ];

// sortByAge(arr);

// console.log(sortByAge(arr))

// function sortByAge(...arr) {
//   console.log(arr)
//   const copyArr = [...arr];
//   return copyArr.sort((prev, next) => prev.age - next.age)
// }


//
// // тепер: [bruce, maria, jhon]
// alert(arr[0].name); // Bruce
// alert(arr[1].name); // Maria
// alert(arr[2].name); // Jhon


// task - 07 пересмотреть видео,код другой
// Маючи набір усіх елементів вашого списку бажань, обчисліть, скільки коштуватиме, щоб просто купити все одразу


// function shoppingSpree(arr) {
//   return arr.reduce((acc, { price }) => acc + price)
// }

// const wishlist = [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "4 carat diamond ring", price: 45000 },
//   { title: "World tour", price: 25000 },
//   { title: "Gold fidgit spinner", price: 2000 },
//   { title: "A second Tesla Model S", price: 90000 }
// ];

// console.log(shoppingSpree(wishlist)); // 227005

// task - 08
// Отримайте ініціали імені
// Даний рядок із кількох слів із одним пробілом між кожним із них. Скоротіть назву та поверніть ініціали імені.


// const input = 'George Raymond Richard Martin';
// // Result
// // 'GRRM'
// const res = input
//   .split(` `)
//   .map(item => item[0])
//   .join(``);
// console.log(res);


// task - 09
// Розробники люблять скорочувати все:
//   k8s означає Kubernetes, a11y означає accessibility, l10n означає localization.
//   Ви отримуєте нумероніми Dev, беручи першу та останню букви та підраховуючи кількість букв між ними.
//   Слова, що містять менше 4 літер, не скорочуються, тому що це було б просто дивно.
//   Змінна input  є реченням, і ви повинні скорочувати кожне слово довжиною 4 літери або більше.
//   У реченні не буде розділових знаків. g2d l2k e6e



// const input = 'Every developer likes to mix kubernetes and javascript';
// Result
// 'E3y d7r l3s to mix k8s and j8t'
// const input = 'Every developer likes to mix kubernetes and javascript';
// // Result
// // 'E3y d7r l3s to mix k8s and j8t'

// function calcLetters(word) {
//   return word.length - 2;
// }

// const res = input
//   .split(' ')
//   .map(item => {
//     if (item.length < 4) {
//       return item;
//     } else {
//       return `${item[0]}${calcLetters(item)}${item[item.length - 1]}`;
//     }
//   })
//   .join(' ');
// console.log(res);

// task 02
// За допомогою методу map вивести в DOM дерево список із картками. Розміри картоко 150px на 150px.
// Картинка має бути фоновим зображенням всієї картки
// На кожній картці є кнопка. В кнопці виводиться текст із type
// По кліку на кнопку має показуватись тип картки в тегові div - текст із кнопки
// По кліку на всю картку має показуватись preview всієї картинки - в тегові div поруч зі списком або в модальному вікні
// / const data = [
//   {
//     id: 1,
//     image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?cs=srgb&dl=pexels-jaime-reimer-2662116.jpg&fm=jpg',
//     type: 'post',
//     title: 'Lake',
//   },
//   {
//     id: 2,
//     image: 'https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?cs=srgb&dl=pexels-pixabay-327098.jpg&fm=jpg',
//     type: 'product',
//     title: 'Tangerine'
//   },
//   {
//     id: 3,
//     image: 'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     type: 'post',
//     title: 'City',
//   }
// ]


// task 03
// Даний список повідомлень із кнопками для видалення [x]. Напишіть код,
//  щоб кнопки працювали.
//
// <!DOCTYPE HTML>
// <html>
//
// <head>
// <link rel="stylesheet" href="messages.css">
//   <meta charset="utf-8">
//   </head>
//
// <body>
//
// <div id="container">
//   <div class="pane">
//     <h3>Lorem Ipsum</h3>
//     <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
//     <button class="remove-button">[x]</button>
//   </div>
//   <div class="pane">
//     <h3>Where does it come from?</h3>
//     <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
//     <button class="remove-button">[x]</button>
//   </div>
//   <div class="pane">
//     <h3>Why do we use it?</h3>
//     <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
//     <button class="remove-button">[x]</button>
//   </div>
// </div>
//
// <script>
//
// </script>
//
// </body>
// </html>
// const container = document.querySelector('#container');

// container.addEventListener('click', onClickClose);

// function onClickClose(e) {
//   const currentClassEl = e.target.className;
//   console.dir(currentClassEl);

//   if (currentClassEl === 'remove-button') {
//     const element = e.target.closest('.pane');

//     if (element) {
//       element.remove();
//     }
//   }
// }


// task 04

// Змініть стиль тексту абзацу за допомогою коду JavaScript
//
// <!DOCTYPE html>
// <html>
// <head>
// <meta charset=utf-8 />
//   <title>JS DOM paragraph style</title>
// </head>
// <body>
// <p id ='text'>JavaScript Exercises</p>
// <div>
//   <button id="jsstyle">Style</button>
// </div>
// </body>
// </html>
//
// При натисканні на кнопку буде змінено шрифт, розмір шрифту та колір тексту абзацу.
// При наступному натисканні кнопки буде змінюватись колір параграфу. Після кожного кліку буде пісдтавлятись колір із масиву colors послідовно

// const colors = ['gold', 'green', 'yellow', 'blue', 'black', 'brown'];
// const btn = document.querySelector(`#jsstyle`);
// const text = document.querySelector(`#text`);
// let i = 0;
// btn.addEventListener(`click`, e =>{
//     text.style.color = colors[i];
//     text.style.fontFamily = `Arial`;
//     text.style.fontSize = `36px`;
//     i += 1;
// })



// task 05

// / Напишіть функцію JavaScript, щоб отримати значення атрибутів href, rel, target і type для вказаного посилання

// <!DOCTYPE html>
// <html>
// <head>
// <meta charset=utf-8 />
//   </head>
// <body>
// <p><a id="w3r" type="text/html" rel="nofollow" target="_self" href="https://www.w3resource.com/">w3resource</a></p>
// <button>Click here to get  attributes value</button>
// </body></html>

// task 06

// Напишіть програму JavaScript для добавлення та видалення елементів зі спадного списку.

// <!DOCTYPE html>
// <html><head>
// <meta charset=utf-8 />
//   <title>Remove items from a dropdown list</title>
// </head><body><form>
//   <select id="colorSelect">
//     <option>Red</option>
//     <option>Green</option>
//     <option>White</option>
//     <option>Black</option>
//   </select>
//   <input type="button" value="Select and Remove">
// </form>
// </body>
// </html>

// task 07

// Напишіть програму JavaScript, щоб виділяти жирні слова (<strong>) наступного абзацу, наводячи курсор миші на посилання

// <head>
//   <meta charSet="UTF-8">
//     <title>Get And Style All Tags</title>
// </head>
// <body>
// <p>[<a href="#" onMouseOver="highlight()" onMouseOut="return_normal()">On mouse over here bold words of the following
//   paragraph will be highlighted</a>]</p>
// <p><strong>We</strong> have just started <strong>this</strong> section for the users (<strong>beginner</strong> to
//   intermediate) who <strong>want</strong> to work with <strong>various</strong> JavaScript <strong>problems</strong> and
//   write scripts online to <strong>test</strong> 
{/* <head>
  <meta charSet="UTF-8">
    <title>Get And Style All Tags</title>
</head>
<body>
<p>[<a href="#" onMouseOver="highlight()" onMouseOut="return_normal()">On mouse over here bold words of the following
  paragraph will be highlighted</a>]</p>
<p><strong>We</strong> have just started <strong>this</strong> section for the users (<strong>beginner</strong> to
  intermediate) who <strong>want</strong> to work with <strong>various</strong> JavaScript <strong>problems</strong> and
  write scripts online to <strong>test</strong> their JavaScript <strong>skill</strong>.</p>
</body> */}
