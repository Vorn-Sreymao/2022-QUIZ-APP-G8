
// _____________________Data___________________

let arrAnswer = [
    {
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
    let containers = document.createElement("div");
    containers.className='container';
    for (let question in questions) {
        let numQuestion=parseInt(question)+1;
        let ol = document.createElement("ol");
        containers.appendChild(ol);
        let questionTitle = document.createElement("p");
        questionTitle.textContent = 'Question '+numQuestion.toString()+' :'+arrAnswer[question].question;
        console.log(arrAnswer[question].question);
        ol.appendChild(questionTitle);

        
        let answersOfQuestion = arrAnswer[question].answers;
        for (let answer in answersOfQuestion) {
            let li = document.createElement("li");
            ol.appendChild(li);
            console.log(ol);
                        
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
    for (let question in questions) {
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

            li.appendChild(label)

        }
    }
}

/// remove frome data -----------------------------------------------
function delete_Quiz(event) {
    if (event.target.className === "fa fa-trash") {
        let myIconce=event.target.parentElement.nextSibling.textContent;
        for(let index in arrAnswer){
            if(arrAnswer[index].answers.a===myIconce){
                arrAnswer.splice(index,1);
            }
        }
        displayQuestions(arrAnswer);  
    } 
}

function showAndHide(event){
    if(event.target.textContent ==="Play quiz"){
        let oldContainer = document.getElementsByClassName("containersQuiz");
        if (oldContainer.length > 0){
            oldContainer[0].remove()
        }
        event.preventDefault();
        let containers=document.querySelector('.container');
        containers.style.display = "none";
        addBtn.style.display = "none";
        formAdd.style.display='none';
        userPlayQuiz(arrAnswer);
        inputUsersName.style.display = "block";
        buttonSubmit.style.display = "block";
        showScore.style.display = "none";
        show_Quiz.style.borderBottom = "5px solid";
        show_Quiz.style.borderBottomColor = "#0E578C";
        hide_Quiz.style.borderBottom = "none";
    }
    if (event.target.textContent === "Edit Quiz"){
        let containers=document.querySelector('.container');
        containers.style.display = "block";
        addBtn.style.display = "block";
        formAdd.style.display='none';
        let usersPlay = document.querySelector(".userName"); 
        usersPlay.style.display = "none";
        buttonSubmit.style.display = "none";
        showScore.style.display = "none";
        hide_Quiz.style.borderBottom = "5px solid";
        hide_Quiz.style.borderBottomColor = "#0E578C";
        show_Quiz.style.borderBottom = "none";
    }
}

function hideQuetionAndgQuiz(event){
    event.preventDefault();
    var containers=document.querySelector('.container');
    containers.style.display='none';
    addBtn.style.display = "none";
    formAdd.style.display='block';
    var message=document.querySelector('.alert');
    message.style.display='none';
    
}
function addDataTolist(event){
    event.preventDefault();
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
    let checkCorectAnswer=false;
    if (corection===answerAdd1 ||corection===answerAdd2||corection===answerAdd3 ||corection===answerAdd4 ){
        checkCorectAnswer=true;
    }
    if (questionAdd.length>0 && answerAdd1.length>0 && answerAdd2.length>0 && answerAdd3.length>0 && answerAdd4.length>0 && corection.length>0 && checkQuestion &&checkCorectAnswer)  {
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

        formAdd.style.display='none';
        addBtn.style.display='block';
        displayQuestions(arrAnswer);
    }
    else{
        var message=document.querySelector('.alert');
        message.style.display='block';
    }
    //console.log(containers);

        saveData();
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



// _________________________savedata______________________________
function saveData(){
    localStorage.setItem("arrAnswer" ,JSON.stringify(arrAnswer))
}




// _______________________________Button Submit_______________________
let btnSubmit = document.createElement('button');
btnSubmit.classList.add('btn-submit');
btnSubmit.textContent = "Submit";
document.body.appendChild(btnSubmit);
// _______________________Increment score_______________________________
let results = 0;
let scores = document.querySelector(".score");
function increment_Score(event){
    event.preventDefault();
    let allAnswers = document.getElementsByTagName("lable");
    console.log(allAnswers);
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
document.addEventListener("click", showAndHide);
console.log(show_Quiz);
console.log(hide_Quiz);
addBtn.addEventListener("click", hideQuetionAndgQuiz);
addList.addEventListener("click",addDataTolist);
buttonSubmit.addEventListener("click", submitScore);
buttonSubmit.addEventListener("click", showScores);