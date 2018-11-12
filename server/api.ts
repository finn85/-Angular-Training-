import { Request, Response } from 'express';
import * as express from 'express';
import { json } from 'body-parser';

const api = express();
const jsonParser = json();
const port: number = 3000;
const delay: number = 1000;
const cookieMaxAge: number = 90000000;
const users: User[] = require('./data/users.json');
const en: object = require('./assets/i18n/en.json');
const ru: object = require('./assets/i18n/ru.json');

export interface User {
  id?: number;
  loginName: string;
  password: string;
  name: string;
  age: string;
  dateOfBirth: string;
  dateOfLogin: string;
  dateOfNotif: string;
  info: string;
  isAdmin?: boolean;
  deleted?: boolean;
}

api.listen(port, () => console.log(`[Angular Platform] API listening on port ${port}!`));

api.use(express.static(__dirname + '/static'));


api.get('/api/users', (req: Request, res: Response) => {
  const curUsers = users.filter( (item) => !item.deleted );
  setTimeout(() => res.json(curUsers), delay);
});


api.get('/api/users/:id', (req: Request, res: Response) => {
  const curUser: User = users[req.params.id];

  setTimeout(() => {
    if (curUser === undefined || curUser.deleted) {
      res.send('user-item is not exist');
    } else {
      res.json(curUser);
    }
  }, delay);
});


api.get('/assets/i18n/en.json',(req: Request, res: Response) => {
  res.send(en)
});


api.get('/assets/i18n/ru.json',(req: Request, res: Response) => {
  res.send(ru)
});


api.get('/*', (req: Request, res: Response) => {
  res.sendFile(__dirname + '/static/index.html')
});


api.post('/api/users/add', jsonParser, (req: Request, res: Response) => {
  const newUser: User = {
    id: users.length,
    loginName: req.body.loginName,
    password: req.body.password,
    name: req.body.name,
    age: req.body.age,
    dateOfBirth: req.body.dateOfBirth,
    dateOfLogin: req.body.dateOfLogin,
    dateOfNotif: req.body.dateOfNotif,
    info: req.body.info
  };
  setTimeout(() => {
    users.push(newUser);
    res.send(newUser);
  }, delay)

});


api.post('/api/users/login', jsonParser, ((req: Request, res: Response) => {
  const curData = req.body;
  const curUsers: User[] = users.filter( (item) => !item.deleted );
  const curUser: User|undefined = curUsers
    .find((item) => (item.loginName === curData.loginName && item.password === curData.password));


  setTimeout(() => {
    if (curUser !== undefined) {
      res.cookie('id', curUser.id, {maxAge: cookieMaxAge});
      if (curUser.isAdmin) {res.cookie('admin',true, {maxAge: cookieMaxAge})}
      res.send(true);
    } else {
      res.send(false)
    }
  }, delay)
}));


api.post('/api/users/password', jsonParser, ((req: Request, res: Response) => {
  const curLoginName = req.body.loginName;
  const curUsers: User[] = users.filter( (item) => !item.deleted );
  const curUser: User|undefined = curUsers
    .find((item) => (item.loginName === curLoginName));
  setTimeout(() => {
    if (curUser === undefined) {
      res.send({message: false})
    } else {
      res.send({message: curUser.password})
    }
  }, delay)
}));


api.put('/api/users/:id', jsonParser, (req: Request, res: Response) => {
    const curUser = users[req.params.id];

    if (curUser === undefined || curUser.deleted) {
        res.send('user-item is not exist');
    } else {
        curUser.loginName = req.body.loginName;
        curUser.password = req.body.password;
        curUser.name = req.body.name;
        curUser.age = req.body.age;
        curUser.dateOfBirth = req.body.dateOfBirth;
        curUser.dateOfLogin = req.body.dateOfLogin;
        curUser.dateOfNotif = req.body.dateOfNotif;
        curUser.info = req.body.info;

        res.send(curUser);
    }
});


api.delete('/api/users/:id', (req: Request, res: Response) => {
  const curUser = users[req.params.id];
  setTimeout(() => {
    if (curUser === undefined || curUser.deleted) {
      res.send('user-item is not exist');
    } else {
      curUser.deleted = true;
      res.send(curUser);
    }
  }, delay);

});
