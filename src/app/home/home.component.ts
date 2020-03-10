import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@/_models';
import { UserService, AuthenticationService } from '@/_services';
import { Role } from '@/_models/role';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent  {
    currentUser: User;
    users = [];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    get isClient() {
        return this.currentUser && this.currentUser.role === Role.Client;
    }
    get isFirm() {
        return this.currentUser && this.currentUser.role === Role.Firm;
    }
}