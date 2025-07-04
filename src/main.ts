import { enableProdMode, PLATFORM_INITIALIZER } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { InitService, platformInitFactory } from './app/init.service';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/route.config';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic([
//   {
//     provide: PLATFORM_INITIALIZER,
//     useValue: platformInitFactory, // will be created
//     multi: true,
//     deps: [InitService] // will be created to see if it works
//   },
// ]).bootstrapModule(AppModule)
//   .catch(err => console.error(err));

bootstrapApplication(AppComponent, {
 providers: [
 provideRouter(routes),
//  provideAnimations(),
 ]
}).catch(err => console.error(err));