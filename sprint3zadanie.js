// Zadania ze Zmiennych
//

// a) Zadeklaruj zmienną typu number i przypisz do niej dowolną liczbę całkowitą.
const number = 4;

// b) Utwórz zmienną typu string przechowującą twoje imię.
const name = "Kamil";

// c) Zainicjalizuj zmienną bez wartości, a następnie przypisz do niej dowolny tekst.
let text;

text = "dowolny tekst";

// d) Stwórz zmienną const i przypisz do niej obiekt z dwoma kluczami: name (string) i age (number).
const person = {
  name: "Kamil",
  age: 27,
};

// e) Zadeklaruj dwie zmienne: jedną używając let, drugą const i przypisz do nich wartości logiczne.
let first = true;
const second = false;

// f) Stwórz zmienną, która będzie przechowywać sumę dwóch liczb.
const number1 = 5;
const number2 = 4;

const sum = number1 + number2;

// g) Utwórz zmienną przechowującą twoje pełne imię i nazwisko jako jedną wartość typu string.
const myName = "Kamil Owczarek";

// h) Zainicjalizuj zmienną z liczbą zmiennoprzecinkową.
const myNumber = 3.4;

// i) Zadeklaruj zmienną i przypisz do niej wynik działania matematycznego (np. dodawanie).
const result = 2 + 3;

// j) Stwórz zmienną przechowującą twoje miasto jako ciąg znaków.
const city = "Wrocław";

//
// Zadania z Prostych i Złożonych Typów Danych
//

// a) Utwórz tablicę zawierającą trzy różne typy danych.
const table1 = ["zima", 3, false];

// b) Stwórz obiekt car z właściwościami make, model i year.
const car = {
  make: "Lamborgini",
  model: "Revuelto",
  year: 2023,
};

// c) Zadeklaruj tablicę z trzema różnymi wartościami liczbowymi.
const table2 = [3, 4, 10];

// d) Utwórz obiekt reprezentujący osobę, zawierający klucze name, age i isStudent (boolean).
const student = {
  name: "Piotr",
  age: 26,
  isStudent: true,
};

// e) Zadeklaruj zmienną przechowującą pusty obiekt, a następnie dodaj do niego klucz color z wartością typu string.
const myObject = {};
myObject.color = "blue";

// f) Stwórz tablicę obiektów, gdzie każdy obiekt reprezentuje zwierzę z kluczami name (string) i age (number).
const animals = [
  { name: "Lew", age: 3 },
  { name: "panda", age: 2 },
];

// g) Utwórz zmienną przechowującą tablicę z różnymi wartościami boolean.
const example = [false, true, true, false];

// h) Stwórz obiekt student z kluczami name (string), grades (tablica liczb) i isActive (boolean).
const student2 = {
  name: "Anna",
  grades: [3, 5, 6, 3],
  isActive: true,
};

// i) Zadeklaruj tablicę zawierającą różne typy danych, w tym co najmniej jeden obiekt.
const table3 = [3, true, "lato", 4, { name: "Ola", age: 3 }];

// j) Utwórz obiekt reprezentujący książkę z kluczami title, author i yearPublished.
const book = {
  title: "Chłopi",
  author: "Władysław Stanisław Reymont",
  yearPublished: 1904,
};

//
// Zadania z Warunków i Operatorów Trójargumentowych
//

// a) Napisz warunek if, który sprawdzi, czy zmienna typu number jest większa od 10.
const myNumber2 = 11;

if (myNumber2 > 10) {
  console.log("Liczba jest większa niz 10");
}
// b) Stwórz warunek if, który sprawdzi, czy zmienna tekstowa jest równa "Hello".
const string = "Hello";

if (string === "Hello") {
  console.log("Zmienna jest równa Hello");
}

// c) Użyj operatora ternarnego do przypisania do zmiennej wartości w zależności od innego warunku logicznego.
const age = 20;
const allowed = age >= 18 ? "Pełnoletni" : "Niepełnoletni";

// d) Napisz warunek, który sprawdzi, czy zmienna age jest większa lub równa 18.
const age2 = 10;

if (age2 >= 18) {
  console.log("Zmienna age jest większa lub równa 18");
} else {
  console.log("Zmienna age jest mniejsza niz 18");
}

// e) Stwórz warunek if-else, który sprawdzi, czy tablica jest pusta.

const table4 = [];

if (table4.length === 0) {
  console.log("Tablica jest pusta");
} else {
  console.log("Tablica nie jest pusta");
}

// f) Użyj operatora ternarnego do sprawdzenia, czy zmienna isMember jest prawdziwa, i na tej podstawie przypisz rabat.
const isMember = false;

const rabat = isMember ? "tak" : "nie";

console.log(rabat);

// g) Napisz warunek if, który sprawdzi, czy długość ciągu znaków w zmiennej jest większa niż 5.
const string2 = "choin";

if (string2.length > 5) {
  console.log("Długość ciągu znaków w zmiennj jest większa niz 5");
} else {
  console.log("Długość ciągu znaków w zmiennej jest mniejsza bądź równa 5");
}

// h) Stwórz warunek if-else, który sprawdzi, czy liczba jest parzysta lub nieparzysta.
const myNumber3 = 4;

if (myNumber3 % 2 === 0) {
  console.log("Liczba jest parzysta");
} else {
  console.log("Liczba jest nieparzysta");
}

// i) Użyj operatora ternarnego do wyboru między dwoma różnymi wartościami tekstowymi w zależności od warunku.
const myText = "lato";
const myText2 = myText === "lato" ? "Idziemy na spacer" : "Zostajemy w domu";

console.log(myText2);

// j)Napisz warunek if, który sprawdzi, czy obiekt ma określony klucz.
const participant = {
  name: "Basia",
  age: 18,
  favColor: "red",
};

const keyToCheck = "color";

if (participant.hasOwnProperty(keyToCheck)) {
  console.log(`Obiekt zawiera klucz ${keyToCheck}`);
} else {
  console.log(`Obiekt nie zawiera klucza ${keyToCheck}`);
}
