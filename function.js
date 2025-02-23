/**
 * generateTableHeader függvény
 *
 * Létrehozza a táblázat fejléc sorát (<tr>) és annak celláit (<th>) a megadott fejléc adatok alapján.
 *
 * @param {Object} headerData - Az objektum, amely tartalmazza a fejléc adatait (pl. column1, column2, column3, stb.).
 * @param {HTMLElement} tableHeader - A táblázat <thead> eleme, amelybe a generált sor kerül.
 */
function generateTableHeader(headerData, tableHeader) {
    const headerRow = document.createElement('tr');
    for (const key in headerData) {
        const headerCell = document.createElement('th');
        headerCell.innerHTML = headerData[key];
        if (key === 'column3') {
            headerCell.colSpan = 2;
        }
        headerRow.appendChild(headerCell);
    }
    tableHeader.appendChild(headerRow);
}

/**
 * rendertable függvény
 *
 * Generálja a táblázatot a megadott adatok alapján. Létrehozza a fejlécet és a törzs részét,
 * majd feltölti a táblázatot a megadott adatsorokkal.
 *
 * @param {tableHTMLElement} tableHTML - A táblázat HTML eleme, amelybe a generált tartalom kerül.
 * @param {Array} data - Az adatok tömbje, melynek első eleme a fejléc adatait tartalmazza, a többi pedig az adatsorokat.
 * 
 */
function rendertable(tableHTML,data) {
    const tableHeader = document.createElement('thead');
    table.appendChild(tableHeader);
    generateTableHeader(data[0], tableHeader);
    
    const tableBody = document.createElement('tbody');
    table.appendChild(tableBody);
    
    for (let i = 1; i < data.length; i++) {
        const row = document.createElement('tr');
        tableBody.appendChild(row);
        
        const cell1 = document.createElement('td');
        cell1.innerHTML = data[i].column1;
        row.appendChild(cell1);
        
        const cell2 = document.createElement('td');
        cell2.innerHTML = data[i].column2;
        row.appendChild(cell2);
        
        const cell3 = document.createElement('td');
        cell3.innerHTML = data[i].column3;
        row.appendChild(cell3);
        
        if (data[i].column4) {
            const cell4 = document.createElement('td');
            cell4.innerHTML = data[i].column4;
            row.appendChild(cell4);
        } else {
            cell3.colSpan = 2;
        }
    }
}

/**
 * generateForm függvény
 *
 * Létrehozza és visszaadja az űrlapot, amely tartalmazza a fizika területének, az időszaknak,
 * valamint az első és második tudós nevének bevitelére szolgáló mezőket. Minden mezőhöz tartozik egy hibajelzést megjelenítő elem is.
 *
 * @returns {HTMLFormElement} Az elkészített űrlap elem.
 */
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

/**
 * simpleValidatecolumn függvény
 *
 * Ellenőrzi, hogy a megadott input mező nem üres-e. Ha üres, megjeleníti a hozzá tartozó hibajelzést.
 *
 * @param {HTMLInputElement} inputelem - Az ellenőrizendő input mező.
 * @param {string} errorMessage - A megjelenítendő hibaüzenet, ha az input mező üres.
 * @returns {boolean} True, ha az input mező kitöltött; egyébként false.
 */
function simpleValidatecolumn(inputelem, errorMessage) {
    let valid = true;
    if (inputelem.value === '') {
        const parentElement = inputelem.parentElement;
        const errorPlace = parentElement.querySelector('.error');
        if (errorPlace != undefined) {
            errorPlace.innerHTML = errorMessage;
        }
        valid = false;
    }
    return valid;
}

/**
 * secondValidation függvény
 *
 * Ellenőrzi, hogy legalább az egyik tudós input mező ki van-e töltve.
 * Ha mindkettő üres, mindkét mezőhöz hibajelzést jelenít meg.
 *
 * @param {HTMLInputElement} scientist1element - Az első tudós input mező.
 * @param {HTMLInputElement} scientist2element - A második tudós input mező.
 * @returns {boolean} True, ha legalább az egyik mező ki van töltve; egyébként false.
 */
function secondValidation(scientist1element, scientist2element) {
    let valid = true;
    if (scientist1element.value === '' && scientist2element.value === '') {
        const errorMessage = "Legalább egy tudóst meg kell adni";
        if (!simpleValidatecolumn(scientist1element, errorMessage)) {
            valid = false;
        }
        if (!simpleValidatecolumn(scientist2element, errorMessage)) {
            valid = false;
        }
    }
    return valid;
}
