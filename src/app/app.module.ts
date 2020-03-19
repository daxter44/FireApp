import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { MyDeviceComponent } from './devices';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AlertComponent } from './_components';
import { AddDeviceComponent } from './devices/AddDevice';
import { DevicePropComponent } from './_components/Device/DeviceProp/DeviceProp.component';
import { EditDeviceComponent } from './devices/EditDevice';
import { ClientsList } from './clients';
import { ListDevicesComponent } from './devices/ListDevices';
import { ClientPropComponent } from './_components/Client/ClientProp/ClientProp.component';
import { AddClientComponent } from './clients/AddClient';
import { EditClientComponent } from './clients/EditClient';
import { EditClientPropComponent } from './_components/Client/EditClientProp/EditClientProp.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'  ;
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { DeviceStatus } from './_models/deviceStatus';
import { DeviceStatusComponent } from './devices/DeviceStatus/DeviceStatus.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MyDeviceComponent,
    AddDeviceComponent,
    ListDevicesComponent,
    AlertComponent,
    DevicePropComponent,
    ClientPropComponent,
    AddClientComponent,
    EditDeviceComponent,
    EditClientComponent,
    EditClientPropComponent,
    ClientsList,
    RegisterComponent,
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
    MatDatepickerModule,  
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
