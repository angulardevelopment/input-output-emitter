import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  constructor() { }

  initialize() {
    console.log('Initialization logic executed');
    // Add your initialization logic here, e.g., fetching configuration
  }
}
