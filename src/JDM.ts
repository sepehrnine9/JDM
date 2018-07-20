import fs from 'fs';
import {promisify} from 'util';
import {Helper} from './Helper';

interface dbManager {
    which(something: string): void;
    get(something ? : any): any;
    post(something: any): any;
    delete(something: any, property ?: any): string;
    update(something: object, whichOne: any): string;
}

let obj: {db: any} = {
    db: []
}

export class JDM extends Helper implements dbManager  {

    private jsonUrl: string = '';

    public which(something: string): void {
        this.jsonUrl = something;
    }

    public get(something ?: any): any {
        const readFileAsync = promisify(fs.readFile);
        readFileAsync(`${__dirname}/${this.jsonUrl}`, {encoding: 'utf8'})
            .then(contents => {
                const obj = JSON.parse(contents);
                return obj;
            })
            .catch(error => {
                throw error
            });
    }

    public post(something: any): any {
        obj.db.push(something);
        const json = JSON.stringify(obj);
        fs.createWriteStream(`${this.jsonUrl}` , json);
    }

    public delete(something: any, property ? : any): string {
        return '';
    }

    public update(something: object, whichOne: any): string {
        return '';
    }
}