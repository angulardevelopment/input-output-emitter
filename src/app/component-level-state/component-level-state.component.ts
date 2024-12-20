import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { RxLet } from '@rx-angular/template/let';
import { RxFor } from '@rx-angular/template/for';

@Component({
  selector: 'app-component-level-state',
  standalone: true,
  imports: [RxLet, RxFor],
  templateUrl: './component-level-state.component.html',
  styleUrl: './component-level-state.component.scss',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ComponentLevelStateComponent {
  userData = signal({ name: 'Alice', email: 'alice@example.com' });
  showContent = signal(true);
  items = signal(['apple', 'banana', 'orange']);
  state$ = {
    subscribe: ({ next }) => {
        next(42);
        
        return {
            unsubscribe: () => {}
        }
    }
}


}
