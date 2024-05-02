import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-avoid-ngonchange',
  templateUrl: './avoid-ngonchange.component.html',
  styleUrls: ['./avoid-ngonchange.component.css'],
})
export class AvoidNgonchangeComponent implements OnInit {
  @Input()
  set myValue(value: boolean) {
    this.myValue$.next(value);
  }
  readonly myValue$ = new BehaviorSubject<boolean>(false);
  constructor() {}

  ngOnInit() {}
}
