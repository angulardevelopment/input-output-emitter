import { Component, OnInit, Input } from '@angular/core';
import {Image} from '../../populate-image/image';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
 @Input() image: Image;
  constructor() { }

  ngOnInit() {
  }

}
