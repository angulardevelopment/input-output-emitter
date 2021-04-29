import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'emitter-usage';
  selectedImage: Image;

  selectImage(image: Image) {
    this.selectedImage = image;
  }
}


export class Image {
  constructor(public id:string, public title:string,
      public description:string, public thumbnail:string, public imageLink:string) {
  }
}
