let buttons=document.querySelectorAll(".btn");
let resetBtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
const winner = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(turnO===true){
            btn.innerText="O";
            btn.style.color = "Red";
            turnO=false;
        } else{
            btn.innerText="X";
            btn.style.color = "Green";
            turnO=true;
        }
        btn.disabled=true;

        checkwinner();
    });
});
const disableBtn = ()=>{
    for(let btn of buttons){
        btn.disabled=true;
    }
}
const enableBtn = ()=>{
    for(let btn of buttons){
        btn.disabled=false;
        btn.innerText="";
    }
}

const showwinner= (winner2)=>{
msg.innerText=`Congratulations,Winner is ${winner2}`;
msgContainer.classList.remove("hide");
disableBtn();
}

const checkwinner = ()=>{
     for(let pattern of winner){
     let posval1 = buttons[pattern[0]].innerText;
     let posval2 = buttons[pattern[1]].innerText;
     let posval3 = buttons[pattern[2]].innerText;
    
     if(posval1 != "" && posval2 != "" && posval3 != ""){
        if(posval1 === posval2 && posval2 === posval3){

        showwinner(posval1);
        }
     }
    }
};

const resetGame = ()=>{
turnO=true;
enableBtn();
msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);