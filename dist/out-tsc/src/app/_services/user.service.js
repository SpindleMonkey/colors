"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
// observables
require("rxjs/add/observable/of");
// operators
require("rxjs/add/operator/do");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/map");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000';
    }
    UserService.prototype.getAll = function () {
        return this.http.get(this.baseUrl + "/api/users");
        // return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    };
    UserService.prototype.showByEmail = function (email) {
        console.log(email);
        return this.http.get(this.baseUrl + "/api/users/" + email);
        // return this.http.get('/api/users' + id, this.jwt()).map((response: Response) => response.json());
    };
    UserService.prototype.create = function (user) {
        console.log(user);
        return this.http.post(this.baseUrl + "/api/users/", user);
        // return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
    };
    // update(user: User) {
    //   return
    // }
    UserService.prototype.delete = function (id) {
        return this.http.delete('/api/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    // HELPER METHODS
    UserService.prototype.jwt = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    return UserService;
}());
UserService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
UserService.ctorParameters = function () { return [
    { type: http_1.Http, },
]; };
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map