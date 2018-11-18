
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core'
import { environment } from '../environments/environment';


export function bind_module(mdl) {
      
    return platformBrowserDynamic().bootstrapModule(mdl);
}

export function boostrap(appModule) {
    if (document.readyState === 'complete') {
        bind_module(appModule);

    } else {
        document.addEventListener('DOMContentLoaded', function () {           
            bind_module(appModule);           
        });
    }
}
