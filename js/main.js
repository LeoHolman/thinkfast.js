//Lara feedback
//feedback as to why student is leaving
// maybe student says thanks, and then button for next student
// fix student size at smaller sizes
// anywhere there isn't a defined response, give generic response

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
const responseScreenFeedback = document.getElementById("responseScreenFeedback");
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
        "magazine" : "This kind of information isn't the sort of thing usually published in a magazine.",
        "goodResponses" : ["journal","book","web"]
    },
    "3" : {
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

function studentWalkAway(){
    student.style.animationName = "walkFromDeskDesktop";
}

function studentWalksUp(){
    student.style.animationName = "walkToDeskDesktop";
}

function changeStudentBackpack(){
    let currentStudent = student.firstChild.src;
    var reg = new RegExp('/student[0-9]');
    let currentStudentNumber = currentStudent.match(reg).index + 8;
    let number = Math.floor(Math.random() * 4) + 1;
    if (number != currentStudent[currentStudentNumber]){
        student.firstChild.src = `images/student${number}.png`;
    } else {
        changeStudentBackpack();
    }
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
        setResponseFeedback("Good answer!");
        setResponseScreenText(response);
        setMoreResponse("Other good choices might be: " + otherGoodResponses);
        setTimeout(nextQuestion, 1000);
        setTimeout(studentWalkAway, 500);
        setTimeout(changeStudentBackpack, 1250);
        document.getElementById("book").focus();
        
    } else {
        setResponseFeedback("Not the best choice...");
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