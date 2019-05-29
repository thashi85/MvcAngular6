import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Customer } from '../models/customer'
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class CustomerService {

    constructor(private _http: HttpClient) {
        console.log("****" + environment.ApiUrl);
    }

    getCustomers(): Observable<Customer[]> {
        return this._http.get(environment.ApiUrl + "api/v1/customers").pipe(map((response) => {
            var arr: Customer[] = [];
            (response as any[]).forEach((c, i) => arr.push({ Id: c.CustomerID, Name: c.Name, Ref: c.Reference }));
            return arr;
        }));
        //.map(r => <Customer[]>r.json());
    }
    getAssets() {
       
        return this._http.get("http://apidocumentation.optimosoftware.co.uk/OptimoWebAPI/Test/api/V4.1/assets?page.number=1&page.size=5&include=venue");
         
    }

    getStrings(id): Observable<string[]> {
        return this._http.get(environment.ApiUrl + "api/v1/customers/notes/" + id).pipe(map((response) =>
        {            
            return (response as string[]);
        }));
        
    }
}
