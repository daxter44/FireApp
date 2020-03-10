import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import {ActivatedRoute} from "@angular/router";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { User } from '@/_models';
import { FirmService, AuthenticationService, DeviceService, AlertService } from '@/_services';
import { Role } from '@/_models/role';
import { Router } from '@angular/router';

@Component({ selector:'listDevices', templateUrl: 'listDevices.component.html' })
export class ListDevicesComponent implements OnInit {
    currentUser: User;
    devices = [];    
    displayedColumns= ["name", "model", "serialNumber", "instalationDate"];

    constructor(
        private authenticationService: AuthenticationService,
        private firmService: FirmService,        
        private deviceService: DeviceService,
        private alertService: AlertService,
        private router: Router
    ) {
        if (this.authenticationService.currentUserValue.role != Role.Firm) {
            this.router.navigate(['/']);
        }
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loadlistDevicess();
    }    

    deleteDevice(id: number) {
        this.deviceService.delete(id)
            .pipe(first())
            .subscribe(() => this.loadlistDevicess());
    }
    private loadlistDevicess() {
        this.firmService.getDevices()
            .pipe(first())
            .subscribe(
                    devices => {
                        this.devices = devices
                    }, 
                    error => {
                        this.alertService.error(error);
                    }); 
    }
}