import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import storageHelper from './helpers/storage.helper';

export const authGuardGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  if (storageHelper.getValueWithKey('user')) {
    return true;
  } else {
    return false;
  }
};
