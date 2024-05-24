let userScore=0;
let compScore=0;
let mssg=document.getElementById("msg");
let uscr=document.getElementById("user-score");
let cscr=document.getElementById("comp-score");
const choices=document.querySelectorAll(".choice");
const genCompChoice= () =>{
    const option=["rock","paper","scissor"];
 const indx=  Math.floor(Math.random()*3);
  return option[indx];
}

const draw=()=>{
    console.log("its a draw");
   mssg.innerText="its a draw";
}
const playGame=(userChoice)=>{
  console.log("user choice =",userChoice);

  const compChoice=genCompChoice();
    console.log("comp choice=",compChoice) ;
    if(userChoice===compChoice)
    {
        draw();
    }
    else{
      let userWin= true;
     if(userChoice==="rock" ){
        userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper")
    {
         userWin=compChoice==="scissor"?false:true;
    }
    else{
          userWin=compChoice==="rock"?false:true;
    }
    if(userWin)
    {
        console.log("user wins");
         mssg.innerText="user wins";
         userScore++;
         uscr.innerText=userScore;
    }
    else{
        console.log("comp wins")
         mssg.innerText="computer wins";
         compScore++;
         cscr.innerText=compScore;
    }
    }
    
}
choices.forEach((choice )=> {
    choice.addEventListener("click",()=>{
        console.log(choice)
      console.log("choices was clicked", choice.getAttribute("id")) ; 
      const userChoice=choice.getAttribute("id");
      playGame(userChoice);
   
    });
});