// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  const t = []
  const arr = Object.keys(objeto)
  for(const a of arr){
    const y = []
    y[0] = a
    y[1] = objeto[a]
    t.push(y)
  }
  return t
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let arreglos = Array.from(string)
  const obj = {}
  while(arreglos.length > 0){
    const st = arreglos[0]
    const arr = arreglos.filter( x => x === st)
    arreglos = arreglos.filter(x => x !== st)
    obj[st] = arr.length
  }
  return obj
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let arreglo = Array.from(s)
  // for(const arr of arreglo){
  //   if(arr === arr.toLowerCase()){
  //     t.push(g)
  //   }
  const arr = arreglo.filter( x => x === x.toLowerCase() )
  const Arr = arreglo.filter( x => x === x.toUpperCase() )
  return Arr.concat(arr).join("")
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let arrs = str.split(" ")
  const t = []
  for(let arr of arrs){
    arr = Array.from(arr).reverse().join("")
    t.push(arr)
  }
  return t.join(" ")
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  
  
  const arrs = Array.from(String(numero), Number).reverse().join("")
  const arr = Array.from(String(numero), Number).join("")
  if(arrs == arr){
    return "Es capicua"
  }else{
    return "No es capicua"
  }
}
  
  

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  const arrs = Array.from(cadena)
  const a = arrs.filter((x) => {if (x != "a" && x != "b" && x != "c") return x})
  return a.join("")
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return t = arr.sort((a, b) => a.length - b.length)
  
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  const arrs = arreglo1.filter(x => arreglo2.indexOf(x) != -1 )
  return arrs
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

