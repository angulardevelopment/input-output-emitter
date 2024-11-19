import { Component, Inject, Optional, VERSION } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT, Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  interpolation: ['((', '))'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  selectedImage: Image;

  // new way dont use @Inject
  // https://angular.io/errors/NG0203
  // private readonly myToken = inject(API_URL); // Typed as a string

  constructor(    private title: Title,
    private location: Location,
    @Inject(DOCUMENT) private _doc: Document){
      console.log(_doc);
  }
  selectImage(image: Image) {
    this.selectedImage = image;
  }

  navigateTo(url) {
    this.location.go(url);
  }
  goBack() {
    this.location.back();
  }
  goForward() {
    this.location.forward();
  }
  ngOnInit() {
    this.title.setTitle('Login');
  }

  renderCanvasElement() {
    this._doc.getElementById('canvas');
  }
}

export class Image {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public thumbnail: string,
    public imageLink: string
  ) {}
}
