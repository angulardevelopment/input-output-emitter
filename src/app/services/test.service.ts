import { Inject, Injectable } from '@angular/core';
import { BasicService } from './basic.service';

@Injectable()
export class TestService {

  constructor(private basic: BasicService) {
    console.log(basic, 'basic')
   }

   demo(){
     return 'text';
   }

}

