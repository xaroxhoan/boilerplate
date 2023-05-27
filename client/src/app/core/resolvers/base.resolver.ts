import {
  inject,
  Injectable,
  PLATFORM_ID,
  StateKey,
  TransferState,
} from '@angular/core';
import { EMPTY, Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { isPlatformServer } from '@angular/common';
import CoreModule from '../core.module';

@Injectable({
  providedIn: CoreModule,
})
export class BaseResolver {
  private platformId: Object = inject(PLATFORM_ID);
  constructor(private ts: TransferState) {}

  handleStateTransfer<T>(
    key: StateKey<any>,
    stream: Observable<T>
  ): Observable<T> {
    if (this.ts.hasKey(key)) {
      const data = this.ts.get(key, null);
      this.ts.remove(key);
      return of(data);
    } else {
      return stream.pipe(
        tap((x) => isPlatformServer(this.platformId) && this.ts.set(key, x)),
        catchError<any, any>(() => {
          return of(false);
        })
      );
    }
  }
}
