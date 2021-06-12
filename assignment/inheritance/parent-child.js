var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, designation) {
        this.name = name;
        this.designation = designation;
    }
    Person.prototype.getInfo = function () {
        console.log("Name:" + this.name + " and Desgination:" + this.designation);
    };
    Person.prototype.learn = function () {
        console.log('person learn method implementation');
    };
    return Person;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(name, designation, employer) {
        var _this = _super.call(this, name, designation) || this;
        _this.employer = employer;
        return _this;
    }
    Programmer.prototype.coding = function () {
        console.log('Programer special method implementation..');
    };
    Programmer.prototype.getInfo = function () {
        console.log("Name:" + this.name + " and Designation:" + this.designation + " and CompanyName:" + this.employer);
    };
    Programmer.prototype.parentgetInfo = function () {
        _super.prototype.getInfo.call(this);
    };
    return Programmer;
}(Person));
var programmer = new Programmer("ayesha", "SE", "VAM");
console.log(programmer.name, programmer.designation, programmer.employer);
