import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../app.component';
@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
 @Input() selectedImage: Image;
  constructor() { }

  ngOnInit() {
  }

}
