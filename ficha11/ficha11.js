var tempo = document.getElementById("tempo");
var jogador = document.getElementById("jogador");
var campos = document.getElementsByClassName("item");
var quadrados = document.getElementById("tabuleiro").childNodes;
var jogador = document.getElementById("jogador");
var tamanho = document.getElementById("tamanho").addEventListener("input", function() {criaTabuleiro(this.innerText)});
var tabuleiro = document.getElementById("tabuleiro");
var vencedor = document.getElementById("vencedor");
var largura = document.getElementById("tamanho").innerText;
var timeleft = 10;
var diminui = 35;
tempo.style.width = 350+"px";
var intervalo;
function regressao(){
        if(timeleft <= 0){
            if(jogador.innerText == "X"){
                jogador.innerText = "O";
            }else{
                jogador.innerText = "X"
            }
            encheBarra();
        } else {
            tempo.style.width = (parseInt(tempo.style.width) - 35) + "px";
            timeleft -= 1;
        }
}

function encheBarra(){
    tempo.style.width = 350 + "px";
    timeleft = 10;
}

for(i=0;i<campos.length;i++){
    campos[i].addEventListener("click", adiciona);
}

function criaTabuleiro(valor){
    if(valor == 0){
        return;
    }else{
        tabuleiro.style.visibility = "visible";
        tabuleiro.innerHTML = "";
        tabuleiro.style.gridTemplateColumns = "repeat("+valor+", auto)";
        for(i=0; i<valor*valor;i++){
            var caixa = document.createElement("div");
            caixa.classList.add("item");
            caixa.innerText = i;
            tabuleiro.appendChild(caixa);
        }   
    }
    for(i=0;i<campos.length;i++){
        campos[i].addEventListener("click", adiciona);
    }
    largura = valor;
    clearInterval(intervalo);
    intervalo = setInterval(regressao, 1000);

}


var cruzes = 0;
var bolas = 0;


function adiciona(evento){
    encheBarra();
    //quem joga
    if(jogador.innerText == "X"){
        evento.target.classList = "cruz";
        evento.target.style.pointerEvents = "none";
        jogador.innerText = "O";
    }else{
        evento.target.classList = "bola";
        evento.target.style.pointerEvents = "none";
        jogador.innerText = "X"
    }

    //verificar nas colunas
    for(i=0;i<largura;i++){
        for(j=i; j<quadrados.length;j=j+parseInt(largura)){
            if(quadrados[j].className == "cruz"){
                cruzes +=1;
                bolas = 0;
            }else if(quadrados[j].className == "bola"){
                bolas += 1;
                cruzes = 0;
            }else{
                cruzes = 0;
                bolas = 0;
            }

            if(cruzes == 3){
                vencedor.innerText = "O Jogador X venceu!";
                vencedor.style.display = "block";
            }else if(bolas == 3){
                vencedor.innerText = "O Jogador 0 venceu!";
                vencedor.style.display = "block";
            }
        }
        bolas = 0;
        cruzes = 0;
    } 

    cruzes = 0;
    bolas = 0;
    
    //verifica linha
    for(k=0;k<quadrados.length;k=k+parseInt(largura)){
        for(l=k; l<k+parseInt(largura);l++){
            if(quadrados[l].className == "cruz"){
                cruzes +=1;
                bolas = 0;
            }else if(quadrados[l].className == "bola"){
                bolas +=1;
                cruzes = 0;
            }else{
                cruzes = 0;
                bolas = 0;
            }

            if(cruzes == 3){
                vencedor.innerText = "O Jogador X venceu!";
                vencedor.style.display = "block";
            }else if(bolas == 3){
                vencedor.innerText = "O Jogador 0 venceu!";
                vencedor.style.display = "block";
            }
        }
        cruzes = 0;
        bolas = 0;
    }

    cruzes = 0;
    bolas = 0;

    //verifica diagonal
    for(d=0;d<quadrados.length;d++){
        for(x=d;x<quadrados.length;x=x+parseInt(largura)+1){
            if(quadrados[x].className == "cruz"){
                cruzes +=1;
                bolas = 0;
            }else if(quadrados[x].className == "bola"){
                bolas +=1;
                cruzes = 0;
            }else{
                bolas = 0;
                cruzes = 0;
            }

            if(cruzes == 3){
                vencedor.innerText = "O Jogador X venceu!";
                vencedor.style.display = "block";
            }else if(bolas == 3){
                vencedor.innerText = "O Jogador 0 venceu!";
                vencedor.style.display = "block";
            }

            console.log(cruzes);
            console.log(bolas);
        }
        cruzes = 0;
        bolas = 0;
    }

    cruzes = 0;
    bolas = 0;

    //verifica diagonal contraria
    for(t=0;t<quadrados.length;t++){
        for(u=t;u<quadrados.length;u=u+parseInt(largura)-1){
            if(quadrados[u].className == "cruz"){
                cruzes +=1;
                bolas = 0;
            }else if(quadrados[u].className == "bola"){
                bolas +=1;
                cruzes = 0;
            }else{
                bolas = 0;
                cruzes = 0;
            }

            if(cruzes == 3){
                vencedor.innerText = "O Jogador X venceu!";
                vencedor.style.display = "block";
            }else if(bolas == 3){
                vencedor.innerText = "O Jogador 0 venceu!";
                vencedor.style.display = "block";
            }
        }
        cruzes = 0;
        bolas = 0;

    }
}
