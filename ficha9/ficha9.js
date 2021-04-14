var objs = document.getElementsByClassName("grid-item");
var palavras = ["AJAX", "CSS", "DOM", "HTML", "JAVASCRIPT", "JQUERY", "JSON", "PHP", "PROGRAMACAO", "TECNOLOGIAS", "WEB"];
var random = Math.floor(Math.random() * palavras.length);
var resposta = palavras[random];
var erros = 0;
var acerto = 0;
var boneco = document.getElementById("imagem1");
var pai = document.getElementById("caixa");
var position = 40;

for(i=0; i<objs.length;i++){
    objs[i].addEventListener ("mouseover", mudaFundo);
    objs[i].addEventListener ("mouseout", mudaFundo);
    objs[i].addEventListener ("click", verifica);
    objs[i].addEventListener ("click", desabilitar);
}

for(i=0; i<resposta.length;i++){
    var linha = document.createElement("div");
    linha.classList.add("linha");
    linha.setAttribute("name", resposta[resposta.length-1-i]);
    linha.style.right = position + 'px';
    pai.appendChild(linha);
    position += 60;
}

function mudaFundo(evento){
    if(evento.type ==="mouseover"){
        evento.target.style.backgroundColor = 'rgb(236, 154, 154)';
        return;
    }else{
        evento.target.style.backgroundColor = 'white';
    }
}

function desabilitar(botao){
    for(i=0; i<objs.length;i++){
        if(objs[i].innerText == botao.target.innerText){
            objs[i].style.pointerEvents = "none";
            console.log(objs[i].innerText);
        }
    }
}

function verifica(letra){
    if(resposta.includes(letra.target.innerText)){
        for(i=0;i<resposta.length;i++){
            if(resposta[i].includes(letra.target.innerText)){
                letra.target.style.color = "red";
                acerto += 1;
            }
        }
        escreve(letra.target.innerText);
        acertou();
    }else{
        letra.target.style.backgroundImage = "url('../ficha9/imagens/incorrect.gif')";
        letra.target.style.backgroundSize = "cover";
        erros += 1;
        matarBoneco();
    }
}

function acertou(){
    if(acerto == resposta.length){
        window.alert("Parabens!");
        setTimeout(window.location.reload.bind(window.location), 2000);
    }
}
function escreve(letra){
    let objs = document.getElementsByClassName("linha");
    for(i = 0; i < objs.length; i++){
        if(objs[i].getAttribute("name") == letra){
            objs[i].innerText = letra;
        }
    }
}

function matarBoneco(){  
    if(erros == 1){
        let erro = document.createElement("img");
        erro.classList.add("erro");
        erro.src = "../ficha9/imagens/wrong-1.gif";
        pai.appendChild(erro);
    }else if(erros == 2){
        let erro = document.createElement("img");
        erro.classList.add("erro");
        erro.src = "../ficha9/imagens/wrong-2.gif";
        pai.appendChild(erro);
    }else if(erros == 3){
        let erro = document.createElement("img");
        erro.classList.add("erromaior");
        erro.src = "../ficha9/imagens/wrong-3.gif";
        pai.appendChild(erro);
    }else if(erros == 4){
        let erro = document.createElement("img");
        erro.classList.add("erromaior");
        erro.src = "../ficha9/imagens/wrong-4.gif";
        pai.appendChild(erro);
    }else if(erros == 5){
        let erro = document.createElement("img");
        erro.classList.add("erromaior");
        erro.src = "../ficha9/imagens/wrong-5.gif";
        pai.appendChild(erro);
    }else if(erros == 6){
        let erro = document.createElement("img");
        erro.classList.add("erromaior");
        erro.src = "../ficha9/imagens/wrong-6.gif";
        pai.appendChild(erro);
    }else if(erros == 7){
        let erro = document.createElement("img");
        erro.classList.add("erromaior");
        erro.src = "../ficha9/imagens/wrong-7.gif";
        pai.appendChild(erro);
        setTimeout(window.location.reload.bind(window.location), 2000);
    }
    
}

