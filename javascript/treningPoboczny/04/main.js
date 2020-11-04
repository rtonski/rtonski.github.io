 'use strict';

// Napisz funkcje, przyjmuje dwa parametry typu string.
// Pierwszym jest jakieś długie zdanie lub klika zdań. Drugim jest poszukiwanie słowo.
// Funkcja sprawdza ile razy poszukiwane słowo występuje w danym zdaniu i zwraca informację "Słowo xyz wystąpiło x razy"

let firstStr = "Jedynie język złota, to prawdziwe esperanto, tylko język złota!";
let secondStr = "złota";

let searchWord = function(sentence, word) {
    let arr = sentence.split(' ');
    let some = 0;
    arr.forEach(x => { 
        x == word ? some++ : null;
        
    });
    console.log(some);
} 

searchWord(firstStr, secondStr);


// let array = [4, 1, 2, 4, 5, 4];

// array.find(el => el == 4)
