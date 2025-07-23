const testdata = [
  {
    id: 1,
    question: "C++ dasturlash tilida chiqish operatori qaysi?",
    options: ["cin", "printf", "cout", "input"],
    answer: "cout",
  },
  {
    id: 2,
    question: "C++ dasturida qaysi kutubxona cout uchun kerak?",
    options: ["math.h", "stdio.h", "iostream", "stdlib.h"],
    answer: "iostream",
  },
  {
    id: 3,
    question: "C++ dasturida asosiy bajariladigan funksiya nomi nima?",
    options: ["start()", "main()", "run()", "execute()"],
    answer: "main()",
  },
  {
    id: 4,
    question: "Qaysi belgi endl bilan bir xil vazifani bajaradi?",
    options: ["\\t", "\\\\", "\\n", "\\a"],
    answer: "\\n",
  },
  {
    id: 5,
    question: "C++ da o‘zgaruvchini e’lon qilishda noto‘g‘ri yozilgan satr qaysi?",
    options: ["int x;", "float 3num;", "char a = 'A';", "double d = 2.5;"],
    answer: "float 3num;",
  },
  {
    id: 6,
    question: "Quyidagilardan qaysi biri mantiqiy (bool) tipga misol?",
    options: ['"true"', "1", "false", "'0'"],
    answer: "false",
  },
  {
    id: 7,
    question: "C++ da qanday qilib foydalanuvchidan qiymat olinadi?",
    options: ["output >> x;", "scanf(x);", "cin >> x;", "read(x);"],
    answer: "cin >> x;",
  },
  {
    id: 8,
    question: "C++ dasturida qaysi amal qo‘shish uchun ishlatiladi?",
    options: ["+", "&", "*", "%"],
    answer: "+",
  },
  {
    id: 9,
    question: "Quyidagilardan qaysi biri inkrement operator?",
    options: ["--", "++", "+=", "=="],
    answer: "++",
  },
  {
    id: 10,
    question: "Agar int x = 5 / 2; bo‘lsa, x ning qiymati nechaga teng?",
    options: ["2.5", "3", "2", "0"],
    answer: "2",
  },
  {
    id: 11,
    question: "C++ da qaysi biri if operatorining sintaksisidir?",
    options: ["if x > y then", "if (x > y) { }", "if x > y { }", "if: x > y {}"],
    answer: "if (x > y) { }",
  },
  {
    id: 12,
    question: "Qaysi operator tanlash (switch) operatoriga tegishli?",
    options: ["for", "if", "case", "while"],
    answer: "case",
  },
  {
    id: 13,
    question: "C++ da nechta asosiy takrorlash operatori mavjud?",
    options: ["1", "2", "3", "4"],
    answer: "3",
  },
  {
    id: 14,
    question: "while sikli qachongacha bajariladi?",
    options: [
      "Faqat 1 marta",
      "Shart false bo‘lguncha",
      "Cheksiz",
      "Har doim bajariladi",
    ],
    answer: "Shart false bo‘lguncha",
  },
  {
    id: 15,
    question: "break operatori nima qiladi?",
    options: [
      "Dastur tugaydi",
      "Xatolik chiqaradi",
      "Takrorlashni to‘xtatadi",
      "Qiymatni chiqaradi",
    ],
    answer: "Takrorlashni to‘xtatadi",
  },
  {
    id: 16,
    question: "Quyidagi for operatori nechta marta ishlaydi: for (int i = 0; i < 3; i++) cout << i;",
    options: ["0", "2", "3", "4"],
    answer: "3",
  },
  {
    id: 17,
    question: "int x = 10; x += 5; so‘ngida x ning qiymati?",
    options: ["10", "15", "5", "0"],
    answer: "15",
  },
  {
    id: 18,
    question: "!= operatorining ma’nosi nima?",
    options: ["Katta yoki teng", "Teng", "Teng emas", "Kichikroq"],
    answer: "Teng emas",
  },
  {
    id: 19,
    question: "#include <iostream> satri qanday maqsadda ishlatiladi?",
    options: [
      "Konsolni tozalash",
      "Kutubxona ulash",
      "O‘zgaruvchi e’lon qilish",
      "Ekranga chiqarish",
    ],
    answer: "Kutubxona ulash",
  },
  {
    id: 20,
    question: "C++ dasturida return 0; nimani anglatadi?",
    options: [
      "0 ni chiqaradi",
      "Dasturni to‘xtatadi",
      "Xatolikni bildiradi",
      "Dastur muvaffaqiyatli tugadi degani",
    ],
    answer: "Dastur muvaffaqiyatli tugadi degani",
  },
  {
    id: 21,
    question: "C++ dasturlash tilida izoh (kommentariya) qanday yoziladi?",
    options: ["# izoh", "// izoh", "/* izoh */", "% izoh"],
    answer: "// izoh",
  },
  {
    id: 22,
    question: "Qaysi o‘zgaruvchi turi butun sonlarni saqlash uchun ishlatiladi?",
    options: ["float", "int", "char", "bool"],
    answer: "int",
  },
  {
    id: 23,
    question: "Qaysi o‘zgaruvchi turi belgilarni saqlaydi?",
    options: ["char", "string", "int", "bool"],
    answer: "char",
  },
  {
    id: 24,
    question: "C++ dasturida satr (matn) saqlash uchun qaysi tip ishlatiladi?",
    options: ["string", "char", "bool", "double"],
    answer: "string",
  },
  {
    id: 25,
    question: "Quyidagilardan qaysi biri C++ da o‘zgaruvchi nomlash qoidalariga zid?",
    options: ["my_var", "2son", "userName", "_x"],
    answer: "2son",
  },
  {
    id: 26,
    question: "C++ da arifmetik amallardan bo‘linmani bildiruvchi belgi qaysi?",
    options: ["/", "*", "-", "%"],
    answer: "/",
  },
  {
    id: 27,
    question: "C++ da qoldiqni hisoblash operatori qaysi?",
    options: ["//", ":", "%", "\\"],
    answer: "%",
  },
  {
    id: 28,
    question: "C++ da const kalit so‘zi nima uchun ishlatiladi?",
    options: [
      "Doimiy qiymatni belgilash uchun",
      "Takrorlash uchun",
      "Shart tekshirish uchun",
      "Kutubxona ulash uchun"
    ],
    answer: "Doimiy qiymatni belgilash uchun",
  },
  {
    id: 29,
    question: "C++ dasturida qanday holatda 'else' bloki bajariladi?",
    options: [
      "Shart bajarilganda",
      "Shart bajarilmaganda",
      "Har doim",
      "Foydalanuvchi xohlaganda"
    ],
    answer: "Shart bajarilmaganda",
  },
  {
    id: 30,
    question: "Qaysi takrorlash operatori kamida bir marta bajariladi?",
    options: ["while", "do-while", "for", "switch"],
    answer: "do-while",
  },
  {
    id: 31,
    question: "C++ da `#define PI 3.14` nimani anglatadi?",
    options: [
      "O‘zgaruvchini e'lon qiladi",
      "Doimiy qiymat yaratadi",
      "Funktsiyani aniqlaydi",
      "Takrorlash operatorini bildiradi"
    ],
    answer: "Doimiy qiymat yaratadi",
  },
  {
    id: 32,
    question: "Qaysi biri C++ da o‘zgaruvchini qiymati bilan e’lon qilishga misol?",
    options: ["int x = 5;", "x int = 5;", "int = 5 x;", "5 = int x;"],
    answer: "int x = 5;",
  },
  {
    id: 33,
    question: "Qaysi operator tenglikni tekshiradi?",
    options: ["=", "==", "!=", "<="],
    answer: "==",
  },
  {
    id: 34,
    question: "C++ da `&&` operatori nimani bildiradi?",
    options: ["Yoki", "Va", "Teng", "Teskari"],
    answer: "Va",
  },
  {
    id: 35,
    question: "C++ dasturida `||` operatori nimani anglatadi?",
    options: ["Teskari", "Yoki", "Teng emas", "Qo‘shish"],
    answer: "Yoki",
  },
  {
    id: 36,
    question: "C++ dasturida massiv qanday e’lon qilinadi?",
    options: ["int x[] = {1,2,3};", "array x = (1,2,3);", "x = {1,2,3};", "int[] x = 1,2,3;"],
    answer: "int x[] = {1,2,3};",
  },
  {
    id: 37,
    question: "Quyidagilardan qaysi biri massivning 3-elementiga murojaat qiladi?",
    options: ["x(3)", "x[2]", "x{3}", "x.3"],
    answer: "x[2]",
  },
  {
    id: 38,
    question: "C++ da funksiyani e’lon qilish to‘g‘ri ko‘rinishi?",
    options: [
      "function void myFunc()",
      "void myFunc() {}",
      "func myFunc[]",
      "myFunc() = void;"
    ],
    answer: "void myFunc() {}",
  },
  {
    id: 39,
    question: "Qaysi biri `continue` operatorining vazifasi?",
    options: [
      "Siklni to‘xtatish",
      "Dasturdan chiqish",
      "Joriy iteratsiyani o‘tkazib yuborish",
      "Fayl ochish"
    ],
    answer: "Joriy iteratsiyani o‘tkazib yuborish",
  },
  {
    id: 40,
    question: "C++ dasturida fayl bilan ishlash uchun qaysi kutubxona kerak?",
    options: ["<iostream>", "<fstream>", "<stdio.h>", "<string>"],
    answer: "<fstream>",
  }
];


const user_answer = new Array(25).fill(null);
const select_answer = new Array(25).fill(null);

// console.log(user_answer)
let ansverId;
let arrayTest = [];
let arrOption = [];
var k = 1;
let fine=0;
let attemp=5;

$(document).ready(() => {
  arrayTest = massivTuzish(testdata.length, 25);
  for (var k = 1; k <= arrayTest.length; k++) {
    arrOption.push(massivTuzish(4, 4));
    testbtnlist.innerHTML += `
      <li>
        <a class="done" id="que_${k}" onclick="clickbtn(${k})" href="#">${k}</a>
      </li>
    `;
  }
  setValue(1);
  timer1();
});

function massivTuzish(m, n) {
  let massiv = [];
  let i = 0;

  while (i < n) {
    var k = Math.floor(Math.random() * m);
    if (!massiv.includes(k)) {
      massiv.push(k);
      i++;
    }
  }
  return massiv;
}



function toggleParentClass(radio) {
  var parent = radio.parentNode;

  // Remove 'checked' class from all answer-items
  var answerItems = document.querySelectorAll(".answer-item");

  for (var i = 0; i < answerItems.length; i++) {
    if (answerItems[i] == parent) {
      select_answer[ansverId - 1] = i;
      user_answer[ansverId - 1] = parent.querySelector("span").innerHTML;
    }

    if (answerItems[i] !== parent) {
      answerItems[i].classList.remove("checked");
      answerItems[i].querySelector('input[type="radio"]').checked = false;
    }
  }

  if (radio.checked) {
    parent.classList.add("checked");
    // console.log(testdata[ansverId].answer)
  } else {
    parent.classList.remove("checked");
  }

  // alert(k);
  let cur = document.querySelector(`#que_${ansverId}`);
  cur.style.background = "rgb(0, 156, 255)";
}

function checked_ansver() {
  var answerItems = document.querySelectorAll(".answer-item");

  for (var i = 0; i < answerItems.length; i++) {
    answerItems[i].classList.remove("checked");
    answerItems[i].querySelector('input[type="radio"]').checked = false;
  }

  if (user_answer[ansverId - 1] != null) {
    for (var i = 0; i < answerItems.length; i++) {
      if (i == select_answer[ansverId - 1]) {
        answerItems[i].classList.add("checked");
        answerItems[i].querySelector('input[type="radio"]').checked = true;
      }
    }
  }
}

const el = (e) => document.querySelector(e);

const testbtnlist = el("#questionbtn");
const count_question = el("#count_question");
const number_question = el("#question-num");
const question_text = el(".question-text");
const timer_teg = el("#timer");

const option1 = el("#op1");
const option2 = el("#op2");
const option3 = el("#op3");
const option4 = el("#op4");

let n,
  a = 1;

function setValue(k) {
  n = arrayTest.length;
  ansverId = k;
  number_question.innerHTML = k;
  count_question.innerHTML = k + "/" + n;
  question_text.innerHTML = testdata[arrayTest[k - 1]].question;

  option1.innerHTML = testdata[arrayTest[k - 1]].options[arrOption[k - 1][0]];
  option2.innerHTML = testdata[arrayTest[k - 1]].options[arrOption[k - 1][1]];
  option3.innerHTML = testdata[arrayTest[k - 1]].options[arrOption[k - 1][2]];
  option4.innerHTML = testdata[arrayTest[k - 1]].options[arrOption[k - 1][3]];

  checked_ansver();
}

function clickbtn(id) {
  k = document.getElementById(`que_${id}`).innerHTML;
  setValue(k);
}

function pClick() {
  var b = parseInt(number_question.innerHTML);

  if (b > 1) {
    b -= 1;
    setValue(b);
  }
}

function nClick() {
  var b = parseInt(number_question.innerHTML);
  if (b < n) {
    b += 1;
    setValue(b);
  }
}

function timer1() {
  var timeLimitInMinutes = 50;
  var timeLimitInSeconds = timeLimitInMinutes * 60;
  var timerElement = document.getElementById("timer");

  function startTimer() {
    timeLimitInSeconds--;

    var minutes = Math.floor(timeLimitInSeconds / 60);
    var seconds = timeLimitInSeconds % 60;

    if (timeLimitInSeconds < 0) {
      timerElement.textContent = "00:00";
      clearInterval(timerInterval);
      return;
    }

    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    timerElement.innerHTML = minutes + ":" + seconds;
  }

  var timerInterval = setInterval(startTimer, 1000);
}

let ansverId1=document.querySelector("#answerId")
function getAnsver(){
  fine++;
  q=number_question.innerHTML;
  ansverId1.textContent=testdata[arrayTest[q - 1]].answer;
}
function endTest() {
  var c = 0, inc = 0, usc = 0;
  
  for (var i = 0; i < arrayTest.length; i++) {
      if (user_answer[i] != null) {
          if (user_answer[i] == testdata[arrayTest[i]].answer) {
              c++;
          } else {
              inc++;
          }
      } else {
          usc++;
      }
  }

  // Natijalarni ekranga chiqarish
  document.querySelector("#cans").textContent = `To'g'ri: ${c}`;
  document.querySelector("#icans").textContent = `Noto'g'ri: ${inc}`;
  document.querySelector("#fine").textContent = `Jarima: ${fine}`;
  document.querySelector("#fullball").textContent = `Umumiy ball: ${(c - fine)*4}`;
  document.querySelector("#noselect").textContent = `Belgilanmagan: ${usc}`;

  // Vaqtni olish
  const now = new Date();
  const timestamp = now.toLocaleString("uz-UZ"); // O'zbek formati
  const email1 = localStorage.getItem("userEmail");

  // Telegram bot ma'lumotlari
  const botToken = "7632753338:AAFepTlhKAFlqHM8-zh76UABzJQPYXSfGnI"; // Bot tokenini o'zgartiring
  const chatId = "7438762563"; // O'zingizning chat ID ni kiriting

  // Xabar matni
  const message = `
🕒 Test tugallangan vaqt: ${timestamp}
📧 Email address: ${email1}
📊 *Test natijasi:*
✅ To'g'ri javoblar: ${c}
❌ Noto'g'ri javoblar: ${inc}
⚪ Belgilanmagan javoblar: ${usc}
🏆 Umumiy ball: ${(c - fine)*4}`;

  // Telegram API-ga so‘rov yuborish
  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          chat_id: chatId,
          text: message
      })
  })
  .then(response => response.json())
  .then(data => {
      console.log("Xabar yuborildi:", data);
      
      // 1.5 soniya kutish va keyin sahifani o‘zgartirish
      setTimeout(() => {
          window.location = "studentindex.html";
      }, 20000);
  })
  .catch(error => {
      console.error("Xatolik yuz berdi:", error);
  });
}
