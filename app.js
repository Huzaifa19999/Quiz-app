var questions = [
    {
        question:'Html Stands For _______________________',
        option: ['Hyper Text Makeup Language',
        'html',
        'Case Cading Style Sheet',
        'Hypertext markup language'
        ],
        correctOption: 'Hypertext markup language',
    },
    {
        question:'Css Stands For _______________________',
        option: [
            'Casecading Style Sheet',
            'Java',
            'Ram',
            'Hypertext markup language'
        ],
        correctOption: 'Casecading Style Sheet',
    },
    {
        question:'Js Stands For _______________________',
        option: [
            'Java Style',
            'Java Script',
            'Script',
            'Script Src'
        ],
        correctOption: 'Java Script',
    },
    {
        question:'Dom Stands For _______________________',
        option: [
            'Document Object Model',
            'html',
            'Css',
            'Java'
        ],
        correctOption: 'Document Object Model',
    },
    {
        question:'Ram Stands For _______________________',
        option: [
            'Read Only Memory',
            'Dom',
            'Random Acccess Memory',
            'For Pc'
        ],
        correctOption: 'Random Acccess Memory',
    },
    {
        question:'Rom Stands For _______________________',
        option: [
            'Hyper Text Markup Language',
            'html',
            'HTml',
            'Read Only Memory'
        ],
        correctOption: 'Read Only Memory',
    },
];


var currentQuestion = document.getElementById('currentQuestion');
var totalQuestions = document.getElementById('totalQuestions');
var question = document.getElementById('question');
var answers = document.getElementById('answers');
var result = document.getElementById('result');
var passStatus = document.getElementById('status');
var clearResult = document.getElementById('clear');
var indexNumber = 0;
var marks = 0;
var percentage;

function renderQuiz(){
    question.innerHTML = questions[indexNumber].question;
    totalQuestions.innerHTML = questions.length
    currentQuestion.innerHTML = indexNumber + 1
    answers.innerHTML = ''
    for(var i = 0; i < questions[indexNumber].option.length; i++){
        answers.innerHTML += `
        <div class="col-md-6 py-2">
            <button onclick = "authenticateAnswer(this, questions[indexNumber].correctOption)" class="btn fs-5 w-100 btn-info p-2">${questions[indexNumber].option[i]}</button>
        </div>`
    }  
}
renderQuiz()


function next(){
    if(indexNumber+1 == questions.length){
        alert("Quiz Completed")
        indexNumber = 0
        result.innerHTML = `Your Score is ${marks}`
        if(marks<5){
            passStatus.className += ' text-danger'
            passStatus.innerHTML = 'FAIL!'
        }
        else{
            passStatus.className += ' text-success'
            passStatus.innerHTML = `Passed with ${percentage = (marks/questions.length)*100}%`
        }
        
        renderQuiz()
    }
    else{
        indexNumber = indexNumber + 1
        renderQuiz()
    }
}
function authenticateAnswer(selectedAnswer, correctAnswer){
    var userOption = selectedAnswer.innerHTML
    if(userOption == correctAnswer){
        marks = marks + 1;
    }
    var allBtns = answers.getElementsByTagName('button');
    for(var i = 0; i < allBtns.length; i++){
        allBtns[i].disabled = true;
        if(allBtns[i].innerHTML == correctAnswer){
            allBtns[i].className += ' bg-success'
            allBtns[i].className += ' fw-bold'
        }
        else{
            allBtns[i].className += ' bg-danger'
        }
    }
}

function clearData(){
    passStatus.innerHTML = ''
    result.innerHTML = ''
}