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


const table = document.createElement('table'); // Táblázat létrehozása
document.body.appendChild(table);

// Függvény a fejléc generálásához
function generateTableHeader(headerData, tableHeader) {
    // Létrehozunk egy új sort (<tr>) a fejléc számára
    const headerRow = document.createElement('tr');

    // Végigiterálunk a fejléc objektum kulcsain
    for (const key in headerData) {
        // Létrehozunk egy fejléc cellát (<th>)
        const headerCell = document.createElement('th');
        // Beállítjuk a cella tartalmát a headerData adott kulcsához tartozó értékre
        headerCell.innerHTML = headerData[key];

        // Ha a kulcs 'column3', akkor két oszlopnyi szélességet állítunk be
        if (key === 'column3') {
            headerCell.colSpan = 2;
        }
        // Hozzáadjuk a fejléc cellát a fejléc sorhoz
        headerRow.appendChild(headerCell);
    }
    tableHeader.appendChild(headerRow); // A kész fejléc sort hozzáadjuk a megadott <thead> elemhez
}


// Táblázat renderelése, beleértve a fejlécet és a törzset is


// Adatsorok létrehozása for ciklussal
function rendertable(data) {// meadunk egy data nevu parametert aminek majd az array erteket fogja felvenni
    const tableHeader = document.createElement('thead'); // Táblázat fejléc létrehozása
    table.appendChild(tableHeader); // Fejléc hozzáadása a táblázathoz

    // A generateTableHeader meghívása, ahol az array[0] tartalmazza a fejléc adatait
    generateTableHeader(array[0], tableHeader);

    const tableBody = document.createElement('tbody');  // Táblázat törzs elemének létrehozása
    table.appendChild(tableBody);

    // Adatsorok létrehozása (az index 1-től, mivel az index 0 a fejléc)
    for (let i = 1; i < data.length; i++) {
        const row = document.createElement('tr');        // Létrehozunk egy új sort (<tr>) az aktuális adatsor számára
        tableBody.appendChild(row);                     // Hozzáadjuk az új sort a <tbody> elemhez

        const cell1 = document.createElement('td');// Létrehozunk egy cellát (<td>) az első oszlop számára
        cell1.innerHTML = data[i].column1;// Beállítjuk a cella tartalmát az aktuális adatsor 'column1' értékére
        row.appendChild(cell1);// Hozzáadjuk a cellát a sorhoz

        const cell2 = document.createElement('td');                // Létrehozunk egy cellát a masodik oszlop számára
        cell2.innerHTML = data[i].column2;// Beállítjuk a cella tartalmát az aktuális adatsor 'column2' értékére
        row.appendChild(cell2);     // Hozzáadjuk a cellát a sorhoz

        const cell3 = document.createElement('td');// Létrehozunk egy cellát a harmadik oszlop számára
        cell3.innerHTML = data[i].column3;// Beállítjuk a cella tartalmát az aktuális adatsor 'column2' értékére
        row.appendChild(cell3);// Hozzáadjuk a cellát a sorhoz

        // Ellenőrizzük, hogy az aktuális adatsor tartalmaz-e 'column4' értéket
        if (data[i].column4) {
            const cell4 = document.createElement('td');            // Ha igen, létrehozunk egy negyedik cellát
            cell4.innerHTML = data[i].column4;              // Beállítjuk a cella tartalmát a 'column4' értékre
            row.appendChild(cell4);            // Hozzáadjuk a negyedik cellát a sorhoz
        } else {
            cell3.colSpan = 2;            // Ha nincs 'column4', a harmadik cella két oszlopnyi szélességet foglal el
        }
    }
}



// Meghívjuk a rendertable függvényt, hogy az adatsorok (táblázat) generálódjanak
rendertable(array)

function generateForm() {
    var form = document.createElement('form');
    form.id = 'form';
    form.action = '#';

    var columns = [
        { label: 'Terület megnevezése', id: 'fizika', type: 'text' },
        { label: 'Időszak', id: 'ido', type: 'text' },
        { label: 'Első tudós', id: 'tudos1', type: 'text' },
        { label: 'Második tudós', id: 'tudos2', type: 'text' }
    ];

    for (var i = 0; i < columns.length; i++) {
        var column = columns[i];
        var div = document.createElement('div');

        var label = document.createElement('label');
        label.htmlFor = column.id;
        label.innerText = column.label;
        div.appendChild(label);

        div.appendChild(document.createElement('br'));

        var input = document.createElement('input');
        input.type = column.type;
        input.id = column.id;
        input.name = column.id;
        div.appendChild(input);

        div.appendChild(document.createElement('br'));
        div.appendChild(document.createElement('br'));

        var errorDiv = document.createElement('div');
        errorDiv.className = 'error';
        div.appendChild(errorDiv);

        form.appendChild(div);
    }

    var submit = document.createElement('button');
    submit.innerText = 'Hozzáadás';
    form.appendChild(submit);
    document.body.appendChild(form);
    return form;
}

var form = generateForm();

// Eseménykezelő hozzáadása az űrlap submit eseményéhez
form.addEventListener('submit', function (e) {
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
    // Ellenőrizzük, hogy a "Fizika területe" mező nincs-e üresen

    if (!simpleValidatecolumn(subjectHtmlElement, "A terület kitöltése kötelező")) {
        valid = false;
    }
    // Ellenőrizzük, hogy az "Időszak" mező nincs-e üresen

    if (!simpleValidatecolumn(timeHtmlElement, "Az időszak kitöltése kötelező")) {
        valid = false;
    }
    // Ellenőrizzük, hogy legalább egy tudós mező ki van-e töltve

    if (!secondValidation(scientist1HtmlElement, scientist2HtmlElement)) {
        valid = false;
    }
    if (valid) {
        // Ellenőrizzük, hogy a "Fizika területe" mező nincs-e üresen
        const newRow = {
            column1: subject, // "Fizika területe" értéke
            column2: time, // "Időszak" értéke
            column3: scientist1,// Első tudós neve
            column4: scientist2  // Második tudós neve
        };
        array.push(newRow);//hozzadja az uj elemet
        table.innerHTML = ''// lenulláza a table erteket
        this.reset();//kiurit

        // Kiválasztja az űrlapban lévő összes olyan elemet, amelyeknek az osztálya "error"
        var errorElements = form.querySelectorAll('.error');
        // Végigiterál az összes kiválasztott hibaüzenet elemen

        for (var i = 0; i < errorElements.length; i++) {
            // Az aktuális hibaüzenet tartalmát üresre állítja (törli a hibaüzenetet)
            errorElements[i].innerHTML = '';
        }
        // Újrarendereli a táblázatot a frissített "array" tömb alapján
        rendertable(array);//frissiti a tablázatot

    }
});
// Függvény az input mezők egyszerű érvényesítésére (ellenőrzi, hogy nem üres-e)

function simpleValidatecolumn(inputelem, errorMessage) { // Definiáljuk a simpleValidatecolumn függvényt
    let valid = true; // Definiáljuk a valid lokális változót true értékkel
    if (inputelem.value === '') { // Ha a paraméterben kapott beviteli mező üres
        const parentElement = inputelem.parentElement; // Eltároljuk a mező szülő elemét
        const errorPlace = parentElement.querySelector('.error'); // A szülő elemben megkeressük az "error-message" osztályú elemet
        if (errorPlace != undefined) { // Ha van hibajelzés
            errorPlace.innerHTML = errorMessage; // Ha már van ilyen hibaüzenet, akkor cseréljük át.
        }
        valid = false; // Ha hiba van, a valid változó értéke hamisra változik.
    }
    return valid; // Visszatér a valid változóval.
}
// Függvény, amely ellenőrzi, hogy legalább az egyik tudós mező ki van-e töltve

function secondValidation(scientist1element, scientist2element) {
    let valid = true

    if (scientist1element.value === '' && scientist2element.value === '') {
        const errorMessage = "Legalább egy tudóst meg kell adni"
        // Ellenőrizzük a simpleValidatecolumn függvénnyel az első tudós mezőt

        if (!simpleValidatecolumn(scientist1element, errorMessage)) {
            valid = false;
        }
        // Ellenőrizzük a simpleValidatecolumn függvénnyel a második tudós mezőt
        if (!simpleValidatecolumn(scientist2element, errorMessage)) {
            valid = false;
        }
    }
    return valid
}

