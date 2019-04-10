import {User} from '../models/user.model.client';
import {Injectable} from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {SharedService} from './shared.service';
import {Router} from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient,
              private sharedService: SharedService,
              private router: Router) {}

  baseUrl = environment.baseUrl;
  options = {
    withCredentials: true
  };

  static getNewUser() {
    return new User(undefined, undefined, undefined, undefined, undefined, undefined);
  }

  login(username: String, password: String) {
    this.options.withCredentials = true; // jga

    const body = {
      username : username,
      password : password
    };

    return this._http.post(this.baseUrl + '/api/login', body, this.options);
  }

  logout() {
    this.options.withCredentials = true;

    return this._http.post(this.baseUrl + '/api/logout', '', this.options);
  }

  register(username: String, password: String) {
    this.options.withCredentials = true;
    const body = {
      username: username,
      password: password
    };
    return this._http.post(this.baseUrl + '/api/register', body, this.options);
  }

  loggedIn() {
    this.options.withCredentials = true;
    // return this._http.post(this.baseUrl + '/api/loggedIn', '', this.options).
    // pipe(map(
    //   (res: any) => {
    //     const user = res.json();
    //     if (user !== 0) {
    //       console.log('loggedIn: ' + user['username']);
    //       this.sharedService.user = user;
    //       return true;
    //     } else {
    //       console.log('loggedIn: fail');
    //       this.router.navigate(['/login']);
    //       return false;
    //     }
    //   }));


    return this._http.post(this.baseUrl + '/api/loggedIn', '', this.options)
      .pipe( map((user)  => {
        if (user !== 0) {
          this.sharedService.user = user; // setting user as global variable using shared service
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      }));
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
