//Ingreso datos a las funciones a travez de la consola

//EJERCICIO 1
function numeroCapicua(numero){
    var arreglo = numero.toString().split("");
    var arrReverso = [];
    for (var i=arreglo.length-1; i>=0; i-- ){
        arrReverso.push(arreglo[i]);    
    }
    for (var i=0; i<arreglo.length; i++){
        if (arrReverso[i] == arreglo[i]){
            return("El número ingresado es Capicua");
        }
        else{
            return("El número ingresado no es Capicua");
        }
    }

}
//document.write("EJERCICIO 1: " + "<br />"+ numeroCapicua(565)+ "<br />");

//EJERCICIO 2
function potencia(num, potencia){
    var resultado=1;
    for(var i=0; i<potencia; i++){
        resultado *= num;
    }
    return resultado;
}
//document.write("EJERCICIO 2: " + "<br />"+ potencia(3,2)+ "<br />");

//EJERCICIO 3
function repiteCaracter(arreglo,caracter){

    //var arreglo = ["Murcielago", "Pato", "Caballo", "Zebra"];
    var numCaracter =0;
    for (var i=0; i<arreglo.length; i++){
        for (var j=0; j<arreglo[i].length; j++){
            if (caracter == arreglo[i].charAt(j)){
                 numCaracter ++;
            }
        }
        
    }
    return numCaracter;
}
//document.write("EJERCICIO 3: " + "<br />"+ repiteCaracter( ["Murcielago", "Pato", "Caballo", "Zebra"],"a")+ "<br />");

//EJERCICIO 4
function contarPalabras(palabra){
    var arregloPalabras = palabra.split(" ");
    var numPalabras = arregloPalabras.length;
    return ("El texto ingresado tiene: " + numPalabras + " Palabras");
}
//document.write("EJERCICIO 4:" + "<br />"+ contarPalabras("Life is beautiful")+ "<br />");

//EJERCICIO 5
function palabraLarga (arreglo){
    var mayor=0;
    for(var i =0; i< arreglo.length; i++){
        var longitud =arreglo[i].length;
        if(longitud > mayor){
            mayor = longitud;
        }

    }
    return mayor;
}
//document.write("EJERCICIO 5: "+ "<br />" + palabraLarga(["Murcielago", "Pato", "Caballo", "Zebra"])+ "<br />");

//EJERCICIO 6
function contarVocales(arreglo){
    var vocal=0;
    for(var i=0; i<arreglo.length; i++){
        for(var j=0; j<arreglo[i].length; j++){
            switch (arreglo[i].toLowerCase().charAt(j)){
                case "a":
                case "e":
                case "i":
                case "o":
                case "u":
                    vocal ++;
                    //console.log(vocal);
                    break;
                default:
                    //console.log("No hay vocales");
                    break;
            }
        }
    }
    return ("El arreglo ingresado tiene: " +  vocal + " vocales");
}
//document.write("EJERCICIO 6: "+ "<br />"+contarVocales( ["Murcielago", "Pato", "Caballo", "Zebra"])+ "<br />");

//EJERCICIO 7
function sumaImpares(num1, num2){
    var suma=0;
    for(var i=num1; i<=num2; i++){
        if(i%2 != 0){
            suma +=i;
        }   
    }
    return ("La suma de los numeros impares es: "+ suma);

}
//document.write("EJERCICIO 7: "+ "<br />" + sumaImpares(1,10)+ "<br />");

//EJERCICIO 8
function palabraMasLarga(arreglo){
    var mayor = 0;
    var arrLong = [];
    for(var i =0; i< arreglo.length; i++){
        var longitud =arreglo[i].length;
        if(longitud > mayor){
            mayor = longitud;
            arrLong = arreglo[i];
        }

    }
    return arrLong;

}
//document.write("EJERCICIO 8: "+ "<br />" + palabraMasLarga(["Murcielago", "Pato", "Caballo", "Zebra"])+ "<br />");

//EJERCICIO 9
function invertirPalabra(palabra){
  var palabraReverso = palabra.split("");
  return palabraReverso.reverse().join("");
}
//document.write("EJERCICIO 9: " + "<br />"+ invertirPalabra("roma")+ "<br />");

//EJERCICIO 10
function dibujar(num){
    var dibujo = "";
    var slash="";
    var cadenaFinal ="";
    for (var i=num; i > 0; i--){
       dibujo = dibujarLineas(i);
       comillas = dibujarComillas(i);
       cadenaFinal += dibujo + "/" + comillas + "\\";  
       num--;
    }
     return (cadenaFinal);
}

function dibujarLineas(num) {
  var s = "";
  for (var i = 0; i < num; i++){
      s += "_";
  }
  return s;
}
function dibujarComillas(num){
  var s = "";
  for (var i = 0; i < num; i++){
      s += "'";
  }
  return s;
}
//document.write("EJERCICIO 10:"+ "<br />" +dibujar(4));