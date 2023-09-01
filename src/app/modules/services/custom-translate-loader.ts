import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { map, delay, tap } from 'rxjs/operators';
import { TranslationService } from './translation.service';

export const MY_MODULE = new InjectionToken<string>('myString');


@Injectable()
export class CustomTranslateLoader implements TranslateLoader {

    constructor(private http: HttpClient, @Inject('MY_MODULE') public module: any, private translationService: TranslationService) { }

    getTranslation(lang: string) {
        console.log("module", this.module);
        let path = null;
        if (this.module === 'ROOT') {
            path = `./assets/i18n/${lang}.json`
        }
        else {
            path = `./assets/i18n/api-${lang}.json`;
        }
        return this.http.get(path)

            .pipe(
                delay(1000),
                map((response) => {
                    return response;
                }),
                tap((response) => {
                    if (this.module === 'ROOT') {
                        this.translationService.rootTranslations = response;
                    }
                })

            );
    }
}