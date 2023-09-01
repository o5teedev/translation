import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureARoutingModule } from './feature-a-routing.module';
import { FeatureAComponent } from './components/feature-a/feature-a.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule , HttpClient} from '@angular/common/http';
import { TranslateService , MissingTranslationHandler  } from '@ngx-translate/core';
import { CustomTranslateLoader, MY_MODULE } from '../services/custom-translate-loader';
import { CustomMissingTranslationHandler } from '../services/custom-missing-translation-handler';
import { TranslationService } from '../services/translation.service';

// export function HttpLoaderFactory(http: HttpClient) {
//   console.log("HttpLoaderFactory" )
//   return new TranslateHttpLoader(http, './assets/i18n/api-', '.json').pipe(delay(10000));
// }




@NgModule({
  declarations: [
    FeatureAComponent
  ],
  imports: [
    CommonModule,
    FeatureARoutingModule,
    HttpClientModule,
    TranslateModule
      .forChild({
        defaultLanguage: 'en',
        loader: {provide: TranslateLoader, useClass: CustomTranslateLoader  ,
           deps : [HttpClient , MY_MODULE , TranslationService]},
        // compiler: {provide: TranslateCompiler, useClass: CustomCompiler},
        // parser: {provide: TranslateParser, useClass: CustomParser},
         missingTranslationHandler: {provide: MissingTranslationHandler, useClass: CustomMissingTranslationHandler},
        isolate : true     
      })
  ],
  providers : [
    { provide: MY_MODULE, useValue: 'FEATURE_A' },
  ]
})
export class FeatureAModule {
  constructor(translate: TranslateService) {
    console.log("FeatureAModule constructor")
    translate.setDefaultLang("en")
    translate.use("en");
   
  }
}
