import {Injectable} from '@angular/core';
import {User} from '../models/user.model.client';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {SharedService} from './shared.service.client';
import {Router} from '@angular/router';

@Injectable()
export class UserService {
    constructor(private _http: HttpClient, private sharedService: SharedService, private router: Router) {}

    baseUrl = environment.baseUrl;

    headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    options = {
        headers: this.headers,
        withCredentials: true
    };


    users = [
        new User('001', 'alice', 'alice', 'Alice', 'Wonder', '123@gmail.com'),
        new User('002', 'bob', 'bob', 'Bob', 'Carley', '456@neu.edu')
    ];

    api = {
        'createUser' : this.createUser,
        'findUserById' : this.findUserById,
        'findUserByUsername' : this.findUserByUserName,
        'findUserByCredentials' : this.findUserByCredentials,
        'updateUser': this.updateUser,
        'deleteUser': this.deleteUser
    };

    createUser(user: User) {
        return this._http.post(this.baseUrl + '/api/user', user);
    }

    findUserById(userId: string): Observable<User> {
        return this._http.get<User>(this.baseUrl + '/api/user/' + userId);
    }

    findUserByUserName(username: string) {
        return this._http.get(this.baseUrl + '/api/user?' + 'username=' + username);
    }

    findUserByCredentials(username: string, password: string): Observable<User> {
        return this._http.get<User>(this.baseUrl + '/api/user?' + 'username=' + username + '&' + 'password=' + password);
    }

    updateUser(userId: string, user: User) {
        return this._http.put(this.baseUrl + '/api/user/' + userId, user);
    }

    deleteUser(userId: string) {
        return this._http.delete(this.baseUrl + '/api/user/' + userId);
    }

    login(username: String, password: String) {
        this.options.withCredentials = true;
        const body = {username: username, password: password};
        return this._http.post(this.baseUrl + '/api/login', body, this.options);
    }

    logout() {
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/logout', '', this.options);
    }

    register(user: User) {
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/register', user, this.options);
    }

    loggedIn() {
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/loggedIn', '', this.options).pipe(
            map((user: any) => {
                if (user !== '0') {
                    this.sharedService.user = user;
                    return true;
                } else {
                    this.router.navigate(['/login']);
                    return false; }
            })
            );
    }
        // createUser(user: User): Observable<User[]> {
    //     return this._http.post<User[]>(this.baseUrl + '/api/user/', JSON.stringify(user)).pipe(
    //         catchError((error: any) => Observable.throw(error))
    //     );
    // }
    //
    // findUserById(userId: string): Observable<User> {
    //     return this._http.get<User>(this.baseUrl + '/api/user/' + userId).pipe(
    //         catchError((error: any) => Observable.throw(error))
    //     );
    // }
    //
    // findUserByUserName(username: string): Observable<User> {
    //     return this._http.get<User>(this.baseUrl + '/api/user').pipe(
    //         catchError((error: any) => Observable.throw(error))
    //     );
    // }
    //
    // findUserByCredentials(username: string, password: string): Observable<User>{
    //     return this._http.get<User>(this.baseUrl + '/api/user').pipe(
    //         catchError((error: any) => Observable.throw(error))
    //     );
    // }
    //
    // updateUser(userId: string, user: User): Observable<User[]>{
    //     return this._http.put<User[]>(this.baseUrl + '/api/user/' + userId, JSON.stringify(user)).pipe(
    //         catchError((error: any) => Observable.throw(error))
    //     );
    // }
    //
    // deleteUser(userId: string): Observable<User[]> {
    //     return this._http.delete<User[]>(this.baseUrl + '/api/user').pipe(
    //         catchError((error: any) => Observable.throw(error))
    //     );
    // }
}
