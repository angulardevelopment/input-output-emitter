import { Component } from '@angular/core';
import { Image } from './Image';
import { ImageComponent } from '../image-list/image/image.component';
import { ImageListComponent } from '../image-list/image-list.component';
import { ImageDetailComponent } from '../image-detail/image-detail.component';

@Component({
  selector: 'app-populate-image',
  templateUrl: './populate-image.component.html',
  styleUrl: './populate-image.component.scss',
  standalone: true,
  imports: [ImageListComponent, ImageDetailComponent] // If you need to import ImageComponent here, uncomment
})
export class PopulateImageComponent {
  selectedImage: Image;
  selectImage(image: Image) {
    this.selectedImage = image;
  }
}


