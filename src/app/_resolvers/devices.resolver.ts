import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { FirmService } from '@/_services';
import { Device } from '@/_models';


@Injectable()
export class DevicesResolve implements Resolve<Device[]> {
  constructor(private firmService: FirmService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.firmService.getDevices();
  }
}