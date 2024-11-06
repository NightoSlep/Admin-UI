export interface User {
    id: number;
    name: string;
    email: string;
    username: string;
    password: string;
    phone: string;
    status: 'ONLINE' | 'OFFLINE' | 'LOCK';
    createdOn: string;
    avatar: string;
  }