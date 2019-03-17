import {User} from '../models/user.model.client';
import {Injectable} from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserService {

  constructor(private _http: HttpClient) {}
  baseUrl = environment.baseUrl;

  static getNewUser() {
    return new User(undefined, undefined, undefined, undefined, undefined, undefined);
  }

  createUser(user: User) {
    return this._http.post(this.baseUrl + '/api/user', user);
  }

  findUserByUsername(username: String) {
    return this._http.get(this.baseUrl + '/api/user?username=' + username);
  }

  findUserByCredentials(username: String, password: String) {
    return this._http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password);
  }

  findUserById(userId: String) {
    return this._http.get(this.baseUrl + '/api/user/' + userId);
  }


  updateUser(userId: String, user: User) {
    return this._http.put(this.baseUrl + '/api/user/' + userId, user);
  }

  deleteUser(userId: String) {
    return this._http.delete(this.baseUrl + '/api/user/' + userId);
  }
}
