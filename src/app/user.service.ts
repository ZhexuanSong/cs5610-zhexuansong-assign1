import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {User} from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
  users= [

    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" },

    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },

    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" },

    {_id: "456", username: "jan", password: "jan", firstName: "Jose", lastName: "Annunzi" }

  ]
  api = {
    'createUser' : this.createUser,
    'findUserById' : this.findUserById
  }
  createUser(user) {
    var lastId = this.users[this.users.length-1]._id;
    user._id = (+(lastId)+1).toString();
    this.users.push(user);
    return user._id;
  }

  findUserById(userId) {
    for (var user of this.users)  {
      if (user._id === userId) {
        return user;
      }
    }
    return null;
  }

  findUserByUserName(userName) {
    for (var user of this.users)  {
      if (user.username === userName) {
        return user;
      }
    }
    return null;

  }
  findUserByCredentials(username, password){
    for (var user of this.users)  {
      if (user.username === username && user.password === password) {
        return user;
      }
    }
    return null;

  }

  updateUser(userId, user){
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === userId) {
        this.users[i] = user;
        return;
      }
    }

  }
  deleteUser(userId){
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === userId) {
        this.users.splice(i,1);
        return;
      }
    }
  }
  

}
