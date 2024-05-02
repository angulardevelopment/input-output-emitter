import { Injectable } from '@angular/core';

@Injectable()
export class DemoService implements apiService {
  constructor() {}

  apiUrl() {
    return 'url';
  }

  add(id) {
    return id;
  }
}

export interface apiService {
  //define the API
  apiUrl();
  add(track): number;
}
