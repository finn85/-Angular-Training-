import * as express from 'express';
import * as bodyParser from 'body-parser';
//change any
//types

const app = express();
const port: number = 3000;
const users: object[] = require('./users.json');
const jsonParser = bodyParser.json();

app.listen(port, () => console.log(`[Angular Platform] API listening on port ${port}!`));

app.get('/users', (req: any, res: any) => res.json(users));

app.get('/users/:id', (req: any, res: any) => {
    if (users[req.params.id] === undefined) {
        res.send('user is not exist');
    }
    res.json(users[req.params.id]);
});

app.post('/users/add', jsonParser, (req: any, res: any) => {
    const newUser: object = {
        id: users.length,
        name: req.body.name,
        password: req.body.password,
        dateOfBirth: req.body.dateOfBirth,
        dateOfFirstLogin: new Date(),
        dateOfNextNotification: req.body.dateOfNextNotification,
        information: req.body.information
    };

    res.send(newUser);
    users.push(newUser);
});

app.put('/users/:id', jsonParser, (req: any, res: any) => {
    users[req.params.id].name = req.body.name;
    users[req.params.id].password = req.body.password;
    users[req.params.id].dateOfBirth = req.body.dateOfBirth;
    users[req.params.id].dateOfNextNotification = req.body.dateOfNextNotification;
    users[req.params.id].information = req.body.information;

    res.send(users[req.params.id]);
});

app.delete('/users/:id', (req: any, res: any) => {
    if (Object.keys(users[req.params.id]).length === 0) {
        res.send('user is not exist');
    } else {
        res.send(users[req.params.id]);
    }

    users.splice(req.params.id, 1, {});
});

