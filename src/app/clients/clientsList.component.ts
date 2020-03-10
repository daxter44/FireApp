import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@/_models';
import { UserService, AuthenticationService, FirmService } from '@/_services';
import { ClientService } from '@/_services/client.service';

@Component({
    selector: 'ClientsList', templateUrl: 'clientsList.component.html' })
export class ClientsList implements OnInit {
    currentUser: User;
    clients = [];

    constructor(
        private authenticationService: AuthenticationService,
        private clientService: ClientService,
        private firmService: FirmService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loadAllClients();
    }

    deleteUser(id: number) {
        this.clientService.delete(id)
            .pipe(first())
            .subscribe(() => this.loadAllClients());
    }

    private loadAllClients() {
        this.firmService.getClients()
            .pipe(first())
            .subscribe(clients => this.clients = clients);
    }
}