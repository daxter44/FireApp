import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { User } from '@/_models';

import { Device } from '@/_models';
import { Guid } from '@/_models/guid';
import { environment } from 'environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.baseUrl}/users`);
    }

    register(user: User) {
        return this.http.post(`${environment.baseUrl}/users/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.baseUrl}/users/${id}`);
    }
    getDevices() {
        return this.http.get<Device[]>(`${environment.baseUrl}/users/myDevices`);
    }    
    generatePassword(clientId: String) {  
        let id = new Guid();
        id.id = clientId;
        return this.http.post(`${environment.baseUrl}/users/generatePassword`, id);
    }

}