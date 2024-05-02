import { Injectable } from '@angular/core';

@Injectable()
export class BasicService {

// Logger service
  log(msg: any)   { console.log(msg); }
  error(msg: any) { console.error(msg); }
  warn(msg: any)  { console.warn(msg); }


}