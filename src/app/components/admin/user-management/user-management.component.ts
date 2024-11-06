import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatIcon],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})

export class UserManagementComponent implements AfterViewInit{
  
  // phân trang
  users: User[] = [];
  paginatedUsers: User[] = [];
  pageSize = 6;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.updatePaginatedUsers(0);
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(() => {
      this.updatePaginatedUsers(this.paginator.pageIndex);
    });
  }

  updatePaginatedUsers(pageIndex: number): void {
    const startIndex = pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedUsers = this.users.slice(startIndex, endIndex);
  }

  // backend
  editUser(userId: number): void {
    console.log('Editing user with ID:', userId);
  }

  lockUser(userId: string) {
    const userIdAsNumber = Number(userId); 
    const user = this.users.find(u => u.id === userIdAsNumber);
    if (user) {
      user.status = 'LOCK'; 
    }
  }
}
