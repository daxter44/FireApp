import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '@/_models';
import { FirmService, AuthenticationService, DeviceService, AlertService } from '@/_services';
import { Role } from '@/_models/role';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'listDevices',
  templateUrl: 'listDevices.component.html',
  styleUrls: ['listDevices.component.css']
 })
export class ListDevicesComponent implements OnInit {
    currentUser: User;
    devices = [];
    displayedColumns = ['name', 'model', 'serialNumber', 'instalationDate', 'actions'];

    constructor(
        private authenticationService: AuthenticationService,
        private firmService: FirmService,
        private deviceService: DeviceService,
        private alertService: AlertService,
        private router: Router,
        private activatedRouter: ActivatedRoute
    ) {
        if (this.authenticationService.currentUserValue.role != Role.Firm) {
            this.router.navigate(['/']);
        }
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.devices = this.activatedRouter.snapshot.data.devices;
    }

    deviceDetails(id: number) {
        this.router.navigate(['/deviceDetail/' + id]);
    }
    editDevice(id: number) {
        this.router.navigate(['/editDevice/' + id]);
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
                        this.devices = devices;
                    },
                    error => {
                        this.alertService.error(error);
                    });
    }
}
