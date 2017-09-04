/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './user-dash.component.scss.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/router';
import * as i3 from '@angular/common';
import * as i4 from '../../../../../../src/app/user/user-dash/user-dash.component';
import * as i5 from '../../../../../../src/app/_services/user.service';
const styles_UserDashComponent:any[] = [i0.styles];
export const RenderType_UserDashComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_UserDashComponent,data:{}});
function View_UserDashComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),16,'div',[['class',
      'dash_content_container']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted((null as any),['\n            '])),(_l()(),i1.ɵeld(0,
      (null as any),(null as any),1,'h3',([] as any[]),(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['',
      '\'s profile'])),(_l()(),i1.ɵted((null as any),['\n            '])),(_l()(),
      i1.ɵeld(0,(null as any),(null as any),4,'div',[['id','saved_palettes']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
      ['\n                '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'h3',
      ([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['View Your Saved Palettes'])),(_l()(),i1.ɵted((null as any),
          ['\n\n            '])),(_l()(),i1.ɵted((null as any),['\n            '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),4,'p',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵeld(0,
          (null as any),(null as any),3,'a',([] as any[]),[[1,'target',0],[8,'href',
              4]],[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,13).onClick($event.button,$event.ctrlKey,
                  $event.metaKey,$event.shiftKey)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(671744,(null as any),0,i2.RouterLinkWithHref,
          [i2.Router,i2.ActivatedRoute,i3.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),i1.ɵpad(1),(_l()(),i1.ɵted((null as any),['Logout'])),(_l()(),
          i1.ɵted((null as any),['\n        ']))],(_ck,_v) => {
    const currVal_3:any = _ck(_v,14,0,'/login');
    _ck(_v,13,0,currVal_3);
  },(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.currentUser.firstName;
    _ck(_v,3,0,currVal_0);
    const currVal_1:any = i1.ɵnov(_v,13).target;
    const currVal_2:any = i1.ɵnov(_v,13).href;
    _ck(_v,12,0,currVal_1,currVal_2);
  });
}
export function View_UserDashComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(16777216,(null as any),(null as any),1,'router-outlet',
      ([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
      i1.ɵdid(212992,(null as any),0,i2.RouterOutlet,[i2.ChildrenOutletContexts,i1.ViewContainerRef,
          i1.ComponentFactoryResolver,[8,(null as any)],i1.ChangeDetectorRef],(null as any),
          (null as any)),(_l()(),i1.ɵted((null as any),['\n'])),(_l()(),i1.ɵeld(0,
          (null as any),(null as any),13,'div',[['class','body']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n    '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),10,'div',[['class',
          'container']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n\n        '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),4,'div',[['class','flex-container']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n            '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'h4',
          [['class','flex-item pageTitle']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['You\'re logged in'])),
      (_l()(),i1.ɵted((null as any),['\n        '])),(_l()(),i1.ɵted((null as any),
          ['\n\n\n\n\n        '])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),
          1,(null as any),View_UserDashComponent_1)),i1.ɵdid(16384,(null as any),0,
          i3.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),
      (_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵted((null as any),['\n']))],
      (_ck,_v) => {
        var _co:i4.UserDashComponent = _v.component;
        _ck(_v,1,0);
        const currVal_0:any = _co.currentUser;
        _ck(_v,14,0,currVal_0);
      },(null as any));
}
export function View_UserDashComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'app-user-dash',
      ([] as any[]),(null as any),(null as any),(null as any),View_UserDashComponent_0,
      RenderType_UserDashComponent)),i1.ɵdid(114688,(null as any),0,i4.UserDashComponent,
      [i5.UserService,i2.ActivatedRoute],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const UserDashComponentNgFactory:i1.ComponentFactory<i4.UserDashComponent> = i1.ɵccf('app-user-dash',
    i4.UserDashComponent,View_UserDashComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2Nvbmsvd2RpLXdvcmsvaG9tZXdvcmsvY29sb3JzL3NyYy9hcHAvdXNlci91c2VyLWRhc2gvdXNlci1kYXNoLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9jb25rL3dkaS13b3JrL2hvbWV3b3JrL2NvbG9ycy9zcmMvYXBwL3VzZXIvdXNlci1kYXNoL3VzZXItZGFzaC5jb21wb25lbnQudHMiLCJuZzovLy9Vc2Vycy9jb25rL3dkaS13b3JrL2hvbWV3b3JrL2NvbG9ycy9zcmMvYXBwL3VzZXIvdXNlci1kYXNoL3VzZXItZGFzaC5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL2Nvbmsvd2RpLXdvcmsvaG9tZXdvcmsvY29sb3JzL3NyYy9hcHAvdXNlci91c2VyLWRhc2gvdXNlci1kYXNoLmNvbXBvbmVudC50cy5Vc2VyRGFzaENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbjxkaXYgY2xhc3M9XCJib2R5XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzPVwiZmxleC1pdGVtIHBhZ2VUaXRsZVwiPllvdSdyZSBsb2dnZWQgaW48L2g0PlxuICAgICAgICA8L2Rpdj5cblxuXG5cblxuICAgICAgICA8ZGl2ICpuZ0lmPVwiY3VycmVudFVzZXJcIiBjbGFzcz1cImRhc2hfY29udGVudF9jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMz57e2N1cnJlbnRVc2VyLmZpcnN0TmFtZX19J3MgcHJvZmlsZTwvaDM+XG4gICAgICAgICAgICA8ZGl2IGlkPVwic2F2ZWRfcGFsZXR0ZXNcIj5cbiAgICAgICAgICAgICAgICA8aDM+VmlldyBZb3VyIFNhdmVkIFBhbGV0dGVzPC9oMz5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cD48YSBbcm91dGVyTGlua109XCJbJy9sb2dpbiddXCI+TG9nb3V0PC9hPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4iLCI8YXBwLXVzZXItZGFzaD48L2FwcC11c2VyLWRhc2g+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ1dRO01BQUE7TUFBQSxnQkFBd0QsbURBQ3BEO01BQUE7TUFBQSw0Q0FBSTtNQUFBLGlCQUF3QyxtREFDNUM7YUFBQTtVQUFBLDBEQUF5QjtNQUFBLHlCQUNyQjtNQUFBO01BQUksNkRBQTZCO1VBQUEsdUJBRS9CO01BQ047VUFBQSwwREFBRztVQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7a0JBQUE7Y0FBQTtZQUFBO1lBQUE7VUFBQSx1Q0FBQTtVQUFBO1VBQUEsc0JBQUcsSUFBMEIsMkNBQWM7aUJBQUE7SUFBeEM7SUFBSCxZQUFHLFNBQUg7OztJQUxDO0lBQUE7SUFLRDtJQUFBO0lBQUEsWUFBQSxtQkFBQTs7OztvQkFqQmY7TUFBQTthQUFBO3NDQUFBO1VBQUEsZUFBK0IsdUNBQy9CO1VBQUE7VUFBQSw0Q0FBa0I7VUFBQSxhQUNkO1VBQUE7TUFBdUIsaURBRW5CO1VBQUE7VUFBQSw0Q0FBNEI7VUFBQSxxQkFDeEI7VUFBQTtVQUFBLDhCQUFnQztNQUFxQiwrQ0FDbkQ7VUFBQSx5QkFLTjtVQUFBLGtEQUFBO2tCQUFBO01BT00sMkNBQ0o7OztRQW5CVjtRQVdhO1FBQUwsWUFBSyxTQUFMOzs7O29CQ1hSO01BQUE7a0NBQUEsVUFBQTtNQUFBO0lBQUE7Ozs7In0=