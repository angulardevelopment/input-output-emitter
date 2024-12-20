// import { ImageService } from './../image.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ImageService } from '../image.service';
import {Image} from '../populate-image/image'

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css'],
  // providers: [ImageService]
})
export class ImageListComponent implements OnInit {

  images: Image[] = [];
  selectedImage: Image;
  @Output() selectedEvent: EventEmitter<Image> = new EventEmitter<Image>();
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  // @Output(‘bpCreated’) blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  constructor(public imageService?: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

  onSelect(image: Image) {
    this.selectedEvent.emit(image);
  }

}
