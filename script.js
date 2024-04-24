const secretNumber = Math.floor(Math.random() * 100) + 1;
function checkGuess() {
    const guess = parseInt(document.getElementById('guess').value);
    const feedback = document.getElementById('feedback');

    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.textContent = 'Por favor, insira um número entre 1 e 100.';
    } else if (guess === secretNumber) {
        feedback.textContent = `Parabéns! Você acertou o número secreto: ${secretNumber}.`;
    } else if (guess < secretNumber) {
        feedback.textContent = 'Dica: O número é maior que o seu palpite.';
    } else {
        feedback.textContent = 'Dica: O número secreto é menor que o seu palpite.';
    }
}
