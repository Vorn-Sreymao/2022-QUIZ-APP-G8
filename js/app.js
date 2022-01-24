
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
        var containers = document.querySelector(".container");

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
    formAdd.style.display='none';
}

function showQuiz(event){
    event.preventDefault();
    containers.style.display = "none";
    addBtn.style.display = "none";
    formAdd.style.display='none';
}
function hideQuetionAndgQuiz(event){
    event.preventDefault();
    containers.style.display = "none";
    addBtn.style.display = "none";
    formAdd.style.display='block';
}
function addDataTolist(event){
    event.preventDefault();
    formAdd.style.display='none';
    //get element from form-------------------------------------------
    let questionAdd=document.querySelector('#questiontext').value;
    let answerAdd1=document.querySelector('#answer1').value;
    let answerAdd2=document.querySelector('#answer2').value;
    let answerAdd3=document.querySelector('#answer3').value;
    let answerAdd4=document.querySelector('#answer4').value;
    let dataObject={};
    let answerlist={};
    answerlist.a=answerAdd1;
    answerlist.b=answerAdd2;
    answerlist.c=answerAdd3;
    answerlist.d=answerAdd4;
    dataObject.question=questionAdd;
    dataObject.answers=answerlist;
    arrAnswer.push(dataObject);
    console.log(arrAnswer);
    displayQuestions(arrAnswer);
    containers.style.display = "block";

}


// ________________________Variable_______________________________

let hide_Quiz = document.getElementById("create_question");
let show_Quiz = document.getElementById("play_quiz");
let addBtn = document.getElementById("btnAdd");
let formAdd=document.querySelector('.formToAdd');
let addList=document.querySelector('.addlist');




// _____________________Main___________________
formAdd.style.display='none';
displayQuestions(arrAnswer);
document.addEventListener('click', delete_Quiz)
// _____________________Show and Hide Quiz________________________________________
hide_Quiz.addEventListener("click", hideQuiz);
show_Quiz.addEventListener("click", showQuiz);
addBtn.addEventListener("click", hideQuetionAndgQuiz);
addList.addEventListener("click",addDataTolist);
