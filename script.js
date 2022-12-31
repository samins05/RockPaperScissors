alert("Welcome to the Extreme Rock Paper Scissors Game! You will shoot rock, paper, or scissors. If you win, then you collect the opponents weapon and add it to your arsenal. If you play a weapon 3 times in a row, that weapons is broken and cannot be used anymore. You must collect all weapons in the game to win.");

playerWeapon='';
cpuWeapon='';
pRockCount=5;
pPaperCount=5;
pScissorsCount=5;
cRockCount=5;
cPaperCount=5;
cScissorsCount=5;
prevWeapon='';
newLogMsg= '';
rClick=0;
pClick=0;
sClick=0;
rockCanPlay=true;
scissorsCanPlay=true;
paperCanPlay=true;
consecTie=0;

function reset(){
    playerWeapon='';
    cpuWeapon='';
    pRockCount=5;
    pPaperCount=5;
    pScissorsCount=5;
    cRockCount=5;
    cPaperCount=5;
    cScissorsCount=5;
    prevWeapon='';
    newLogMsg= '';
    rClick=0;
    pClick=0;
    sClick=0;
    rockCanPlay=true;
    scissorsCanPlay=true;
    paperCanPlay=true;

    log.innerHTML = "Game Log";
    playerRockCount.innerHTML = "Rock Count: 5";
    playerPaperCount.innerHTML = "Paper Count: 5";
    playerScissorsCount.innerHTML = "Scissors Count: 5";

    cpuRockCount.innerHTML = "Rock Count: " +cRockCount;
    cpuPaperCount.innerHTML = "Paper Count: " +cPaperCount;
    cpuScissorsCount.innerHTML = "Scissors Count: " +cScissorsCount;

    pRock.src="rock.jpg";
    pPaper.src ="paper.jpg";
    pScissors.src="scissors.jpg";
}

function initialize(){
    pRock = document.getElementById("pRock");
    pPaper = document.getElementById("pPaper");
    pScissors = document.getElementById("pScissors");
    cRock = document.getElementById("cRock");
    cPaper = document.getElementById("cPaper");
    cScissors = document.getElementById("cScissors");
    log = document.getElementById("gameLog");

    playerRockCount= document.getElementById("playerRock");
    playerPaperCount = document.getElementById("playerPaper");
    playerScissorsCount = document.getElementById("playerScissors");

    cpuRockCount= document.getElementById("comRock");
    cpuPaperCount = document.getElementById("comPaper");
    cpuScissorsCount = document.getElementById("comScissors");
}

function shootRock(){
    if(rockCanPlay&&pRockCount>0&&cScissorsCount>0){
    rClick++;
    pClick=0;
    sClick=0;
    if(rClick===3){
        pRock.src = "x.png";
        alert("You broke your weapon!");
        rockCanPlay=false;
    }
    playerWeapon='rock';
    ran=Math.floor(Math.random()*3)+1;
    cpuWeapon = ran===1 ? 'rock' : ran===2 ? 'paper' : 'scissors';
    result = cpuWeapon; 
    newLogMsg= result==='rock' ? 'Tie!' : result==='paper' ? 'Computer wins!' : 'Player Wins!';
    if (result==='paper'){
        pRockCount--;
        cRockCount++;
        consecTie=0;
    }
    else if(result==='scissors'){
        pScissorsCount++;
        cScissorsCount--;
        consecTie=0;
    }
    else if(result==='rock'){
        consecTie++;
    }
    if (pRockCount===0){
        pRock.src = "x.png";
        rockCanPlay=false;
    }
    display();
}
else{
    alert("You cannot use your weapon. ");
}
    
}

function shootPaper(){
    if(paperCanPlay&&pPaperCount>0&&cRockCount>0){
    pClick++;
    rClick=0;
    sClick=0;
    if(pClick===3){
        pPaper.src="x.png";
        alert('Your paper weapon broke!');
        paperCanPlay=false;
    }
    playerWeapon='paper';
    ran=Math.floor(Math.random()*3)+1;
    cpuWeapon = ran===1 ? 'rock' : ran===2 ? 'paper' : 'scissors';
    result = cpuWeapon; 
    newLogMsg= result==='rock' ? 'Player wins!' : result==='paper' ? 'Tie!' : 'Computer Wins!';
    if (result==='rock'){
        pRockCount++;
        cRockCount--;
        consecTie=0;
    }
    else if (result==='scissors'){
        pPaperCount--;
        cPaperCount++;
        consecTie=0;
    }
    else if (result==='paper'){
        consecTie++;
    }
    if (pPaperCount===0){
        pPaper.src = "x.png";
        paperCanPlay=false;
    }
    display();
}
else{
    alert("You cannot play your weapon.");
}
    
}

function shootScissors(){
    if(scissorsCanPlay&&pScissorsCount>0&&cPaperCount>0){
    sClick++;
    rClick=0;
    pClick=0;
    if(sClick===3){
        pScissors.src="x.png";
        alert('Your scissors weapon broke!');
        scissorsCanPlay=false;
    }
    playerWeapon='scissors';
    ran=Math.floor(Math.random()*3)+1;
    cpuWeapon = ran===1 ? 'rock' : ran===2 ? 'paper' : 'scissors';
    result = cpuWeapon; 
    newLogMsg= result==='rock' ? 'Computer wins!' : result==='paper' ? 'Player Wins!' : 'Tie!';
    if (result==='rock'){
        pScissorsCount--;
        cScissorsCount++;
        consecTie=0;
    }
    else if(result==='paper'){
    pPaperCount++;
    cPaperCount--;
    consecTie=0;
    }
    else if(result==='scissors'){
        consecTie++;
    }
    if(pScissorsCount===0){
        pScissors.src="x.png";
        scissorsCanPlay=false;
    }
    display();
}
else{
    alert('You cannot play your weapon.');
}
}

function display(){
    log.innerHTML = log.innerHTML +"<br>" +"Player: "+playerWeapon +"  CPU: " +cpuWeapon +" Result: " +newLogMsg;
    playerRockCount.innerHTML = "Rock Count: " +pRockCount;
    playerPaperCount.innerHTML = "Paper Count: " +pPaperCount;
    playerScissorsCount.innerHTML = "Scissors Count: " +pScissorsCount;

    cpuRockCount.innerHTML = "Rock Count: " +cRockCount;
    cpuPaperCount.innerHTML = "Paper Count: " +cPaperCount;
    cpuScissorsCount.innerHTML = "Scissors Count: " +cScissorsCount;
    if(rockCanPlay===false&&paperCanPlay===false&&scissorsCanPlay===false){
        log.innerHTML += "<br>" +"You Lost!";
        alert("You Lost!");
        reset();
    }
    if(pRockCount===10&&pPaperCount===10&&pRockCount===10){
        log.innerHTML += "<br>" +"You Won!";
        alert("You won!");
        reset();
    }
    if(consecTie===3){
        log.innerHTML += "<br>" +"Game Over!";
        alert("There has been 3 ties in a row. GAME OVER!");
        reset();
    }
}
