import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'John Michael',
      email: 'john.michael@example.com',
      username: 'johnm',
      password: 'password123',
      phone: '123-456-7890',
      status: 'ONLINE',
      createdOn: '23/04/18',
      avatar: 'assets/avatar1.jpg'
    },
    {
      id: 2,
      name: 'Alexa Liras',
      username: 'alexal',
      email: 'alexa.liras@example.com',
      password: 'password123',
      phone: '987-654-3210',
      status: 'OFFLINE',
      createdOn: '11/01/19',
      avatar: 'assets/avatar2.jpg'
    },
    {
        id: 3,
        name: 'Alexa Liras',
        username: 'alexal',
        email: 'alexa.liras@example.com',
        password: 'password123',
        phone: '987-654-3210',
        status: 'OFFLINE',
        createdOn: '11/01/19',
        avatar: 'assets/avatar2.jpg'
    },
  ];

  getUsers(): User[] {
    return this.users;
  }
}