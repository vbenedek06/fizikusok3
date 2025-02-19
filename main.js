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


const table = document.createElement('table'); // Új táblázat elem létrehozása
document.body.appendChild(table); // A táblázat hozzáadása a dokumentum törzséhez

const tableHeader = document.createElement('thead'); // Új táblázat fejlécelem létrehozása
const headerRow = document.createElement('tr'); // Új sor létrehozása a fejléchez
table.appendChild(tableHeader); // A fejlécelem hozzáadása a táblázathoz
tableHeader.appendChild(headerRow); // A fejléc sor hozzáadása a fejléchez

// Fejléc cellák létrehozása és hozzáadása
const headerCell1 = document.createElement('th'); // Új fejléc cella létrehozása
headerCell1.innerHTML = array[0].column1; // Az első oszlop címének beállítása
headerRow.appendChild(headerCell1); // Az első fejléc cella hozzáadása a fejléc sorhoz

const headerCell2 = document.createElement('th'); // Új fejléc cella létrehozása
headerCell2.innerHTML = array[0].column2; // A második oszlop címének beállítása
headerRow.appendChild(headerCell2); // A második fejléc cella hozzáadása a fejléc sorhoz

const headerCell3 = document.createElement('th'); // Új fejléc cella létrehozása
headerCell3.innerHTML = array[0].column3; // A harmadik oszlop címének beállítása
headerCell3.colSpan = 2; // A harmadik fejléc cella két oszlopot foglal el
headerRow.appendChild(headerCell3); // A harmadik fejléc cella hozzáadása a fejléc sorhoz

const tableBody = document.createElement('tbody'); // Új táblázat törzs elem létrehozása
table.appendChild(tableBody); // A táblázat törzs hozzáadása a táblázathoz

// Adatsorok létrehozása for ciklussal
for (let i = 1; i < array.length; i++) { // Végigmegyünk az adatsorokon az elsőtől az utolsóig
    const row = document.createElement('tr'); // Új sor létrehozása
    tableBody.appendChild(row); // A sor hozzáadása a táblázat törzshöz

    const cell1 = document.createElement('td'); // Új cella létrehozása
    cell1.innerHTML = array[i].column1; // Az első oszlop értékének beállítása
    row.appendChild(cell1); // Az első cella hozzáadása a sorhoz

    const cell2 = document.createElement('td'); // Új cella létrehozása
    cell2.innerHTML = array[i].column2; // A második oszlop értékének beállítása
    row.appendChild(cell2); // A második cella hozzáadása a sorhoz

    const cell3 = document.createElement('td'); // Új cella létrehozása
    cell3.innerHTML = array[i].column3; // A harmadik oszlop értékének beállítása
    row.appendChild(cell3); // A harmadik cella hozzáadása a sorhoz

    const cell4 = document.createElement('td'); // Új cella létrehozása
    cell4.innerHTML = array[i].column4; // A negyedik oszlop értékének beállítása
    row.appendChild(cell4); // A negyedik cella hozzáadása a sorhoz
}