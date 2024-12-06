import { Component } from '@angular/core';
import { Image } from './image';

@Component({
  selector: 'app-populate-image',
  templateUrl: './populate-image.component.html',
  styleUrl: './populate-image.component.scss'
})
export class PopulateImageComponent {
  selectedImage: Image;
  selectImage(image: Image) {
    this.selectedImage = image;
  }
}


