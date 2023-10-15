
/////////////////////////////////////////////1//////////////////////////////////////

document.querySelector('.b-1').addEventListener('click', () => {
    let data1 = document.querySelector('.ch-1').value;
    let data2 = document.querySelector('.ch-2').value;
    let data3 = document.querySelector('.ch-3').value;

    document.querySelector('.info1').innerHTML = ' ';
    if (document.querySelector('.ch-1').checked) {
        document.querySelector('.info1').innerHTML += " " + data1;
    }

    if (document.querySelector('.ch-2').checked) {
        document.querySelector('.info1').innerHTML += " " + data2;
    }
    if (document.querySelector('.ch-3').checked) {
        document.querySelector('.info1').innerHTML += " " + data3;
    }
    if (!document.querySelector('.ch-3').checked
        && !document.querySelector('.ch-2').checked
        && !document.querySelector('.ch-1').checked) {
        document.querySelector('.info1').innerHTML = ' ';
    }
})

////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////2//////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
    const emailCheckboxes = document.querySelectorAll(".email-checkbox");
    const selectedEmailsContainer = document.getElementById("selected-emails");

    emailCheckboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            const email = this.value;
            if (this.checked) {
                // Додати адресу, якщо чекбокс відзначений
                const emailDiv = document.createElement("div");
                emailDiv.textContent = email;
                selectedEmailsContainer.appendChild(emailDiv);
            } else {
                // Видалити адресу, якщо чекбокс скасований
                const emailDivs = selectedEmailsContainer.getElementsByTagName("div");
                for (let i = 0; i < emailDivs.length; i++) {
                    if (emailDivs[i].textContent === email) {
                        selectedEmailsContainer.removeChild(emailDivs[i]);
                        break;
                    }
                }
            }
        });
    });
});

////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////5//////////////////////////////////////

const images = document.querySelectorAll('.pic');

images.forEach(image => {
    image.addEventListener('click', toggleImageState);
});

function toggleImageState(event) {
    const image = event.target;
    if (image.classList.contains('active')) {

        image.classList.remove('active');

    } else {

        image.classList.add('active');

    }
}



/////////////////////////////////////////////8//////////////////////////////////////


const img8 = document.querySelector('.picture');
const button8 = document.querySelector(".toggleButton");
let isImageExpanded = false;

button8.addEventListener("click", () => {
    if (isImageExpanded) {
        // Зменшуємо розмір картинки у вихідний стан
        img8.style.width = "100px";
        img8.style.height = "100px";
    } else {
        // Збільшуємо розмір картинки у 2 рази
        img8.style.width = (img8.offsetWidth * 2) + "px";
        img8.style.height = (img8.offsetHeight * 2) + "px";
    }
    // Змінюємо стан кнопки
    isImageExpanded = !isImageExpanded;
});


/////////////////////////////////////////////6//////////////////////////////////////


const sections = document.querySelectorAll('.section6');
const inputs = document.querySelectorAll('.inp');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        // Знайдемо секцію, в якій знаходиться цей елемент вводу
        const parentSection = input.closest('.section6');

        // Видаляємо клас 'active' з усіх секцій
        sections.forEach(section => {
            section.classList.remove('active6');
        });

        // Додаємо клас 'active' до секції, яка містить фокусований елемент вводу
        parentSection.classList.add('active6');
    });
});


/////////////////////////////////////////////7//////////////////////////////////////

const block = document.getElementById('block');
const widthRange = document.getElementById('widthRange');
const heightRange = document.getElementById('heightRange');
const rotateRange = document.getElementById('rotateRange');

widthRange.addEventListener('input', () => {
    const size = widthRange.value;
    block.style.width = `${size}px`;
});

heightRange.addEventListener('input', () => {
    const size = heightRange.value;
    block.style.height = `${size}px`;
});

rotateRange.addEventListener('input', () => {
    const rotate = rotateRange.value;
    block.style.transform = `rotate(${rotate}deg)`;
});


/////////////////////////////////////////////9//////////////////////////////////////

const count1 = document.querySelector('.count1');
const count2 = document.querySelector('.count2');
const count3 = document.querySelector('.count3');
const count4 = document.querySelector('.count4');

const btnCount1 = document.querySelector(".btn-count1");
const btnCount2 = document.querySelector(".btn-count2");
const btnCount3 = document.querySelector(".btn-count3");
const btnCount4 = document.querySelector(".btn-count4");

let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;

btnCount1.addEventListener("click", () => {
    counter1++;
    count1.innerText = counter1;
});

btnCount2.addEventListener("click", () => {
    counter2++;
    count2.innerText = counter2;
});

btnCount3.addEventListener("click", () => {
    counter3++;
    count3.innerText = counter3;
});

btnCount4.addEventListener("click", () => {
    counter4++;
    count4.innerText = counter4;
});

/////////////////////////////////////////////10//////////////////////////////////////

let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', () => {
    offset = offset + 256;
    if (offset > 686) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', () => {
    offset = offset - 256;
    if (offset < 0) {
        offset = 686;
    }
    sliderLine.style.left = -offset + 'px';
});

/////////////////////////////////////////////3//////////////////////////////////////

const questions = [
    { question: '2 x 2', options: ['3', '4', '5'], answer: 2 },
    { question: '3 x 6', options: ['15', '18', '21'], answer: 2 },
    { question: '7 x 8', options: ['48', '56', '64'], answer: 1 }
    // Додайте більше завдань за необхідності
];


let currentQuestionIndex = 0;
let score = 0;

const scoreDisplay = document.getElementById('score');
const nextButton = document.getElementById('nextButton');
const questionDisplay = document.getElementById('question');
const answerForm = document.getElementById('answerForm');
const resultDisplay = document.getElementById('result');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionDisplay.textContent = currentQuestion.question;
    label1.textContent = currentQuestion.options[0];
    label2.textContent = currentQuestion.options[1];
    label3.textContent = currentQuestion.options[2];
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        resultDisplay.textContent = "Будь ласка, оберіть відповідь.";
        return;
    }

    const userAnswer = parseInt(selectedAnswer.value);
    const currentQuestion = questions[currentQuestionIndex];
    if (userAnswer === currentQuestion.answer) {
        score++;
        scoreDisplay.textContent = `Загальний рахунок: ${score}`;
        resultDisplay.textContent = "Правильно!";
        console.log(currentQuestion.answer);
    } else {
        resultDisplay.textContent = `Неправильно. Правильна відповідь: ${currentQuestion.options[currentQuestion.answer - 1]}`;
        console.log(currentQuestion.answer);
    }

    nextButton.disabled = false;
}

nextButton.addEventListener('click', () => {
    checkAnswer();
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        resultDisplay.textContent = `Гра завершена. Ваш загальний рахунок: ${score} з ${questions.length}`;
        nextButton.disabled = true;
    }
});

showQuestion();

/////////////////////////////////////////////4//////////////////////////////////////

let currentTask = null;
let score1 = 0;
let taskScore1 = 0;

let answers1 = document.getElementById('answer1');

// Функція для генерації нового завдання
function generateTask() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    currentTask = { num1, num2, answer1: num1 * num2 };
    if(taskScore1 !=3){
        taskScore1++;
        document.getElementById('task1').textContent = `Завдання: ${num1} * ${num2}`;
    }
    else{
        document.getElementById('task1').textContent = 'Тест завершено';
        answers1.disabled = true;
        document.getElementById('nextTask1').disabled = true;
        document.getElementById('check1').disabled = true;
        document.getElementById('result1').textContent = ' ';
    }
}

// Функція для перевірки відповіді
function checkAnswer1() {
    const userAnswer1 = parseInt(answers1.value, 10);
    console.log(userAnswer1);
    if (userAnswer1 === currentTask.answer1) {
        score1++;
        document.getElementById('result1').textContent = 'Правильно!';
    } else {
        document.getElementById('result1').textContent = 'Неправильно. Правильна відповідь: ' + currentTask.answer1;
    }
    document.getElementById('score1').textContent = `Загальний рахунок: ${score1}`;
}

// Додавання обробників подій до кнопок
document.getElementById('nextTask1').addEventListener('click', generateTask);
document.getElementById('check1').addEventListener('click', checkAnswer1);

// Генеруємо перше завдання при завантаженні сторінки
generateTask();