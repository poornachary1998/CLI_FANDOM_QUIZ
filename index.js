var readLineSync = require("readline-sync");
var score = 0;
const chalk = require('chalk');
var userName = readLineSync.question(chalk.bgBlackBright.green("Please Enter your name :"));

console.log(chalk.bgBlue.white("Hiiii ",userName,"!! Welome to JavaScript CLI Quiz ✨   created by Poorna."));
console.log();
console.log("--------------------------------------");
console.log(chalk.underline.bgMagentaBright.white("RULES!  Choose the right option, if you choose the right answer you will score 1 point, if you choose wrong answer your score will be reduced by 1 (-1 point)"));
console.log("--------------------------------------");
console.log(chalk.green(" ALL THE BEST !!!👍"));
console.log("--------------------------------------");

//play fuction
 function play(question,answer)
 {
   var userAnswer = readLineSync.question(question);
   
   if(userAnswer.toUpperCase() === answer.toUpperCase())
   {
     score = score+1;
     console.log("You have entered option:",answer);
     console.log(chalk.bgBlackBright.green("Bravo, You are Right 🎁  !!!"));
   }
     else
     {
       score = score-1;
console.log(chalk.bgBlack.red.inverse("Oops! your choice is Wrong !🎭"));
console.log(chalk.bgGreen.black("The correct answer is: ",answer));
     }
      console.log("Your current score  :",score);
     console.log("----------------------------------");
 }
var questions = [
  {
   question:
    `Q1. What is the thor’s hammer name ?
a: vanir
b: mjolnir
c: aesir
d: norn\n`,
answer:"B"
  },
  {question:
  `Q2. What is Captain America’s shield made of?
a: Adamantium
b: Vibranium
c: Promethium
d: Carbonadium \n`,
  answer:"B"
  },
  {question:
  `Q3.In which movie did Spider-Man make his first appearance in the MCU?
a: Iron Man 3
b: End game
c: Captain america: civil war
d: Winter solider\n`,
  answer:"C"
  },
  {question:
  `Q4. Who is the Winter Soldier?
a: Groot
b: Bucky
c: captain america
d: Rhodes\n`,
  answer:"B"
  },
  {question:
  `Q5.On what planet was the Soul Stone in Infinity War ?
a: Vormir
b: Nowhere
c: sokovia
d: Titans\n`,
  answer:"A"
  },
  {question:
  `Q6.  Before becoming Vision, what is the name of Iron Man’s A.I. butler ?
a: H.O.M.E.R.
b: J.A.R.V.I.S.
c: A.L.F.R.E.D.
d: M.A.R.V.I.N.\n`,
  answer:"B"
  },
  {question:
  `Q7. What is the real name of the Black Panther ?
a: T’Challa
b: M’Baku
c: N’Jadaka
d: N’Jobu \n`,
  answer:"A"
  },
  {question:
  `Q8. Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet ?
a: Thor
b: Loki
c: The Collector
d: Tony Stark \n`,
  answer:"B"
  },
  {question:
  `Q9. Who does the Mad Titan sacrifice to acquire the Soul Stone ?
a: Nebula
b: Ebony Maw
c: Cull Obsidian
d: Gamora \n`,
  answer:"D"
  },
  {question:
  `Q10. What song does Baby Groot dance to at the end of the first Guardian of the Galaxy?
a: ‘Cherry Bomb’ – The Runaways
b: ‘Ain’t No Mountain High Enough’ – Marvin Gaye & Tammi Terrell
c: ‘I Want You Back’ – The Jackson 5
d: ‘Hooked On A Feeling’ – Voidoid\n`,
  answer:"C"
  }
  ];
  for(var j=0;j<questions.length;j++)
  {
    var currentQuestion = questions[j];
    play(currentQuestion.question, currentQuestion.answer)
  }
   console.log(chalk.bgMagentaBright.green("Yay!! YourTotal score  is : ",score,"/10 😎"));
     console.log("+++++++++++++++++++++++++++++++");

  var highScore = [
       {
       name:"Poorna",
       score: "10 points"
     },
     {
       name:"Rohan",
       score:"10 Points"
     },
     {
       name:"Akula sai charan",
       score:"8 Points"
     }
     ]
     for(var i=0;i<highScore.length;i++)
     {
       var newHigh = highScore[i];
       console.log(chalk.bgBlackBright.white("Top Place :",newHigh.name,"with",newHigh.score));
     }
     console.log();
     console.log(chalk.bgBlue.whiteBright("Thank You! Check out the high scores, if you should be there ping me and I'll update it!! 🥂"));
     