
// _____________________Data___________________

let arrAnswer = [{
    question: "Question 1: what is your name?",
    answers: {
        a: "Cham",
        b: "Theavy",
        c: "Mao",
        d: "Sok"
    },
    correctAnswers: "Theavy"
},
{
    question: "Question 2: Where do you live?",
    answers: {
        a: "Cambodia",
        b: "Korea",
        c: "Japan",
        d: "Italy"
    },
    correctAnswers: "Italy"
},
{
    question: "Question 3: What is the type of computer that you use?",
    answers: {
        a: "Dell",
        b: "Lenevo",
        c: "Apple",
        d: "Kompi"
    },
    correctAnswers: "Apple"
},
{
    question: "Question 4: Where is your favourite place?",
    answers: {
        a: "Kirirom",
        b: "Angkor Wat",
        c: "EAon Mail",
        d: "1 January"
    },
    correctAnswers: "Kirirom"
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

            let label = document.createElement("label");
            label.textContent = answersOfQuestion[answer];
            if (arrAnswer[question].correctAnswers === answersOfQuestion[answer]){
                label.style.backgroundColor = "aquamarine";
            }
            li.appendChild(label);

        
        }

        // ________________________________Icon ______________________________
        let iconEdit = document.createElement("i");
        iconEdit.className = "fa fa-edit";
        let iconDelete = document.createElement("i");
        iconDelete.className = "fa fa-trash";
        let mainOfBtn = document.createElement("li");
        mainOfBtn.appendChild(iconEdit);
        mainOfBtn.appendChild(iconDelete);
        questionTitle.appendChild(mainOfBtn);

    }
}

function delete_Quiz(event) {
    if (event.target.className === "fa fa-trash") {
        let index = event.target.parentElement.dataset;
        arrAnswer.splice(index,1);
        console.log(arrAnswer);
        let childOl=document.querySelector("ol");
        childOl.parentElement.removeChild(childOl);
        displayQuestions();
        
    }
    
}





function addQuestion(event){

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
