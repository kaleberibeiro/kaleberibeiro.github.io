
var objs = document.getElementsByClassName("grid-item");
var e = document.getElementById("e");
var r = document.getElementById("r");


var numero = window.prompt("Quantos números quer na calculadora?", "10");
while (numero > 50 || numero <10){
  numero = window.prompt("Quantos números quer na calculadora?", "10");
}

let pai = document.getElementById("caixaCalc");

for(i=0; i<numero;i++){
  var botao = document.createElement("div");
  botao.classList.add("grid-item");
  botao.innerText = i;
  pai.appendChild(botao);
}

pai.innerHTML += "<div class = 'grid-item'>C</div>" + "<div class = 'grid-item'>=</div>" + "<div class = 'grid-item'>+</div>" + "<div class = 'grid-item'>-</div>" + "<div class = 'grid-item'>*</div>" + "<div class = 'grid-item'>/ </div>"

for(i=0; i<objs.length;i++){
    objs[i].addEventListener ("mouseover", mudaFundo);
    objs[i].addEventListener ("mouseout", mudaFundo);
    objs[i].addEventListener ("click", calcula);
}

function calcula(numero) {
    if(isNaN(numero.target.innerText) == false){
      e.innerText += numero.target.innerText;
    }else{
      if(numero.target.innerText == "C"){
        e.innerText = "";
        r.innerText = "";
      }else{
        if(numero.target.innerText == "="){
          let conta = eval(e.innerText);
          if ((e.innerText == "") || (isFinite(conta))==false) {
            r.innerText = "expressão inválida";
          } else {
            r.innerText = conta;
          }
        } else{
          if(numero.target.innerText == "+"){
            e.innerText += "+";
          }else{
            if(numero.target.innerText == "-"){
              e.innerText += "-";
            }else{
              if(numero.target.innerText == "*"){
                e.innerText += "*";
              }else{
                if(numero.target.innerText == "/"){
                  e.innerText += "/";
                }
              }
            }
          }
        }
      }
    }
}

function mudaFundo(evento){
    if(evento.type ==="mouseover"){
        evento.target.style.backgroundColor = 'grey';
        return;
    }else{
        evento.target.style.backgroundColor = 'green';
    }
}



