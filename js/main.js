//Lara feedback
//new student with different colored backpack slides up

//Aaron notes
//Remove images at mobile size

//christine notes
//book back cover darker
//newpaper slightly gray
//(web inside a computer monitor)


//get constants
const student = document.getElementById("student");
const responseSceen = document.getElementById("responseScreen");
const questionScreenText = document.getElementById("questionScreenText");
const responseScreenText = document.getElementById("responseScreenText");
const moreResponse = document.getElementById("moreResponse");
const questions = { //placeholder questions
    "1" : {
        "question" : "I'm writing a paper about computer science ethics. Where should I start looking for information?",
        "journal" : "Good place to start looking! Try narrowing your search results to only scholarly articles.",
        "magazine" : "A magazine is not a good place to look for scholarly information.",
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

function studentWalksUp(){
    student.style.animationName = "walkToDeskDesktop";
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
    setTimeout(studentWalksUp, 300);
    if(thisQuestionNumber < Object.keys(questions).length){
        thisQuestionNumber++;
        setQuestionScreenText("Student: " + questions[thisQuestionNumber].question);
    }
}

//set keyboard to target first button
document.getElementById("book").focus();

//Ask first question
nextQuestion();