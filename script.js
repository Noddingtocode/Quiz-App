const quizData = [
    { question: "What is the capital of France?", answers: [{ text: "Paris", correct: true }, { text: "Madrid", correct: false }, { text: "Berlin", correct: false }, { text: "Rome", correct: false }] },
    { question: "Which planet is known as the Red Planet?", answers: [{ text: "Mars", correct: true }, { text: "Jupiter", correct: false }, { text: "Venus", correct: false }, { text: "Saturn", correct: false }] },
    { question: "What is the largest mammal?", answers: [{ text: "Blue Whale", correct: true }, { text: "Elephant", correct: false }, { text: "Giraffe", correct: false }, { text: "Polar Bear", correct: false }] },
    { question: "Who wrote 'Romeo and Juliet'?", answers: [{ text: "William Shakespeare", correct: true }, { text: "Charles Dickens", correct: false }, { text: "Mark Twain", correct: false }, { text: "Jane Austen", correct: false }] },
    { question: "What does HTTP stand for?", answers: [{ text: "HyperText Transfer Protocol", correct: true }, { text: "HyperText Transmission Protocol", correct: false }, { text: "HighText Transfer Protocol", correct: false }, { text: "HyperText Transfer Process", correct: false }] },
    { question: "Who painted the Mona Lisa?", answers: [{ text: "Leonardo da Vinci", correct: true }, { text: "Vincent van Gogh", correct: false }, { text: "Pablo Picasso", correct: false }, { text: "Claude Monet", correct: false }] },
    { question: "Which planet is closest to the sun?", answers: [{ text: "Mercury", correct: true }, { text: "Venus", correct: false }, { text: "Earth", correct: false }, { text: "Mars", correct: false }] },
    { question: "In what year did the Titanic sink?", answers: [{ text: "1912", correct: true }, { text: "1905", correct: false }, { text: "1920", correct: false }, { text: "1918", correct: false }] },
    { question: "What is the square root of 144?", answers: [{ text: "12", correct: true }, { text: "10", correct: false }, { text: "14", correct: false }, { text: "16", correct: false }] },
    { question: "Which country is known as the Land of the Rising Sun?", answers: [{ text: "Japan", correct: true }, { text: "China", correct: false }, { text: "Thailand", correct: false }, { text: "South Korea", correct: false }] },
    { question: "What is the chemical symbol for water?", answers: [{ text: "H2O", correct: true }, { text: "O2", correct: false }, { text: "CO2", correct: false }, { text: "NaCl", correct: false }] },
    { question: "Who developed the theory of relativity?", answers: [{ text: "Albert Einstein", correct: true }, { text: "Isaac Newton", correct: false }, { text: "Galileo Galilei", correct: false }, { text: "Nikola Tesla", correct: false }] },
    { question: "What is the largest ocean on Earth?", answers: [{ text: "Pacific Ocean", correct: true }, { text: "Atlantic Ocean", correct: false }, { text: "Indian Ocean", correct: false }, { text: "Arctic Ocean", correct: false }] },
    { question: "Who invented the telephone?", answers: [{ text: "Alexander Graham Bell", correct: true }, { text: "Thomas Edison", correct: false }, { text: "Guglielmo Marconi", correct: false }, { text: "Nikola Tesla", correct: false }] },
    { question: "What is the smallest prime number?", answers: [{ text: "2", correct: true }, { text: "3", correct: false }, { text: "5", correct: false }, { text: "1", correct: false }] },
    { question: "Which element has the chemical symbol 'O'?", answers: [{ text: "Oxygen", correct: true }, { text: "Osmium", correct: false }, { text: "Oganesson", correct: false }, { text: "Oxygenium", correct: false }] },
    { question: "In which year did World War II end?", answers: [{ text: "1945", correct: true }, { text: "1940", correct: false }, { text: "1944", correct: false }, { text: "1947", correct: false }] },
    { question: "Which organ in the human body is responsible for pumping blood?", answers: [{ text: "Heart", correct: true }, { text: "Liver", correct: false }, { text: "Lungs", correct: false }, { text: "Kidneys", correct: false }] },
    { question: "What is the hardest natural substance on Earth?", answers: [{ text: "Diamond", correct: true }, { text: "Graphite", correct: false }, { text: "Steel", correct: false }, { text: "Iron", correct: false }] },
    { question: "What is the capital of Italy?", answers: [{ text: "Rome", correct: true }, { text: "Venice", correct: false }, { text: "Florence", correct: false }, { text: "Milan", correct: false }] },
    { question: "What is the main ingredient in traditional Japanese sushi?", answers: [{ text: "Rice", correct: true }, { text: "Noodles", correct: false }, { text: "Bread", correct: false }, { text: "Fish", correct: false }] },
    { question: "Who discovered penicillin?", answers: [{ text: "Alexander Fleming", correct: true }, { text: "Marie Curie", correct: false }, { text: "Louis Pasteur", correct: false }, { text: "Joseph Lister", correct: false }] },
    { question: "Which gas is most abundant in Earth's atmosphere?", answers: [{ text: "Nitrogen", correct: true }, { text: "Oxygen", correct: false }, { text: "Carbon Dioxide", correct: false }, { text: "Argon", correct: false }] },
    { question: "What is the tallest mountain in the world?", answers: [{ text: "Mount Everest", correct: true }, { text: "K2", correct: false }, { text: "Kangchenjunga", correct: false }, { text: "Lhotse", correct: false }] },
    { question: "What is the freezing point of water in Celsius?", answers: [{ text: "0°C", correct: true }, { text: "32°C", correct: false }, { text: "-32°C", correct: false }, { text: "100°C", correct: false }] },
    { question: "Which country won the FIFA World Cup in 2018?", answers: [{ text: "France", correct: true }, { text: "Brazil", correct: false }, { text: "Germany", correct: false }, { text: "Argentina", correct: false }] },
    { question: "What is the main gas found in the air we breathe?", answers: [{ text: "Nitrogen", correct: true }, { text: "Oxygen", correct: false }, { text: "Carbon Dioxide", correct: false }, { text: "Hydrogen", correct: false }] },
    { question: "Who was the first person to walk on the moon?", answers: [{ text: "Neil Armstrong", correct: true }, { text: "Buzz Aldrin", correct: false }, { text: "Yuri Gagarin", correct: false }, { text: "Michael Collins", correct: false }] },
    { question: "What is the chemical formula for salt?", answers: [{ text: "NaCl", correct: true }, { text: "H2O", correct: false }, { text: "CO2", correct: false }, { text: "O2", correct: false }] },
    { question: "Which continent is the Sahara Desert located in?", answers: [{ text: "Africa", correct: true }, { text: "Asia", correct: false }, { text: "Australia", correct: false }, { text: "South America", correct: false }] },
    { question: "What is the most spoken language in the world?", answers: [{ text: "Mandarin Chinese", correct: true }, { text: "English", correct: false }, { text: "Spanish", correct: false }, { text: "Hindi", correct: false }] },
    { question: "Who painted the Sistine Chapel ceiling?", answers: [{ text: "Michelangelo", correct: true }, { text: "Leonardo da Vinci", correct: false }, { text: "Raphael", correct: false }, { text: "Donatello", correct: false }] }
];


// Function to get 10 random questions from the quizData pool
function getRandomQuestions(quizData, num) {
    return quizData.sort(() => 0.5 - Math.random()).slice(0, num);
}

// Update the quiz with 10 random questions
const selectedQuizData = getRandomQuestions(quizData, 10);

const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const scoreContainer = document.getElementById('score-container');
const quizBox = document.getElementById('quiz-box');
const scoreDisplay = document.getElementById('score');
const restartBtn = document.getElementById('restart-btn');
const resultsContainer = document.getElementById('results-container');

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = []; // To keep track of user answers
let correctAnswers = []; // To keep track of correct answers

function showQuestion() {
    resetState();
    const currentQuestion = selectedQuizData[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
            correctAnswers[currentQuestionIndex] = answer.text; // Store the correct answer
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    userAnswers[currentQuestionIndex] = selectedButton.textContent; // Store the user's answer
    if (correct) {
        score++;
    }
    if (currentQuestionIndex < selectedQuizData.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showScore();
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

function showScore() {
    quizBox.classList.add('hidden');
    scoreContainer.classList.remove('hidden');
    scoreDisplay.textContent = `${score} out of ${selectedQuizData.length}`;
    displayResults(); // Display the results with correct answers
}

function displayResults() {
    const resultsHTML = selectedQuizData.map((question, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = correctAnswers[index];
        const resultClass = userAnswer === correctAnswer ? 'correct' : 'incorrect';
        return `
            <div class="result">
                <p><strong>Question:</strong> ${question.question}</p>
                <p><strong>Your Answer:</strong> ${userAnswer || 'Not answered'}</p>
                <p><strong>Correct Answer:</strong> ${correctAnswer}</p>
                <p class="${resultClass}">${resultClass === 'correct' ? 'Correct' : 'Incorrect'}</p>
            </div>
        `;
    }).join('');
    resultsContainer.innerHTML = resultsHTML;
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    correctAnswers = [];
    scoreContainer.classList.add('hidden');
    quizBox.classList.remove('hidden');
    resultsContainer.innerHTML = ''; // Clear previous results
    const newQuizData = getRandomQuestions(quizData, 10);
    selectedQuizData.splice(0, selectedQuizData.length, ...newQuizData);
    showQuestion();
}

// Initialize the quiz with the first question
showQuestion();

restartBtn.addEventListener('click', resetQuiz);
