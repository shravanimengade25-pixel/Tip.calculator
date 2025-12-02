const billinput = document.querySelectorAll(".input")[0];
const peopleinput = document.querySelectorAll(".input")[1];

const tipbuttons = document.querySelectorAll(".tip-btn");
const custominput = document.querySelector(".custominput");

const tipamount = document.querySelectorAll(".value")[0];
const totalamount = document.querySelectorAll(".value")[1];

const resetbtn = document.querySelector("#reset");

let tipPercent=0;


tipbuttons.forEach(btn=>{
btn.addEventListener("click",()=>{

tipbuttons.forEach(b=>b.classList.remove("active"));


btn.classList.add("active");

tipPercent=parseInt(btn.innerText);

custominput.value="";

calculate();


});
});

custominput.addEventListener("input",()=>{

    tipbuttons.forEach(b=>b.classList.remove("active"));
tipPercent=Number(custominput.value);
calculate();
})

billinput.addEventListener("input",calculate);
peopleinput.addEventListener("input", calculate);


function calculate(){

const bill =Number(billinput.value);
const people= Number(peopleinput.value);

if(bill>0 && people>0){
const totalTip=(bill*tipPercent)/100;
const tipperperson= totalTip/people;
const totalperperson = (bill+totalTip)/people;

tipamount.textContent="$"+ tipperperson.toFixed(2);
totalamount.textContent="$"+ totalperperson.toFixed(2);

}
else{
    tipamount.textContent="$0.00";
totalamount.textContent="$0.00";

}

}

resetbtn.addEventListener("click",()=>{
    billinput.value = "";
    peopleinput.value = "";
    custominput.value = "";
    tipPercent = 0;

tipbuttons.forEach(b=>b.classList.remove("active"));


     tipamount.textContent="$0.00";
totalamount.textContent="$0.00";


});