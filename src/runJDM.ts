import {JDM} from './JDM';

let Sample = new JDM();

Sample.which('./Sample.json');
// console.log(Sample.get("sepehr"));
Sample.post({
    name: "sepehr",
    id: 345678988
});