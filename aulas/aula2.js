function mudaFundo(obj, backcolor){
    obj.style.backgroundColor = backcolor;
}

let objs = document.getElementsByClassName("grid-item");
for(i = 0; i < objs.length; i++){
    let backcolor;
    switch(objs[i].innerHTML){
        case "Azul":
            backcolor = "blue";
            break;
        case "Verde":
            backcolor = "green";
            break;
        case "Vermelho":
            backcolor = "red";
            break;
        case "Amarelo":
            backcolor = "yellow";
            break;
    }
    objs[i].addEventListener ("mouseover", function(){mudaFundo(this, backcolor)});
    objs[i].addEventListener ("mouseout", function(){mudaFundo(this, "white")});
}
