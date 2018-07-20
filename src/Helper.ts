export class Helper {
    protected static getObjectByValue(array: any, key: string) {
        array.forEach((element: any) => {
            return element[key] === key
        });
    };
}