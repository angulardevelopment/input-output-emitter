import { Component, Inject, Optional } from '@angular/core';
import { API_URL } from '../services/app.config';
import { BasicService } from '../services/basic.service';
import { apiService, DemoService } from '../services/demo.service';
import { Demo1Service } from '../services/demo1.service';
import { GooglemapsService } from '../services/googlemaps.service';
import { NewproductService } from '../services/newproduct.service';
import { ProductService } from '../services/product.service';
import { TestService } from '../services/test.service';
import { APP_CONFIG, Test2Service } from '../services/test2.service';
import {
  UserconfigService,
  USER_CONFIG_TOKEN,
} from '../services/userconfig.service';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT, Location } from '@angular/common';

@Component({
  selector: 'app-state-management',
  templateUrl: './state-management.component.html',
  styleUrl: './state-management.component.scss',
  providers: [
    // provide this token to the service through the component’s providers array:
    { provide: 'elementId', useValue: 'container' },

    { provide: 'add', useClass: DemoService },

    { provide: Demo1Service, useClass: GooglemapsService },
    // Register the token in the providers array.

    { provide: API_URL, useValue: 'http://SomeEndPoint.com/api' },

    { provide: 'APP_CONFIG', useValue: APP_CONFIG },

    {
      provide: 'FUNC',
      useValue: () => {
        return 'hello';
      },
    },

    // Optionally configure additional custom headers
    {
      provide: 'REQUEST_SERVICE_ADDITIONAL_HEADERS',
      useValue: {
        'x-custom-header': 'value',
      },
    },

    { provide: BasicService, useClass: BasicService },
    { provide: 'USE_FAKE', useValue: true },
    {
      provide: TestService,
      useFactory: (USE_FAKE, BasicService) =>
        USE_FAKE ? new Test2Service() : new TestService(BasicService),
      deps: ['USE_FAKE', BasicService],
    },
    { provide: UserconfigService, useClass: UserconfigService },
    {
      provide: USER_CONFIG_TOKEN,
      useFactory: (config: UserconfigService) =>
        config.language === 'jp' ? '🇯🇵' : '🏁',
      deps: [UserconfigService],
    },
    // {
    //   provide: ServicePromiseClient,
    //   useFactory: DemoInterceptor => {
    //     return new ServicePromiseClient(SERVICE_ADDRESS, {}, {
    //       unaryInterceptors: [
    //         DemoInterceptor
    //       ]
    //     }),
    //   },
    //   deps: [TrackingInterceptor],
    // },
    { provide: ProductService, useExisting: NewproductService },
    { provide: NewproductService, useClass: NewproductService },
  ],
})
export class StateManagementComponent {
    // new way dont use Inject
  // https://angular.io/errors/NG0203
  // private readonly myToken = inject(API_URL); // Typed as a string
  constructor(
      // here We transform the elementId parameter to an injection token
    @Inject('elementId') private test: TestService,
  
    @Inject('add') private useService: apiService,
    private googleMapsService: Demo1Service,
    @Optional() private test2: Test2Service,
    private logger: BasicService,
    
    // It is then injected using the @Inject in the constructor of the service/component.
    @Inject(API_URL) private apiURL: string,

    @Inject('APP_CONFIG') public appConfig: any,
    @Inject('FUNC') public someFunc: any,
    @Inject('USE_FAKE') public someFunc1: any,
    @Inject(USER_CONFIG_TOKEN) private config: UserconfigService,
    public Product: ProductService,
    meta: Meta,
    
  ) {
    // console.log(this.test, this.googleMapsService, this.test2, 'sd1');
    // this.logger.log(`Fetched  heroes.`);
    console.log(apiURL, 'apiURL');
    console.log(this.useService.apiUrl(), 'useService');
    console.log(this.appConfig, 'appConfig');
    // console.log(someFunc());
    // console.log(this.someFunc1);
    console.log(config, 'USER_CONFIG_TOKEN');
    // console.log(this.Product.old());
    meta.addTag({
      name: 'description',
      content: 'sample content of meta service',
    });
    const authorName = meta.getTag("name='author'");
    // console.log(authorName);
    meta.updateTag({
      name: 'twitter:description',
      content: 'sample description',
    });
    meta.removeTag("name='author'");
  }
}
