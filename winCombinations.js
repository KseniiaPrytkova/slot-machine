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
];