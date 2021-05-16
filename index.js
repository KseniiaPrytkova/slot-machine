$(document).ready(function slotMachineImplementation() {
    const bar = 'src/BAR.png';
    const barDoubled = 'src/2xBAR.png';
    const barTripled = 'src/3xBAR.png';
    const cherry = 'src/Cherry.png';
    const seven = 'src/7.png';

    const arr = [bar, barDoubled, barTripled, cherry, seven];
    var resultArr = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ];

    function spinEachTableCell(currentSlot, interval, reel, reelIteration) {
        var counter = 0;

        var setIntervalId = setInterval(function runSlot(){
            counter++;
            randImgIndex = Math.floor(Math.random() * arr.length);
            $(currentSlot).attr("src", arr[randImgIndex]);
    
            if(counter === interval) {
                clearInterval(setIntervalId);
                resultArr[reel][reelIteration] = randImgIndex;
                $(currentSlot).removeClass("blur");
                $(currentSlot).removeClass("top");
                return;
            }
        }, 5);
    }

    $("#twist").on("click", function startSlotMachine() {
        $("img").addClass("blur");
        $("img").addClass("top");
        document.getElementById('points').innerHTML = 'something';

        var table = document.getElementById('slotsCollection');
        var numberOfRows = table.rows.length;

        for(let i = 0; i < numberOfRows; i++) {
            let numberOfCells = table.rows[i].cells.length;

            for(let j = 0; j < numberOfCells; j++) {
                let currentCell = table.rows[i].cells[j].getElementsByTagName("*");
                spinEachTableCell($(currentCell), 140 * (j + 1), i, j);
            }
        }
        console.log('RESULT: ', resultArr);
    });
});
