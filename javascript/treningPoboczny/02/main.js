// Napisz funkcję, która przyjmuje jeden parametr, promień koła - funkcja zwraca pole koła o danym promieniu. Jeśli parametr ma wartość ujemną zwróć informacje "Nie można policzyć pola koła".


let cfield = r => { 
   return r >= 0 ?  2 * Math.PI * Math.pow(r, 2) : "Nie można policzyć pola koła.";
}

cfield(9)