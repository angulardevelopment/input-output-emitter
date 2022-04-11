import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  companyData = "test";
  constructor() { }

  ngOnInit(): void {
  }

  closePop(event){
    console.log('value from child component', event);
    }

}
