import { Routes,RouterModule } from '@angular/router';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { HomeComponent } from './components/home/home.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';    

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductlistComponent },
    { path: 'product/:id', component: ProductdetailComponent}
];
