function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3) + 1;
    if (computerSelection === 1) {
        computerSelection = "toxic";
    } else if (computerSelection === 2) {
        computerSelection = "smurf";
    } else {
        computerSelection = "troll";
    }
    return computerSelection;
}
function oneRound(userSelection, computerSelection) {
    if (userSelection == computerSelection) {
        return roundResult = "draw";
    } else if (userSelection == "toxic" && computerSelection == "troll") {
        return roundResult = "loose";
    } else if (userSelection == "toxic" && computerSelection == "smurf") {
        return roundResult = "win";
    } else if (userSelection == "troll" && computerSelection == "smurf") {
        return roundResult = "loose";
    } else if (userSelection == "troll" && computerSelection == "toxic") {
        return roundResult = "win";
    } else if (userSelection == "smurf" && computerSelection == "toxic") {
        return roundResult = "loose";
    } else if (userSelection == "smurf" && computerSelection == "troll") {
        return roundResult = "win";
    }
}
function getUsername(){
    const userName=document.getElementById("userName").value;
    let name=localStorage.setItem("name", userName);
    return userName,name;
}
function clearBox()
{   
    document.getElementById("start").innerHTML = "";
    const gameArea=document.getElementById("gameArea");
    gameArea.style.display="flex";
    gameArea.style.transform="translateY(0px)";
    gameArea.classList.add("drop");
    document.getElementById("showName").innerHTML = localStorage.getItem("name");
}
function cleanResult(){
    const win=document.getElementById("win");
    win.style.display="none";
    const loose=document.getElementById("loose");
    loose.style.display="none";
    const draw=document.getElementById("draw");
    draw.style.display="none";
}
function startButton(userSelection,userScore){
    cleanResult();
    let computerSelection=computerPlay();
    let result=oneRound(userSelection,computerSelection);
    let resultDiv=document.getElementById(result);
    resultDiv.style.display="flex";
    let computerCard=document.getElementById("questionCard");
    computerCard.style.backgroundImage="url(./images/"+computerSelection+".png)";
    computerCard.style.backgroundColor=colorSelection(computerSelection);
    addPoints(result);
    showScoreboard(playerScore,computerScore);
    checkWin(playerScore,computerScore);
    return userScore;
}
function colorSelection(computerSelection){
    let color;
    if(computerSelection=="smurf"){
        color= "#e9d751";
    }else if(computerSelection=="troll"){
        color="#cf5151";
    }else{
        color="#4e4ed2";
    }
    return color;
}
function addPoints(result) {
    if(changeScore==1){
        playerScore=0;
        computerScore=0;
        changeScore=0;
    }
    if(result=="win"){
        playerScore++;
    }else if(result=="loose"){
        computerScore++;
    }
    console.log(playerScore,computerScore);
    return playerScore,computerScore,changeScore;
}
function showScoreboard(playerScore,computerScore) {
    document.getElementById("userPoints").innerHTML=playerScore;
    document.getElementById("computerPoints").innerHTML=computerScore;
}
function checkWin(playerScore,computerScore) {
    if(playerScore==5){
        let gameArea=document.getElementById("gameArea");
        gameArea.style.display="none";
        let nice=document.getElementById("winGame");
        nice.style.display="flex";
        playerScore=0;
        computerScore=0;
        showScoreboard(playerScore,computerScore);
    }else if(computerScore==5){
        const gameArea=document.getElementById("gameArea");
        gameArea.style.display="none";
        let nice=document.getElementById("looseGame");
        nice.style.display="flex";
        playerScore=0;
        computerScore=0;
        showScoreboard(playerScore,computerScore);
    }
}
function playAgain(){
    const gameArea=document.getElementById("gameArea");
    gameArea.style.display="flex";
    gameArea.style.transform="translateY(0px)";
    gameArea.classList.add("drop");
    let niceLoose=document.getElementById("looseGame");
    niceLoose.style.display="none";
    let niceWin=document.getElementById("winGame");
    niceWin.style.display="none";
    changeScore=1;
    playerScore=0;
    computerScore=0;
    cleanResult();
    showScoreboard(playerScore,computerScore);
    return changeScore;
}
let playerScore=0;let computerScore=0; let changeScore=0;