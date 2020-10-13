import express from 'express';

import './database/connection';

const app = express();

app.use(express.json())

const PORT = 3333;

app.listen(PORT);

const GET_HTTP_REQUEST = {
    status: true,
    data: [
        {
            name: "John",
            age: 23,
            country: "USA"
        },
        {
            name: "Bia",
            age: 31,
            country: "Chile"
        },
        {
            name: "Lucia",
            age: 29,
            country: "Brazil"
        },
        {
            name: "Marcio",
            age: 20,
            country: "Brazil"
        }
    ]
}

app.get('/users', (request, response) => {
    response.json(GET_HTTP_REQUEST);
});