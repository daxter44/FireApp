import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ClientService } from '@/_services';
import { Client } from '@/_models/client';


@Injectable()
export class ClientResolve implements Resolve<Client> {
  constructor(private clientService: ClientService) {}
 
  resolve(route: ActivatedRouteSnapshot) {
    return this.clientService.getClient(route.params['id']);
  }
}