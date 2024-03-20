let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let newgamebtn=document.querySelector(".new-game");
let containner=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let count=0;
let turnX=true;

const winpattern=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count++;
        if(turnX){
            box.innerText="X";
            turnX=false;
        }
        else{
            box.innerText="O"
            turnX=true;
        }
        box.disabled="true";
        let iswinner=checkWinner();
        if(count=== 9 && !iswinner){
            gameDraw();
        }
    });
});
const checkWinner=()=>{
    for (let pattern of winpattern) {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1 !=""&& pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
                return true;
            }
        }
    }
}
let disableBox=()=>{
    for (const box of boxes) {
        box.disabled=true;
    }
}
let anableBox=()=>{
    for (const box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
}
let resetGame=()=>{
    count=0;
    turnX=true;
    anableBox();
    containner.classList.add("hide");
}
let showWinner=(value)=>{
    containner.classList.remove("hide");
    msg.innerText=`Congratulation Winner ${value}`;
    disableBox();
}
let gameDraw=()=>{
    containner.classList.remove("hide");
    msg.innerText=`Game is Draw`;
    disableBox();
}
resetbtn.addEventListener("click",resetGame);
newgamebtn.addEventListener("click",resetGame);