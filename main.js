const table = document.createElement('table'); // Létrehozunk egy HTML táblázat elemet
document.body.appendChild(table); // A táblázatot beszúrjuk a dokumentum testébe

const tableHeader = document.createElement('thead'); // Elkészítjük a táblázat fejléc részét
const headerRow = document.createElement('tr'); // Létrehozunk egy sort a fejléc számára
table.appendChild(tableHeader); // A fejlécet hozzákapcsoljuk a táblázathoz
tableHeader.appendChild(headerRow); // A sort hozzáadjuk a fejléchez

const headerCell1 = document.createElement('th'); // Új fejléc cella létrehozása
headerCell1.innerHTML = 'Fizika területe'; // Beállítjuk a cella tartalmát: "Fizika területe"
headerRow.appendChild(headerCell1); // A cellát hozzáfűzzük a fejléc sorához

const headerCell2 = document.createElement('th'); // Új fejléc cella előállítása
headerCell2.innerHTML = 'Időszak'; // Megadjuk a cella szövegét: "Időszak"
headerRow.appendChild(headerCell2); // A cellát a fejléc sor végéhez csatoljuk

const headerCell3 = document.createElement('th'); // Egy további fejléc cella létrehozása
headerCell3.innerHTML = 'Képviselők'; // A cellában a "Képviselők" felirat szerepel
headerCell3.colSpan = 2; // A cella két oszlop szélességét öleli fel

headerRow.appendChild(headerCell3); // A cellát hozzáadjuk a fejléc sorhoz
const tableBody = document.createElement('tbody'); // Elkészítjük a táblázat törzs részét
table.appendChild(tableBody); // A törzsrészt beillesztjük a táblázatba

const row1 = document.createElement('tr'); // Első sor létrehozása a táblázat törzsében
tableBody.appendChild(row1); // Az első sort hozzáfűzzük a törzs részhez
const row1Cell1 = document.createElement('td'); // Első cella létrehozása az első sorban

row1Cell1.innerHTML = 'Optika'; // A cella tartalmát "Optika"-ra állítjuk
row1.appendChild(row1Cell1); // A cellát hozzáadjuk az első sorhoz

const row1Cell2 = document.createElement('td'); // Második cella előállítása az első sorban
row1Cell2.innerHTML = 'XI. század'; // A cella szövegét "XI. század"-ra állítjuk
row1.appendChild(row1Cell2); // A cellát beszúrjuk az első sorba

const row1Cell3 = document.createElement('td'); // Harmadik cella létrehozása az első sorban
row1Cell3.colSpan = 2; // A cella két oszlopot foglal magába
row1Cell3.innerHTML = 'Alhazen'; // A cella tartalmát "Alhazen"-re állítjuk
row1.appendChild(row1Cell3); // A cellát az első sorhoz csatoljuk

const row2 = document.createElement('tr'); // Második sor létrehozása a törzsben
tableBody.appendChild(row2); // A második sort beillesztjük a törzs részbe

const row2Cell1 = document.createElement('td'); // Első cella létrehozása a második sorban
row2Cell1.innerHTML = 'Asztronómia'; // A cella tartalma: "Asztronómia"
row2.appendChild(row2Cell1); // A cellát hozzáadjuk a második sorhoz

const row2Cell2 = document.createElement('td'); // Második cella előállítása a második sorban
row2Cell2.innerHTML = 'reneszánsz'; // A cella szövegét "reneszánsz"-ra állítjuk
row2.appendChild(row2Cell2); // A cellát beszúrjuk a második sorba

const row2Cell3 = document.createElement('td'); // Harmadik cella létrehozása a második sorban
row2Cell3.innerHTML = 'Kepler'; // A cella tartalma: "Kepler"
row2.appendChild(row2Cell3); // A cellát a második sor végéhez csatoljuk

const row2Cell4 = document.createElement('td'); // Negyedik cella előállítása a második sorban
row2Cell4.innerHTML = 'Galilei'; // A cella szövegét "Galilei"-re állítjuk
row2.appendChild(row2Cell4); // A cellát beszúrjuk a második sorba

const row3 = document.createElement('tr'); // Harmadik sor létrehozása
tableBody.appendChild(row3); // A harmadik sort hozzákapcsoljuk a törzs részhez
const row3Cell1 = document.createElement('td'); // Első cella létrehozása a harmadik sorban

row3Cell1.innerHTML = 'Kvantumfizika'; // A cella tartalmát "Kvantumfizika"-ra állítjuk
row3.appendChild(row3Cell1); // A cellát beszúrjuk a harmadik sorba

const row3Cell2 = document.createElement('td'); // Második cella előállítása a harmadik sorban
row3Cell2.innerHTML = 'XIX-XX. század'; // A cella szövegét "XIX-XX. század"-ra állítjuk
row3.appendChild(row3Cell2); // A cellát a harmadik sorhoz adjuk

const row3Cell3 = document.createElement('td'); // Harmadik cella létrehozása a harmadik sorban
row3Cell3.innerHTML = 'Max Planck'; // A cella tartalma: "Max Planck"
row3.appendChild(row3Cell3); // A cellát hozzáfűzzük a harmadik sorhoz

const row3Cell4 = document.createElement('td'); // Negyedik cella előállítása a harmadik sorban
row3Cell4.innerHTML = 'Albert Einstein'; // A cella szövegét "Albert Einstein"-ra állítjuk
row3.appendChild(row3Cell4); // A cellát beszúrjuk a harmadik sorba

const row4 = document.createElement('tr'); // Negyedik sor létrehozása
tableBody.appendChild(row4); // A negyedik sort beillesztjük a törzs részbe

const row4Cell1 = document.createElement('td'); // Első cella előállítása a negyedik sorban
row4Cell1.innerHTML = 'Modern fizika'; // A cella tartalmát "Modern fizika"-ra állítjuk
row4.appendChild(row4Cell1); // A cellát hozzáadjuk a negyedik sorhoz

const row4Cell2 = document.createElement('td'); // Második cella létrehozása a negyedik sorban
row4Cell2.innerHTML = 'XX-XXI. század'; // A cella szövegét "XX-XXI. század"-ra állítjuk
row4.appendChild(row4Cell2); // A cellát beszúrjuk a negyedik sorba

const row4Cell3 = document.createElement('td'); // Harmadik cella előállítása a negyedik sorban
row4Cell3.innerHTML = 'Richard Feynman'; // A cella tartalma: "Richard Feynman"
row4.appendChild(row4Cell3); // A cellát hozzáfűzzük a negyedik sorhoz

const row4Cell4 = document.createElement('td'); // Negyedik cella létrehozása a negyedik sorban
row4Cell4.innerHTML = 'Stephen Hawking'; // A cella szövegét "Stephen Hawking"-ra állítjuk
row4.appendChild(row4Cell4); // A cellát beszúrjuk a negyedik sorba