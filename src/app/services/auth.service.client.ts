import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {UserService} from './user.service.client';
import {Observable} from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private userService: UserService) {}

    canActivate(): Observable<boolean> {
        console.log('auth guard checking');
        return this.userService.loggedIn();
    }
}
