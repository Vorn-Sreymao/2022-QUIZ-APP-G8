//  -------------------List of question------------------------------- 
let arrQuestion=['Which is subordinator fanboy ?',' what is compound sentent?','which is present simple ?'];
//  -------------------List of Answer---------------------------------
let arrAnswer=[
    ['and','a','of','on'],
    ['I am student and I learn IT','who speak with you is my friend','I live near you.','let go'],
    ['I am a student.','I went to Takeo.','I lived in phnom penh.','I have ate right befor you?'],
]
//----------------------Element of html--------------------------------
let mycontainer=document.querySelector('.container');
//----------------------Creat element of html---------------------------
for (let qst in arrQuestion){
    let box=parseInt(qst)+1;
    // ---creat Questionbox-----------------------

    let boxOfQuestion=document.createElement('div');
    boxOfQuestion.className='question-box';
    boxOfQuestion.classList.add('question-box'+ box.toString());
    //console.log(boxOfQuestion)

    //---creat Pharagrahp------------------------

    let questionText=document.createElement('p');
    questionText.className='question';

    //---creat Span------------------------

    let spanQuestionTex=document.createElement('span');
    spanQuestionTex.textContent='QUESTION : '+ arrQuestion[qst];

    // append span to QuestionText and append QuestionText to boxOfQuestion--

    questionText.appendChild(spanQuestionTex);
    boxOfQuestion.appendChild(questionText);

    // create labe of Text answer--------------------------------------

    let creatLabel=document.createElement('label');
    creatLabel.setAttribute('id','ans');
    creatLabel.textContent="ANSWER : "
    boxOfQuestion.appendChild(creatLabel);

    // loop of the list of array of answer by using index in arrayQuestion--

    for (let text in arrAnswer[qst]){
        //let num=parseInt(text)+1;
        // Create button radio------------------------------------

        let creatRadio=document.createElement('input');
        let creatBr=document.createElement('br');
        creatRadio.type='radio';
        creatRadio.name='answer'+box.toString();
        creatRadio.value=arrAnswer[qst][text];
        creatRadio.setAttribute('id','answer'+box.toString());
        // apped radio button to boxOfQuestion--------------------

        boxOfQuestion.appendChild(creatBr);
        boxOfQuestion.appendChild(creatRadio);

        // Create labal of Answer--------------------------------

        let mylabelAnswer=document.createElement('label');
        mylabelAnswer.setAttribute('id','myanswer');
        mylabelAnswer.name='myanswer'+box.toString();
        mylabelAnswer.textContent=arrAnswer[qst][text];
        boxOfQuestion.appendChild(mylabelAnswer);
        //console.log(text);
        
    }
    // append the now boxOfQuestion in to container of html-----------
    
    mycontainer.appendChild(boxOfQuestion);
}


