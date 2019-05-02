//Lara feedback
// Reiterate "Choose a source to start with"

//prevent moving on before first correct answer
//display other possible answers

//student slides away
//new student with different colored backpack slides away


//get constants
const student = document.getElementById("student");
const responseSceen = document.getElementById("responseScreen");
const questionScreenText = document.getElementById("questionScreenText");
const responseScreenText = document.getElementById("responseScreenText");
const moreResponse = document.getElementById("moreResponse");
const questions = { //placeholder questions
    "1" : {
        "question" : "I'm writing a paper about computer science ethics.",
        "journal" : "Good place to start looking! Try narrowing your search results to only scholarly articles.",
        "goodResponses" : ["journal","book","tradePublication"]
    },
    "2" : {
        "question" : "Where can I find information about medival architecture?",
        "book" : "This kind of information isn't changing quickly, so you might try a print book.",
        "goodResponses" : ["journal","book","web"]
    }
};

//Wire up buttons
document.getElementById("book").addEventListener("click", () => {
    checkAnswer("book");
});

document.getElementById("journal").addEventListener("click", () => {
    checkAnswer("journal");
});

document.getElementById("web").addEventListener("click", () => {
    checkAnswer("web"); 
});

document.getElementById("newspaper").addEventListener("click", () => {
    checkAnswer("newspaper");
});

document.getElementById("tradePublication").addEventListener("click", () => {
    checkAnswer("tradePublication");
}); 

document.getElementById("magazine").addEventListener("click", () => {
    checkAnswer("magazine");
}); 

function setResponseScreenText(string){
    responseScreenText.innerHTML = string;
}

function setQuestionScreenText(string){
    questionScreenText.innerHTML = string;
}

function setMoreResponse(string){
    moreResponse.innerHTML = string;
}

function studentWalkAway(){
    student.style.animationName = "walkFromDeskDesktop";
}

function checkAnswer(buttonName){
    let response = questions[thisQuestionNumber][buttonName];
    let goodResponses = questions[thisQuestionNumber].goodResponses;
    var otherGoodResponses = [];
    var found = false;
    for (var i = 0; i<goodResponses.length; i++){
        if(goodResponses[i] == buttonName) {
            found = true;
         }
         else {
             otherGoodResponses.push(goodResponses[i]);
             console.log(otherGoodResponses);
         }
    }
    otherGoodResponses = otherGoodResponses.join(", ")
    if(found){
        setResponseScreenText(response);
        setMoreResponse("You might also try: " + otherGoodResponses);
        setTimeout(nextQuestion, 1000);
        setTimeout(studentWalkAway, 500);
        document.getElementById("book").focus();
    } else {
        setResponseScreenText(response);
        setMoreResponse("Try again!");
    }
}

//Initalize to 0 so first question appears
var thisQuestionNumber = 0;

function nextQuestion(){
    if(thisQuestionNumber < Object.keys(questions).length){
        thisQuestionNumber++;
        setQuestionScreenText("Student: " + questions[thisQuestionNumber].question);
    }
}

//set keyboard to target first button
document.getElementById("book").focus();

//Ask first question
nextQuestion();