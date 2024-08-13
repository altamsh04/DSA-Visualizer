const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

// Searching algorithms routes
app.get('/Searching', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Searching/Searching.html'));
})
app.get('/Searching/LinearSearch', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/Searching/LinearSearch/LinearSearch.html'));
})
app.get('/Searching/BinarySearch', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/Searching/BinarySearch/BinarySearch.html'));
})

// Sorting algorithms routes
app.get('/Sorting', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Sorting/Sorting.html'));
})

app.listen(PORT, ()=> {
    console.log(`Server started on http://localhost:${PORT}`)
})