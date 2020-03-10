import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@/_models';
import { Device } from '@/_models';
import { UserService, AuthenticationService, DeviceService } from '@/_services';
import { ClientService } from '@/_services/client.service';

@Component({ selector:'myDevice', templateUrl: 'myDevice.component.html' })
export class MyDeviceComponent implements OnInit {
    currentUser: User;
    devices = [];

    constructor(
        private authenticationService: AuthenticationService,
        private clientService: ClientService,        
        private deviceService: DeviceService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loadMyDevices();
    }    

    deleteDevice(id: number) {
        this.deviceService.delete(id)
            .pipe(first())
            .subscribe(() => this.loadMyDevices());
    }
    private loadMyDevices() {
        this.clientService.getDevices()
            .pipe(first())
            .subscribe(devices => this.devices = devices);
    }
}