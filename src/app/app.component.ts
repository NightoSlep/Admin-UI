import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './components/admin/user-management/user-management.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AppComponent, RouterModule, MatPaginatorModule, HeaderComponent, FooterComponent,
             AdminComponent, AdminHeaderComponent, UserManagementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'RestaurantReviewUI';

  isAdmin: boolean = false;
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
        // Kiểm tra URL hiện tại
        this.isAdmin = this.router.url.startsWith('/admin');
    });
  }
}
