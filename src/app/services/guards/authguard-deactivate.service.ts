import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
export interface IDeactive {
  canExit(): boolean | Promise<boolean> | Observable<boolean>;
}
export class AuthguardDeactivateService implements CanDeactivate<IDeactive> {
  constructor() {}
  canDeactivate(
    component: IDeactive,
    route: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): boolean | Promise<boolean> | Observable<boolean> {
    return component.canExit();
  }
}
