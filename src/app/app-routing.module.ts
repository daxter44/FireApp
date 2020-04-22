import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_helpers';
import { LoginComponent } from './login';
import { MyDeviceComponent } from './devices';
import { ListDevicesComponent } from './devices/ListDevices';
import { HomeComponent } from './home';
import { AddDeviceComponent } from './devices/AddDevice';
import { EditDeviceComponent } from './devices/EditDevice';
import { AddClientComponent } from './clients/AddClient';
import { EditClientComponent } from './clients/EditClient';
import { DeviceStatusComponent } from './devices/DeviceStatus/DeviceStatus.component';
import { ClientResolve } from './_resolvers/client.resolver';
import { ClientsResolve } from './_resolvers/clients.resolver';
import { DevicesResolve } from './_resolvers/devices.resolver';
import { DeviceResolve } from './_resolvers/device.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard],   resolve: { clients : ClientsResolve }  },
  { path: 'login', component: LoginComponent },
  { path: 'myDevices', component: MyDeviceComponent , canActivate: [AuthGuard] },
  { path: 'devices', component: ListDevicesComponent , canActivate: [AuthGuard] , resolve: { devices : DevicesResolve } },
  { path: 'deviceDetail/:id', component: DeviceStatusComponent , canActivate: [AuthGuard]},
  { path: 'addDevice/:id', component: AddDeviceComponent, canActivate: [AuthGuard] },
  { path: 'editDevice/:id', component: EditDeviceComponent, canActivate: [AuthGuard],  resolve: { device : DeviceResolve } },
  { path: 'addClient', component: AddClientComponent, canActivate: [AuthGuard] },
  { path: 'editClient/:id', component: EditClientComponent, canActivate: [AuthGuard],   resolve: { client : ClientResolve } },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
