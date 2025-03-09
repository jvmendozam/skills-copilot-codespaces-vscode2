// Create web server
// Create a web server 
// Create a route for GET /comments
// Read the content of comments.json and send it back as a response
// Start the server and test it in the browser
// Create a route for POST /comments
// Read the content of comments.json, add the new comment to the array, and write the array back to comments.json
// Send back a response to the client with a message that the comment was added
// Test the POST route using Postman

const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/comments', (req, res) => {
    const comments = JSON.parse(fs.readFileSync('./comments.json'));
    res.send(comments);
});

app.post('/comments', (req, res) => {
    const comments = JSON.parse(fs.readFileSync('./comments.json'));
    comments.push(req.body);
    fs.writeFileSync('./comments.json', JSON.stringify(comments));
    res.send('Comment added');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// 6. Exercise: Update the comments