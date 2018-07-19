"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var util_1 = require("util");
var JDM = /** @class */ (function () {
    function JDM() {
        this.jsonUrl = '';
    }
    JDM.prototype.which = function (something) {
        this.jsonUrl = something;
    };
    JDM.prototype.get = function (something) {
        var value = JSON.parse(something);
        console.log(value);
        var readFileAsync = util_1.promisify(fs_1.default.readFile);
        readFileAsync(__dirname + "/" + this.jsonUrl, {
            encoding: 'utf8'
        })
            .then(function (contents) {
            var obj = JSON.parse(contents);
            console.log(typeof obj);
        })
            .catch(function (error) {
            throw error;
        });
    };
    JDM.prototype.post = function (something) {
        return '';
    };
    JDM.prototype.delete = function (something, property) {
        return '';
    };
    JDM.prototype.update = function (something, whichOne) {
        return '';
    };
    return JDM;
}());
exports.JDM = JDM;
