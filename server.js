const express = require('express');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mockUserData = [
    {name: 'Mark'},
    {name: 'Jill'}
];

app.get('/users', function(req, res) {
    res.json({
        success: true,
        message: 'successfully got users.',
        users: mockUserData
    });
});

app.get('/users/:id', function(req, res) {
    console.log(req.params.id);
    res.json({
        success: true,
        message: 'successfully got one user.',
        users: req.params.id
    });
});

app.post('/login', function(req, res) {

    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = 'ztackett11'
    const mockPassword = 'password123';

    if (username == mockUsername && password == mockPassword) {
        res.json({
            success: true,
            message: 'login successful',
            token: 'encrypted token goes here'
        });
    } else {
        res.json({
            success: false,
            message: 'Username or password does not match. try again...'
        });
    }
    
});

app.listen(8000, function() {
    console.log("server is running")
});
