import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, createEnvironmentInjector, CUSTOM_ELEMENTS_SCHEMA, ENVIRONMENT_INITIALIZER, NgModule, Inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
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
import { InitService } from './init.service';
import { environment } from 'src/environments/environment';

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
    FormsModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [TestService, BasicService,
    { provide: APP_INITIALIZER, useFactory: runSettingsOnInit },
    { provide: APP_BOOTSTRAP_LISTENER, multi: true,
  useExisting: runOnBootstrap }
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private appRef: ApplicationRef) {
    // const parentInjector = Inject(InitService); // existing environment injector

    // const injector = createEnvironmentInjector([
    //   {
    //     provide: ENVIRONMENT_INITIALIZER,
    //     useFactory: (initService: InitService) => () => initService.initialize(),
    //     deps: [InitService],
    //     multi: true,
    //   },
    // ], parentInjector);

    // // // Run the injector to trigger initialization logic
    // injector.get(ENVIRONMENT_INITIALIZER).forEach((initializer) => initializer());
  }
 }


function runSettingsOnInit() {
  // …
  }

  function runOnBootstrap() {
  // …
  }
