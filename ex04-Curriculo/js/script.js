function ShowGameDesc(x) {
    x.classList.toggle("change");
    var x = document.getElementById("gameDesc");
    if (x.style.display == "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function CreateNumber(){
    if (document.location.pathname.split("/").pop() == "jogo.html"){
        let nums = "";
        var novo;
        for (let i = 0; i < 5; i++){
            novo = Math.floor(Math.random() * 10).toString();
            if (nums.includes(novo)){
                i--;
            } else {
                nums += novo;
            }
        }
        console.log(nums);
    }
}

const nums = CreateNumber();

function Tries(){
    const inputTry=document.getElementById('tentativa').value;
    console.log(inputTry);

}