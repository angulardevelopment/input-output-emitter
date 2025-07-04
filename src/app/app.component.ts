import { Component, Inject, Optional, VERSION } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT, Location } from '@angular/common';
import { Router, Routes } from '@angular/router';
import { Content } from './content/content';
import { Navigation } from './navigation/navigation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [Content, Navigation],
  // interpolation: ['((', '))'],
})
export class AppComponent {
  constructor(
    private title: Title,
    private location: Location,
    @Inject(DOCUMENT) private _doc: Document,
    private router: Router
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

  routes: Routes = [];

  ngAfterViewInit(): void {
    // Fetch the routes from the router
    this.routes = this.router.config;
    console.log(this.routes);
  }

}
