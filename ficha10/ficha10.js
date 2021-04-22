instance = new dtsel.DTS('input[name="dateTimePicker"]');

var btAdd = document.getElementById("adiciona");
var btEli = document.getElementsByClassName("elimina");
var tarefas = document.getElementsByClassName("tarefas");
var conteudo = document.getElementsByName("conteudo");
var nomeTarefa = document.getElementById("nomeTarefa");
var dataTarefa = document.getElementById("dataTarefa");
var caixaTarefas = document.getElementById("caixaTarefas");
var btEdit = document.getElementById("edita")
btAdd.addEventListener("click", adiciona);

function adiciona(){
    let nome = nomeTarefa.innerText;
    let data = dataTarefa.value;
    if(nomeTarefa.innerText == "" || dataTarefa.value == ""){
        return;
    }else{
            caixaTarefas.innerHTML += "<div class='tarefas'>"+"<div class='conteudo' onclick='editar(this)'>"+nome + " " +"("+ data+ ")"+"</div>"+
            "<div class='elimina' onclick='elimina(this)'>-</div>" + "</div>";
            nomeTarefa.innerText = "";
            dataTarefa.value = "";
    }

}


function editar(evento) {
    let str = evento.innerText;
    let nome  = str.split("(", 2)[0];
    let dt = str.split("(", 2)[1];
    let data = dt.split(")", 2)[0];
    nomeTarefa.innerText = nome;
    dataTarefa.value = data;
    btAdd.style.display = "none";
    btEdit.style.display = "block";
    evento.parentNode.style.backgroundColor = "black";
    evento.parentNode.style.color = "white";
  
    btEdit.addEventListener("click", function () {
        let nomeFinal = document.getElementById("nomeTarefa").innerText;
        let dataFinal = document.getElementById("dataTarefa").value;
        btAdd.style.display = "block";
        btEdit.style.display = "none";
        evento.parentNode.style.backgroundColor = "white";
        evento.parentNode.style.color = "tomato";
        evento.parentNode.innerHTML = "<div class='conteudo' onclick='editar(this)'>"+nomeFinal + " ("+ dataFinal + ")"+"</div>"+
        "<div class='elimina' onclick='elimina(this)'>-</div>";
        nomeTarefa.innerText = "";
        dataTarefa.value = "";
    });
  }

function elimina(evento){
    evento.parentNode.remove();
    if(btAdd.style.display == "none"){
        btAdd.style.display = "block";
        btEdit.style.display = "none";
    }
    nomeTarefa.innerText = "";
    dataTarefa.value = "";
    
}
