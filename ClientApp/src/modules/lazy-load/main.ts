import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LazyLoadModule } from './lazy-load.module';
import { Init } from '../Init'

//set url from web configLazyLoadModule
Init()

platformBrowserDynamic().bootstrapModule(LazyLoadModule);
// if (document.readyState === 'complete') {
//     platformBrowserDynamic().bootstrapModule(LazyLoadModule);

//} else {
//     document.addEventListener('DOMContentLoaded', function () {
//         return platformBrowserDynamic().bootstrapModule(LazyLoadModule);
//     });
//}

