
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: " Slump cone test is not suitable for ",
      answers: {
        a: "Very dry mix",
        b: "Collapsed slump",
        c: "Aggregate size > 38mm",
        d: "All the above"
      },
      correctAnswer: "d"
    },

    {
      question: "Which of the following is correct?<br>Collapse slump indicates<br>1. High water cement ratio<br>2. Low workability mix<br>3.Harsh and Lean mix<br>4. Slump test is unsuitable",
      answers: {
        a: "1,2 and 3",
        b: "1,3 and 4",
        c: "2,3 and 4",
        d: "1,2,3 and 4"
      },
      correctAnswer: "b"
    },

    {
      question: "Slump test is the more precise test to obtain workability of concrete.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
        question: "Zero slump concrete indicates ",
        answers: {
          a: "Lean concrete mix",
          b: "Very harsh mix",
          c: "High water cement ratio and wet mix",
          d: "Low water cement ratio and Dry mix"
        },
        correctAnswer: "d"
      },
    {
        question: "IS Standard for slump test is ",
    answers: {
          a: "IS 1199 :1959",
          b: "IS 1343:1980",
          c: "IS 5515:1983",
          d: "IS 456:2000"
        },
        correctAnswer: "a"
      }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
