import fs from 'fs';
import {promisify} from 'util';

interface dbManager {
    which(something: string): void;
    get(something?: any): any;
    post(something: any): string;
    delete(something: any, property ? : any): string;
    update(something: object, whichOne: any): string;
}

export class JDM implements dbManager {

    private jsonUrl: string = '';

    public which(something: string): void {
        this.jsonUrl = something;
    }

    public get(something?: any): any {
        let value = JSON.parse(something);
        console.log(value);
        const readFileAsync = promisify(fs.readFile);
        readFileAsync(`${__dirname}/${this.jsonUrl}`, {
                encoding: 'utf8'
            })
            .then(contents => {
                const obj = JSON.parse(contents);
                console.log(typeof obj);
            })
            .catch(error => {
                throw error
            });
    }

    public post(something: any): string {
        return '';
    }

    public delete(something: any, property ? : any): string {
        return '';
    }

    public update(something: object, whichOne: any): string {
        return '';
    }
}