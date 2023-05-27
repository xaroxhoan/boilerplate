import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import CoreModule from '../core.module';

@Injectable({
  providedIn: CoreModule,
})
export default class TestService {
  private http = inject(HttpClient);

  list() {
    return this.http.get('/api/v1/list');
  }
}
