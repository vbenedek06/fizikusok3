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
// A rendertable függvény: csak a táblázat (az adatsorok) létrehozását tartalmazza
function rendertable() {
    const tableHeader = document.createElement('thead'); // Táblázat fejléc elem létrehozása
    table.appendChild(tableHeader); // A fejléc (thead) hozzáadása a táblázathoz (table)
    // Táblázat törzs elemének létrehozása

    const tableBody = document.createElement('tbody');  // Új törzsélem (<tbody>) létrehozása
    table.appendChild(tableBody);                         // A törzs elem hozzáadása a táblázathoz

    // Adatsorok létrehozása for ciklussal (az index 1-től indul, mert az index 0 a fejléc)
    for (let i = 1; i < array.length; i++) {              // Végigiterál az adatsorokon
        const row = document.createElement('tr');         // Új sor (<tr>) létrehozása az aktuális adatsorhoz
        tableBody.appendChild(row);                         // A sor hozzáadása a törzs elemhez

        const cell1 = document.createElement('td');        // Első cella (<td>) létrehozása
        cell1.innerHTML = array[i].column1;                 // Az első cella tartalmának beállítása
        row.appendChild(cell1);                             // Az első cella hozzáadása a sorhoz

        const cell2 = document.createElement('td');        // Második cella (<td>) létrehozása
        cell2.innerHTML = array[i].column2;                 // A második cella tartalmának beállítása
        row.appendChild(cell2);                             // A második cella hozzáadása a sorhoz

        const cell3 = document.createElement('td');        // Harmadik cella (<td>) létrehozása
        cell3.innerHTML = array[i].column3;                 // A harmadik cella tartalmának beállítása
        row.appendChild(cell3);                             // A harmadik cella hozzáadása a sorhoz

        // Ha az adatsor tartalmaz negyedik oszlopot, létrehozza azt; egyébként a harmadik cella kitágul két oszlopra
        if (array[i].column4) {
            const cell4 = document.createElement('td');   // Negyedik cella (<td>) létrehozása
            cell4.innerHTML = array[i].column4;             // A negyedik cella tartalmának beállítása
            row.appendChild(cell4);                         // A negyedik cella hozzáadása a sorhoz
        } else {
            cell3.colSpan = 2;                              // Ha nincs negyedik oszlop, a harmadik cella két oszlopot foglal el
        }
    }
}


// Meghívjuk a rendertable függvényt, hogy az adatsorok (táblázat) generálódjanak
rendertable();

// Eseménykezelő hozzáadása az űrlap submit eseményéhez
document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Megakadályozza az űrlap alapértelmezett elküldését

    const subjectHtmlElement = document.getElementById('fizika') // elkerem a htmlelementet, amely az vezeteknev id-val van definialva
    const timeHtmlElement = document.getElementById('ido') // elkerem a htmlelementet, amely az keresztnev id-val van definialva
    const scientist1HtmlElement = document.getElementById('tudos1') // elkerem a htmlelementet, amely az keresztnev2 id-val van definialva
    const scientist2HtmlElement = document.getElementById('tudos2') // elkerem a htmlelementet, amely az keresztnev2 id-val van definialva


    // Az űrlap mezőinek értékeinek lekérése
    const subject = subjectHtmlElement.value;       // "Fizika területe" értéke
    const time = timeHtmlElement.value;           // "Időszak" értéke
    const scientist1 = scientist1HtmlElement.value;   // Első tudós neve
    const scientist2 = scientist2HtmlElement.value;   // Első tudós neve

   
   
    let valid = true;
    if (!simpleValidateField(subjectHtmlElement, "A terület kitöltése kötelező")) {
        valid = false;
    }
    if (!simpleValidateField(timeHtmlElement, "Az időszak kitöltése kötelező")) {
        valid = false;
    }
    if (!secondValidation(scientist1HtmlElement, scientist2HtmlElement)) {
        valid = false;
    }
    if (valid) {
        const newRow = {
            column1: subject,
            column2: time,
            column3: scientist1,
            column4: scientist2
        };
        array.push(newRow);//hozzadja az uj elemet
        table.innerHTML = ''// lenulláza a table erteket
        table.appendChild(tableHeader);  // Újra hozzáadja a fejlécet a táblázathoz
        this.reset();//kiurit
        rendertable();//frissiti a tablázatot

    }
});
function simpleValidateField(inputelem, errorMessage) { // Definiáljuk a simpleValidateField függvényt
    let valid = true; // Definiáljuk a valid lokális változót true értékkel
    if(inputelem.value === ''){ // Ha a paraméterben kapott beviteli mező üres
        const parentElement = inputelem.parentElement; // Eltároljuk a mező szülő elemét
        const errorPlace = parentElement.querySelector('.error'); // A szülő elemben megkeressük az "error-message" osztályú elemet
        if(errorPlace != undefined){ // Ha van hibajelzés
            errorPlace.innerHTML = errorMessage; // Ha már van ilyen hibaüzenet, akkor cseréljük át.
        }
        valid = false; // Ha hiba van, a valid változó értéke hamisra változik.
    }
    return valid; // Visszatér a valid változóval.
}
function secondValidation(scientist1element,scientist2element){
    let valid = true 

    if (scientist1element.value === '' && scientist2element.value === ''){
        const errorMessage = "Legalább egy tudóst meg kell adni"

        if (!simpleValidateField(scientist1element, errorMessage)){
        valid = false;
        }
        if (!simpleValidateField(scientist2element, errorMessage)){
        valid = false;
        }
    }
    return valid
}