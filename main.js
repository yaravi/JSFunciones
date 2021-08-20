
// FUNCION SUMA SIMPLE DE DOS NUMEROS
function _suma (a,b){
    return a+b;
}

aa1 = _suma(5,6);

document.write("<h2>EJERCICIO 1</h2>");
console.log(aa1);
document.write(aa1);




// FUNCION SORT DESCENDIENTE O ASCENDENTE
var myArray = [5,10,54,1,87,,42,87,51,1254,45,368,654,12,683];


function _sortListA (a,b){
    return a-b;
}

function _sortListB (a,b){
    return a>b;
}


document.write("<br>");
document.write("<h2>EJERCICIO 2</h2>");
myArray.sort(_sortListA);
document.write(myArray.sort(_sortListA));
console.log(myArray.sort(_sortListA));

document.write("<br>");
myArray.sort(_sortListB);
document.write(myArray.sort(_sortListB));
console.log(myArray.sort(_sortListB));





// FUNCION CALCULADORA
function Suma(num1,num2){
    return num1 + num2;
}
function Resta(num1,num2)
{
    return num1 - num2;
}
function Multiplicar(num1,num2)
{
    return num1 * num2;
}
function Division( num1,num2 )
{
    return num1 / num2;
}
function Calculadora()
{
    var continuar = true;
    do{
        var operacion = prompt( " ¿Que operacion desea realizar (+,-,*,/)?" );
        var resultado = 0;
        var a = parseInt(prompt("Ingresa el primero numero"));
        var b = parseInt(prompt("Ingresa el segundo numero"));
        if( operacion == "+")
        {
            resultado = Suma(a,b);
        }else if ( operacion == "-" )
        {
            resultado = Resta(a,b);
        }else if ( operacion == "*" )
        {
            resultado = Multiplicar(a,b);
        }else if( operacion == "/"){
            resultado = Division(a,b);
        }else{
            console.log("opcion invalida");
            continuar = false;
        }
        console.log(`El resultado de la operacion (${operacion}) es : ${resultado}`);
    }while(continuar == true);
}


// -------------------------------------------------------------------------------
// Hacer una función que convierta de grados centígrados a Farenheit.

var grados = parseInt(prompt ("Escribe los grados centigrados"));

function f1 (a) {
    return  (a * 1.8) + 32;
}

b1 = f1(grados);
document.write("<br>");
document.write("<h2>EJERCICIO 1 FUNCIONES</h2>");
document.write(b1);
console.log(b1); 


// Hacer una función que muestre la tabla de multiplicar de un número
var numero2 = parseInt(prompt ("Escribe el numero a multiplicar"));

function f2 (j) { 
    for (var i = 0; i <= 10; i++) {
        document.write("<br>")
        document.write(j + " x " + i + " = " + j * i + " ");      
    }

}
f2(numero2);

// Escribe una función que imprima todos los números naturales de 1 hasta n (el usuario elige n)
var numero3 = parseInt(prompt ("Escribe el numero limite"));

function f3 (h) {
    for (var k = 0; k <= h; k++) {
        document.write("<br>");
        document.write (` numero natural ${k}`) ;      
    }
}
f3(numero3);

// Escribe una función que imprima todos los números naturales en reversa, desde n (el usuario indica) hasta 1.
var numero4 = parseInt(prompt ("Escribe el numero limite"));

function f4 (l) {
    for (var i = l; i >= 1; i--) {
        document.write("<br>");
        document.write (` numero natural ${i} en orden descendente`) ; 
        console.log(i)     
    }
}
f4(numero4);

// Escribe una función para ingresar cualquier letra del alfabeto y verifique si es vocal o consonante
var letra4 = (prompt ("Escribe cualquier letra de abecedario"));

function f5 (f51) {
    if (f51 == "a" || f51 == "e" || f51 == "i" || f51 == "o" || f51 == "u" ) {
        document.write ("Tu letra es vocal")
    }
    else (
        document.write ("Tu letra es consonante")
    )
}

f5(letra4);
document.write("<br>");


// Escriba una función donde solicite un número al usuario y me calcule su factorial.
var numero6 = parseInt(prompt ("Escribe un numero valido"));

function factorial (num) {
    var resultado = 1;
    for (var index = 1; index <= num; index++) {
        resultado = resultado * index;
    }
    console.log(`el factorial de ${num} es = ${resultado}`)
}

if ( !isNaN(numero6) ) {
    factorial (numero6);
}
else {
    document.write ("Ingresa un numero valido");
}