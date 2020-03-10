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

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },    
  { path: 'myDevices', component: MyDeviceComponent },  
  { path: 'devices', component: ListDevicesComponent },  
  { path: 'addDevice/:id', component: AddDeviceComponent },
  { path: 'editDevice/:id', component: EditDeviceComponent },
  { path: 'addClient', component: AddClientComponent },
  { path: 'editClient/:id', component: EditClientComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
