let gameseq=[];
let userseq=[];
let btns=["yello","green","red","blue"];

let started=false;
let level=0; 

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(!started){
        console.log("game started");
        started=true;
       
        levelup();
    }
});
function levelup(){
    level++;
    h2.textContent=`Level ${level}`;
    h2.style.color="green";
   
    //flash rendom color: 
   let rendom_idx=Math.floor(Math.random() * 3);
   let rendom_color=btns[rendom_idx];
   let rendom_btn=document.querySelector(`.${rendom_color}`)
    gameseq.push(rendom_color);
    console.log("COMPUTER : " ,gameseq);
    flashbtn(rendom_btn);
}

function flashbtn(btn){
     btn.classList.add("flash");
     setTimeout(function(){
        btn.classList.remove("flash")
     }, 600);
}

let allbtns=document.querySelectorAll(".btn");
for(let b of allbtns){
    b.addEventListener("click",btnPress);
}
function btnPress(){
    let btn=this;
    userflashbtn(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    console.log("UDER : " ,userseq);
    checkans();
}

function userflashbtn(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
       btn.classList.remove("userflash")
    }, 200);
}



// function checkans(){
//     let idx=-1;
//     console.log("level",idx);
//     if(userseq[idx]===gameseq[idx]){
//         console.log("right ans"); 
//     }
//     else{
//         h2.innerText="Game overpress any key to  restart"
//     }
// }

function checkans() {
    for (let i = 0; i < userseq.length; i++) {
      if (userseq[i] !== gameseq[i]) {
        if(level <=5){
            congrats(level);
        }

        h2.innerText = "Game Over! Press any key to restart";
        h2.style.color="red";
        level=0;
        started = false; // Reset game state
        gameseq = []; // Clear sequence
        userseq = []; // Clear user sequence
        return; // Exit the function after finding a mismatch
      }
    }
    // User sequence matches up to this point, check if it's complete
    if (userseq.length === gameseq.length) {
      console.log("Right answer!");
      userseq = []; // Clear user sequence for the next level
      levelup();
    }
}

function congrats(level) {
    h2.innerText = `Congratulations! You've completed ${level} levels`;
    h2.style.color = "gold";
    
}

