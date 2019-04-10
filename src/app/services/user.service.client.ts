import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {SharedService} from './shared.service';
import {Router} from '@angular/router';

@Injectable()
export class UserService {
  constructor(private http: HttpClient, private sharedService: SharedService, private router: Router) {}

  baseUrl = environment.baseUrl;

  register(user): Observable<any> {
    const url = this.baseUrl + '/api/user';
    return this.http.post(url, user, {withCredentials: true});
  }

  findUserById(userId: string): Observable<any> {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.get<any>(url);
  }

  login(username: string, password: string) {
    const body = {
      username,
      password
    };
    return this.http.post(this.baseUrl + '/api/login/', body, {withCredentials: true});
  }

  findUserByUsername(username: string) {
    return this.http.get(this.baseUrl + '/api/user?' + 'username=' + username);
  }

  logout() {
    return this.http.post(this.baseUrl + '/api/logout/', '', {withCredentials: true});
  }

  updateUser(userId, user): Observable<any> {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.put(url, user);
  }

  deleteUser(userId: string): Observable<any> {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.delete(url);
  }

  loggedIn() {
    return this.http.post(this.baseUrl + '/api/loggedin', '', {withCredentials: true}).map((user: any) => {
      if (user !== '0') {
        this.sharedService.user = user;
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    });
  }
}
