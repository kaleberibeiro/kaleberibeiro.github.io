// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here

var NomeTitulo = document.getElementsByClassName("site-title mb-0");

fetch('cv.json')
        .then(response => response.json())
        .then(function(cv){
          console.log(cv);
        })