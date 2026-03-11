
let selectTip=0;

function setCustomTip(){
    selectTip=Number(document.getElementById("customTip").value);
    calculet();
    updateRemoveButton();
}

function tip(persent){
    selectTip= persent;

    calculet();
    updateActiveButton(persent);
}

function calculet(){
    let bill =Number(document.getElementById('bill').value);
    let people=Number(document.getElementById('people').value);

    if(bill>0 && people>0 && selectTip>=0){

        let tipTotal=(bill*selectTip)/100;
        let tipPercent=tipTotal/people;
        let totalPerPerson =(bill+tipTotal)/people;

        document.getElementById('tipPerPerson').innerText=tipPercent.toFixed(2);
        document.getElementById('totalPerPerson').innerText=totalPerPerson.toFixed(2);
        }
}


function resetCalculator(){
    document.getElementById('bill').value="";
    document.getElementById("people").value="";
    document.getElementById('tipPerPerson').innerText="$0";
    document.getElementById("totalPerPerson").innerText="$0";
    selectTip=0;
    updateRemoveButton();
}

 function updateActiveButton(persent){
    let button= document.querySelectorAll(".persent  div");

    button.forEach((btn)=>{
        btn.classList.toggle("active", btn.innerText===persent +"%")
    });
 }

 function updateRemoveButton(){

    document.querySelectorAll(".persent div").forEach((btn)=>{
        btn.classList.remove("active");
    })
 }
