let debugArr = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

function startDebugMode() {
    const debugTable = document.getElementById('debugTable');
    const numberOfRows = debugTable.rows.length;

    for(let i = 0; i < numberOfRows; i++) {
        const numberOfCells = debugTable.rows[i].cells.length;

        for(let j = 0; j < numberOfCells; j++) {
            let val = debugTable.rows[i].cells[j].getElementsByTagName('select').item(0).value;
            debugArr[i][j] = Number(val);
        }
    }
}
