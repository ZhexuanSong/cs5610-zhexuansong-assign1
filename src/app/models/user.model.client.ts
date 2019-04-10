import {Website} from './website.model.client';

export class User {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;

  constructor(username, password, firstName, lastName) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
  }

}
