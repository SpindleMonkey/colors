"use strict";
// tslint:disable:import-spacing
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
// observables
require("rxjs/add/observable/of");
// operators
require("rxjs/add/operator/do");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/map");
var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000';
    }
    AuthenticationService.prototype.login = function (email, password) {
        var data = { email: email, password: password };
        console.log(data);
        var myjson = JSON.stringify({ email: email, password: password });
        console.log(myjson);
        this.http.post('/api/users/', myjson)
            .map(function (response) {
            console.log(response.json());
            var user = response.json();
            console.log(user);
            if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        });
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    return AuthenticationService;
}());
AuthenticationService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
AuthenticationService.ctorParameters = function () { return [
    { type: http_1.Http, },
]; };
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map