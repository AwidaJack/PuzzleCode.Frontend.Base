var randomNumber = Math.floor(Math.random() * 100) + 1; 

var attempts = 3;

while (attempts > 0) {
  var userGuess = parseInt(prompt("Угадайте число от 1 до 100. Осталось попыток: " + attempts));

  if (userGuess === randomNumber) {
    console.log("Поздравляю, вы угадали число!");
    break;
  } else if (userGuess < randomNumber) {
    console.log("Загаданное число больше.");
  } else {
    console.log("Загаданное число меньше.");
  }

  attempts--;
}

if (attempts === 0) {
  console.log("У вас закончились попытки. Было загадано число: " + randomNumber);
}
