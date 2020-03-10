import { Component, OnInit, NgModule } from '@angular/core';
import { DevicePropComponent } from '@/_components/Device/DeviceProp/DeviceProp.component';
import { Device } from '@/_models';
import { first } from 'rxjs/operators';
import { DeviceService, AuthenticationService, AlertService } from '@/_services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'addDevice',
  templateUrl: './AddDevice.component.html'
})

export class AddDeviceComponent implements OnInit {  
  userId: string;
  constructor(
    private deviceService: DeviceService,    
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { 
      // redirect to home if already logged in
    if (this.authenticationService.currentUserValue == null) {
     
  }
    }

  ngOnInit() {
    this.getUser();
    }
    getUser(): void {
      const id  = this.route.snapshot.paramMap.get('id');
      this.userId=id;
    }

  onSubmited(device: Device) {
    device.id = this.userId;
    this.deviceService.add(device)
          .pipe(first())
          .subscribe(
              data => {
                  this.alertService.success('Device added successful', true);
                  this.router.navigate(['/devices']);
              },
              error => {
                  this.alertService.error(error);
              });
  }

}

