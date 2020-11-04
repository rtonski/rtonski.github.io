// Napisz funkcję, która jako parametr przyjmuje tablicę z dowolnymi liczbami - np. [1,2,7,4,13,66,88,103]. Zwróć nową tablicę, która będzie zawierała tylko liczby parzyste. Wewnątrz funkcji stwórz zmienną z pustą tablicą, napisz warunek, który sprawdzi, czy liczba jest parzysta, jeśli tak to metodą push dodaj ja do stworzonej tablicy. Na koniec zwróć nową tablicę.

let someArr = [1,3,4,7,8,10,6,7,13,15];

const toEvenArr = function(arr) {
  let evenArr = [];
  arr.forEach(arg => arg % 2 == 0 ? evenArr.push(arg) : null );
  console.log(evenArr);
  return evenArr;
}

toEvenArr(someArr)