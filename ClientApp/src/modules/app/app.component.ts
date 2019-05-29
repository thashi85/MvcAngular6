import { Component,ChangeDetectionStrategy } from '@angular/core';
import { Person} from '../models/person';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-root',
//    template: `<div>
//        <h3> {{ person.firstName }} {{ person.lastName }}</h3>
//    <button type = "button"(click) = "changeName()" > Change Name </button>
//    <button type = "button"(click) = "changeObject()" > Change Object </button>
//    </div><router-outlet></router-outlet>
//`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ClientApp';
    person: Person = new Person("Test", "LName");
    count: number = 0;
    changeName(): void
    {
        this.person.firstName = 'Test' + (++this.count)
    }
    changeObject(): void {
        this.person = new Person("Test" + (++this.count), "LName");
    }
    ngAfterContentInit() {
        this.person.firstName = 'Test' + (++this.count)
    }
}
