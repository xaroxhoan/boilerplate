import { inject, makeStateKey, StateKey } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import TestService from 'src/app/core/http/test.service';
import { BaseResolver } from 'src/app/core/resolvers/base.resolver';

const dashboardResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  _state: RouterStateSnapshot
) => {
  const http = inject(TestService);
  const TEST_KEY: StateKey<any> = makeStateKey('TEST_KEY');

  const data = http.list();

  return inject(BaseResolver).handleStateTransfer(TEST_KEY, data);
};
export default dashboardResolver;
