
// _____________________Data___________________

let arrAnswer = [{
    question: "Question 1: what is your name?",
    answers: {
        a: "Cham",
        b: "Theavy",
        c: "Mao",
        d: "Sok"
    },
    correctAnswers: "b"
},
{
    question: "Question 2: Where do you live?",
    answers: {
        a: "Cambodia",
        b: "Korea",
        c: "Japan",
        d: "Italy"
    },
    correctAnswers: "d"
},
{
    question: "Question 3: What is the type of computer that you use?",
    answers: {
        a: "Dell",
        b: "Lenevo",
        c: "Apple",
        d: "Kompi"
    },
    correctAnswers: "c"
},
{
    question: "Question 4: Where is your favourite place?",
    answers: {
        a: "Kirirom",
        b: "Angkor Wat",
        c: "EAon Mail",
        d: "1 January"
    },
    correctAnswers: "a"
}

]



// _____________________Functions__________________


// Display the list of question on the DOM
// @param questions - the list of  questions
//
function displayQuestions(questions) {

    for (let question in questions) {
        let containers = document.querySelector(".container");

        let ol = document.createElement("ol");
        containers.appendChild(ol);
        let questionTitle = document.createElement("p");
        questionTitle.textContent = arrAnswer[question].question;
        ol.appendChild(questionTitle);

        let answersOfQuestion = arrAnswer[question].answers;

        for (let answer in answersOfQuestion) {
            let li = document.createElement("li");
            ol.appendChild(li);

            let radio = document.createElement("input");
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", "answer" + question);
            radio.setAttribute("value", answer);
            li.appendChild(radio);

            let label = document.createElement("label");
            label.textContent = answersOfQuestion[answer];
            li.appendChild(label);

            if (arrAnswer[question].correctAnswers == radio.value) {
                radio.checked = true;
            }
        }

        // ________________________________Icon ______________________________
        let iconDelete = document.createElement("i");
        iconDelete.className = "fa fa-trash";
        questionTitle.appendChild(iconDelete);
    }
}

function delete_Quiz(event) {
    if (event.target.className === "fa fa-trash") {
        let parent = event.target.parentElement.parentElement;
        parent.remove();
    }
}

// ______________________Hide and Show Question________________
let containers = document.querySelector(".container");
function hideQuiz(event){
    event.preventDefault();

    containers.style.display = "block";
    addBtn.style.display = "block";
}

function showQuiz(event){
    event.preventDefault();
    containers.style.display = "none";
    addBtn.style.display = "none";
}


// _____________________Main___________________

displayQuestions(arrAnswer);
document.addEventListener('click', delete_Quiz)

// ________________________Variable_______________________________

let hide_Quiz = document.getElementById("create_question");
let show_Quiz = document.getElementById("play_quiz");
let addBtn = document.getElementById("btnAdd")

// _____________________Show and Hide Quiz________________________________________
hide_Quiz.addEventListener("click", hideQuiz);
show_Quiz.addEventListener("click", showQuiz);
