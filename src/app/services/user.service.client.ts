import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';
import {User} from '../models/user.model.client';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {SharedService} from './shared.service.client';
import {map} from 'rxjs/operators';
// import {RequestOptions, Request, RequestMethod} from '@angular/http';



// injecting service into module

@Injectable()
export class UserService {

  constructor(private _http: HttpClient, private sharedService: SharedService, private router: Router) {}
   baseUrl = environment.baseUrl;
  options = {withCredentials: false};

  // users: User[] = [
  //   {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
  //   {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
  //   {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia'},
  //   {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi'}
  // ];

  createUser(user: User) {
    return this._http.post(this.baseUrl + '/api/user', user);
  }

  findUserById(userId: String) {
    return this._http.get(this.baseUrl + '/api/user/' + userId);
  }

  findUserByUsername(username: String) {
    return this._http.get(this.baseUrl + '/api/user?username=' + username);
  }

  findUserByCredentials(username: String, password: String) {
    return this._http.get<User>(this.baseUrl + '/api/user?username=' + username + '&password=' + password);
  }

  updateUser(userId: String, user: User) {
    return this._http.put(this.baseUrl + '/api/user/' + userId, user);
  }

  deleteUser(userId: String) {
    return this._http.delete(this.baseUrl + '/api/user/' + userId);
  }

  login(username: String, password: String) {
    this.options.withCredentials = true; // jga

    const body = {
      username: username,
      password: password
    };

    return this._http.post(this.baseUrl + '/api/login', body, this.options);
  }

  logout() {
    this.options.withCredentials = true;
    return this._http
      .post(this.baseUrl + '/api/logout', '', this.options);
  }

  register(username: String, password: String) {
    this.options.withCredentials = true;
    const user = {username: username, password: password};
    return this._http
      .post(this.baseUrl + '/api/register', user, this.options);
  }

  loggedIn() {
    return this._http
      .post(this.baseUrl + '/api/loggedin', '', this.options)
      .pipe(
        map((user) => {
            if (user !== 0) {
              this.sharedService.user = user;
              return true;
            } else {
              this.router.navigate(['/login']);
              return false;
            }
          }
        ));
  }
}

