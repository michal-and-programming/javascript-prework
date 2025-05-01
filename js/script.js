const playGame= function(playerInput) {
  clearMessages();
  const getMoveName = function(argMove) {
    if (argMove == "1") {
      return "kamień";
    } else if (argMove == "2") {
      return "papier";
    } else if (argMove == "3") {
      return "nożyce";
    }
  }

  const displayResult = function(argComputerMove, argPlayerMove) {
    if (argComputerMove == "kamień" && argPlayerMove == "papier") {
      printMessage("Ty wygrywasz!");
    } else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
      printMessage("TY wygrywasz");
    } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
      printMessage("TY wygrywasz");
    } else if (argComputerMove == "kamień" && argPlayerMove == "nożyce") {
      printMessage("Komputer wygrywa!");
    } else if (argComputerMove == "papier" && argPlayerMove == "kamień") {
      printMessage("Komputer wygrywa!");
    } else if (argComputerMove == "nożyce" && argPlayerMove == "papier") {
      printMessage("Komputer wygrywa!");
    } else if (argComputerMove == argPlayerMove) {
      printMessage("Remis");
    }
  }
  console.log(displayResult);
  const randomNumberTip = 3;
  let randomNumber = Math.floor(Math.random() * randomNumberTip +1);

  let computerMove = getMoveName(randomNumber);

  printMessage("Mój ruch to: " + computerMove);

  let playerMove = getMoveName(playerInput);

  printMessage("Twój ruch to: " + playerMove);

  displayResult(computerMove, playerMove);
  console.log("displayResult() otrzymał - komputer:", computerMove, playerMove);
}
document.getElementById("play-rock").addEventListener("click", function () {
  playGame("1");
});
document.getElementById("play-paper").addEventListener("click", function () {
  playGame("2");
});
document.getElementById("play-scissors").addEventListener("click", function () {
  playGame("3");
});
