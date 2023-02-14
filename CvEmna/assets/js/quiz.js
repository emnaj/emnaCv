const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<scripting>",
        b: "<script>  ",
        c: "<javascript>",
        d: "<js>",
        correct: "b",
    },
    {
        question: "How to write an IF statement in JavaScript?",
        a: "if (i == 5)    ",
        b: "if i = 5 then   ",
        c: "if i = 5",
        d: "if i == 5 then",
        correct: "a",
    },
    {
        question: "How does a FOR loop start? ",
        a: "for (i = 0; i <= 5; i++)  ",
        b: "for (i = 0; i <= 5)  ",
        c: "for (i <= 5; i++)",
        d: "for i = 1 to 5",
        correct: "a",
    },
    {
        question: "Which character is used to indicate an end tag?",
        a: "^  ",
        b: "/    ",
        c: "<",
        d: "*",
        correct: "b",
    },
    {
        question: "Which of these elements are all <table> elements?",
        a: "<table><tr><tt>",
        b: "<table><head><tfoot>  ",
        c: "<thead><body><tr>",
        d: "<table><tr><td>",
        correct: "d",
    },
    {
        question: "How can you make a numbered list?",
        a: "<ol>",
        b: "<list>  ",
        c: "<dl>",
        d: "<ul>",
        correct: "a",
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        a: "class  ",
        b: "font  ",
        c: "styles",
        d: "style",
        correct: "d",
    },
    {
        question: "How do you insert a comment in a CSS file?",
        a: "// this is a comment // ",
        b: "// this is a comment ",
        c: "' this is a comment",
        d: "/* this is a comment */ ",
        correct: "d",
    },
    {
        question: "Which CSS property controls the text size?",
        a: "text-style  ",
        b: "font-style  ",
        c: "font-size  ",
        d: "text-size",
        correct: "c",
    },
    {
        question: "How do you display hyperlinks without an underline?",
        a: "a {text-decoration:no-underline;}  ",
        b: "a {underline:none;}  ",
        c: "a {text-decoration:none;} ",
        d: "a {decoration:no-underline;}",
        correct: "c",
    },
    {
        question: "How do you make each word in a text start with a capital letter?",
        a: "text-transform:capitalize  ",
        b: "transform:capitalize    ",
        c: "You can't do that with CSS",
        d: "text-style:capitalize",
        correct: "a",
    },
    
    
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})