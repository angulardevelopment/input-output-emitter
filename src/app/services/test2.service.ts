import { Injectable } from '@angular/core';

@Injectable()
export class Test2Service {

  constructor() { }

}

export const APP_CONFIG =  Object.freeze({
  serviceURL: 'www.serviceUrl.comapi',
  IsDevleomentMode: true
});

