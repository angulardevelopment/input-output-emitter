import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../populate-image/Image';
@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css'],
  standalone: true
})
export class ImageDetailComponent implements OnInit {
 @Input() selectedImage: Image;
  constructor() { }

  ngOnInit() {
  }

}
