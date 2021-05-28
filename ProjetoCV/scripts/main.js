// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here

var NomeTitulo = document.getElementById("nomeTopo");
var NomePrincipal = document.getElementById("nomePrincipal");
var Profissao = document.getElementById("profissao");
var Idade = document.getElementById("idade");
var Email = document.getElementById("email");
var Telefone = document.getElementById("telefone");
var Morada = document.getElementById("morada");
var fotoPerfil = document.getElementById("imagemPerfil");
var sobre = document.getElementById("sobreMim");

fetch('cv.json')
        .then(response => response.json())
        .then(function(cv){
          NomeTitulo.innerText = cv.geral.Nome;
          NomePrincipal.innerText = cv.geral.NomeCompleto;
          Profissao.innerText = cv.geral.Profissao;
          Idade.innerText = cv.geral.Idade;
          Email.innerText = cv.geral.Email;
          Telefone.innerText = cv.geral.Telefone;
          Morada.innerText = cv.geral.Morada;
          fotoPerfil.src = cv.geral.Foto;
          sobre.innerText = cv.geral.Descrição;
        })