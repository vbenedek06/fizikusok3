const array = [ //tomb bevezetése
    // Fejléc adatok
    {
        column1: 'Fizika területe', // Az első oszlop címe
        column2: 'Időszak',         // A második oszlop címe
        column3: 'Képviselők'       // A harmadik oszlop címe
    },
    // Adatsorok
    {
        column1: 'Optika',          // Az első oszlop értéke az első adatsorban
        column2: 'XI. század',      // A második oszlop értéke az első adatsorban
        column3: 'Alhazen'          // A harmadik oszlop értéke az első adatsorban
    },
    {
        column1: 'Asztronómia',     // Az első oszlop értéke a második adatsorban
        column2: 'reneszánsz',      // A második oszlop értéke a második adatsorban
        column3: 'Kepler',          // A harmadik oszlop első értéke a második adatsorban
        column4: 'Galilei'          // A harmadik oszlop második értéke a második adatsorban
    },
    {
        column1: 'Kvantumfizika',   // Az első oszlop értéke a harmadik adatsorban
        column2: 'XIX-XX. század',  // A második oszlop értéke a harmadik adatsorban
        column3: 'Max Planck',      // A harmadik oszlop első értéke a harmadik adatsorban
        column4: 'Albert Einstein'  // A harmadik oszlop második értéke a harmadik adatsorban
    },
    {
        column1: 'Modern fizika',   // Az első oszlop értéke a negyedik adatsorban
        column2: 'XX-XXI. század',  // A második oszlop értéke a negyedik adatsorban
        column3: 'Richard Feynman', // A harmadik oszlop első értéke a negyedik adatsorban
        column4: 'Stephen Hawking'  // A harmadik oszlop második értéke a negyedik adatsorban
    }
];


const table = document.createElement('table'); // Létrehozunk egy HTML táblázat elemet
document.body.appendChild(table); // A táblázatot beszúrjuk a dokumentum testébe

const tableHeader = document.createElement('thead'); // Elkészítjük a táblázat fejléc részét
const headerRow = document.createElement('tr'); // Létrehozunk egy sort a fejléc számára
table.appendChild(tableHeader); // A fejlécet hozzákapcsoljuk a táblázathoz
tableHeader.appendChild(headerRow); // A sort hozzáadjuk a fejléchez

const headerCell1 = document.createElement('th'); // Új fejléc cella létrehozása
headerCell1.innerHTML = array[0].column1;           // Beállítja a cella tartalmát az első fejléc cella értékére
headerRow.appendChild(headerCell1); // A cellát hozzáfűzzük a fejléc sorához

const headerCell2 = document.createElement('th'); // Új fejléc cella előállítása
headerCell2.innerHTML = array[0].column2;            // A második oszlop címének beállítása
headerRow.appendChild(headerCell2); // A cellát a fejléc sor végéhez csatoljuk

const headerCell3 = document.createElement('th'); // Egy további fejléc cella létrehozása
headerCell3.innerHTML = array[0].column3;            // A harmadik oszlop címének beállítása
headerCell3.colSpan = 2; // A cella két oszlop szélességét öleli fel

headerRow.appendChild(headerCell3); // A cellát hozzáadjuk a fejléc sorhoz
const tableBody = document.createElement('tbody'); // Elkészítjük a táblázat törzs részét
table.appendChild(tableBody); // A törzsrészt beillesztjük a táblázatba

const row1 = document.createElement('tr'); // Első sor létrehozása a táblázat törzsében
tableBody.appendChild(row1); // Az első sort hozzáfűzzük a törzs részhez

const row1Cell1 = document.createElement('td'); // Első cella létrehozása az első sorban
row1Cell1.innerHTML = array[1].column1;                     // Beállítja a cella tartalmát az első adatsor első oszlopának értékére
row1.appendChild(row1Cell1); // A cellát hozzáadjuk az első sorhoz

const row1Cell2 = document.createElement('td'); // Második cella előállítása az első sorban
row1Cell2.innerHTML = array[1].column2;             // Beállítja a cella tartalmát a második adatsor második oszlopának értékére
row1.appendChild(row1Cell2); // A cellát beszúrjuk az első sorba

const row1Cell3 = document.createElement('td'); // Harmadik cella létrehozása az első sorban
row1Cell3.colSpan = 2; // A cella két oszlopot foglal magába
row1Cell3.innerHTML = array[1].column3;             // Beállítja a cella tartalmát az első adatsor harmadik oszlopának értékére
row1.appendChild(row1Cell3); // A cellát az első sorhoz csatoljuk

const row2 = document.createElement('tr'); // Második sor létrehozása a törzsben
tableBody.appendChild(row2); // A második sort beillesztjük a törzs részbe

const row2Cell1 = document.createElement('td'); // Első cella létrehozása a második sorban
row2Cell1.innerHTML = array[2].column1;              // Beállítja a cella tartalmát a második adatsor első oszlopának értékére
row2.appendChild(row2Cell1); // A cellát hozzáadjuk a második sorhoz

const row2Cell2 = document.createElement('td'); // Második cella előállítása a második sorban
row2Cell2.innerHTML = array[2].column2;              // Beállítja a cella tartalmát a secondRow2 változó értékére
row2.appendChild(row2Cell2); // A cellát beszúrjuk a második sorba

const row2Cell3 = document.createElement('td'); // Harmadik cella létrehozása a második sorban
row2Cell3.innerHTML = array[2].column3;             // Beállítja a cella tartalmát a második adatsor harmadik oszlopának első értékére
row2.appendChild(row2Cell3); // A cellát a második sor végéhez csatoljuk

const row2Cell4 = document.createElement('td'); // Negyedik cella előállítása a második sorban
row2Cell4.innerHTML = array[2].column4;              // Beállítja a cella tartalmát a második adatsor harmadik oszlopának második értékére
row2.appendChild(row2Cell4); // A cellát beszúrjuk a második sorba

const row3 = document.createElement('tr'); // Harmadik sor létrehozása
tableBody.appendChild(row3); // A harmadik sort hozzákapcsoljuk a törzs részhez

const row3Cell1 = document.createElement('td'); // Első cella létrehozása a harmadik sorban
row3Cell1.innerHTML = array[3].column1;             // Beállítja a cella tartalmát a második adatsor harmadik oszlopának második értékére
row3.appendChild(row3Cell1); // A cellát beszúrjuk a harmadik sorba

const row3Cell2 = document.createElement('td'); // Második cella előállítása a harmadik sorban
row3Cell2.innerHTML = array[3].column2;              // A második oszlop értékének beállítása a harmadik adatsorban
row3.appendChild(row3Cell2); // A cellát a harmadik sorhoz adjuk

const row3Cell3 = document.createElement('td'); // Harmadik cella létrehozása a harmadik sorban
row3Cell3.innerHTML = array[3].column3;              // A harmadik oszlop első értékének beállítása a harmadik adatsorban
row3.appendChild(row3Cell3); // A cellát hozzáfűzzük a harmadik sorhoz

const row3Cell4 = document.createElement('td'); // Negyedik cella előállítása a harmadik sorban
row3Cell4.innerHTML = array[3].column4;              // A harmadik oszlop második értékének beállítása a negyedik adatsorban
row3.appendChild(row3Cell4); // A cellát beszúrjuk a harmadik sorba

const row4 = document.createElement('tr'); // Negyedik sor létrehozása
tableBody.appendChild(row4); // A negyedik sort beillesztjük a törzs részbe

const row4Cell1 = document.createElement('td'); // Első cella előállítása a negyedik sorban
row4Cell1.innerHTML = array[4].column1;              // Az első oszlop értékének beállítása a negyedik adatsorban
row4.appendChild(row4Cell1); // A cellát hozzáadjuk a negyedik sorhoz

const row4Cell2 = document.createElement('td'); // Második cella létrehozása a negyedik sorban
row4Cell2.innerHTML = array[4].column2;              // A második oszlop értékének beállítása a negyedik adatsorban
row4.appendChild(row4Cell2); // A cellát beszúrjuk a negyedik sorba

const row4Cell3 = document.createElement('td'); // Harmadik cella előállítása a negyedik sorban
row4Cell3.innerHTML = array[4].column3;              // A harmadik oszlop első értékének beállítása a negyedik adatsorban
row4.appendChild(row4Cell3); // A cellát hozzáfűzzük a negyedik sorhoz

const row4Cell4 = document.createElement('td'); // Negyedik cella létrehozása a negyedik sorban
row4Cell4.innerHTML = array[4].column4;              // A harmadik oszlop második értékének beállítása a negyedik adatsorban
row4.appendChild(row4Cell4); // A cellát beszúrjuk a negyedik sorba