import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  @Input() company : string;
  @Output() close = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }




sendData(){
this.close.emit('data');
}

}
