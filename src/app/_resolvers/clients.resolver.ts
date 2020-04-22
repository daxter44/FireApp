import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { FirmService } from '@/_services';
import { Client } from '@/_models/client';


@Injectable()
export class ClientsResolve implements Resolve<Client[]> {
  constructor(private firmService: FirmService) {}
 
  resolve(route: ActivatedRouteSnapshot) {
    return this.firmService.getClients();
  }
}