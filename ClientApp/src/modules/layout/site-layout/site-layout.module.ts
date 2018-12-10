import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { SiteLayoutComponent } from './site-layout.component';

@NgModule({
    declarations: [SiteHeaderComponent, SiteFooterComponent, SiteLayoutComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [],
    exports: [SiteLayoutComponent]
})
export class SiteLayoutModule { }
