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
  constructor(
    private title: Title,
    private location: Location,
    @Inject(DOCUMENT) private _doc: Document
  ) {
    console.log(_doc);
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
