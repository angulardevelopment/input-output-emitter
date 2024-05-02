import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageComponent } from './image-list/image/image.component';
import { HelloComponent } from './hello/hello.component';
import { ParentComponent } from './parent/parent.component';
import { TestService } from './services/test.service';
import { APP_BOOTSTRAP_LISTENER, APP_INITIALIZER } from "@angular/core";
import { BasicService } from './services/basic.service';
import { AvoidNgonchangeComponent } from './input-Observable/avoid-ngonchange/avoid-ngonchange.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDetailComponent,
    ImageDetailComponent, ImageListComponent, ImageComponent, HelloComponent, ParentComponent,
    AvoidNgonchangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TestService, BasicService,

    // { provide: APP_INITIALIZER, useFactory: runSettingsOnInit },

  //   { provide: APP_BOOTSTRAP_LISTENER, multi: true,
  // useExisting: runOnBootstrap }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


function runSettingsOnInit() {
  // …
  }

  function runOnBootstrap() {
  // …
  }
