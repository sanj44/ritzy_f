import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { ProductAddComponent } from './product-add/index';
import { ProductListComponent } from './product-list/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'product-add', component: ProductAddComponent },
    { path: 'product-list', component: ProductListComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);