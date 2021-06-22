// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Declaração de Variáveis

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
var Portfolio = document.getElementById("portfolio");
var EmailBaixo = document.getElementById("emailBaixo");
var TelefoneBaixo = document.getElementById("telefoneBaixo");
var background = document.getElementById("imagemBack");
var tec = document.getElementById("tecSkills");
var soft = document.getElementById("softSkills");
var hire = document.getElementById("hire");

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
          EmailBaixo.innerHTML += cv.geral.Email;
          TelefoneBaixo.innerHTML += cv.geral.Telefone;
          background.src = cv.geral.Background;
          hire.src = cv.geral.Hire;

          

          //educação
          for( var e in cv.Educacao){
            Educacao.innerHTML += "<div class='timeline-card timeline-card-success' data-aos='fade-in' data-aos-delay='0'>"+
            "<div class='timeline-head px-4 pt-3'>"+ "<div class='h5'>" + cv.Educacao[e].Curso + "<span class='text-muted h6'>"+ cv.Educacao[e].Escola +"</span>          </div>"+
            "</div>"+
            "<div class='timeline-body px-4 pb-4'>"+
            "<div class='text-muted text-small mb-3'>"+ cv.Educacao[e].Epoca + "</div>" +
            "</div>"+
            "</div>";
          }

          //portfolio
          for( var p in cv.Portfolio){
            if(p%2===0){
              Portfolio.innerHTML += "<div class= 'row g-0'> " +
              "<div class='col-md-6'>" + "<img class='img-fluid' src='"+cv.Portfolio[p].Foto + "' width='800' height='500'/>"+"</div>"+
              "<div class='col-md-6 d-flex align-items-center' data-aos='fade-left' data-aos-delay='100'>"+
              "<div class='m-4 mt-md-2'>" +
              "<p class='text-teal text-small'>" + cv.Portfolio[p].Linguas +"</p>" +
              "<h3>"+ cv.Portfolio[p].Titulo +"</h3>"+
              "<p class='text-muted'>"+cv.Portfolio[p].Descricao +"</p>"+
              "</div>"+
              "</div>"+
              "</div>"
            }else{
              Portfolio.innerHTML += "<div class='row g-0 portfolio-reverse'>"+
              "<div class='col-md-6 d-flex align-items-center' data-aos='fade-right' data-aos-delay='100'>"+
              "<div class='m-4 mt-md-2 text-end'>"+
              "<p class='text-teal text-small'>"+cv.Portfolio[p].Linguas+"</p>"+
              "<h3>"+cv.Portfolio[p].Titulo+"</h3>"+
              "<p class='text-muted'>"+cv.Portfolio[p].Descricao+"</p>"+
              "</div>"+
              "</div>"+
              "<div class='col-md-6'><img class='img-fluid' src='"+cv.Portfolio[p].Foto+"' width='800' height='500'/></a></div>"+
              "</div>"
            }
          }

          for(var t in cv.Skills.Tecnicas){
            tec.innerHTML += "<li>"+ cv.Skills.Tecnicas[t] + "</li>"
          }

          for(var s in cv.Skills.Soft){
            soft.innerHTML += "<li>"+ cv.Skills.Soft[s] + "</li>"
          }
        })