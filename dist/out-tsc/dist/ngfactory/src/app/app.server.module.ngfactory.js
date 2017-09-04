"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("../../../../src/app/app.server.module");
var i2 = require("../../../../src/app/app.component");
var i3 = require("./user/user.component.ngfactory");
var i4 = require("./user/user-dash/user-dash.component.ngfactory");
var i5 = require("./landing/landing.component.ngfactory");
var i6 = require("./login/login.component.ngfactory");
var i7 = require("./signup/signup.component.ngfactory");
var i8 = require("./create-by-color/create-by-color.component.ngfactory");
var i9 = require("./create-by-attribute-dismiss/create-by-attribute-dismiss.component.ngfactory");
var i10 = require("./create-by-attribute-choose/create-by-attribute-choose.component.ngfactory");
var i11 = require("./by-color-result/by-color-result.component.ngfactory");
var i12 = require("./about/about.component.ngfactory");
var i13 = require("./footer/footer.component.ngfactory");
var i14 = require("./app.component.ngfactory");
var i15 = require("@angular/http");
var i16 = require("@angular/platform-server");
var i17 = require("@angular/common/http");
var i18 = require("@angular/common");
var i19 = require("@angular/platform-browser");
var i20 = require("@angular/animations/browser");
var i21 = require("@angular/platform-browser/animations");
var i22 = require("@angular/animations");
var i23 = require("@angular/forms");
var i24 = require("@angular/router");
var i25 = require("../../../../src/app/_services/alert.service");
var i26 = require("../../../../src/app/_services/authentication.service");
var i27 = require("../../../../src/app/_services/user.service");
var i28 = require("../../../../src/app/_services/by-attribute.service");
var i29 = require("../../../../src/app/user/user.component");
var i30 = require("../../../../src/app/user/user-dash/user-dash.component");
var i31 = require("../../../../src/app/landing/landing.component");
var i32 = require("../../../../src/app/login/login.component");
var i33 = require("../../../../src/app/signup/signup.component");
var i34 = require("../../../../src/app/create-by-color/create-by-color.component");
var i35 = require("../../../../src/app/create-by-attribute-dismiss/create-by-attribute-dismiss.component");
var i36 = require("../../../../src/app/create-by-attribute-choose/create-by-attribute-choose.component");
var i37 = require("../../../../src/app/by-color-result/by-color-result.component");
var i38 = require("../../../../src/app/about/about.component");
var i39 = require("../../../../src/app/footer/footer.component");
var i40 = require("../../../../src/app/user/user-routing/user-routing.module");
var i41 = require("../../../../src/app/user/user.module");
var i42 = require("../../../../src/app/app.routing.module");
var i43 = require("../../../../src/app/app.module");
exports.AppServerModuleNgFactory = i0.ɵcmf(i1.AppServerModule, [i2.AppComponent], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.UserComponentNgFactory, i4.UserDashComponentNgFactory, i5.LandingComponentNgFactory,
                    i6.LoginComponentNgFactory, i7.SignupComponentNgFactory, i8.CreateByColorComponentNgFactory,
                    i9.CreateByAttributeDismissComponentNgFactory, i10.CreateByAttributeChooseComponentNgFactory,
                    i11.ByColorResultComponentNgFactory, i12.AboutComponentNgFactory, i13.FooterComponentNgFactory,
                    i14.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]),
        i0.ɵmpd(4608, i15.BrowserXhr, i16.ɵc, []), i0.ɵmpd(4608, i15.ResponseOptions, i15.BaseResponseOptions, []), i0.ɵmpd(4608, i15.XSRFStrategy, i16.ɵd, []), i0.ɵmpd(4608, i15.XHRBackend, i15.XHRBackend, [i15.BrowserXhr,
            i15.ResponseOptions, i15.XSRFStrategy]), i0.ɵmpd(4608, i15.RequestOptions, i15.BaseRequestOptions, []), i0.ɵmpd(5120, i15.Http, i16.ɵe, [i15.XHRBackend,
            i15.RequestOptions]), i0.ɵmpd(4608, i17.HttpXsrfTokenExtractor, i17.ɵg, [i18.DOCUMENT, i0.PLATFORM_ID, i17.ɵe]), i0.ɵmpd(4608, i17.ɵh, i17.ɵh, [i17.HttpXsrfTokenExtractor,
            i17.ɵf]), i0.ɵmpd(5120, i17.HTTP_INTERCEPTORS, function (p0_0) {
            return [p0_0];
        }, [i17.ɵh]), i0.ɵmpd(4608, i17.XhrFactory, i16.ɵc, []), i0.ɵmpd(4608, i17.HttpXhrBackend, i17.HttpXhrBackend, [i17.XhrFactory]), i0.ɵmpd(6144, i17.HttpBackend, null, [i17.HttpXhrBackend]), i0.ɵmpd(5120, i17.HttpHandler, i16.ɵf, [i17.HttpBackend, [2, i17.HTTP_INTERCEPTORS]]), i0.ɵmpd(4608, i17.HttpClient, i17.HttpClient, [i17.HttpHandler]), i0.ɵmpd(4608, i17.ɵd, i17.ɵd, []),
        i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵm, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i18.NgLocalization, i18.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵk, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵl, []),
        i0.ɵmpd(4608, i19.DomSanitizer, i19.ɵe, [i18.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i19.DomSanitizer]), i0.ɵmpd(4608, i19.HAMMER_GESTURE_CONFIG, i19.HammerGestureConfig, []), i0.ɵmpd(5120, i19.EVENT_MANAGER_PLUGINS, function (p0_0, p1_0, p2_0, p2_1) {
            return [new i19.ɵDomEventsPlugin(p0_0), new i19.ɵKeyEventsPlugin(p1_0),
                new i19.ɵHammerGesturesPlugin(p2_0, p2_1)];
        }, [i18.DOCUMENT, i18.DOCUMENT, i18.DOCUMENT, i19.HAMMER_GESTURE_CONFIG]),
        i0.ɵmpd(4608, i19.EventManager, i19.EventManager, [i19.EVENT_MANAGER_PLUGINS,
            i0.NgZone]), i0.ɵmpd(135680, i19.ɵDomSharedStylesHost, i19.ɵDomSharedStylesHost, [i18.DOCUMENT]), i0.ɵmpd(4608, i19.ɵDomRendererFactory2, i19.ɵDomRendererFactory2, [i19.EventManager, i19.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i16.ɵb, i16.ɵb, [i19.DOCUMENT, [2, i19.ɵTRANSITION_ID]]), i0.ɵmpd(6144, i19.ɵSharedStylesHost, null, [i16.ɵb]), i0.ɵmpd(4608, i16.ɵServerRendererFactory2, i16.ɵServerRendererFactory2, [i0.NgZone, i19.DOCUMENT, i19.ɵSharedStylesHost]), i0.ɵmpd(4608, i20.AnimationDriver, i20.ɵNoopAnimationDriver, []), i0.ɵmpd(5120, i20.ɵAnimationStyleNormalizer, i21.ɵd, []), i0.ɵmpd(4608, i20.ɵAnimationEngine, i21.ɵb, [i20.AnimationDriver,
            i20.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i16.ɵa, [i16.ɵServerRendererFactory2, i20.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(4352, i0.Testability, null, []), i0.ɵmpd(4608, i19.Meta, i19.Meta, [i18.DOCUMENT]), i0.ɵmpd(4608, i19.Title, i19.Title, [i18.DOCUMENT]), i0.ɵmpd(4608, i22.AnimationBuilder, i21.ɵBrowserAnimationBuilder, [i0.RendererFactory2,
            i19.DOCUMENT]), i0.ɵmpd(4608, i23.ɵi, i23.ɵi, []), i0.ɵmpd(5120, i24.ActivatedRoute, i24.ɵf, [i24.Router]), i0.ɵmpd(4608, i24.NoPreloading, i24.NoPreloading, []), i0.ɵmpd(6144, i24.PreloadingStrategy, null, [i24.NoPreloading]), i0.ɵmpd(135680, i24.RouterPreloader, i24.RouterPreloader, [i24.Router, i0.NgModuleFactoryLoader, i0.Compiler,
            i0.Injector, i24.PreloadingStrategy]), i0.ɵmpd(4608, i24.PreloadAllModules, i24.PreloadAllModules, []), i0.ɵmpd(5120, i24.ROUTER_INITIALIZER, i24.ɵi, [i24.ɵg]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) {
            return [p0_0];
        }, [i24.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i25.AlertService, i25.AlertService, [i24.Router]), i0.ɵmpd(4608, i26.AuthenticationService, i26.AuthenticationService, [i15.Http]), i0.ɵmpd(4608, i27.UserService, i27.UserService, [i15.Http]),
        i0.ɵmpd(4608, i28.ByAttributeService, i28.ByAttributeService, []),
        i0.ɵmpd(512, i15.HttpModule, i15.HttpModule, []), i0.ɵmpd(512, i17.HttpClientXsrfModule, i17.HttpClientXsrfModule, []), i0.ɵmpd(512, i17.HttpClientModule, i17.HttpClientModule, []), i0.ɵmpd(512, i18.CommonModule, i18.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i19.ɵa, []), i0.ɵmpd(1024, i0.NgProbeToken, function () {
            return [i24.ɵb()];
        }, []), i0.ɵmpd(512, i24.ɵg, i24.ɵg, [i0.Injector]), i0.ɵmpd(256, i0.APP_ID, 'colorpsych', []), i0.ɵmpd(2048, i19.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p0_1, p1_0, p2_0, p2_1, p2_2) {
            return [i19.ɵc(p0_0, p0_1), i24.ɵh(p1_0), i19.ɵf(p2_0, p2_1, p2_2)];
        }, [[2, i19.NgProbeToken], [2, i0.NgProbeToken], i24.ɵg, i19.ɵTRANSITION_ID, i18.DOCUMENT,
            i0.Injector]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ɵe, i0.ɵe, [i0.NgZone, i0.ɵConsole,
            i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]),
        i0.ɵmpd(2048, i0.ApplicationRef, null, [i0.ɵe]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(512, i19.BrowserModule, i19.BrowserModule, [[3, i19.BrowserModule]]), i0.ɵmpd(512, i21.NoopAnimationsModule, i21.NoopAnimationsModule, []), i0.ɵmpd(512, i16.ServerModule, i16.ServerModule, []), i0.ɵmpd(512, i23.ɵba, i23.ɵba, []),
        i0.ɵmpd(512, i23.FormsModule, i23.FormsModule, []), i0.ɵmpd(1024, i24.ɵa, i24.ɵd, [[3, i24.Router]]), i0.ɵmpd(512, i24.UrlSerializer, i24.DefaultUrlSerializer, []), i0.ɵmpd(512, i24.ChildrenOutletContexts, i24.ChildrenOutletContexts, []), i0.ɵmpd(256, i24.ROUTER_CONFIGURATION, { enableTracing: true }, []), i0.ɵmpd(1024, i18.LocationStrategy, i24.ɵc, [i18.PlatformLocation,
            [2, i18.APP_BASE_HREF], i24.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i18.Location, i18.Location, [i18.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]), i0.ɵmpd(1024, i24.ROUTES, function () {
            return [[{ path: 'users', component: i29.UserComponent, children: [{ path: ':email',
                                component: i30.UserDashComponent }] }], [{ path: '', component: i31.LandingComponent },
                    { path: 'login', component: i32.LoginComponent }, { path: 'signup', component: i33.SignupComponent },
                    { path: 'create-by-color', component: i34.CreateByColorComponent },
                    { path: 'create-by-attribute-dismiss', component: i35.CreateByAttributeDismissComponent },
                    { path: 'create-by-attribute-choose', component: i36.CreateByAttributeChooseComponent },
                    { path: 'by-color-result', component: i37.ByColorResultComponent },
                    { path: 'about', component: i38.AboutComponent }, { path: 'footer', component: i39.FooterComponent },
                    { path: 'landing', component: i31.LandingComponent }, { path: '**', redirectTo: '' }]];
        }, []), i0.ɵmpd(1024, i24.Router, i24.ɵe, [i0.ApplicationRef, i24.UrlSerializer,
            i24.ChildrenOutletContexts, i18.Location, i0.Injector, i0.NgModuleFactoryLoader,
            i0.Compiler, i24.ROUTES, i24.ROUTER_CONFIGURATION, [2, i24.UrlHandlingStrategy],
            [2, i24.RouteReuseStrategy]]), i0.ɵmpd(512, i24.RouterModule, i24.RouterModule, [[2, i24.ɵa], [2, i24.Router]]), i0.ɵmpd(512, i40.UserRoutingModule, i40.UserRoutingModule, []), i0.ɵmpd(512, i41.UserModule, i41.UserModule, []),
        i0.ɵmpd(512, i42.AppRoutingModule, i42.AppRoutingModule, []), i0.ɵmpd(512, i43.AppModule, i43.AppModule, []), i0.ɵmpd(512, i1.AppServerModule, i1.AppServerModule, []), i0.ɵmpd(256, i17.ɵe, 'XSRF-TOKEN', []),
        i0.ɵmpd(256, i17.ɵf, 'X-XSRF-TOKEN', [])]);
});
//# sourceMappingURL=app.server.module.ngfactory.js.map