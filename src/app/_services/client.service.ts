import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Device } from '@/_models';
import { Client } from '@/_models/client';
import { environment } from 'environments/environment';

@Injectable({ providedIn: 'root' })
export class ClientService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Client[]>(`${environment.baseUrl}/clients`);
    }
    getClient(id: string) {
        return this.http.get<Client>(`${environment.baseUrl}/clients/${id}`);
    }
    update(id: string, client: Client) {
        return this.http.put(`${environment.baseUrl}/clients/${id}`, client);
    }
    add(client: Client) {
        return this.http.post(`${environment.baseUrl}/clients/Create`, client);
    }
    delete(id: number) {
        return this.http.delete(`${environment.baseUrl}/clients/${id}`);
    }
    getDevices() {
        return this.http.get<Device[]>(`${environment.baseUrl}/clients/myDevices`);
    }

}