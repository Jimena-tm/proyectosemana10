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

let matrizdenumeros = [1, 2, 3, 4, 5];

function minMax(matriz) {
     let min = Math.min.apply(null, matrizdenumeros);
     let max = Math.max.apply(null, matrizdenumeros); 
    return [min, max];
}

console.log(minMax(matrizdenumeros));

/* 7. Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) 
y devuelva una cadena en forma de un número de teléfono. */
//formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

let numeros = [1,2,3,4,5,6,7,8,9,0]

function telefono(numeros){
    let n1 = numeros.slice(0,3).join('')
    let n2 = numeros.slice (3,6).join('')
    let n3 = numeros.slice (6,10).join('')
    return numerodetelefono = `(${n1}) ${n2} - ${n3}`
}
console.log(telefono(numeros));

/*8.Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) 
con el mayor número de cada uno.*/
//findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

let matrices = [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]

function findLargestNums(matrices) {
    let max1 = Math.max.apply(null, matrices[0]);
    let max2 = Math.max.apply(null, matrices[1]);
    let max3 = Math.max.apply(null, matrices[2]);
    return matrizfinal = [max1, max2, max3];
}
console.log(findLargestNums(matrices));

/* 9.Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.*/
//charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.
//charIndex("circumlocution", "c") ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.

function charIndex (palabra, caracter) {
    let index1 = palabra.indexOf(caracter);
    let index2= palabra.lastIndexOf(caracter);
    return getindex = [index1,index2];
}
console.log(charIndex("hello", "l"));
console.log(charIndex("circumlocution", "c"));

/*10.Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]*/
let objeto = {
    a: 1,
    b: 2,
    c: 3,
}

function toArray (objeto) {
    let final = Object.entries(objeto);
    return final;
}
console.log(toArray(objeto));

/*11.Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.
getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]) ➞ 65700*/

let personitas = [
    { 
        name: "John", 
        age: 21, 
        budget: 23000 
    },
    { 
        name: "Steve",  
        age: 32, 
        budget: 40000 
    },
    { 
        name: "Martin", 
        age: 16, 
        budget: 2700 
    }
  ]

  function getBudgets (personitas) {
      let o1 =personitas[0].budget;
      let o2 =personitas[1].budget;
      let o3 =personitas[2].budget;
      return resultado = o1 + o2 + o3

  }
console.log(getBudgets(personitas));

/*12. Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
    ]) ➞ ["Becky", "John", "Steve"]*/

let students = [
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
      ]

function getStudentNames(students) {
    let o4 = students[0].name;
    let o5 = students[1].name;
    let o6 = students[2].name;
    return holi = [o4,o5,o6]
}

console.log(getStudentNames(students));

//optimizado

//let students = [{name:"Steven"}, {name:"Raul"}, {name: "Isaac"}]
//let holi= []
//function getStudentsNames (students){
   //for (let i=0; i < students.length;i++){
       //let nombres = students[i].name
       //holi.push(nombres)
   //}
   //return holi
//}
//console.log (getStudentsNames(students))



   




