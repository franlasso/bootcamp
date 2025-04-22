
let calcular =document.getElementById("btn");
let entrada = document.getElementById("entrada");
let salida = document.getElementById ("salida");
let numero = 0;
entrada.addEventListener("input", (evento)=>{
    numero = evento.target.value;
    console.log(numero);
});
//ya tenemos el par, ahor vamos a poner que me diga si es par y multiplo de 5//
calcular .addEventListener("click", ()=>{
    let hijo = document.createElement("li")
    if(numero%2== 0 && numero%5 ==0){
        hijo.innerHTML = numero + " Es Par y Múltiplo de 5";
    }else if(numero%2 ==0){
        hijo.innerHTML = numero + " Es Par";
    }else if (numero%5 ==0) {
        hijo.innerHTML = numero + " Es Múltiplo de 5";
    }else{
        hijo.innerHTML = numero + " No es Par";
    }
    salida.appendChild(hijo)
});