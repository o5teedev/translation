import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { Injectable , Injector } from '@angular/core';

import { TranslationService } from './translation.service';


@Injectable({
    providedIn : "root"
})
export class CustomMissingTranslationHandler implements MissingTranslationHandler {
   
    translateService :any ; 
    constructor(private injector: Injector) {
        console.log("aaaaaaaaa")
        this.translateService  = this.injector.get(TranslationService);
       
      }

    handle(params: MissingTranslationHandlerParams) {
        
        // Return the translation from the root locale
        console.log("paramsparamsparams" , params ,  this.translateService ) 
        return this.resolve(params.key , this.translateService.rootTranslations);
    }


     resolve(path:string, obj:any) {
        return path.split('.').reduce(function(prev, curr) {
            return prev ? prev[curr] : null
        }, obj || self)
    }

}