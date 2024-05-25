import { Attribute, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  @Input() company : string;
  @Output() close = new EventEmitter();
  @Input() name: string;
  constructor(@Attribute("type") public myVar: string) {
    console.log("Attributre =", myVar);}

  ngOnInit(): void {
  }




sendData(){
this.close.emit('data');
}

}
