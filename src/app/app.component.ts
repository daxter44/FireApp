import { Component } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { AuthenticationService } from './_services';
import { User } from './_models';
import {NavigationStart, NavigationEnd, Event, Router} from '@angular/router';
import './_content/app.less';
import { Role } from './_models/role';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;

    constructor(
        private lBar: SlimLoadingBarService,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.router.events.subscribe((event: Event) => {
            console.log(event);
            this.loadingBarInterceptor(event);
          });
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    private loadingBarInterceptor(event: Event) {
        if (event instanceof NavigationStart) {
          this.lBar.start();
        }
        if (event instanceof NavigationEnd) {
          this.lBar.complete();
        }
      }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

    get isClient() {
        return this.currentUser && this.currentUser.role === Role.Client;
    }
    get isFirm() {
        return this.currentUser && this.currentUser.role === Role.Firm;
    }
}