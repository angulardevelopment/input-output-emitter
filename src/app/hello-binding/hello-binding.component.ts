import { Component, Host, Injectable, Optional, VERSION } from '@angular/core';

@Injectable({
  providedIn: 'root', // Change this from 'root' to 'any'
})
export class NaturalService {
  constructor() {}
}

@Component({
  selector: 'app-hello-binding',
  templateUrl: './hello-binding.component.html',
  styleUrl: './hello-binding.component.scss',
  providers: [{ provide: NaturalService, useValue: { emoji: '🐋' } }] // Use the actual whale emoji here - a_whale_emoji - replaced `'a_whale_emoji'` with the actual whale emoji (`'🐋'`) for clarity.
})
export class HelloBindingComponent {
  name = 'Angular ' + VERSION.major;
  // Replace @Skip() with @Host() inside the constructor.
  // By using `@Host()`, the `ModifierComponent` can access the `NaturalService` from its host component, allowing you to utilize the provided emoji value correctly. If `NaturalService` is defined at a higher level in the component tree, this setup ensures it will be injected properly.
  constructor(@Host() @Optional() public nature?: NaturalService) {
    if (nature) {
      console.log(nature.emoji); // This should now log the whale emoji
    }
  }
}

