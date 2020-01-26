//shorten your get elements with variables
const start = $("#startBtn");
const quiz = $("#quiz");
const quizImg = $("#quizImg");
const quizQuestion = $("#quizQuestion");
const optionA = $("#optionA");
const optionB = $("#optionB");
const optionC = $("#optionC");
const optionD = $("#optionD");
const timer = $("#timer");
const progress = $("#progress");
const scoreDisp = $("#score");

//create your question object arrays

let questions = [{
        category: "Entertainment: Video Games",
        type: "multiple",
        difficulty: "easy",
        question: "What is the most expensive weapon in Counter-Strike: Global Offensive?",
        choiceA: "M4A1",
        choiceB: "AWP",
        choiceC: "R8 Revolver",
        choiceD: "Scar-20/G3SG1",
        rightAns: "D",
    },
    {
        category: "Entertainment: Video Games",
        type: "multiple",
        difficulty: "easy",
        question: "Who is the main character of the game Half-Life: Opposing Force?",
        choiceA: "Gordon Freeman",
        choiceB: "Adrian Shephard",
        choiceC: "Alyx Vance",
        choiceD: "Barney Calhoun",
        rightAns: "B",
    },
    {
        category: "Entertainment: Video Games",
        type: "multiple",
        difficulty: "easy",
        question: "In Kingdom Hearts, how many members does Organization XIII have in total?",
        choiceA: "14",
        choiceB: "10",
        choiceC: "13",
        choiceD: "12",
        rightAns: "A",
    },
    {
        category: "Entertainment: Video Games",
        type: "multiple",
        difficulty: "easy",
        question: "What is the main ship used by Commander Shepard in the Mass Effect Franchise called?",
        choiceA: "Osiris",
        choiceB: "Normandy",
        choiceC: "Infinity",
        choiceD: "Endeavour",
        rightAns: "B",
    },
    {
        category: "Entertainment: Video Games",
        type: "multiple",
        difficulty: "easy",
        question: "What was the first video game in the Batman &quot;Arkham&quot; series?",
        choiceA: "Arkham Knight",
        choiceB: "Arkham City",
        choiceC: "Arkham Asylum",
        choiceD: "Arkham Origins",
        rightAns: "C",
    }
    // {
    //     category: "Entertainment: Video Games",
    //     type: "multiple",
    //     difficulty: "easy",
    //     question: "How many Chaos Emeralds are there in the &quot;Sonic the Hedgehog&quot; universe?",
    //     rightAns: "7",
    //     inrightAnss: [
    //         "6",
    //         "8",
    //         "14"
    //     ]
    // },
    // {
    //     category: "Entertainment: Video Games",
    //     type: "multiple",
    //     difficulty: "easy",
    //     question: "In the first game of the Sly Cooper franchise, what family heirloom did Sly Cooper want to steal back?",
    //     rightAns: "Thievius Raccoonus",
    //     inrightAnss: [
    //         "Raccoon Training 101",
    //         "The Art of Sneak",
    //         "Raccoonus Teachus"
    //     ]
    // },
    // {
    //     category: "Entertainment: Video Games",
    //     type: "multiple",
    //     difficulty: "easy",
    //     question: "What year was the game &quot;Overwatch&quot; revealed?",
    //     rightAns: "2014",
    //     inrightAnss: [
    //         "2015",
    //         "2011",
    //         "2008"
    //     ]
    // },
    // {
    //     category: "Entertainment: Video Games",
    //     type: "multiple",
    //     difficulty: "easy",
    //     question: "What ingredients are required to make a cake in Minecraft?",
    //     rightAns: "Milk, Sugar, Egg, and Wheat",
    //     inrightAnss: [
    //         "Milk, Bread, Egg, and Wheat",
    //         "Milk, Sugar Cane, Egg, and Wheat",
    //         "Milk, Sugar, and Wheat"
    //     ]
    // },
    // {
    //     category: "Entertainment: Video Games",
    //     type: "multiple",
    //     difficulty: "easy",
    //     question: "What is the default alias that Princess Garnet goes by in Final Fantasy IX?",
    //     rightAns: "Dagger",
    //     inrightAnss: [
    //         "Dirk",
    //         "Garnet",
    //         "Quina"
    //     ]
    // },
    // {
    //     category: "Entertainment: Video Games",
    //     type: "multiple",
    //     difficulty: "easy",
    //     question: "The starting pistol of the Terrorist team in a competitive match of Counter Strike: Global Offensive is what?",
    //     rightAns: "Glock-18",
    //     inrightAnss: [
    //         "Tec-9",
    //         "Desert Eagle",
    //         "Dual Berretas"
    //     ]
    // },
    // {
    //     category: "Entertainment: Video Games",
    //     type: "multiple",
    //     difficulty: "easy",
    //     question: "What does Solid Snake use to hide himself with?",
    //     rightAns: "Cardboard Box",
    //     inrightAnss: [
    //         "Cloaking Device",
    //         "Metal Crate",
    //         "Cardboard cut-out"
    //     ]
    // },
    // {
    //     category: "Entertainment: Video Games",
    //     type: "multiple",
    //     difficulty: "easy",
    //     question: "Which of the following is not a character in the Street Fighter series?",
    //     rightAns: "Mai Shiranui",
    //     inrightAnss: [
    //         "Laura Matsuda",
    //         "Sakura Kasugano",
    //         "Ibuki"
    //     ]
    // },
    // {
    //     category: "Entertainment: Video Games",
    //     type: "multiple",
    //     difficulty: "easy",
    //     question: "Which &quot;Call Of Duty: Zombies&quot; map introduced the &quot;Staffs Of The Ancients&quot;?",
    //     rightAns: "Origins",
    //     inrightAnss: [
    //         "Shangri-La",
    //         "Revelations",
    //         "Nuketown"
    //     ]
    // },
    // {
    //     category: "Entertainment: Video Games",
    //     type: "multiple",
    //     difficulty: "easy",
    //     question: "In the Super Smash Bros. series, which character was the first one to return to the series after being absent from a previous game?",
    //     rightAns: "Dr. Mario",
    //     inrightAnss: [
    //         "Mewtwo",
    //         "Lucas",
    //         "Roy"
    //     ]
    // }
];

//setting up variables to render our questions, have the timer count down, and cycle through questions

let lastQ = questions.length - 1;
let currentQ = 0;
let count = 0;
const questionTime = 10;
let TIMER;
let score = 0;


//starting the game by clicking the start button
$(start).on("click", function() {
    $("#start").hide("slow");
    callQuestion();
    quiz.show("slow");
    startTimer();
    TIMER = setInterval(startTimer, 1000);

});

//Call question function
function callQuestion() {
    let q = questions[currentQ];
    let qH1 = $("<h1>").addClass("display-4");

    quizQuestion.append(qH1).text(q.question);
    optionA.text(q.choiceA);
    optionB.text(q.choiceB);
    optionC.text(q.choiceC);
    optionD.text(q.choiceD);
}

//start timer
function startTimer(){
    if(count <= questionTime) {
        timer.text(count);
        count++;
    } else {
        //if no answer is selected before the timer runs out count as wrong answer
        count = 0;
        wrongAns();
        if(currentQ < lastQ){
            currentQ++;
            callQuestion();
        } else {
            //If we have answered all the questions we can end here
            clearInterval(TIMER);
            showScore();
        }
    }
}

//Here we are checking our answer

function check(userAns){
    if(userAns === questions[currentQ].rightAns){
        score++;
        rightAns();
    } else {
        wrongAns();
    }
    count = 0;
    if(currentQ < lastQ){
        currentQ++;
        callQuestion();
    } else {
        clearInterval(TIMER);
        showScore();
    }
} 


function rightAns() {
    //play cheering soundclip
    alert("Correct!");

}

function wrongAns() {
    //play aww soundclip
    alert("Incorrect!");
}

//This is how we're going to show the score
function showScore() {
    scoreDisp.show("slow");
    const scorePercent = Math.round(100 * score/questions.length);

    //play songs for different percentages

    scoreDisp.innerHTML = $("p").text(scorePercent);
}