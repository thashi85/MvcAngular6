import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';

import { CustomerService} from 'src/modules/services/customer.service'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
    testForm = new FormGroup({
        Index: new FormControl()
       
    }); 
    sub: any;
    constructor(private _customerService:CustomerService) { }

    ngOnInit()
    {
       this.testForm.valueChanges
            .pipe(map((val) => {
                console.log(val.Index);
                
                return val.Index as string 
            }),
                debounceTime(500),
                distinctUntilChanged()
        ).subscribe(val => {
                console.log(val);
                if (this.sub)
                    this.sub.unsubscribe();
                this.sub=this._customerService.getStrings(val).subscribe((res) => { console.log(res); });
            });
    }

    onFormSubmit() { }
}
