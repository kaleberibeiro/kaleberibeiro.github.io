// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here

var NomeTitulo = document.getElementById("nomeTopo");
var NomeFooter = document.getElementById("nomeBaixo");
var NomePrincipal = document.getElementById("nomePrincipal");
var Profissao = document.getElementById("profissao");
var Idade = document.getElementById("idade");
var Email = document.getElementById("email");
var Telefone = document.getElementById("telefone");
var Morada = document.getElementById("morada");
var fotoPerfil = document.getElementById("imagemPerfil");
var sobre = document.getElementById("sobreMim");
var Educacao = document.getElementById("Educacao"); 

fetch('cv.json')
        .then(response => response.json())
        .then(function(cv){
          NomeTitulo.innerText = cv.geral.Nome;
          NomeFooter.innerText = cv.geral.Nome;
          NomePrincipal.innerText = cv.geral.NomeCompleto;
          Profissao.innerText = cv.geral.Profissao;
          Idade.innerText = cv.geral.Idade;
          Email.innerText = cv.geral.Email;
          Telefone.innerText = cv.geral.Telefone;
          Morada.innerText = cv.geral.Morada;
          fotoPerfil.src = cv.geral.Foto;
          sobre.innerText = cv.geral.Descrição;


          /*cv.forEach(function(e){
            console.log("Curso: " + e.Curso);
            console.log("Escola: " + e.Escola);
            console.log("Epoca: " + e.Epoca);
          })*/
          
          for( var e in cv.Educacao){
            Educacao.innerHTML += "<div class='timeline-card timeline-card-success' data-aos='fade-in' data-aos-delay='0'>"+
          "<div class='timeline-head px-4 pt-3'>"+ "<div class='h5'>" + cv.Educacao[e].Curso + "<span class='text-muted h6'>"+ cv.Educacao[e].Escola +"</span>          </div>"+
          "</div>"+
          "<div class='timeline-body px-4 pb-4'>"+
            "<div class='text-muted text-small mb-3'>"+ cv.Educacao[e].Epoca + "</div>" +
          "</div>"+
        "</div>";
          }
          //educação
        })