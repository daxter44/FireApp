import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddDeviceComponent } from './AddDevice';
import { DevicePropComponent } from '../_components/Device/DeviceProp/DeviceProp.component';
import { EditDeviceComponent } from './EditDevice';
import { ListDevicesComponent } from './ListDevices';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'  ;
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { DeviceStatusComponent } from './DeviceStatus/DeviceStatus.component';
import { JwtInterceptor, ErrorInterceptor } from '@/_helpers';
import { AppRoutingModule } from '@/app-routing.module';
import { MyDeviceComponent } from '.';
import { DevicesResolve } from '@/_resolvers/devices.resolver';
import { DeviceResolve } from '@/_resolvers/device.resolver';


@NgModule({
  declarations: [
    AddDeviceComponent,
    ListDevicesComponent,
    DevicePropComponent,
    EditDeviceComponent,
    DeviceStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [
    MyDeviceComponent,
    DevicesResolve,
    EditDeviceComponent,
    DeviceResolve,
    MatDatepickerModule,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ]
})
export class DevicesModule { }
