import { enableProdMode } from '@angular/core'
import { environment } from '../environments/environment';

export function Init()
{
    // enableProdMode();
    if (environment.ApiUrl.length == 0) {
        //debugger;
        environment.ApiUrl = window["apiUrl"];
        console.log("set environment variable api url" + environment.ApiUrl);
    }
}