import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserManagementComponent } from './components/admin/user-management/user-management.component';
import { AreaManagementComponent } from './components/admin/area-management/area-management.component';
import { RestaurantManagementComponent } from './components/admin/restaurant-management/restaurant-management.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { 
        path: 'admin', 
        component: AdminComponent, 
        children:[
            { path: 'admin/user-management', component: UserManagementComponent },
            { path: 'admin/area-management', component: AreaManagementComponent },
            { path: 'admin/restaurant-management', component: RestaurantManagementComponent },
            { path: 'admin/dashboard', component: DashboardComponent },
            { path: '**', redirectTo: 'admin/dashboard' }, 
        ]}
];
