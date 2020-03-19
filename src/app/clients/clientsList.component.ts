import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@/_models';
import { UserService, AuthenticationService, FirmService } from '@/_services';
import { ClientService } from '@/_services/client.service';
import { Router } from '@angular/router';

@Component({
    selector: 'ClientsList', templateUrl: 'clientsList.component.html',
    styleUrls: ['clientList.component.css'] })
export class ClientsList implements OnInit {
    currentUser: User;
    clients = [];
    displayedColumns= ["name", "adres", "actions"];
 

    constructor(
        private authenticationService: AuthenticationService,
        private clientService: ClientService,
        private firmService: FirmService,
        private router: Router
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loadAllClients();
    }
    editUser(id: number) {
        this.router.navigate(['/editClient/' + id]);
    }    
    addDevice(id: number) {
        this.router.navigate(['/addDevice/' + id]);
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