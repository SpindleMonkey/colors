"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../_services/index");
var SignupComponent = (function () {
    function SignupComponent(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    SignupComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Registration Success Yo', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return SignupComponent;
}());
SignupComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.scss']
            },] },
];
/** @nocollapse */
SignupComponent.ctorParameters = function () { return [
    { type: router_1.Router, },
    { type: index_1.UserService, },
    { type: index_1.AlertService, },
]; };
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map