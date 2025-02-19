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


const table = document.createElement('table');
document.body.appendChild(table);

const tableHeader = document.createElement('thead');
const headerRow = document.createElement('tr');
table.appendChild(tableHeader);
tableHeader.appendChild(headerRow);

// Fejléc létrehozása
const headerCell1 = document.createElement('th');
headerCell1.innerHTML = array[0].column1;
headerRow.appendChild(headerCell1);

const headerCell2 = document.createElement('th');
headerCell2.innerHTML = array[0].column2;
headerRow.appendChild(headerCell2);

const headerCell3 = document.createElement('th');
headerCell3.innerHTML = array[0].column3;
headerCell3.colSpan = 2;
headerRow.appendChild(headerCell3);

const tableBody = document.createElement('tbody');
table.appendChild(tableBody);

// Adatsorok létrehozása for ciklussal
for (let i = 1; i < array.length; i++) {
    const row = document.createElement('tr');
    tableBody.appendChild(row);

    const cell1 = document.createElement('td');
    cell1.innerHTML = array[i].column1;
    row.appendChild(cell1);

    const cell2 = document.createElement('td');
    cell2.innerHTML = array[i].column2;
    row.appendChild(cell2);

    const cell3 = document.createElement('td');
    cell3.innerHTML = array[i].column3;
    row.appendChild(cell3);

    const cell4 = document.createElement('td');
    cell4.innerHTML = array[i].column4;
    row.appendChild(cell4);
}