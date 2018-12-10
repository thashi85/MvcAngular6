import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';

//import { AppLayoutComponent } from '../layout/app-layout/app-layout.component';
import { SiteLayoutComponent } from '../layout/site-layout/site-layout.component';
import { SiteLayoutModule } from '../layout/site-layout/site-layout.module';
const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'customer'
    },
    {
        path: 'customer',
        component: SiteLayoutComponent,
        children: [
            { path: '', component: CustomerComponent, pathMatch: 'full' },
        ],
    },
    {
        path: 'orders',   
        component: SiteLayoutComponent,    
        loadChildren: 'src/modules/lazy-load/order/order.module#OrderModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash:true}), SiteLayoutModule],
    exports: [RouterModule]
})
export class LazyLoadRoutingModule { }
