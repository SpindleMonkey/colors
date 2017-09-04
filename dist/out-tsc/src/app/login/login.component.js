"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../_services/index");
var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, alertService, userService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.userService = userService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.logout();
    };
    LoginComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        this.loading = true;
        console.log(this.model.email);
        var test = this.userService.showByEmail(this.model.email);
        console.log('test: ' + test);
        this.router.navigate(['/users/' + this.model.email]);
        // .subscribe(data => {
        //   console.log(data);
        //   this.router.navigate(['/user']);
        // });
        // this.userService.showById()
        // .subscribe( data => {
        //   console.log(data);
        // },
        //     error => {
        //       this.alertService.error(error);
        //       this.loading = false;
        //     });
        // this.authenticationService.login(this.model.email, this.model.password);
        // this.router.navigate(['/user']);
        // this.router.navigate([this.returnUrl]);
        // subscribe(
        //     data => {
        //       this.router.navigate([this.returnUrl]);
        //     },
        // error => {
        //   this.alertService.error(error);
        //   this.loading = false;
        // });
    };
    return LoginComponent;
}());
LoginComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            },] },
];
/** @nocollapse */
LoginComponent.ctorParameters = function () { return [
    { type: router_1.ActivatedRoute, },
    { type: router_1.Router, },
    { type: index_1.AuthenticationService, },
    { type: index_1.AlertService, },
    { type: index_1.UserService, },
]; };
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map