
const getName = () => {
    fetch('http://localhost:3001/posts/1')
        .then(response => response.json()) // Parse JSON first
        .then(data => {
            return data.username; // Access property on parsed object
        });
}