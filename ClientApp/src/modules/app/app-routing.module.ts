import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { TestComponent} from './test/test.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: TestComponent
        //redirectTo: 'list'
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash:true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
