// Napisz funkcję, która jako parametr przyjmie dwie liczby. Funkcja zwróci wynik dzielenia pierwszej liczby przez drugą. W przypadku, gdy druga liczba jest równa 0, funkcja zwróci informację, że nie można dzielić przez 0;


const divide = (a,b) => {
    return b != 0 ? a/b : "Nie można dzielić przez 0"
};

divide(30, 10)