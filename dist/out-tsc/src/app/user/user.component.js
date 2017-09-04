"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../_services/index");
var UserComponent = (function () {
    function UserComponent(userService) {
        this.userService = userService;
        // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    return UserComponent;
}());
UserComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.scss']
            },] },
];
/** @nocollapse */
UserComponent.ctorParameters = function () { return [
    { type: index_1.UserService, },
]; };
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map