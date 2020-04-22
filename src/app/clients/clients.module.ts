import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'  ;
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { JwtInterceptor, ErrorInterceptor } from '@/_helpers';
import { AppRoutingModule } from '@/app-routing.module';
import { ClientPropComponent } from '@/_components/Client/ClientProp/ClientProp.component';
import { AddClientComponent } from './AddClient';
import { EditClientComponent } from './EditClient';
import { EditClientPropComponent } from '@/_components/Client/EditClientProp/EditClientProp.component';
import { ClientService } from '@/_services';
import { ClientResolve } from '@/_resolvers/client.resolver';


@NgModule({
  declarations: [
    ClientPropComponent,
    AddClientComponent,
    EditClientComponent,
    EditClientPropComponent
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
    ClientService,
    ClientResolve ,
    MatDatepickerModule,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ]
})
export class ClientsModule { }
