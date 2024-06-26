//EJERCICIOS

//EJ1 Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0.
const getNumber = number => {
  for (let counter = number; counter >= 0; counter--) {
    console.log(counter);
  }
};
getNumber(5);

//EJ2 Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.
const getTenNumbers = tenNumbers => {
  let resultSum = 0;

  for (const number of tenNumbers) {
    resultSum = resultSum + number;
  }
  console.log(resultSum);
};
getTenNumbers([2, 4, 6, 4, 5, 6, 7, 8, 9, 10]);

//EJ3 Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10. Para el 4 el resultado debe ser:
//  4 x 0 = 0
//  4 x 1 = 4
//  4 x 2 = 8
//  4 x 3 = 12
//  4 x 4 = 16
//  4 x 5 = 20
//  4 x 6 = 24
//  4 x 7 = 28
//  4 x 8 = 32
//  4 x 9 = 36
//  4 x 10 = 40
const getMultiplay = number => {
  for (let counter = 0; counter <= 10; counter++) {
    let resultMult = counter * number;
    console.log(`${number} x ${counter} = ${resultMult}`);
  }
};
getMultiplay(5);

//EJ4 Crea la función inversa para que la tabla de multiplicar salga en orden inverso. Para el 4 el resultado debe ser:
//  4 x 10 = 40
//  4 x 9 = 36
//  4 x 8 = 32
//  4 x 7 = 28
//  4 x 6 = 24
//  4 x 5 = 20
//  4 x 4 = 16
//  4 x 3 = 12
//  4 x 2 = 8
//  4 x 1 = 4
//  4 x 0 = 0
const getMultiplay2 = number => {
  for (let counter = 10; counter >= 0; counter--) {
    let resultMult = counter * number;
    console.log(`${number} x ${counter} = ${resultMult}`);
  }
};
getMultiplay2(3);

//EJ5 Crea una función que reciba el año actual y tu edad, la función debe imprimir:
//- "naciste en el año X"
//- "En el año X cumpliste 1 año"
//- "En el año X cumpliste 2 años"
//- "En el año X cumpliste 3 años"
const getAge = (year, age) => {
  const birthYear = year - age;
  console.log(`Naciste en el año ${birthYear}`);
  for (let counter = birthYear + 1; counter <= year; counter++) {
    if (counter - birthYear === 1) {
      console.log(`En el año ${counter} cumpliste ${counter - birthYear} año`);
    } else {
      console.log(`En el año ${counter} cumpliste ${counter - birthYear} años`);
    }
  }
};
getAge(2024, 24);

//EJ6 Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12.
const twoNumbers = (number1, number2) => {
  const maxNumber = Math.max(number1, number2);
  const minNumber = Math.min(number1, number2);

  for (counter = minNumber; counter <= maxNumber; counter++) {
    if (counter % 2 === 0) {
      console.log(counter);
    }
  }
};
twoNumbers(13, 3);

//EJ7 Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays.
const twoArrays = () => {
  let firstArray = [];
  let secondArray = [];

  for (i = 0; i <= 5; i++) {
    const randomNumber1 = Math.floor(Math.random() * 11);
    firstArray.push(randomNumber1);

    const randomNumber2 = Math.floor(Math.random() * 11);
    secondArray.push(randomNumber2);
  }

  let repeatNumber = [];
  for (i = 0; i <= 5; i++) {
    if (secondArray.includes(firstArray[i])) {
      repeatNumber.push(firstArray[i]);
    }
  }
  console.log(firstArray, secondArray);
  console.log(repeatNumber);
};
twoArrays();

//EJ8 Crea una función que reciba un número y te diga si es primo o no. Un número primo es aquel que sólo puede dividirse por si mismo
const getPrimeNumber = number => {
  if (number === 2) {
    console.log('El número es primo');
    return;
  } else if (number % 2 === 0 || number < 2) {
    console.log('No es un número primo');
    return;
  }

  for (i = 2; i < number; i++) {
    if (number % i !== 0) {
      console.log('Es un número primo');
      return;
    } else {
      console.log('No es un número primo');
    }
  }
};
getPrimeNumber(13);

//EJ9 Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
//  "Número: 2 - Cuadrado: 4 - Cubo: 8".
//  Nota: Dentro del objeto Math existe el método pow. Math.pow(número, exponente)
const tenSquared = tenNumbers => {
  for (const squaredCubed of tenNumbers) {
    const numSquared = Math.pow(squaredCubed, 2);
    const numCubed = Math.pow(squaredCubed, 3);

    console.log(`Número: ${squaredCubed} - Cuadrado: ${numSquared} - Cubo: ${numCubed}`);
  }
};
tenSquared([2, 10, 3, 12, 35, 4, 6, 79, 40, 62]);

console.log('_____________');
//EJ10 Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.
const getWord = word => {
  const vowels = 'aeiou';
  let newWord = '';
  for (i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      newWord = newWord + word[i].toUpperCase();
    } else {
      newWord = newWord + word[i];
    }
  }
  console.log(newWord);
};
getWord('mariposa');

//EJ11 Crea una función que reciba una frase e imprima el número de veces que se repite cada vocal, por ejemplo para la frase "Enrique ordeña cabras", el resultado por consola debe ser:
//  a: 3,
//  e: 3,
//  i: 1,
//  o: 1,
//  u: 1
const getPhrase = phrase => {
  let resultA = 0;
  let resultE = 0;
  let resultI = 0;
  let resultO = 0;
  let resultU = 0;

  for (const letter of phrase.toLowerCase()) {
    if (letter === 'a') {
      resultA++;
    } else if (letter === 'e') {
      resultE++;
    } else if (letter === 'i') {
      resultI++;
    } else if (letter === 'o') {
      resultO++;
    } else if (letter === 'u') {
      resultU++;
    }
  }

  console.log(`a:${resultA}, e:${resultE}, i:${resultI}, o:${resultO}, u:${resultU}`);
};
getPhrase('Enrique ordeña cabras');

//EJ12 Crea una función que reciba dos palabras e intercale las letras de cada una para formar una nueva palabra. Si la función recibe (hola, adios) el resultado será "haodliao", pero si recibe (adios, hola) el resultado será "ahdoiloa"
const getTwoWords = (word1, word2) => {
  let insertWord = '';
  const shortestWord = Math.min(word1.length, word2.length);

  for (i = 0; i < shortestWord; i++) {
    insertWord += word1.charAt(i) + word2.charAt(i);
  }

  console.log(insertWord);
};
getTwoWords('platano', 'arroz');

//EJ13 Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM"
const getReverseWord = word => {
  let reverseWord = '';

  for (i = word.length - 1; i >= 0; i--) {
    reverseWord += word.charAt(counter);
  }

  console.log(reverseWord);
  console.log(word.split('').reverse().join(''));
};
getReverseWord('Ordenador');

//EJ14 Crea una función que reciba un array de 10 números. Dentro de esa función crea dos arrays vacíos llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.
const getTenArray = tenArray => {
  let even = [];
  let odd = [];
  const randomNumber = Math.floor(Math.random() * 11);

  for (const numbers of tenArray) {
    const resultMultiply = numbers * randomNumber;

    if (resultMultiply % 2 === 0) {
      even.push(resultMultiply);
    } else [odd.push(resultMultiply)];
  }

  console.log(tenArray, even, odd);
};
getTenArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

//EJ15 Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato', 'perro', 'casa'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A']
const getFiveWords = fiveWords => {
  let firstLastLetter = [];

  for (const firstLast of fiveWords) {
    firstLastLetter.push(firstLast.charAt(0).toUpperCase(), firstLast.charAt(firstLast.length - 1).toUpperCase());
  }

  console.log(firstLastLetter);
};
getFiveWords(['platano', 'arroz', 'perro', 'gato', 'manzana']);
