import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { User, Device } from '@/_models';
import { UserService } from '@/_services';


@Injectable()
export class UserResolve implements Resolve<Device[]> {
  constructor(private usersService: UserService) {}
 
  resolve(route: ActivatedRouteSnapshot) {
    return this.usersService.getDevices();
  }
}