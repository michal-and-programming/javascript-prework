function getMoveName(argMove) {
  if (argMove == "1") {
    return "kamień";
  } else if (argMove == "2") {
    return "papier";
  } else if (argMove == "3") {
    return "nożyce";
  } else {
    return "nieznany ruch";
  }
}

function displayResult(argComputerMove, argPlayerMove) {
  if (argComputerMove == "kamień" && argPlayerMove == "papier") {
    printMessage("Ty wygrywasz!");
  } else if ((argComputerMove = "papier" && argPlayerMove == "nożyce")) {
    printMessage("TY wygrywasz");
  } else if ((argComputerMove = "nożyce" && argPlayerMove == "kamień")) {
    printMessage("TY wygrywasz");
  } else if (argComputerMove == "kamień" && argPlayerMove == "nożyce") {
    printMessage("Komputer wygrywa!");
  } else if (argComputerMove == "papier" && argPlayerMove == "kamień") {
    printMessage("Komputer wygrywa!");
  } else if (argComputerMove == "nożyce" && argPlayerMove == "papier") {
    printMessage("Komputer wygrywa!");
  } else if (argPlayerMove == "nieznany ruch") {
    printMessage("Błąd wybierz ponownie");
  }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log("Wylosowana liczba to: " + randomNumber);

let computerMove = getMoveName(randomNumber);

/*if (randomNumber == "1") {
  computerMove = "kamień";
} else if (randomNumber == "2") {
  computerMove = "papier";
} else if (randomNumber == "3") {
  computerMove = "nożyce";
}*/

printMessage("Mój ruch to: " + computerMove);

let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
console.log("Gracz wpisał: " + playerInput);

let playerMove = getMoveName(playerInput);

/*if (playerInput == "1") {
  playerMove = "kamień";
} else if (playerInput == "2") {
  playerMove = "papier";
} else if (playerInput == "3") {
  playerMove = "nożyce";
}*/
printMessage("Twój ruch to: " + playerMove);

displayResult(computerMove, playerMove);

/*if (computerMove == "kamień" && playerMove == "papier") {
  printMessage("Ty wygrywasz!");
} else if (computerMove == "papier" && playerMove == "nożyce") {
  printMessage("Ty wygrywasz!");
} else if (computerMove == "nożyce" && playerMove == "kamień") {
  printMessage("Ty wygrywasz!");
} else if (computerMove == "kamień" && playerMove == "nożyce") {
  printMessage("Komputer wygrywa!");
} else if (computerMove == "papier" && playerMove == "kamień") {
  printMessage("Komputer wygrywa!");
} else if (computerMove == "nożyce" && playerMove == "papier") {
  printMessage("Komputer wygrywa!");
} else if (computerMove == playerMove) {
  printMessage("Remis!");
} else if (playerMove == "nieznany ruch") {
  printMessage("Błąd wybierz ponownie");
}*/
