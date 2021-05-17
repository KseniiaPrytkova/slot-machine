// BAR    ---> 0
// 2xBAR  ---> 1
// 3xBAR  ---> 2
// Cherry ---> 3
// 7      ---> 4

// array of objects, that stores all win combinations
// very easy to modify existing or add new ones
let data = [
    {
        "name": '1', // this field is for debugging purposes only
        "line": 0,
        "sequence":[ 3, 3, 3 ],
        "points": 2000
    },
    {
        "name": '2',
        "line": 1,
        "sequence":[ 3, 3, 3 ],
        "points": 1000
    },
    {
        "name": '3',
        "line": 2,
        "sequence":[ 3, 3, 3 ],
        "points": 4000
    },
    {
        "name": '4',
        "line": 'any',
        "sequence":[ 4, 4, 4 ],
        "points": 150
    },
    {
        "name": '5',
        "line": 'any',
        "sequence":[ 2, 2, 2 ],
        "points": 50
    },
    {
        "name": '6',
        "line": 'any',
        "sequence":[ 1, 1, 1 ],
        "points": 20
    },
    {
        "name": '7',
        "line": 'any',
        "sequence":[ 0, 0, 0 ],
        "points": 10
    },
    // Any combination of CHERRY and 7 on any line
    // can be done nicer (COMBINATORICS - combination generator; maybe can be fn; representation)
    {
        "name": '8.1',
        "line": 'any',
        "sequence":[ 3, 3, 4 ],
        "points": 75
    },
    {
        "name": '8.2',
        "line": 'any',
        "sequence":[ 3, 4, 3 ],
        "points": 75
    },
    {
        "name": '8.3',
        "line": 'any',
        "sequence":[ 4, 3, 3 ],
        "points": 75
    },
    {
        "name": '8.4',
        "line": 'any',
        "sequence":[ 4, 4, 3 ],
        "points": 75
    },
    {
        "name": '8.5',
        "line": 'any',
        "sequence":[ 4, 3, 4 ],
        "points": 75
    },
    {
        "name": '8.6',
        "line": 'any',
        "sequence":[ 3, 4, 4 ],
        "points": 75
    },
    // Combination of any BAR symbols on any line
    // can be done nicer (COMBINATORICS - combination generator; maybe can be separate fn; representation);
    // can be solved: check unique combinations in this file, for massive combinations create a separate fn;
    // 27 - 3 = 24 combinations
    {
        "name": '9.1',
        "line": 'any',
        "sequence":[ 0, 1, 2 ],
        "points": 5
    },
    {
        "name": '9.2',
        "line": 'any',
        "sequence":[ 0, 2, 1 ],
        "points": 5
    },
    {
        "name": '9.3',
        "line": 'any',
        "sequence":[ 2, 1, 0 ],
        "points": 5
    },
    {
        "name": '9.4',
        "line": 'any',
        "sequence":[ 2, 0, 1 ],
        "points": 5
    },
    {
        "name": '9.5',
        "line": 'any',
        "sequence":[ 1, 0, 2 ],
        "points": 5
    },
    {
        "name": '9.6',
        "line": 'any',
        "sequence":[ 1, 2, 0 ],
        "points": 5
    },
    {
        "name": '9.7',
        "line": 'any',
        "sequence":[ 0, 1, 0 ],
        "points": 5
    },
    {
        "name": '9.8',
        "line": 'any',
        "sequence":[ 0, 2, 0 ],
        "points": 5
    },
    {
        "name": '9.9',
        "line": 'any',
        "sequence":[ 1, 0, 1 ],
        "points": 5
    },
    {
        "name": '9.10',
        "line": 'any',
        "sequence":[ 1, 2, 1 ],
        "points": 5
    },
    {
        "name": '9.11',
        "line": 'any',
        "sequence":[ 2, 0, 2 ],
        "points": 5
    },
    {
        "name": '9.12',
        "line": 'any',
        "sequence":[ 2, 1, 2 ],
        "points": 5
    },
    {
        "name": '9.13',
        "line": 'any',
        "sequence":[ 1, 2, 2 ],
        "points": 5
    },
    {
        "name": '9.14',
        "line": 'any',
        "sequence":[ 2, 1, 1 ],
        "points": 5
    },
    {
        "name": '9.15',
        "line": 'any',
        "sequence":[ 2, 2, 1 ],
        "points": 5
    },
    {
        "name": '9.16',
        "line": 'any',
        "sequence":[ 1, 1, 2 ],
        "points": 5
    },
    {
        "name": '9.17',
        "line": 'any',
        "sequence":[ 2, 0, 0 ],
        "points": 5
    },
    {
        "name": '9.18',
        "line": 'any',
        "sequence":[ 0, 0, 1 ],
        "points": 5
    },
    {
        "name": '9.19',
        "line": 'any',
        "sequence":[ 1, 0, 0 ],
        "points": 5
    },
    {
        "name": '9.20',
        "line": 'any',
        "sequence":[ 0, 1, 1 ],
        "points": 5
    },
    {
        "name": '9.21',
        "line": 'any',
        "sequence":[ 1, 1, 0 ],
        "points": 5
    },
    {
        "name": '9.22',
        "line": 'any',
        "sequence":[ 0, 0, 2 ],
        "points": 5
    },
    {
        "name": '9.23',
        "line": 'any',
        "sequence":[ 0, 2, 2 ],
        "points": 5
    },
    {
        "name": '9.24',
        "line": 'any',
        "sequence":[ 2, 2, 0 ],
        "points": 5
    },
];