let boxes=document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset")
let newbtn=document.querySelector("#new-gm");
let container=document.querySelector(".msg-container")
let msg=document.querySelector(".msg");


let turn0=true; //x player or Y player

const winPatterns = [
   [0, 1, 2],
   [0, 3, 6],
   [0, 4, 8],
   [1, 4, 7],
   [2, 5, 8],
   [2, 4, 6],
   [3, 4, 5],
   [6, 7, 8],
];

const reset=()=>{
   turn0=true;
   enaabledBox();
   container.classList.add("hide");

};
//jo boxes he uun par click karne par kuch hona chahiye so we use event listner
boxes.forEach((box)=> {//means har ek box ke liye
   box.addEventListener("click",()=>{
      console.log("box was clicked");
      if(turn0){
         box.innerText="O";
         turn0=false;//ya nanr X aala pahije manun condition false keli
      }else{
         box.innerText="X";
         turn0=true;//double X nahi yaw manun condition false keli

      }
      box.disabled=true;//ye kay karega ki ek bar button daaya ki uuse diseable kar dega 
      //iis kay hoga ek box me multipal time click karne se value change nahi hogi
      checkWinner(); //to check winner hum checkWinner function ko call karege
   });

});
const disabledBox=()=>{
   for(let box of boxes){
      box.disabled=true;
   }
}
const enaabledBox=()=>{
   for(let box of boxes){
      box.disabled=false;
      box.innerText="";
   }
}
//to show winner
const showWinner = (winner) => {
     msg.innerText='Congrats Winner ${winner}';
     container.classList.remove("hide");
     disabledBox();
   }
const checkWinner =()=>{
   for(let pattern of winPatterns){
      //console.log(pattern[0],pattern[1],pattern[2]);
      //console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText)
      //above hamane inner text ko acces kiya
      let pos1=boxes[pattern[0]].innerText;
      let pos2=boxes[pattern[1]].innerText;
      let pos3=boxes[pattern[2]].innerText;
   //aab hame ye dekna he ki positon empty nahi honi chahiye and three position contain same value
   if(pos1!="" && pos2!="" && pos3!="") {
      if(pos1===pos2 && pos2===pos3){
         console.log("winner",pos1);
         showWinner();
      }
   }
   }
}
newbtn.addEventListener("click",reset);//yahapar ham reset function ko call kar rahe he
resetBtn.addEventListener("click",reset);