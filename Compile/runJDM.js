"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JDM_1 = require("./JDM");
var Sample = new JDM_1.JDM();
Sample.which('./Sample.json');
// console.log(Sample.get("sepehr"));
Sample.post({
    name: "sepehr",
    id: 345678988
});
