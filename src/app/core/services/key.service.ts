import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { KeyModel } from '../models/key-model';
import { KEYS } from '../mock/mock-keys';

@Injectable({
  providedIn: 'root'
})
export class KeyService {

  constructor() {
  }

  getKeys(): Observable<KeyModel[]> {
    return of(KEYS);
  }

  getKey(keyId: Number): Observable<KeyModel> {
    return of(KEYS.find(key => key.id === keyId));
  }

}
