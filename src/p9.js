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
const start = 'F'
const end = 'A';
console.log(findPath(graph, start, end));
module.exports = findPath;

function findPath (graph, start, end) {
    const queue = [{
        node: start, 
        path: [start]
    }];
    const visited = [];

    while (queue.length > 0) {
        // use bfs to find shortest path
        const current = queue.shift();

        if (current.node == end) {
            return {
                connected: true,
                path: current.path
            };
        }

        if (!visited.includes(current.node)) {
            visited.push(current.node);

            for (const neighbor of graph[current.node] || []) {
                if (!visited.includes(neighbor)) {
                    queue.push({
                        node: neighbor,
                        path: current.path.concat(neighbor)
                    });
                }
            }
        }
    }

    return {
        connected: false,
        path: []
    }
}