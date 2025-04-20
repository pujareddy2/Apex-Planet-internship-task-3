const countryCards = document.querySelectorAll(".country-card");
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {
  const filter = searchInput.value.toLowerCase();
  countryCards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(filter) ? "block" : "none";
  });
});

const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    correct: "Delhi"
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "Thailand", "South Korea"],
    correct: "Japan"
  },
  {
    question: "Which continent is Brazil located in?",
    options: ["Asia", "Europe", "South America", "Africa"],
    correct: "South America"
  },
  {
    question: "What is the capital of China?",
    options: ["Shanghai", "Beijing", "Shenzhen", "Hong Kong"],
    correct: "Beijing"
  },
  {
    question: "Which city is the capital of France?",
    options: ["Paris", "Nice", "Lyon", "Marseille"],
    correct: "Paris"
  },
  {
    question: "Which animal is native to Australia?",
    options: ["Tiger", "Elephant", "Kangaroo", "Panda"],
    correct: "Kangaroo"
  }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  document.getElementById("quizBox").style.display = "block";
  currentQuestion = 0;
  score = 0;
  updateScore();
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;
  const buttons = document.querySelectorAll(".answers button");
  document.getElementById("feedback").textContent = "";

  buttons.forEach((btn, index) => {
    btn.textContent = q.options[index];
    btn.dataset.correct = q.options[index] === q.correct;
    btn.disabled = false;
  });
}

function checkAnswer(button) {
  const isCorrect = button.dataset.correct === "true";
  const feedback = document.getElementById("feedback");

  if (isCorrect) {
    score++;
    feedback.textContent = "✅ Correct!";
  } else {
    feedback.textContent = "❌ Incorrect!";
  }

  document.querySelectorAll(".answers button").forEach(btn => {
    btn.disabled = true;
  });

  updateScore();

  currentQuestion++;
  if (currentQuestion < questions.length) {
    setTimeout(() => {
      showQuestion();
    }, 1500);
  } else {
    setTimeout(() => {
      document.getElementById("quizBox").style.display = "none";
      document.getElementById("scoreDisplay").textContent =
        `🎉 Quiz Completed! Your Score: ${score}/${questions.length}`;
    }, 1500);
  }
}

function updateScore() {
  document.getElementById("scoreDisplay").textContent = `Score: ${score}`;
}

function resetQuiz() {
  score = 0;
  currentQuestion = 0;
  document.getElementById("quizBox").style.display = "none";
  document.getElementById("scoreDisplay").textContent = "";
}
