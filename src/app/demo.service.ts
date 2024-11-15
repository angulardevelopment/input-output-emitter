import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { }
}

// With DI
@Injectable()
class MyService {
private readonly depA: MyDep = inject(MyDep);
}

class MyServiceWithoutDI
{
  private readonly depA: MyDep;
  
  constructor() {
    this.depA = new MyDep();
  }
  
  }


  class MyDep{

  }