import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureBRoutingModule } from './feature-b-routing.module';
import { FeatureBComponent } from './components/feature-b/feature-b.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule , HttpClient} from '@angular/common/http';
import { TranslateService , MissingTranslationHandler  } from '@ngx-translate/core';
import { CustomTranslateLoader, MY_MODULE } from '../services/custom-translate-loader';
import { TranslationService } from '../services/translation.service';
import { CustomMissingTranslationHandler } from '../services/custom-missing-translation-handler';

@NgModule({
  declarations: [
    FeatureBComponent
  ],
  imports: [
    CommonModule,
    FeatureBRoutingModule ,
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
  ] ,
  providers : [
    { provide: MY_MODULE, useValue: 'FEATURE_B' },
  ]
})
export class FeatureBModule { }
