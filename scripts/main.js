/* 1. Utilizando función arrow, crear una función que reciba como parámetros un nombre, 
apellido y edad y los retorne en un string concatenado 
“Hola mi nombre es sebastián yabiku y mi edad 33”*/

let datos = (nombre, apellido, edad) => {
    return `Hola mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`;
}

console.log(datos("Sebastián", "Yabiku", 33));

// 2. Cree una función que tome números y devuelva la suma de sus cubos.
//sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

    function SumOfCubes(a,b,c) {
    return a**3 + b**3 + c**3
    }
console.log("la suma de cubos es: ",SumOfCubes (1,5,9));

/*3. Crear una funcion que me retorne el tipo de valor entregado,
 utilizar la función e imprimir los distintos tipos de JS.*/

 let dato = (a) =>{
    return "El valor es tipo" + typeof(a)
}

console.log(dato(10));

// 4. Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)

function suma(...rest) {
   let suma = 0;
   for (let i = 0; i < rest.length; i++) {
       suma = suma + rest[i]

   }
   return suma
}
console.log (suma(1,2,3,4,5,6));

// 5. Crear una función que reciba una matriz de valores y filtre los valores que no son string

let matriz = [5, "Jimena", 8, {name: "goya"}, "Javier", "Paloma"]

let result = matriz.filter(valores => typeof valores !== 'string');

console.log(result);

// 6. Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

let matrizdenumeros = [5, 8, 4, 6, 9, 48, 10];

function minMax(matriz) {
     let min = Math.min.apply(null, matrizdenumeros);
     let max = Math.max.apply(null, matrizdenumeros); 
    return [min, max];
}

console.log(minMax(matrizdenumeros));

