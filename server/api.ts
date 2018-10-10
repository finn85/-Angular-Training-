import {Request, Response} from 'express';
import * as express from 'express';
import {json} from 'body-parser';
import {User} from "./api_modules/interface_User";

const api = express();
const jsonParser = json();
const port: number = 3000;
const users: User[] = require('./data/users.json');


api.listen(port, () => console.log(`[Angular Platform] API listening on port ${port}!`));

api.use(express.static(__dirname + '/static'));

api.get('/users', (req: Request, res: Response) => {
    const curUsers = users.filter( (item) => !item.deleted );

    res.json(curUsers);
});

api.get('/users/:id', (req: Request, res: Response) => {
    const curUser: User = users[req.params.id];

    if (curUser === undefined || curUser.deleted) {
        res.send('user is not exist');
    } else {
        res.json(curUser);
    }
});

api.post('/users/add', jsonParser, (req: Request, res: Response) => {
    const newUser: User = {
        id: users.length,
        name: req.body.name,
        password: req.body.password,
        dateOfBirth: req.body.dateOfBirth,
        dateOfFirstLogin: new Date(),
        dateOfNextNotification: req.body.dateOfNextNotification,
        information: req.body.information
    };

    users.push(newUser);
    res.send(newUser);
});

api.put('/users/:id', jsonParser, (req: Request, res: Response) => {
    const curUser = users[req.params.id];

    if (curUser === undefined || curUser.deleted) {
        res.send('user is not exist');
    } else {
        curUser.name = req.body.name;
        curUser.password = req.body.password;
        curUser.dateOfBirth = req.body.dateOfBirth;
        curUser.dateOfNextNotification = req.body.dateOfNextNotification;
        curUser.information = req.body.information;

        res.send(curUser);
    }
});

api.delete('/users/:id', (req: Request, res: Response) => {
    const curUser = users[req.params.id];

    if (curUser === undefined || curUser.deleted) {
        res.send('user is not exist');
    } else {
        curUser.deleted = true;

        res.send(curUser);
    }
});
