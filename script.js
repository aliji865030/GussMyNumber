



function randomNumber(){
    let ranNum=Math.floor(Math.random()*20+1);
    
    // console.log(ranNum);
    return ranNum;
}
let currentRandomNum=randomNumber();

let score=5;
let highScore=0;



function findNum(){
    
    
    let currentNumber=Number(document.querySelector(".guess").value);
    // console.log(currentRandomNum);
    //   console.log(currentNumber);

    if(currentNumber===currentRandomNum){
        document.querySelector(".message").innerText="🎉🎉🎉 YOU WIN !!! 🎉🎉🎉";
        document.querySelector("body").style.backgroundColor="green";
        document.querySelector(".number").innerText=currentNumber;
        if(highScore<score){
            highScore=score;
            document.querySelector(".highscore").innerText=highScore;
        }
    }else if(currentNumber+6<currentRandomNum){
       
        if(score==1){
            score--;
            document.querySelector(".message").innerText="😈😈😈 You lose !!! 😈😈😈";
            document.querySelector("body").style.backgroundColor="#880808";
            document.querySelector(".score").innerText=score;
        }else{
            score--;
        document.querySelector(".score").innerText=score;

        document.querySelector(".message").innerText="🤣Your guess is VERY VERY low lol...🤣";
        }
        
        
    }else if(currentNumber+3<currentRandomNum){


        if(score==1){
            score--;
            document.querySelector(".message").innerText="😈😈😈 You lose !!! 😈😈😈";
            document.querySelector("body").style.backgroundColor="#880808";
            document.querySelector(".score").innerText=score;
        }else{
            score--;
        document.querySelector(".score").innerText=score;
        document.querySelector(".message").innerText="😁 Your guess is very low bro...😁";
        }
        
    }else if(currentNumber<currentRandomNum){


        if(score==1){
            score--;
            document.querySelector(".message").innerText="😈😈😈 You lose !!! 😈😈😈";
            document.querySelector("body").style.backgroundColor="#880808";
            document.querySelector(".score").innerText=score;
        }else{
            score--;
            document.querySelector(".score").innerText=score;
            document.querySelector(".message").innerText="😊 You are very close 😊";
        }
       
    }else if(currentNumber-6>currentRandomNum){


        if(score==1){
            score--;
            document.querySelector(".message").innerText="😈😈😈 You lose !!! 😈😈😈";
            document.querySelector("body").style.backgroundColor="#880808";
            document.querySelector(".score").innerText=score;
        }else{
            score--;
            document.querySelector(".score").innerText=score;
            document.querySelector(".message").innerText="😆Your guess is VERY VERY high lol...😆";
        }
       
    }else if(currentNumber-3>currentRandomNum){


        if(score==1){
            score--;
            document.querySelector(".message").innerText="😈😈😈 You lose !!! 😈😈😈";
            document.querySelector("body").style.backgroundColor="#880808";
            document.querySelector(".score").innerText=score;
        }else{
            score--;
        document.querySelector(".score").innerText=score;
        document.querySelector(".message").innerText="🥱Your guess is VERY high bro...🥱";
        }
        
    }else if(currentNumber>currentRandomNum){


        if(score==1){
            score--;
            document.querySelector(".message").innerText="😈😈😈 You lose !!! 😈😈😈";
            document.querySelector("body").style.backgroundColor="#880808";
            document.querySelector(".score").innerText=score;
        }else{
            score--;
        document.querySelector(".score").innerText=score;
        document.querySelector(".message").innerText="😊 You are very close 😊";
        }
        
    }
    
     
    
}



function playAgan(){
    score=5;
    document.querySelector(".score").innerText=score
    document.querySelector("body").style.backgroundColor="#222";
    currentRandomNum=randomNumber();
    document.querySelector(".guess").value="";
    document.querySelector(".number").innerText="?";
    document.querySelector(".message").innerText="Start guessing..."

}


let checkBtn=document.querySelector(".check");
checkBtn.addEventListener("click",findNum);

document.querySelector(".again").addEventListener("click",playAgan);



