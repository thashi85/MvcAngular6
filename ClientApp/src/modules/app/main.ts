import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { Init } from '../Init'

//set url from web config
Init()

 if (document.readyState === 'complete') {
     platformBrowserDynamic().bootstrapModule(AppModule);

} else {
     document.addEventListener('DOMContentLoaded', function () {
        return platformBrowserDynamic().bootstrapModule(AppModule);
     });
}

