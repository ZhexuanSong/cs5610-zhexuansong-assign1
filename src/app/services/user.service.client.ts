import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

import { User } from '../models/user.model.client';

@Injectable()
export class UserService {

    constructor() { }

    users: User[] = [
        { _id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" },
        { _id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },
        { _id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" },
        { _id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi" }
    ];

    api = {
        'createUser': this.createUser,
        'findUserById': this.findUserById,
        'findUserByUsername': this.findUserByUsername,
        'findUserByCredentials': this.findUserByCredentials,
        'updateUser': this.updateUser,
        'deleteUser': this.deleteUser
    };

    createUser(user: any) {
        user._id = Math.random().toString();
        this.users.push(user);
        console.log(this.users);
    }

    findUserById(userId: String) {
        for (let x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                return this.users[x];
            }
        }
    }

    findUserByUsername(username: String) {
        for (let x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username) {
                return this.users[x];
            }
        }
    }

    findUserByCredentials(username: String, password: String) {
        for (let x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username
                && this.users[x].password === password) {
                return this.users[x];
            }
        }
    }

    updateUser(userId: String, user: any) {
        for (let x = 0; x < this.users.length; x++) {
            if (this.users[x]._id == userId) {
                this.users[x].firstName = user.firstName;
                this.users[x].lastName = user.lastName;
            }
        }
    }

    deleteUser(userId: String) {
        for (let x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                this.users.splice(x, 1);
            }
        }
    }
}
