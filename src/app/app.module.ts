import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AlertComponent } from './_components';
import { ClientsList } from './clients';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'  ;
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { DevicesModule } from './devices/devices.module';
import { MyDeviceComponent } from './devices';
import { ClientsModule } from './clients/clients.module';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ClientService } from './_services';
import { UserResolve } from './_resolvers/user.resolver';
import { ClientResolve } from './_resolvers/client.resolver';
import { ClientsResolve } from './_resolvers/clients.resolver';
import { DevicesResolve } from './_resolvers/devices.resolver';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AlertComponent,
    MyDeviceComponent,
    ClientsList,
    RegisterComponent
  ],
  imports: [
    DevicesModule,
    ClientsModule,
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
    MatCardModule,
    SlimLoadingBarModule.forRoot()
  ],
  providers: [
    ClientsList, 
    ClientsResolve,
    MatDatepickerModule,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
