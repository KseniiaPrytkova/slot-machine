// $(document).ready(function slotMachineImplementation() {
    const bar = 'src/BAR.png'; // 0
    const barDoubled = 'src/2xBAR.png'; // 1
    const barTripled = 'src/3xBAR.png'; // 2
    const cherry = 'src/Cherry.png'; // 3
    const seven = 'src/7.png'; // 4

    const arr = [bar, barDoubled, barTripled, cherry, seven];
    var resultArr = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    // var resultArr;
    var result = 0;

    function isPayouts() {
        resultArr = resultArr;
        console.log('RESULT: ', resultArr);
        console.log(resultArr.length);

        // resultArr.forEach(function(item, index, array) {
        //     console.log(item, index)
        // })

        for(let i = 0; i < resultArr.length; i++) {
            console.log('ROW #: ', i);
            var row = resultArr[i];
            console.log(row);
            for(let j = 0; j < row.length; j++) {
                
                console.log("row[" + i + "][" + j + "] = " + row[j]);
            }
        }
        result = 15;
        return(result);
    }

    function spinEachTableCell(currentSlot, interval, reel, reelIteration) {
        var counter = 0;
        // resultArr = [
        //     [1, 0, 0],
        //     [0, 0, 0],
        //     [0, 0, 0],
        // ];

        var setIntervalId = setInterval(function runSlot(){
            counter++;
            randImgIndex = Math.floor(Math.random() * arr.length);
            $(currentSlot).attr("src", arr[randImgIndex]);
    
            if(counter === interval) {
                clearInterval(setIntervalId);
                resultArr[reel][reelIteration] = randImgIndex;
                $(currentSlot).removeClass("blur");
                $(currentSlot).removeClass("top");
                return ;
            }
        }, 5);
        return setIntervalId;
    }

    function startSlotMachine() {
        $("img").addClass("blur");
        $("img").addClass("top");

        var table = document.getElementById('slotsCollection');
        var numberOfRows = table.rows.length;

        for(let i = 0; i < numberOfRows; i++) {
            let numberOfCells = table.rows[i].cells.length;

            for(let j = 0; j < numberOfCells; j++) {
                let currentCell = table.rows[i].cells[j].getElementsByTagName("*");
                spinEachTableCell($(currentCell), 140 * (j + 1), i, j);
            }
        }
        var result = isPayouts();
        document.getElementById('points').innerHTML = result;
    }
// });
