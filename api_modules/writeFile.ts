import {writeFile as fs_writeFile} from "fs";
import {User} from "./interface_User";

function writeFile(path: string, users: User[]){
    fs_writeFile(path, JSON.stringify(users), 'utf-8', (err) =>{
        if (err) throw err;
    });
}

export {writeFile}