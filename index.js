const express = require('express');

const app = express();

const cors = require('cors');

const courses = require('./Data/courses.json');

const categories = require('./Data/categories.json');

app.use(cors());

const Port = process.env.Port || 5000;


app.get('/', (req, res) => {
    res.send("Now server is running");
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const getCourse = courses.find(course => course.id == id);
    res.send(getCourse);
})

app.listen(Port, () => {
    console.log("Server is running on ", Port);
})