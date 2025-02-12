const wining=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]; 
let turn= true;

let box = document.querySelectorAll(".btn");
var boxvalue = document.querySelectorAll(".btn").innerHTML;
let reset = document.querySelector(".reset-btn")
box.forEach((btn) => { 
    btn.addEventListener("click", () => {
        if(boxvalue == ""){
            if(turn){
                btn.innerHTML = "X";
                turn = false;
                document.querySelectorAll(".btn").disabled;
               }
               else{
                btn.innerHTML = "O";
                turn = true;
                box.disabled = true;
               }
        }
       

       /*if(btn.innerHTML = "O"){
        btn.innerHTML = "O";
       }
       else if(btn.innerHTML = "X"){
        btn.innerHTML = "X";
       }
       else{
        btn.innerHTML = "I";
       }*/
    }
)})
