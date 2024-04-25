//DECLARANDO ASD VARIAVEIS

let p1=prompt("Digite seu nome");
let p2=prompt("Digite seu poder");
let p3=prompt("Digite o nome de um vilão");
let p4=prompt("Digite um lugar");
let msg=document.getElementById("msg");

//*innerHTML ele mostra na tela
msg.innerHTML= `ola ${p1}, o seu poder é ${p2}, e voce vai enfrentar o(a) ${p3}, no/em ${p4}`