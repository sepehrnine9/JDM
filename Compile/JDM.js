"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var util_1 = require("util");
var Helper_1 = require("./Helper");
var obj = {
    db: []
};
var JDM = /** @class */ (function (_super) {
    __extends(JDM, _super);
    function JDM() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.jsonUrl = '';
        return _this;
    }
    JDM.prototype.which = function (something) {
        this.jsonUrl = something;
    };
    JDM.prototype.get = function (something) {
        var readFileAsync = util_1.promisify(fs_1.default.readFile);
        readFileAsync(__dirname + "/" + this.jsonUrl, { encoding: 'utf8' })
            .then(function (contents) {
            var obj = JSON.parse(contents);
            return obj;
        })
            .catch(function (error) {
            throw error;
        });
    };
    JDM.prototype.post = function (something) {
        obj.db.push(something);
        var json = JSON.stringify(obj);
        fs_1.default.createWriteStream("" + this.jsonUrl, json);
    };
    JDM.prototype.delete = function (something, property) {
        return '';
    };
    JDM.prototype.update = function (something, whichOne) {
        return '';
    };
    return JDM;
}(Helper_1.Helper));
exports.JDM = JDM;
