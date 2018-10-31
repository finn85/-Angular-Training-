import {Request, Response} from 'express';
import * as express from 'express';
import {json} from 'body-parser';
import {User} from "./interfaces/User";

const api = express();
const jsonParser = json();
const port: number = 3000;
const delay: number = 0;
const users: User[] = require('./data/users.json');


api.listen(port, () => console.log(`[Angular Platform] API listening on port ${port}!`));

api.use(express.static(__dirname + '/static'));

api.get('/users', (req: Request, res: Response) => {
  const curUsers = users.filter( (item) => !item.deleted );
  setTimeout(() => res.json(curUsers), delay);
});

api.get('/users/:id', (req: Request, res: Response) => {
  const curUser: User = users[req.params.id];

  setTimeout(() => {
    if (curUser === undefined || curUser.deleted) {
      res.send('user is not exist');
    } else {
      res.json(curUser);
    }
  }, delay);
});

api.get('/*', (req: Request, res: Response) => {
  res.sendFile(__dirname + '/static/index.html')
});

  api.post('/users/add', jsonParser, (req: Request, res: Response) => {
    const newUser: User = {
        id: users.length,
        loginName: req.body.login,
        name: req.body.name,
        password: req.body.password,
        dateOfBirth: req.body.dateOfBirth,
        dateOfLogin: req.body.dateOfLogin,
        dateOfNotif: req.body.dateOfNotif,
        information: req.body.information
    };

    users.push(newUser);
    res.send(newUser);
});

api.post('/login', jsonParser, ((req: Request, res: Response) => {
  const curData = req.body;
  const curUsers: User[] = users.filter( (item) => !item.deleted );
  const curUser: User|undefined = curUsers
    .find((item) => (item.loginName === curData.loginName && item.password === curData.password));

  if (curUser !== undefined) {
    res.cookie('id', curUser.id, {maxAge: 90000000});
    res.send(true)
  } else {
    res.send(false)
  }
}));

api.put('/users/:id', jsonParser, (req: Request, res: Response) => {
    const curUser = users[req.params.id];

    if (curUser === undefined || curUser.deleted) {
        res.send('user is not exist');
    } else {
        curUser.name = req.body.name;
        curUser.password = req.body.password;
        curUser.dateOfBirth = req.body.dateOfBirth;
        curUser.dateOfNotif = req.body.dateOfNotif;
        curUser.information = req.body.information;

        res.send(curUser);
    }
});

api.delete('/users/:id', (req: Request, res: Response) => {
  const curUser = users[req.params.id];

  setTimeout(() => {
    if (curUser === undefined || curUser.deleted) {
      res.send('user is not exist');
    } else {
      curUser.deleted = true;
      res.send(curUser);
    }
  }, delay);
});
