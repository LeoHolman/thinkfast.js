//christine notes
//book back cover darker
//newpaper slightly gray
//(web inside a computer monitor)

//Add question number just below question
//When questions are exhausted, give congratulations
// congrats in questions area
//  give librarian information in response screen

//Write preface instructions
//At least hit all of the resources, ~10 questions

//get constants
const student = document.getElementById("student");
const responseSceen = document.getElementById("responseScreen");
const questionScreenText = document.getElementById("questionScreenText");
const responseScreenText = document.getElementById("responseScreenText");
const moreResponse = document.getElementById("moreResponse");
const responseScreenFeedback = document.getElementById("responseScreenFeedback");
const studentImage = document.getElementById("studentImage");
const studentMessage = document.getElementById("studentMessage");
const questions = { 
    "1" : { //Leo question
        "question" : "I'm writing a paper about computer science ethics. Where should I start looking for information?",
        "journal" : "Good place to start looking! Try narrowing your search results to only scholarly articles.",
        "magazine" : "A magazine is not a good place to look for scholarly information.",
        "goodResponses" : ["journal","book","tradePublication"]
    },
    "2" : { //Leo question
        "question" : "Where can I find information about medival architecture?",
        "book" : "This kind of information isn't changing quickly, so you might try a print book.",
        "magazine" : "This kind of information isn't the sort of thing usually published in a magazine.",
        "goodResponses" : ["journal","book","web"]
    },
    "3" : { //Leo question
        "question" : "Where should I go to learn more about IT?",
        "goodResponses" : ["web","book","tradePublication"]
    },
    "default" : { 
        "question" : "placeholder question",
        "book" : "Books can contain both scholarly and practical information on a topic often written by experts in their field.",
        "journal" : "Journals are a great place to look for scholarly information in a given field.",
        "web" : "Good websites can lots of detailed information about a particular subject and can be quickly updated to reflect current information. It's important to know who is producing the website and for what purpose to avoid using biased information.",
        "newspaper" : "Newspapers are good sources for current information or topics of local interest.",
        "tradePublication" : "Trade publications highlight industry trends and include detailed (often practical) articles relevant to a particular field.",
        "magazine" : "Magazines are helpful when researching current topics. They are designed for non-experts and usually include less jargon, or technical language.",
        "goodResponses" : ["journal"]
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

function setResponseFeedback(string){
    responseScreenFeedback.innerHTML = string;
}

function setStudentSpeechBubble(string){
    studentMessage.innerHTML = string;
}

function studentWalkAway(){
    student.style.animationName = "walkFromDeskDesktop";
}

function studentWalksUp(){
    student.style.animationName = "walkToDeskDesktop";
    setStudentSpeechBubble("?");
}

function addNextButton(){
    let nextButton = document.createElement("BUTTON");
    nextButton.innerText = "Next Question";
    nextButton.id = "nextButton";
    nextButton.addEventListener("click", () => {
        document.getElementById("nextButton").remove();
        setTimeout(nextQuestion, 1000);
        setTimeout(studentWalkAway, 500);
        setTimeout(changeStudentBackpack, 1250);
        document.getElementById("book").focus();
    });
    responseSceen.appendChild(nextButton);
}

function changeStudentBackpack(){
    //get source, search for the number of student
    let currentStudent = studentImage.src; 
    var reg = new RegExp('/student[0-9]');
    //number determines backpack color
    let currentStudentNumber = currentStudent.match(reg).index + 8;
    //grab a random number, repeat if grabbed same as previous
    let number = Math.floor(Math.random() * 4) + 1;
    if (number != currentStudent[currentStudentNumber]){
        studentImage.src = `images/student${number}.png`;
    } else {
        changeStudentBackpack();
    }
}

function checkAnswer(buttonName){
    let response = questions[thisQuestionNumber][buttonName];
    if (!response){
        response = questions["default"][buttonName];
    }
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
        setResponseFeedback("Good answer!");
        setResponseScreenText(response);
        setMoreResponse("Other good choices might be: " + otherGoodResponses);
        setStudentSpeechBubble("Thanks!");
        addNextButton();
    } else {
        setResponseFeedback("Not the best choice...");
        setResponseScreenText(response);
        setMoreResponse("Try again!");
        setStudentSpeechBubble("??");
    }
}

//Initalize to 0 so first question appears
var thisQuestionNumber = 0;

function nextQuestion(){
    setTimeout(studentWalksUp, 300);
    if(thisQuestionNumber < Object.keys(questions).length - 1){
        thisQuestionNumber++;
        setQuestionScreenText("Student: " + questions[thisQuestionNumber].question);
    }
}

//set keyboard to target first button
document.getElementById("book").focus();

//Ask first question
nextQuestion();