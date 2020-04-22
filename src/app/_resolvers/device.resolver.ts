import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {  DeviceService } from '@/_services';
import { Device } from '@/_models';


@Injectable()
export class DeviceResolve implements Resolve<Device> {
  constructor(private deviceService: DeviceService) {}
 
  resolve(route: ActivatedRouteSnapshot) {
    return this.deviceService.getDevice(route.params['id']);
  }
}