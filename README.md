# slot_machine
## Run:
1. `>git clone https://github.com/KseniiaPrytkova/slot_machine.git` or just download the project;
2. `>open index.html` or open `index.html` file in any other way;
3. `>git pull` to check for updates.

## Preview:
### slot machine itself:
- Enter a valid number in input field (range is [1...5000]). That's is initial amount of points program will deal with.
- Press **SPIN** button.
- When the number of win points reaches 5000, the game will stop (to avoid infinity).
- When you lose all points, the game, oddly enough, also stops.

![how_to_slot_machine](src/how_to_slot_machine.gif)
### debug mode:
- Select the corresponding checkbox.
- Choose the desired combination of symbols for each reel.
- Press **SAVE** button!
- Press **SPIN** button.

![how_to_debug_mode](src/how_to_debug_mode.gif)

## TODO:
- ~~add more winning combinations;~~ [**DONE** - can be optimised]
- ~~change div on text fild;~~ [**DONE**]
- ~~ask user for initial amount of money, display that in text field;~~ [**DONE**]
- ~~deal with out of money (just negative values for now);~~ [**DONE**]
- ~~add blinking to the text field when win combination happens;~~ [**DONE**]
- make win event nicer then changing background by id;
- style the game table itself;
- ~~add debug area;~~ [**DONE**]
- ~~add corresponding logic for debug area;~~ [**DONE**]
- ~~if more then 1 row won, then only 1 is highligted (bug for now);~~ [**DONE**]
- improve combinatorics logic;
- ~~remove unnecessary classes/ids;~~ [**DONE** - for now]
- ~~check variables names, change let on const if can be done;~~ [**DONE** - for now]
- fix(check) time logic (spinning must last 2 seconds, after that reels start to sop one by one (starting from left) having 0.5 sec delay between landings);
- ~~think about how game ends (max value);~~ [**DONE**]
- describe logic in readme;
- ~~fix double quotes/ single quotes;~~ [**DONE**]
- test logic, find bugs. [**CAN'T NEVER BE DONE**]
