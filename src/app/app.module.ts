import { BrowserModule } from '@angular/platform-browser';
import {
  ApplicationRef,
  createEnvironmentInjector,
  CUSTOM_ELEMENTS_SCHEMA,
  ENVIRONMENT_INITIALIZER,
  NgModule,
  Inject,
} from '@angular/core';
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
import { APP_BOOTSTRAP_LISTENER, APP_INITIALIZER } from '@angular/core';
import { BasicService } from './services/basic.service';
import { AvoidNgonchangeComponent } from './input-Observable/avoid-ngonchange/avoid-ngonchange.component';
import { bootstrapFactory, InitService } from './init.service';
import { environment } from 'src/environments/environment';
import { PopulateImageComponent } from './populate-image/populate-image.component';
import { HelloBindingComponent } from './hello-binding/hello-binding.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        OAuthModule.forRoot(),
        AppComponent,
        HeroComponent,
        HeroDetailComponent,
        ImageDetailComponent,
        ImageListComponent,
        ImageComponent,
        HelloComponent,
        ParentComponent,
        AvoidNgonchangeComponent,
        PopulateImageComponent,
        HelloBindingComponent,
    ],
    providers: [
        TestService,
        BasicService,
        // {
        //   provide: APP_INITIALIZER,
        //   useFactory: initFactory, // will be created
        //   multi: true,
        //   deps: [InitService], // will be created to see if it works
        // },
        { provide: APP_INITIALIZER, useFactory: runSettingsOnInit },
        {
            provide: APP_BOOTSTRAP_LISTENER,
            multi: true,
            useFactory: bootstrapFactory, // will be created
            deps: [InitService],
        },
        {
            // ENVIRONMENT_INITIALIZER token allows you to define initialization logic that runs when the injector is created, making it possible to perform necessary setup before your application starts.
            provide: ENVIRONMENT_INITIALIZER,
            useFactory: (initService: InitService) => () => initService.initialize(),
            deps: [InitService],
            multi: true,
        },
    ],
    // bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor(private appRef: ApplicationRef) {
    const parentInjector = Inject(InitService); // existing environment injector

    // This function is used to create a new environment injector that can be used for dependency injection in your Angular application.
    // const injector = createEnvironmentInjector([
    //   {
    //     provide: ENVIRONMENT_INITIALIZER,
    //     useFactory: (initService: InitService) => () => initService.initialize(),
    //     deps: [InitService],
    //     multi: true,
    //   },
    // ], appRef);

    // // Run the injector to trigger initialization logic
    // injector.get(ENVIRONMENT_INITIALIZER).forEach((initializer) => initializer());
  }
}

function runSettingsOnInit() {
  console.log('runSettingsOnInit');
  // …
}

function runOnBootstrap() {
  console.log('runOnBootstrap');

  // …
}
