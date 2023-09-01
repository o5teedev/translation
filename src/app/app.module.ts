import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TranslateModule , TranslateLoader} from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {TranslateService} from '@ngx-translate/core';
import { MY_MODULE, CustomTranslateLoader } from './modules/services/custom-translate-loader';
import { TranslationService } from './modules/services/translation.service';

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json')
//   ;
// }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule , 
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useClass: CustomTranslateLoader ,
          deps : [HttpClient , MY_MODULE , TranslationService]
          
          
      },
      isolate: false 
  })
  ],
  providers: [
    { provide: MY_MODULE, useValue: 'ROOT' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 


  constructor(private translateService: TranslateService) {
    // Load default translations with the default language (e.g., 'en')
    this.translateService.setDefaultLang('en');
    this.translateService.use('en'); // Set the initial language
  }
  
}
