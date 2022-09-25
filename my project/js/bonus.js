const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const score = document.getElementById("score")
let myTitle = document.getElementById("title");

let colorChanger = (color, time, callback) => {
  setTimeout(() => {
    myTitle.style.color = color;
    if (callback) callback();
  }, time);
};

colorChanger("yellow", 1000, () => {
  colorChanger("green", 1000, () => {
    colorChanger("purple", 1000, () => {
      colorChanger("green", 1000, () => {
        colorChanger("yellow", 1000, () => {
          colorChanger("purple", 1000, () => {
            colorChanger("green", 1000, () => {
              colorChanger("yellow", 1000, () => {
                colorChanger("purple", 1000, () => {
                  colorChanger("yellow", 1000, () => {
                    colorChanger("green", 1000, () => {});
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});

colorChanger();
const quiz = [
    {
      question: "Mardi Gras actually means:",
      answers:{
      a: "Merry Times",
      b: "Spring Welcome",
      c: "Fat Tuesday", 
     },
     correctAnswer:"c",
    },
  
    {
      question: "The religious name for Mardi Gras is:",
      answers:{
      a: "Shrove Tuesday",
      b: "Whitsunday",
      c: "Prelent",
    },
    correctAnswer:"a"
    } ,
  
    {
    
        question: "In New Orleans,Mardi Gras celebrations are centered around this famous neighborhood:",
        answers:{
       a: "Latin Quarter",
       b: "French Quarter",
       c: " Sin City",
    },
       correctAnswer:"b"
     },
     {
        question:
          "New Orleans and Mardi Gras are often associated with this type of music:",
          answers:{
        a: "jazz",
        b: "French folk songs",
        c: "opera",
    },
        correctAnswer:"a"
      },
    
      {
        question: "Many Mardi Gras events are organized by private clubs known as:",
        answers:{
        a: "brotherhoods",
        b: "fraternities",
        c: "krewes",
        },
        correctAnswer:"c"
    },
     
    
      {
        question:
          "King Cakes are a popular Mardi Gras tradition. Inside the cake is hidden a:",
          answers:{
        a: "plastic baby",
        b: "silver dollar",
        c: "treasurehunt map",
    },
        correctAnswer:"a"
      },
    
      {
        question: "The Mardi Gras colors are:",
        answers:{
        a: "red white and blue",
        b: "white and gold",
        c: "purple green and gold",
    },
        correctAnswer:"c"
      },
    
      {
        question:
          "The young of all ages line the Mardi Gras parade route hoping to catch special coins tossed from the floats. The coins are known as:",
          answers:{
        a: " Mardi Gras pennies",
        b: "centimes",
        c: "doubloons",
    },
        correctAnswer:"c"
    
      },
    
      {
        question:
          "In Rio de Janeiro, Brazil, the Mardi Gras celebration is known as:",
          answers:{
        a: "Brazil Day",
        b: "Mardi Gras",
        c: "Carnival",
          },
        correctAnswer:"c"
      },
    
      {
        question:
          "This relatively small country features one of the largest Carnival celebrations in the world:",
          answers:{
        a: "Jamaica",
        b: "Trinidad and Tobago",
        c: "Grenada",
    },
        correctAnswer:"b"
      },
    ];
    


    function buildQuiz() {
        const output = [];
      
        quiz.forEach((currentQuestion, questionNumber) => {
          const answers = [];
      
          for (letter in currentQuestion.answers) {
            answers.push(
              `<label><br>
                  <input type="radio" name="question${questionNumber}" value="${letter}">
                
                  ${currentQuestion.answers[letter]}
                </label>`
            );
          }
      
          output.push(
            `<br><div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>`
          );
        });
      
        quizContainer.innerHTML = output.join("");
        console.log(quizContainer);
      } 

      buildQuiz();
      
    function showResults() {
        const answerContainers = quizContainer.querySelectorAll(".answers");
      
        let numCorrect = 0;
        let myScore = 0;
      
        quiz.forEach((currentQuestion, questionNumber) => {
          const answerContainer = answerContainers[questionNumber];
          const selector = `input[name=question${questionNumber}]:checked`;
          const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      
          if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            myScore += 10;
      
            answerContainers[questionNumber].style.backgroundColor= "green";
          } else {
            answerContainers[questionNumber].style.backgroundColor = "purple";
          }
        });
      
      
        resultsContainer.innerHTML = `you answered  ${numCorrect}  question out of ${quiz.length}`;
        score.innerHTML =  ` your score is:`+myScore ;
       
     
      } 

      submitButton.addEventListener("click", showResults); 