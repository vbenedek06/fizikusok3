const header1 = 'Fizika területe'; // Az első oszlop fejlécének szövege
const header2 = 'Időszak';         // A második oszlop fejlécének szövege
const header3 = 'Képviselők';       // A harmadik oszlop fejlécének szövege

const firstRow1 = 'Optika';      // Az első sor első cellájának tartalma
const firstRow2 = 'XI. század';   // Az első sor második cellájának tartalma
const firstRow3 = 'Alhazen';      // Az első sor harmadik cellájának tartalma (ez két oszlopot ölel fel)

const secondRow1 = 'Asztronómia'; // A második sor első cellájának tartalma
const secondRow2 = 'reneszánsz';  // A második sor második cellájának tartalma
const secondRow3 = 'Kepler';      // A második sor harmadik cellájának tartalma
const secondRow4 = 'Galilei';      // A második sor negyedik cellájának tartalma

const thirdRow1 = 'Kvantumfizika';    // A harmadik sor első cellájának tartalma
const thirdRow2 = 'XIX-XX. század';    // A harmadik sor második cellájának tartalma
const thirdRow3 = 'Max Planck';        // A harmadik sor harmadik cellájának tartalma
const thirdRow4 = 'Albert Einstein';   // A harmadik sor negyedik cellájának tartalma

const fourthRow1 = 'Modern fizika';    // A negyedik sor első cellájának tartalma
const fourthRow2 = 'XX-XXI. század';     // A negyedik sor második cellájának tartalma
const fourthRow3 = 'Richard Feynman';   // A negyedik sor harmadik cellájának tartalma
const fourthRow4 = 'Stephen Hawking';   // A negyedik sor negyedik cellájának tartalma


const table = document.createElement('table'); // Létrehozunk egy HTML táblázat elemet
document.body.appendChild(table); // A táblázatot beszúrjuk a dokumentum testébe

const tableHeader = document.createElement('thead'); // Elkészítjük a táblázat fejléc részét
const headerRow = document.createElement('tr'); // Létrehozunk egy sort a fejléc számára
table.appendChild(tableHeader); // A fejlécet hozzákapcsoljuk a táblázathoz
tableHeader.appendChild(headerRow); // A sort hozzáadjuk a fejléchez

const headerCell1 = document.createElement('th'); // Új fejléc cella létrehozása
headerCell1.innerHTML = header1;// Beállítja a cella tartalmát a header1 változó értékére
headerRow.appendChild(headerCell1); // A cellát hozzáfűzzük a fejléc sorához

const headerCell2 = document.createElement('th'); // Új fejléc cella előállítása
headerCell2.innerHTML = header2; // Beállítja a cella tartalmát a header2 változó értékére
headerRow.appendChild(headerCell2); // A cellát a fejléc sor végéhez csatoljuk

const headerCell3 = document.createElement('th'); // Egy további fejléc cella létrehozása
headerCell3.innerHTML = header3;// Beállítja a cella tartalmát a header3 változó értékére
headerCell3.colSpan = 2; // A cella két oszlop szélességét öleli fel

headerRow.appendChild(headerCell3); // A cellát hozzáadjuk a fejléc sorhoz
const tableBody = document.createElement('tbody'); // Elkészítjük a táblázat törzs részét
table.appendChild(tableBody); // A törzsrészt beillesztjük a táblázatba

const row1 = document.createElement('tr'); // Első sor létrehozása a táblázat törzsében
tableBody.appendChild(row1); // Az első sort hozzáfűzzük a törzs részhez

const row1Cell1 = document.createElement('td'); // Első cella létrehozása az első sorban
row1Cell1.innerHTML = firstRow1;                // Beállítja a cella tartalmát a firstRow1 változó értékére
row1.appendChild(row1Cell1); // A cellát hozzáadjuk az első sorhoz

const row1Cell2 = document.createElement('td'); // Második cella előállítása az első sorban
row1Cell2.innerHTML = firstRow2;                // Beállítja a cella tartalmát a firstRow2 változó értékére
row1.appendChild(row1Cell2); // A cellát beszúrjuk az első sorba

const row1Cell3 = document.createElement('td'); // Harmadik cella létrehozása az első sorban
row1Cell3.colSpan = 2; // A cella két oszlopot foglal magába
row1Cell3.innerHTML = firstRow3;                // Beállítja a cella tartalmát a firstRow3 változó értékére
row1.appendChild(row1Cell3); // A cellát az első sorhoz csatoljuk

const row2 = document.createElement('tr'); // Második sor létrehozása a törzsben
tableBody.appendChild(row2); // A második sort beillesztjük a törzs részbe

const row2Cell1 = document.createElement('td'); // Első cella létrehozása a második sorban
row2Cell1.innerHTML = secondRow1;               // Beállítja a cella tartalmát a secondRow1 változó értékére
row2.appendChild(row2Cell1); // A cellát hozzáadjuk a második sorhoz

const row2Cell2 = document.createElement('td'); // Második cella előállítása a második sorban
row2Cell2.innerHTML = secondRow2;               // Beállítja a cella tartalmát a secondRow2 változó értékére
row2.appendChild(row2Cell2); // A cellát beszúrjuk a második sorba

const row2Cell3 = document.createElement('td'); // Harmadik cella létrehozása a második sorban
row2Cell3.innerHTML = secondRow3;               // Beállítja a cella tartalmát a secondRow3 változó értékére
row2.appendChild(row2Cell3); // A cellát a második sor végéhez csatoljuk

const row2Cell4 = document.createElement('td'); // Negyedik cella előállítása a második sorban
row2Cell4.innerHTML = secondRow4;               // Beállítja a cella tartalmát a secondRow4 változó értékére
row2.appendChild(row2Cell4); // A cellát beszúrjuk a második sorba

const row3 = document.createElement('tr'); // Harmadik sor létrehozása
tableBody.appendChild(row3); // A harmadik sort hozzákapcsoljuk a törzs részhez

const row3Cell1 = document.createElement('td'); // Első cella létrehozása a harmadik sorban
row3Cell1.innerHTML = thirdRow1;                // Beállítja a cella tartalmát a thirdRow1 változó értékére
row3.appendChild(row3Cell1); // A cellát beszúrjuk a harmadik sorba

const row3Cell2 = document.createElement('td'); // Második cella előállítása a harmadik sorban
row3Cell2.innerHTML = thirdRow2;                // Beállítja a cella tartalmát a thirdRow2 változó értékére
row3.appendChild(row3Cell2); // A cellát a harmadik sorhoz adjuk

const row3Cell3 = document.createElement('td'); // Harmadik cella létrehozása a harmadik sorban
row3Cell3.innerHTML = thirdRow3;                // Beállítja a cella tartalmát a thirdRow3 változó értékére
row3.appendChild(row3Cell3); // A cellát hozzáfűzzük a harmadik sorhoz

const row3Cell4 = document.createElement('td'); // Negyedik cella előállítása a harmadik sorban
row3Cell4.innerHTML = thirdRow4;                // Beállítja a cella tartalmát a thirdRow4 változó értékére
row3.appendChild(row3Cell4); // A cellát beszúrjuk a harmadik sorba

const row4 = document.createElement('tr'); // Negyedik sor létrehozása
tableBody.appendChild(row4); // A negyedik sort beillesztjük a törzs részbe

const row4Cell1 = document.createElement('td'); // Első cella előállítása a negyedik sorban
row4Cell1.innerHTML = fourthRow1;               // Beállítja a cella tartalmát a fourthRow1 változó értékére
row4.appendChild(row4Cell1); // A cellát hozzáadjuk a negyedik sorhoz

const row4Cell2 = document.createElement('td'); // Második cella létrehozása a negyedik sorban
row4Cell2.innerHTML = fourthRow2;               // Beállítja a cella tartalmát a fourthRow2 változó értékére
row4.appendChild(row4Cell2); // A cellát beszúrjuk a negyedik sorba

const row4Cell3 = document.createElement('td'); // Harmadik cella előállítása a negyedik sorban
row4Cell3.innerHTML = fourthRow3;               // Beállítja a cella tartalmát a fourthRow3 változó értékére
row4.appendChild(row4Cell3); // A cellát hozzáfűzzük a negyedik sorhoz

const row4Cell4 = document.createElement('td'); // Negyedik cella létrehozása a negyedik sorban
row4Cell4.innerHTML = fourthRow4;               // Beállítja a cella tartalmát a fourthRow4 változó értékére
row4.appendChild(row4Cell4); // A cellát beszúrjuk a negyedik sorba