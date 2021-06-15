//EJERCICIO 1//
​/*
​for(let i=1;i<=10;i++){
    console.log(i);
} 
​
//EJERCICIO 2// 
​
let suma = 0;
let numero;
​
for(let i=0;i<5;i++){
    numero = parseInt(prompt("Ingrese un numero"));
    console.log("Iteracion n " + i + "Valor de numero: " + numero);
    suma = suma + numero;
    console.log("Iteracion n " + i + "Valor de suma: " + suma);
}
​alert(suma);


 
//EJERCICIO 3//
​
let suma = 0;
let numero;
let cantidad = parseInt(prompt("Ingrese cantidad de numeros"));
console.log(cantidad);
​
for(let i=0;i<cantidad;i++){
    numero = parseInt(prompt("Ingrese un numero"));
    console.log("Iteracion n " + i + "Valor de numero: " + numero);
    suma = suma + numero;
    console.log("Iteracion n " + i + "Valor de suma: " + suma);
}
​alert(suma); 
​

//EJERCICIO 4//
 
let suma=0;
let input;
​
while (input !==0 ){
    input = parseInt(prompt("Ingrese un numero, si quiere finalizar ingrese 0."));
    console.log(input);
    suma = suma + input;
}
alert(suma); 
​
//EJERCICIO 5//
​
let suma=0;
let input = true;
let contador=0;
​
while (input !==0 ){
    input = parseInt(prompt("Ingrese un numero, si quiere finalizar ingrese 0."));
    suma = suma + input;
    contador = contador +1;
}
alert(suma/(contador-1)); 
​


//EJERCICIO 6//

let numero = parseInt(prompt("Ingrese un numero"));

for (let i=1;i<=numero;i++) {
    console.log(i);
}  

//EJERCICIO 7//

let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese un numero mayor al anterior"));

for(i=num1+1;i<num2;i++) {
    console.log(i);
}   


//EJERCICIO 8//

let mayor = 0;
let cantidad = parseInt(prompt("Cuantos numeros quiere ingresar?"));
let numero;

for (let i=0;i<cantidad;i++) {
    if (numero>mayor) {
        mayor = numero;
    }
    
}  alert(mayor);   


//EJERCICIO 9//

let ingresar= parseInt(prompt("¿Cuantos numero quiere ingresar?"));
let menor=99999999999999999;
let intentos=0;
let numero;

do {
    numero = parseInt(prompt("Ingrese numero"));
    if (menor > numero) {
        menor = numero;
    }
    intentos++;
} while (intentos < ingresar);
console.log("El numero menor  que ingresó es " + menor);  


//EJERCICIO 10//

let numero = parseInt(prompt("Ingrese un número"));
let asterisco = "";

for(let i=0;i<numero;i++){
    asterisco = asterisco + "*";
} alert(asterisco);    


//EJERCICIO 11//

alert("Calculadora de potencias");
let base = parseInt(prompt("Ingrese un valor de base"));
let exponente = parseInt(prompt("Ingrese exponente"));
let multiplicador = 1;

for(let i=0;i<exponente;i++) {
    multiplicador = multiplicador * base
}
alert(multiplicador);   


//EJERCICIO 12//

let numero = parseInt(prompt("Ingrese un número para saber su factorial"));
let total = 1;

for(let i=0;i<=numero;i++) {
    total = total * i;
} 
console.log(total);   


//EJERCICIO 13//

let numero = parseInt(prompt("Ingrese un número"));
let divisor = 0;

for(i=0;i<numero;i++) {
    divisor = divisor + 1;

    if (numero%divisor===0) {
        console.log(divisor + " es divisor de " + numero);
    }
}   


//EJERCICIO 14//

let numero = parseInt(prompt("Ingrese un número"));
let cadena = prompt("Ingrese una cadena de caracteres");

for (let i=0;i<numero;i++) {
    console.log(cadena.charAt(i));
}   


//EJERCICIO 16//

let numero;

do{
    numero = parseInt(prompt("Ingrese un número"));
    console.log(numero);
} while (numero%3!==0);


*/





