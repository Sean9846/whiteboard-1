const findPath = require('./p9');
const graph = {
    A: ['B'],
    B: ['A', 'C', 'D', 'E'],
    C: ['F'],
    D: ['E', 'G'],
    E: ['F'],
    F: ['B', 'G'],
    G: [],
    H: []
};
const start = 'E'
const end = 'D';
console.log(findPath(graph, start, end));

//expected result: { connected: true, path: [ 'E', 'F', 'B', 'D' ] }