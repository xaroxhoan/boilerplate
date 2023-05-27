import {
  ApplicationConfig,
  importProvidersFrom,
  NgZone,
  ɵNoopNgZone,
} from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import CoreModule from './core/core.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    importProvidersFrom(CoreModule),
    provideRouter(routes, withComponentInputBinding()),
  ],
};
