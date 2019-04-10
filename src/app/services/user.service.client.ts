import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {SharedService} from './shared.service.client';
import {map} from 'rxjs/operators';
import { Router} from '@angular/router';

@Injectable()
export class UserService {

    constructor(private _http: HttpClient, private sharedService: SharedService, private _router: Router) {}

    baseUrl = environment.baseUrl;
    options = new HttpHeaders().set('Content-Type', 'application/json');

    createUser(user: any) {
        return this._http.post(this.baseUrl + '/api/user/', user);
    }

    findUserById(userId: String) {
        return this._http.get(this.baseUrl + '/api/user/' + userId);
    }

    updateUser(user: any) {
        console.log('user client update');
        return this._http.put(this.baseUrl + '/api/user/' + user._id, user);
    }

    findUserByCredential(username: String, password: String) {
        const url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
        console.log(url);
        return this._http.get(url);
    }

    deleteUserById(userId: String) {
        const req_url = this.baseUrl + '/api/user/' + userId;
        return this._http.delete(req_url);
    }

    login(username: String, password: String) {
        const body = {
            username : username,
            password : password
        };
        return this._http.post(this.baseUrl + '/api/login', body, {headers: this.options, withCredentials: true});
            // .pipe(map(
            //         (res: Response) => {
            //             const data = res.json();
            //             return data;
            //         }
            //     ));
    }

    logout() {
        return this._http.post(this.baseUrl + '/api/logout', '', {headers: this.options, withCredentials: true});
    // .pipe(map(
    //         (res: Response) => {
    //             const data = res.json();
    //             return data;
    //         }
    //     ));
    }

    register(username: String, password: String) {

        const user = {
            username : username,
            password : password
        };

        return this._http.post(this.baseUrl + '/api/register', user, {withCredentials: true});

            // .pipe(map(
            //     async (res: Response) => {
            //         const data = await res.json();
            //         console.log('user client: ' + data);
            //         return data;
            //     }
            // ));
    }

    loggedIn() {
        return this._http.get(this.baseUrl + '/api/loggedIn', {headers: this.options, withCredentials: true})
            .pipe(map(
                (res: any) => {
                    // const user = JSON.stringify(res);
                    const user = res;
                    console.log('user client loggedIn: ' + user);
                    if (user !== '0') {
                        this.sharedService.user = user; // setting user so as to share with all components
                        return true;
                    } else {
                        this._router.navigate(['/login']);
                        return false;
                    }
                }
            ));
    }

    // facebook() {
    //     return this._http.get('/facebook/login');
    // }


}

