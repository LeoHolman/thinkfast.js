//get constants
const questionScreenText = document.getElementById("questionScreenText");
const responseScreenText = document.getElementById("responseScreenText");
const questions = {
    "1" : {
        "question" : "I'm writing a paper about computer science ethics.",
        "database" : "Good place to start looking! Try narrowing your search results to only scholarly articles."
    },
    "2" : {
        "question" : "Where can I find information about medival architecture?",
        "book" : "This kind of information isn't changing quickly, so you might try a print book."
    }
};

//Wire up buttons
document.getElementById("journal").addEventListener("click", () => {
    checkAnswer("journal");
});

document.getElementById("newspaper").addEventListener("click", () => {
    checkAnswer("newspaper");
});

document.getElementById("book").addEventListener("click", () => {
    checkAnswer("book");
});

document.getElementById("web").addEventListener("click", () => {
    checkAnswer("web");
});

document.getElementById("database").addEventListener("click", () => {
    checkAnswer("database");
});

// document.getElementById("magazine").addEventListener("click", () => {
//     checkAnswer("magazine");
// });

// document.getElementById("encyclopedia").addEventListener("click", () => {
//     checkAnswer("encyclopedia");
// });

function setResponseScreenText(string){
    responseScreenText.innerHTML = string;
}

function setQuestionScreenText(string){
    questionScreenText.innerHTML = string;
}

function checkAnswer(buttonName){
    let response = questions[thisQuestionNumber][buttonName];
    setResponseScreenText(response);
    setTimeout(nextQuestion, 1000);
    document.getElementById("book").focus();

}
//Initalize to 0 so first question appears
var thisQuestionNumber = 0;

function nextQuestion(){
    if(thisQuestionNumber < Object.keys(questions).length){
        thisQuestionNumber++;
        setQuestionScreenText(questions[thisQuestionNumber].question);
    }
}

//set keyboard to target first button
document.getElementById("book").focus();

//Ask first question
nextQuestion();