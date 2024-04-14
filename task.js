function dijkstra(graph, start) {
    // Initialize distances to all vertices as infinite
    const distances = {};
    for (let vertex in graph) {
        distances[vertex] = Infinity;
    }
    distances[start] = 0;

    // Priority queue to store vertices and their distances
    const priorityQueue = [start];

    // Helper function to get the vertex with the minimum distance
    const getMinVertex = () => {
        let minVertex = priorityQueue[0];
        for (let vertex of priorityQueue) {
            if (distances[vertex] < distances[minVertex]) {
                minVertex = vertex;
            }
        }
        return minVertex;
    };

    while (priorityQueue.length) {
        const currentVertex = getMinVertex();
        priorityQueue.splice(priorityQueue.indexOf(currentVertex), 1);

        for (let neighbor in graph[currentVertex]) {
            const distance = distances[currentVertex] + graph[currentVertex][neighbor];
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                if (!priorityQueue.includes(neighbor)) {
                    priorityQueue.push(neighbor);
                }
            }
        }
    }

    return distances;
}

// Example graph
const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};

// Example usage
console.log(dijkstra(graph, 'A')); // Output: { A: 0, B: 4, C: 2, D: 5 }
