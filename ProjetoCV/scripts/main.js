// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here

var NomeTitulo = document.getElementById("nomeTopo");

fetch('cv.json')
        .then(response => response.json())
        .then(function(cv){
          NomeTitulo.innerText = cv.Nome;
          console.log(cv);
        })