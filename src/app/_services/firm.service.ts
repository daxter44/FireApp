import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Device } from '@/_models';
import { Client } from '@/_models/client';
import { Firm } from '@/_models/firm';
import { environment } from 'environments/environment';

@Injectable({ providedIn: 'root' })
export class FirmService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Firm[]>(`${environment.baseUrl}/firm`);
    }

    register(firm: Firm) {
        return this.http.post(`${environment.baseUrl}/firm/Create`, firm);
    }
    add(client: Client) {
        return this.http.post(`${environment.baseUrl}/firm/addClient`, client);
    }
    delete(id: number) {
        return this.http.delete(`${environment.baseUrl}/firm/${id}`);
    }
    getClients() {
        return this.http.get<Client[]>(`${environment.baseUrl}/firm/myClients`);
    }
    getDevices() {
        return this.http.get<Device[]>(`${environment.baseUrl}/firm/Devices`);
    }

}