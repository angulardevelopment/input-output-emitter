import { inject, Injectable } from '@angular/core';

// By changing the `providedIn` property of your service to `'any'`, you ensure that each lazy-loaded component that accesses the service gets its own instance, allowing for better encapsulation and management of service state.
@Injectable({
  providedIn: 'root', // Change this from 'root' to 'any'
})
export class DemoService {
  constructor() {}
}

// With DI
@Injectable()
class MyService {
  private readonly depA: MyDep = inject(MyDep);
}

class MyServiceWithoutDI {
  private readonly depA: MyDep;

  constructor() {
    this.depA = new MyDep();
  }
}

class MyDep {}
