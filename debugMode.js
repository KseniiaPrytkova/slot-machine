let debugArr = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

function startDebugMode() {
    // var checkBox = document.getElementById("isDebug");
    // var text = document.getElementById("symbols").value;
    // console.log(text);
    // if (checkBox.checked == true){
    //   console.log('debug mode');
    // }

    let debugTable = document.getElementById('debugTable');
    let numberOfRows = debugTable.rows.length;

        for(let i = 0; i < numberOfRows; i++) {
            let numberOfCells = debugTable.rows[i].cells.length;

            for(let j = 0; j < numberOfCells; j++) {
                let val = debugTable.rows[i].cells[j].getElementsByTagName("select").item(0).value;
                console.log(val);
                debugArr[i][j] = Number(val);
            }
        }
        // console.log(debugArr);

}
