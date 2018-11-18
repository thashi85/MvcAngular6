import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'customer'
    },
    {
        path: 'customer',       
        component: CustomerComponent
    },
    {
        path: 'orders',       
        loadChildren: 'src/modules/lazy-load/order/order.module#OrderModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class LazyLoadRoutingModule { }
