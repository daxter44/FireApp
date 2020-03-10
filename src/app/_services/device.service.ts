import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '@/_models';

import { Device } from '@/_models';
import { environment } from 'environments/environment';

@Injectable({ providedIn: 'root' })
export class DeviceService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Device[]>(`${environment.baseUrl}/device`);
    }
    getDevice(id: string) {
        return this.http.get<Device>(`${environment.baseUrl}/device/${id}`);
    }

    add(device: Device) {
        return this.http.post(`${environment.baseUrl}/device`, device);
    }
    update(id: string, device: Device) {
        return this.http.put(`${environment.baseUrl}/device/${id}`, device);
    }

    delete(id: number) {
        return this.http.delete(`${environment.baseUrl}/device/${id}`);
    }
    getDevices() {
        return this.http.get<Device[]>(`${environment.baseUrl}/device/myDevices`);
    }

}