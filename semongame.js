let gameSeq=[];
let userSeq=[];
let scoreSeq=[];

let btns=["yellow","red","purple","green"]

let started = false;
let level = 0;

let h2=document.querySelector('h2');
let h3 =document.querySelector('h3');
// let btn=document.querySrrelector('button');


document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        strated=true;

        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
}
function userFlash(btn){
    btn.classList.add('user');
    setTimeout(function(){
        btn.classList.remove('user');
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
h2.innerText=`Level ${level}`;

let rdmIdx = Math.floor(Math.random()*3);
let rdmColor = btns[rdmIdx];
let randomBtn=document.querySelector(`.${rdmColor}`);
gameFlash(randomBtn);
gameSeq.push(rdmColor);
console.log(gameSeq);
}

function checkAns(idx){
    

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp(),1000);
        }
    }else{
        let score=level;
       scoreSeq.push(score);

        h2.innerHTML = `Game Over! Your score was <b>${level}</b>.Press any Key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(
            function(){
                document.querySelector("body").style.backgroundColor="white";
            },150
        );
        reset();
        highscr();
    }
}

function highscr(){
    let max = scoreSeq.reduce((max ,el) => {
        if(max > el){
            return max;}
        else{
        return el;}
    })
   
    h3.innerHTML = `<b>maximum score is</b> ${max}`
    console.log(max);
}

function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);
    
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;
    // h3.innerHTML="";
}