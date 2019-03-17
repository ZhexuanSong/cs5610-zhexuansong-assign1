import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from './model/User';

// finally the service could get the backend data from a remote server, which is an asynchronous operation.

import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  baseUrl = environment.baseUrl;
  userApiUrl = '/api/user';

  createUser(user): Observable<User> {
    console.log('front user service createUser() called');
    return this.http.post<User>(this.baseUrl + this.userApiUrl, user);
  }

  findUserById(userId): Observable<User> {
    console.log('front user service findUserById() called');
    // Only need to call server's url to get the data.
    return this.http.get<User>(this.baseUrl + this.userApiUrl + '/' + userId);

  }

  findUserByUserName(userName): Observable<User> {
    console.log('front user service findUserByUserName() called');
    return this.http.get<User>(this.baseUrl + this.userApiUrl + '?username=' + userName);

  }

  findUserByCredentials(userName, password): Observable<User> {
    console.log('front user service findUserByCredentials() called');
    const url = this.baseUrl + this.userApiUrl + '?username=' + userName + '&password=' + password;
    console.log('base url is ' + this.baseUrl);
    return this.http.get<User>(url);

  }

  updateUser(userId, user): Observable<User> {
    console.log('front user service updateUser() called');
    return this.http.put<User>(this.baseUrl + this.userApiUrl + '/' + userId, user);

  }

  deleteUser(userId) {
    console.log('front user service deleteUser() called');
    return this.http.delete<User>(this.baseUrl + this.userApiUrl + '/' + userId);
  }


}
