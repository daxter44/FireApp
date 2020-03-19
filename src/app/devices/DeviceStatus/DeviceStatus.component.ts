import { Component, OnInit, NgModule } from '@angular/core';
import { DevicePropComponent } from '@/_components/Device/DeviceProp/DeviceProp.component';
import { Device } from '@/_models';
import { first } from 'rxjs/operators';
import { DeviceService, AuthenticationService, AlertService } from '@/_services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'deviceStatus', 
  templateUrl: './DeviceStatus.component.html',
  styleUrls: ['./DeviceStatus.component.css'],
})

export class DeviceStatusComponent implements OnInit {  
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
     
  }
    }

    ngOnInit(): void {
      this.getDeviceDetails();
    }
    getDeviceDetails(): void {
      const id  = this.route.snapshot.paramMap.get('id');
      this.deviceId = id;
      this.deviceService.getDeviceDetails(id)
        .subscribe(device => this.device = device);
    }

}

