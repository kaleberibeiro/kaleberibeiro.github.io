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
          NomeTitulo.innerText = cv.Nome;
          NomePrincipal.innerText = cv.NomeCompleto;
          Profissao.innerText = cv.Profissao;
          Idade.innerText = cv.Idade;
          Email.innerText = cv.Email;
          Telefone.innerText = cv.Telefone;
          Morada.innerText = cv.Morada;
          fotoPerfil.src = cv.Foto;
          sobre.innerText = cv.Descrição;
        })