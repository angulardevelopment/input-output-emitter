// import { ImageService } from './../image.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ImageService } from '../image.service';
import {Image} from '../app.component';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css'],
  // providers: [ImageService]
})
export class ImageListComponent  {

  images: Image[] = [];
  selectedImage: Image;
  @Output() selectedEvent: EventEmitter<Image> = new EventEmitter<Image>();

  constructor(public imageService?: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

  onSelect(image: Image) {
    this.selectedEvent.emit(image);
  }

}
