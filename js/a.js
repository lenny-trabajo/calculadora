document.addEventListener("DOMContentLoaded", listen);

function listen(){
    let body=document.querySelector('body');
    body.addEventListener('click',clicks);
}

let obtenido=-1;
let numero=0;
let signo='';
let cadena="";
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
    if(event.target && event.target.id=='mas')suma();
    if(event.target && event.target.id=='menos')resta();
    if(event.target && event.target.id=='por')multiplicacion();
    if(event.target && event.target.id=='dividir')division();
    if(event.target && event.target.id=='igual')igual();
    if(event.target && event.target.id=='borrraruno')borraruno("DEL");
    if(event.target && event.target.id=='borrar')borrar("AC");
    if(event.target && event.target.id=='punto')punto(".");


}

function concatenamiento(num){

    let pantalla=document.getElementById('scream').textContent;
    document.getElementById('scream').textContent=pantalla+num;
}

function operar(opera){
    let operacion=document.getElementById('scream').textContent;
    document.getElementById('scream').textContent=operacion+opera;
    //let resultado=eval(operacion);
    //document.getElementById('scream').textContent=resultado+opera;
}

 /*function operacion(signo){
    let resultadofinal=0;
    if(signo=='+'){
        suma();
    }else if(signo=='-'){
        resta();
    }else if(signo=='*'){
        multiplicacion();
    }else if(signo=='/'){
        division();
    }
   for(let i=0;i<cadena.length;i++){
        //console.log(cadena[i]);
        if(cadena[i]=='/'){
            console.log(cadena[i-1]+cadena[i]+cadena[i+1]);
        }else if(cadena[i]=='*'){
            console.log(cadena[i-1]+cadena[i]+cadena[i+1]);
        }else if(cadena[i]=='-'){
            console.log(cadena[i-1]+cadena[i]+cadena[i+1]);
        }else if(cadena[i]=='+'){
            console.log(cadena[i-1]+cadena[i]+cadena[i+1]);
        }
    }
    return resultadofinal;
}*/

function suma(){
    if(obtenido==1){
        num2=getnumberandclear();
        console.log(num2);
        if(resultado==0){
            resultado=num1+num2; 
        }else{
            resultado=resultado+num2;
        }
        
        console.log("resultado: "+resultado);
        obtenido=-1;
        
    } else {
    num1=getnumberandclear();
    if(resultado!=0){
        resultado=resultado+num1;
    }
    console.log(num1);
    obtenido=1;
    }

    return resultado;
}

function resta(){
    if(obtenido==1){
        num2=getnumberandclear();
        console.log(num2);
        if(resultado==0){
            resultado=num1-num2; 
        }else if(resultado!=0){
            resultado+=-num2;
        }//else if(resultado!=0){
           // resultado+=-num1-num2;
        //}
        
        console.log("resultado: "+resultado); 
        obtenido=-1;
        
    } else {
    num1=getnumberandclear();
    if(resultado!=0){
        resultado+=-num1;
    }
    console.log(num1);
    obtenido=1;
    }
    return resultado;
}
function multiplicacion(){
    if(obtenido==1){
        num2=getnumberandclear();
        console.log(num2);
        if(resultado==0){
            resultado=num1*num2;
        }else {
            resultado=resultado*num2;
        }
        
        console.log("resultado: "+resultado);  
        obtenido=-1;
        
    } else {
    num1=getnumberandclear();
    console.log(num1);
    if(resultado!=0){
        resultado=resultado*num1;
    }
    obtenido=1;
    }
    return resultado;
}
function division(){
    if(obtenido==1){
        num2=getnumberandclear();
        console.log(num2);
        if(resultado==0){
        resultado=num1/num2;
    }else {
        resultado=resultado/num2;
    }  
        console.log("resultado: "+resultado);
        obtenido=-1;
        
    } else {
    num1=getnumberandclear();
    if(resultado!=0){
        resultado=resultado/num1;
    }
    console.log(num1);
    obtenido=1;
    }
    return resultado;
}

/*function sumar(numero1,numero2){
        if(resultado==0){
            resultado=numero1+numero2; 
        }else if(resultado!=0&&numero1!=0){
        resultado=resultado+numero1;
        }else if(resultado!=0&&numero2!=0){
            resultado=resultado+numero2;
        }
            
    return resultado;

}

function restar(numero1,numero2){
    if(resultado==0){
        resultado=numero1-numero2; 
    }else if(resultado!=0&&numero1!=0){
    resultado=resultado-numero1;
    }else if(resultado!=0&&numero2!=0){
        resultado=resultado-numero2;
    }
        
return resultado;

}

function multiplicaciones(numero1,numero2){

    if(divisiones()==0){
        if(resultado==0){
            resultado=numero1*numero2; 
        }else if(resultado!=0&&numero1!=0){
            resultado=resultado*numero1;
        }else if(resultado!=0&&numero2!=0){
            resultado=resultado*numero2;
        }
            
    }else if(divisiones()!=0){
        if(numero1!=0){
            divisiones=divisiones*numero1;
        }else if(numero2!=0){
            divisiones=divisiones*numero2;
        }
    }
    

return resultado;

}

function divisiones(numero1,numero2){
    if(multiplicaciones()==0){
        if(resultado==0){
            resultado=numero1/numero2; 
        }else if(resultado!=0&&numero1!=0){
            resultado=resultado/numero1;
        }else if(resultado!=0&&numero2!=0){
            resultado=resultado/numero2;
        }
    }else if(multiplicaciones()!=0){
        if(numero1!=0){
            multiplicaciones=multiplicaciones/numero1;
        }else if(numero2!=0){
            multiplicaciones=multiplicaciones/numero2;
        }
    }
    
        
return resultado;

}*/


/*function getsigno(signo){
    //console.log("signo: "+signo);
        if(obtenido==-1){
            num1=getnumberandclear();
            //cadena=cadena+num1+signo;
            cadena+=num1+signo;
            console.log(cadena);
            obtenido=-1;
        }else {
            num2=getnumberandclear();
            //cadena=cadena+num2;
            cadena=cadena+num2;
            console.log(cadena);
            obtenido==1;
        
        }

    
    
    return cadena;
    
}*/

/*function distribucioncadena(cade){
    let conteosigno=0;
    let operarealizada=false;
    for(var i=0; i<cade.length-9; i++){
        console.log("cadena: "+cade[i]);
        if(getsigno[i]=='*'){
            num1=parseFloat(getsigno[i-1]);
            num2=parseFloat(getsigno[i+1]);
            multiplicaciones(num1,num2);
            getsigno[i-1]=multiplicaciones;
            getsigno[i+1]=multiplicaciones;
            getsigno[i]=multiplicaciones;
            operarealizada=true;
            console.log("multiplicacion: "+getsigno[i-1]+getsigno[i]+getsigno[i+1]);
        }else if(getsigno[i]=='/'){
            num1=parseFloat(getsigno[i-1]);
            num2=parseFloat(getsigno[i+1]);
            divisiones(num1,num2);
            getsigno[i-1]=divisiones;
            getsigno[i+1]=divisiones;
            getsigno[i]=divisiones;
            operarealizada=true;
            console.log("division: "+getsigno[i-1]+getsigno[i]+getsigno[i+1]);
        }else if(getsigno[i].contains('*')==false&&getsigno[i].contains('/')==false){
        if(getsigno[i]=='+'){
            num1=parseFloat(getsigno[i-1]);
            num2=parseFloat(getsigno[i+1]);
            sumar(num1,num2);
            console.log("suma: "+getsigno[i-1]+getsigno[i]+getsigno[i+1]);
        }else if(getsigno[i].contains('+')==false){
            if(getsigno[i]=='-'){
                num1=parseFloat(getsigno[i-1]);
                num2=parseFloat(getsigno[i+1]);
                restar(num1,num2);
                console.log("resta: "+getsigno[i-1]+getsigno[i]+getsigno[i+1]);
            } 
        }
        }
    }
     for(var i=0;i<cade.length-9;i++){
        if(getsigno[i]=='+'){
            num1=parseFloat(getsigno[i-1]);
            num2=parseFloat(getsigno[i+1]);
            sumar(num1,num2);
            console.log("suma: "+getsigno[i-1]+getsigno[i]+getsigno[i+1]);
        }else if(getsigno[i]=='-'){
            num1=parseFloat(getsigno[i-1]);
            num2=parseFloat(getsigno[i+1]);
            restar(num1,num2);
            console.log("resta: "+getsigno[i-1]+getsigno[i]+getsigno[i+1]);
        } 
    }

}*/

function getnumberandclear(){
    numero=parseFloat(document.getElementById('scream').textContent,10);
    document.getElementById('scream').textContent=' ';
   
    return numero;
}



function igual(){
    //resultado=resultado+parseFloat(document.getElementById('scream').textContent,10);
    // resultado=resultado-parseFloat(document.getElementById('scream').textContent,10);
    //document.getElementById('scream').textContent=suma();
    //document.getElementById('scream').textContent= getsigno();
   /* if(){
        resultado=resultado+parseFloat(document.getElementById('scream').textContent,10);
        document.getElementById('scream').textContent=suma();
    }else if(){
        resultado=resultado-parseFloat(document.getElementById('scream').textContent,10);
        document.getElementById('scream').textContent=resta();
    }else if(){
        resultado=resultado*parseFloat(document.getElementById('scream').textContent,10);
        document.getElementById('scream').textContent=multiplicacion();
    }else if(){
        resultado=resultado/parseFloat(document.getElementById('scream').textContent,10);
        document.getElementById('scream').textContent=division();
    }*/
}

function punto(){

    document.getElementById('scream').textContent+= ".";

}

function borraruno(){
    document.getElementById('scream').textContent=(document.getElementById('scream').textContent.length-1);
    
}


function borrar(){
    document.getElementById('scream').textContent=' ';
    obtenido=-1;
    num1=0;
    num2=0;
    resultado=0;
 
}


