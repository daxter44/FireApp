import { Component, OnInit, NgModule } from '@angular/core';
import { DevicePropComponent } from '@/_components/Device/DeviceProp/DeviceProp.component';
import { Device } from '@/_models';
import { first } from 'rxjs/operators';
import { DeviceService, AuthenticationService, AlertService } from '@/_services';
import { Router, ActivatedRoute, UrlTree } from '@angular/router';

@Component({
  selector: 'EditDevice',
  templateUrl: './EditDevice.component.html'
})

export class EditDeviceComponent implements OnInit {
device: Device;
deviceId: string;
  constructor(
    private deviceService: DeviceService,    
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { 
      // redirect to home if already logged in
    if (this.authenticationService.currentUserValue == null) {
      this.router.navigate(['/']);
  }
    }

    ngOnInit(): void {
      this.getDevice();
    }
    getDevice(): void {
      const id  = this.route.snapshot.paramMap.get('id');
      this.deviceId=id;
      this.deviceService.getDevice(id)
        .subscribe(device => this.device = device);
    }

  onSubmited(device: Device) {
    this.deviceService.update(this.deviceId, device)
          .pipe(first())
          .subscribe(
              data => {
                  this.alertService.success('Device updated successful', true);
                  this.router.navigate(['/myDevices']);
              },
              error => {
                  this.alertService.error(error);
              });
  }

}
