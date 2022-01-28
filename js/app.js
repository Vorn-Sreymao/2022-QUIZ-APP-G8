
// _____________________Data___________________

let arrAnswer = [{
    question: " what is your name?",
    answers: {
        a: "cham",
        b: "Theavy",
        c: "Mao",
        d: "Sok"
    },
    correctAnswers: "cham"
},
{
    question: " Where do you live?",
    answers: {
        a: "Cambodia",
        b: "Korea",
        c: "Japan",
        d: "Italy"
    },
    correctAnswers: "Italy"
},
{
    question: " What is the type of computer that you use?",
    answers: {
        a: "cham",
        b: "Lenevo",
        c: "Apple",
        d: "Kompi"
    },
    correctAnswers: "Apple"
},
{
    question: " Where is your favourite place?",
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
    // let quizCon = document.querySelector(".containersQuiz");
    // if (quizCon !== null){
    //     quizCon.style.display = "none"
    // }
    var containers = document.createElement("div");
    containers.className='container';
    for (let question in questions) {
        let numQuestion=parseInt(question)+1;
        let ol = document.createElement("ol");
        containers.appendChild(ol);
        let questionTitle = document.createElement("p");
        questionTitle.textContent = 'Question '+numQuestion.toString()+' :'+arrAnswer[question].question;
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
        let iconDelete = document.createElement("i");
        iconDelete.className = "fa fa-trash";
        questionTitle.appendChild(iconDelete);
        document.body.appendChild(containers);


        let getContainer=document.querySelectorAll('.container');
        if (getContainer.length>1){
            getContainer[0].remove();
        }
        
    }
}

function userPlayQuiz(questions){

    let containersQuiz = document.createElement("div");
    containersQuiz.className = "containersQuiz";
    inputUsersName.appendChild(containersQuiz);
    let count = 0;
    for (let question in questions) {
        // let containersQuizzes = document.querySelector(".containersQuiz");
        let ol = document.createElement("ol");
        containersQuiz.appendChild(ol);
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
        }

    }
}

// _______________________________Button Submit_______________________
let btnSubmit = document.createElement('button');
btnSubmit.classList.add('btn-submit');
btnSubmit.textContent = "Submit";
document.body.appendChild(btnSubmit);




/// remove frome data -----------------------------------------------
function delete_Quiz(event) {
    if (event.target.className === "fa fa-trash") {
        let myIconce=event.target.parentElement.nextSibling.textContent;
        for(let index in arrAnswer){
            if(arrAnswer[index].answers.a===myIconce){
                console.log(index);
                arrAnswer.splice(index,1);
                console.log(arrAnswer);
            }
        }
        displayQuestions(arrAnswer);
    }
    
}

// ______________________Hide and Show Question________________
function hideQuiz(event){
    let quizContainers = document.querySelector(".containersQuiz");
    if (quizContainers !== null){
        quizContainers.style.display = "none"
    }
    var containers = document.querySelector(".container");
    event.preventDefault();
    containers.style.display = "block";
    addBtn.style.display = "block";
    formAdd.style.display='none';
    let usersPlay = document.querySelector(".userName"); 
    usersPlay.style.display = "none";
    buttonSubmit.style.display = "none";
    showScore.style.display = "none";
    
}

function showQuiz(event){
    event.preventDefault();
    let oldContainer = document.getElementsByClassName("containersQuiz");
    if (oldContainer.length > 0){
        oldContainer[0].remove()
    }
    var containers=document.querySelector('.container');
    containers.style.display = "none";
    addBtn.style.display = "none";
    formAdd.style.display='none';
    userPlayQuiz(arrAnswer);
    inputUsersName.style.display = "block";
    buttonSubmit.style.display = "block";
    showScore.style.display = "none";
    
}

function hideQuetionAndgQuiz(event){
    event.preventDefault();
    var containers=document.querySelector('.container');
    containers.style.display='none';
    addBtn.style.display = "none";
    formAdd.style.display='block';
    
}


function addDataTolist(event){
    event.preventDefault();
    formAdd.style.display='none';
    addBtn.style.display='block';
    //get element from form-------------------------------------------
    //var containers=document.querySelector('.container');
    //containers.style.display='block';
    let questionAdd=document.querySelector('#questiontext').value;
    let answerAdd1=document.querySelector('#answer1').value;
    let answerAdd2=document.querySelector('#answer2').value;
    let answerAdd3=document.querySelector('#answer3').value;
    let answerAdd4=document.querySelector('#answer4').value;
    let corection=document.querySelector('#corectAnswer').value

    //  to check if the same question ----------------------------------
    let checkQuestion=true;
    for (let value of arrAnswer){
        if(value.question===questionAdd){
            console.log(value.question);
            checkQuestion=false;
        }
    }
    if (questionAdd.length>0 && answerAdd1.length>0 && answerAdd2.length>0 && answerAdd3.length>0 && answerAdd4.length>0 && corection.length>0 && checkQuestion)  {
        let dataObject={};
        let answerlist={};
        answerlist.a=answerAdd1;
        answerlist.b=answerAdd2;
        answerlist.c=answerAdd3;
        answerlist.d=answerAdd4;
        dataObject.question=questionAdd;
        dataObject.answers=answerlist;
        dataObject.correctAnswers=corection
        arrAnswer.push(dataObject);
    }
    else{
        alert('No question add !!')
    }
    displayQuestions(arrAnswer);
    //console.log(containers);
}

function submitScore(){
    showScore.style.display = "block";
    buttonSubmit.style.display = "none";

}

// _______________________Increment score_______________________________

function showScores(){
    let score = document.querySelector(".score");
    
    let label = document.querySelectorAll('input[type="radio"]');
    correctAns = "";
    noTrue = true;
    let result = 0;
    for(let value of label){
        if(value.checked){
            isOnetrue= false;
            for(let answer of arrAnswer){
                if(value.nextElementSibling.textContent === answer.correctAnswers && isOnetrue===false){
                    result += 1;
                    value.nextElementSibling.style.color ="green";
                    score.textContent = result;
                    noTrue=false;
                    isOnetrue= true;
                }
                else if (isOnetrue===false){
                    value.nextElementSibling.style.color ="red";
                }
            }  
        }
        
    }
    if(noTrue){
        score.textContent=result;
    }

}

// ________________________Variable_______________________________

let hide_Quiz = document.getElementById("create_question");
let show_Quiz = document.getElementById("play_quiz");
let addBtn = document.getElementById("btnAdd");
let formAdd=document.querySelector('.formToAdd');
let addList=document.querySelector('.addlist');
let inputUsersName = document.querySelector(".userName");
let showScore = document.querySelector(".header");
let buttonSubmit = document.querySelector(".btn-submit");

// _____________________Main___________________
formAdd.style.display='none';
inputUsersName.style.display='none';
buttonSubmit.style.display='none';
showScore.style.display='none';
displayQuestions(arrAnswer);
document.addEventListener('click', delete_Quiz)
// _____________________Show and Hide Quiz________________________________________
hide_Quiz.addEventListener("click", hideQuiz);
show_Quiz.addEventListener("click", showQuiz);
addBtn.addEventListener("click", hideQuetionAndgQuiz);
addList.addEventListener("click",addDataTolist);
buttonSubmit.addEventListener("click", submitScore);
buttonSubmit.addEventListener("click", showScores);