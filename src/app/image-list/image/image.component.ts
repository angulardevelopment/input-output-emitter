import { Component, OnInit, Input } from '@angular/core';
import {Image} from '../../populate-image/Image';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  standalone: true // This component is standalone
})
export class ImageComponent implements OnInit {
 @Input() image: Image;
  constructor() { }

  ngOnInit() {
  }

}
