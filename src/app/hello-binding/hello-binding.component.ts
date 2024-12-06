import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-hello-binding',
  templateUrl: './hello-binding.component.html',
  styleUrl: './hello-binding.component.scss'
})
export class HelloBindingComponent {
  name = 'Angular ' + VERSION.major;
}
