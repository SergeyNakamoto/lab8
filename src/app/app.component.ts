import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StarComponent } from './components/star/star.component';
import { HomeComponent } from './components/home/home.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ProductlistComponent,StarComponent, FontAwesomeModule,HomeComponent, ProductdetailComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab04';
}
