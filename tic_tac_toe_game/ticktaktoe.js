let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let new_gamme_btn=document.querySelector("#newbtn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turno=true; //player1,player2

const winpat=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const resetgame=()=>{
    turno=true;
    enablebtn();
    msgContainer.classList.add("hide");
}

const enablebtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disablebtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

boxes.forEach( (box) => {
    box.addEventListener("click", () => {
        if(turno){
            box.innerText="O";
            turno=false;
        }
        else{
            box.innerText="X";
            turno=true;
        }
        box.ariaDisabled=true; 
        checkwinner();
    });
});

const showwinner=(winner)=>{
    msg.innerText=`congrats!!!,winner`;
    msgContainer.classList.remove("hide");
    disablebtn();
}

const checkwinner=()=>{
    for(let pat of winpat) {
        let pos1=boxes[pat[0]].innerText;
        let pos2=boxes[pat[1]].innerText;
        let pos3=boxes[pat[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2&&pos2===pos3){
                console.log("winner",pos1);
                showwinner();
            }
            }
        }
    }

new_gamme_btn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
