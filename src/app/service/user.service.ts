import { Injectable } from '@angular/core';
import {User} from '../model/user.model';

@Injectable()
export class UserService {

  users: User[] = [
    new User('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi', 'jannunzi@gmail.com'),
    new User('123', 'alice', 'alice', 'Alice', 'Wonder', 'alice@gmail.com'),
    new User('234', 'bob', 'bob', 'Bob', 'Marley', 'bob@gmail.com'),
    new User('345', 'charly', 'charly', 'Charly', 'Garcia', 'charly@gmail.com')
  ];

  constructor() { }


  // createUser(user) - adds the user parameter instance to the local users array
  // findUserById(userId) - returns the user in local users array whose _id matches the userId parameter
  // findUserByUsername(username) - returns the user in local users array whose username matches the parameter username
  // findUserByCredentials(username, password) - returns the user whose username and password match the username and password parameters
  // updateUser(userId, user) - updates the user in local users array whose _id matches the userId parameter
  // deleteUser(userId) - removes the user whose _id matches the userId parameter

  createUser(userName: string, password: string, firstName: string, lastName: string) {
    // actually this should done in the server side
    const id = Math.random().toString();
    const user = new User(id, userName, password, firstName, lastName, '');
    this.users.push(user);
    return user;
  }

  findUserById(userId: string): User {
    return this.users.find(function(user) {
      return user.id === userId;
    } );
  }

  findUserByUsername(userName: string) {
    return this.users.find(user =>  user.userName === userName);
  }

  findUserByCredentials(userName: string, password: string) {
    return this.users.find(user => user.userName === userName && user.password === password);
  }

  updateUser(userId: string, newUser: User) {
    const index = this.users.findIndex(user => user.id === userId);
    this.users[index] = newUser;
  }

  deleteUser(userId: string) {
    const index = this.users.findIndex(user => user.id === userId);
    this.users.splice(index, 1);
  }
}
