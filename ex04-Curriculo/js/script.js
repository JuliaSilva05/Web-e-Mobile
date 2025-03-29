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
        return nums;
    }
}



var nums = CreateNumber();
const historico = [];
var contando = 0;
var reiniciar = true;

function Tries(){
    // recebendo o input
    let inputTry = document.getElementById('escrever').value;
    // checando se todos os caracteres são entre 0 e 9
    let tudoCerto = 0;
    for (let j = 0; j < inputTry.length; j++){
        if (48<=inputTry.charCodeAt(j) && inputTry.charCodeAt(j)<=57){
            tudoCerto++;
        }
    }    
    // checando se o tamanho e os caracteres estão corretos
    if (inputTry.length == 5 && tudoCerto == 5){
        contando++;

        var resposta = [contando, inputTry, Feedback(inputTry,nums)]
        
        //historico.unshift(resposta[0],resposta[1],resposta[2]);
        //console.log(historico);
        AddHistoric(resposta);        

        if (resposta[2] == "5A0B"){
            document.getElementById("fim").innerHTML = "Parabéns! Você acertou.";
            console.log("acertou!");
            var x = document.getElementById("tentativa");
            if (x.style.display != "none") {
                x.style.display = "none";
            }
        }
        else if (contando == 10){
            document.getElementById("fim").innerHTML = "A senha era ".concat(nums);
            var x = document.getElementById("tentativa");
            if (x.style.display != "none") {
                x.style.display = "none";
            }
        }
    }
    else {
        alert("A senha deve ter 5 números!")
    }
}

function RestartGame(){
    location.reload();
}

function AddHistoric(resposta){
    var table = document.getElementById('historico');
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = resposta[0];
    cell2.innerHTML = resposta[1];
    cell3.innerHTML = resposta[2];
}

function Feedback(inputTry,nums){
    var a = 0, b = 0;
    for (let i = 0; i < 5; i++){
        if (inputTry[i] == nums[i]){
            a++;
        }
        else if (nums.includes(inputTry[i])){
            b++;
        }
    }
    var resposta = a.toString() + "A" + b.toString() + "B";
    return resposta;
}
