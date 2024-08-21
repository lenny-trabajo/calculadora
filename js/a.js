document.addEventListener("DOMContentLoaded", listen);

function listen(){
    let body=document.querySelector('body');
    body.addEventListener('click',clicks);
}

let signo='',opera='';
let num1=0;
let num2=0;
let resultado=0;

function clicks(event){
    if(event.target && event.target.id==1)concatenamiento(1);
    if(event.target && event.target.id==2)concatenamiento(2);
    if(event.target && event.target.id==3)concatenamiento(3); 
    if(event.target && event.target.id==4)concatenamiento(4);
    if(event.target && event.target.id==5)concatenamiento(5);
    if(event.target && event.target.id==6)concatenamiento(6);
    if(event.target && event.target.id==7)concatenamiento(7);
    if(event.target && event.target.id==8)concatenamiento(8);
    if(event.target && event.target.id==9)concatenamiento(9);
    if(event.target && event.target.id==10)concatenamiento(0);
    if(event.target && event.target.id=='mas')operacion('+');
    if(event.target && event.target.id=='menos')operacion('-');
    if(event.target && event.target.id=='por')operacion('*');
    if(event.target && event.target.id=='dividir')operacion('/');
    if(event.target && event.target.id=='igual')igual();
    if(event.target && event.target.id=='borrraruno')borraruno("DEL");
    if(event.target && event.target.id=='borrar')borrar("AC");
    if(event.target && event.target.id=='punto')punto(".");


}

function concatenamiento(num){

    let pantalla=document.getElementById('scream').textContent;
    document.getElementById('scream').textContent=pantalla+num;
}



function getnumberandclear(){
    numero=parseFloat(document.getElementById('scream').textContent,10);
    document.getElementById('scream').textContent=' ';
   
    return numero;
}



function operacion(opera) {
    if (signo) {
        num2 = getnumberandclear();
        realizarOperacion();
    } else {
        num1 = getnumberandclear(); 
    }

    signo = opera;
    document.getElementById('scream').textContent = ''; 
}

function realizarOperacion() {
    if (signo == '+') {
        resultado = num1 + num2;
    } else if (signo == '-') {
        resultado = num1 - num2;
    } else if (signo == '*') {
        resultado = num1 * num2;
    } else if (signo == '/') {
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            alert("No se puede dividir:"+num2);
            return;
        }
    }
    
    num1 = resultado; 
    document.getElementById('scream').textContent = resultado;
}

function jerarquiaoperaciones(){
    
}

function igual() {
    if (signo) {
        num2 = parseFloat(document.getElementById('scream').textContent, 10);
        realizarOperacion();
        signo = '';
        num1 = resultado; 
        num2 = 0;
    }
}

function punto() {
    let pantalla = document.getElementById('scream').textContent;
    if (!pantalla.includes('.')) {
        document.getElementById('scream').textContent += '.';
    }
}

function borraruno() {
    let pantalla = document.getElementById('scream').textContent;
    document.getElementById('scream').textContent = pantalla;
}

function borrar() {
    document.getElementById('scream').textContent = '';
    num1 = 0;
    num2 = 0;
    resultado = 0;
    signo = '';
}

