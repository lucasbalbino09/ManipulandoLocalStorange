let corFundo ; 
let corTexto ; 
let vNome ; 

function definirCor(operador,cor) {    
    
    if (operador == 1) {
        document.body.style.backgroundColor = cor;
        corFundo = cor;
    } else {
        document.body.style.color = cor;
        corTexto = cor;
    }    
}

function Gravar()  {
    vNome = document.getElementById("fnome").value;
    localStorage.corFundo = corFundo; 
    localStorage.corTexto = corTexto; 
    localStorage.vNome = vNome; 
    console.log(vNome);
}