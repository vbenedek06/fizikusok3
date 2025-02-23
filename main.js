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

rendertable(table,array);
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
        rendertable(table,array);//frissiti a tablázatot

    }
});
