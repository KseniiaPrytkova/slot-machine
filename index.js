    const bar = 'src/BAR.png'; // 0
    const barDoubled = 'src/2xBAR.png'; // 1
    const barTripled = 'src/3xBAR.png'; // 2
    const cherry = 'src/Cherry.png'; // 3
    const seven = 'src/7.png'; // 4

    // points
    let result = 1;
    var blinkInterval = 0;
    // current winning row/rows
    let winRow = ['-1', '-1', '-1'];

    const arr = [bar, barDoubled, barTripled, cherry, seven];
    let resultArr = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];

    // fn to check arrays equality
    const equals = (a, b) =>
        a.length === b.length &&
        a.every((v, i) => v === b[i]);

    // make points blink when win combintion occurs
    function blinkWinPoints() {
        let formInput = document.getElementById('points');
        $(formInput).fadeOut(500);
        $(formInput).fadeIn(500);
    }

    function isPayouts() {
        const arr = document.getElementById("isDebug").checked ? debugArr : resultArr;

        for(let i = 0; i < arr.length; i++) {
            let row = arr[i];

            data.forEach(function(dataItem) {
                if (equals(row, dataItem.sequence)) {
                    if (dataItem.line == 'any' || dataItem.line == i) {
                        result += dataItem.points;
                        winRow[i] = i.toString();
                        document.getElementById(winRow[i]).style.background = 'red';
                        blinkInterval = setInterval(blinkWinPoints, 1000);
                    }
                }
            });
        }
        return(result);
    }

    function spinEachTableCell(currentSlot, interval, reel, reelIteration) {
        let counter = 0;

        let setIntervalId = setInterval(function runSlot(){
            counter++;
            randImgIndex = Math.floor(Math.random() * arr.length);
            $(currentSlot).attr('src', arr[randImgIndex]);
    
            if(counter === interval) {
                clearInterval(setIntervalId);
                if (document.getElementById('isDebug').checked == true) {
                    let debugIndex = debugArr[reel][reelIteration];
                    $(currentSlot).attr('src', arr[debugIndex]);
                }
                else {
                    resultArr[reel][reelIteration] = randImgIndex;
                }
                $(currentSlot).removeClass('blur');
                $(currentSlot).removeClass('top');
                return ;
            }
        }, 5);
        return setIntervalId;
    }

    function spinSlotMachine() {
        let r = $.Deferred();

        $('img').addClass('blur');
        $('img').addClass('top');

        const table = document.getElementById('slotsCollection');
        const numberOfRows = table.rows.length;

        for(let i = 0; i < numberOfRows; i++) {
            let numberOfCells = table.rows[i].cells.length;

            for(let j = 0; j < numberOfCells; j++) {
                let currentCell = table.rows[i].cells[j].getElementsByTagName('*');
                spinEachTableCell($(currentCell), 140 * (j + 1), i, j);
            }
        }

        // if spinning must last 2 seconds, then this solution is not so bad
        setTimeout(function () {
            r.resolve();
        }, 2500);
        return r;
    }

    function calculatePayout() {
        const result = isPayouts();
        document.getElementById('points').value = result;
    }

    // initial function. Waits untill animation is finished to start calculate payouts.
    function startSlotMachine() {
        result = document.getElementById('points').value;

        if (!isWon(result) || !isEnoughMoney(result))
            return;

        clearInterval(blinkInterval);
        result -= 1;
        for (let i = 0; i < winRow.length; i++) {
            if (winRow[i] !== '-1') {
                document.getElementById(winRow[i]).style.background = 'white';
            }
        }
        spinSlotMachine().done(calculatePayout);
    }
