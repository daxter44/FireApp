import { Client } from "./client";
import { DeviceStatus } from './deviceStatus';

export class Device {
    id: string;
    client: Client;
    name: string;
    model: string;
    status: DeviceStatus;
    serialNumber: string;
    instalationDate: Date;
}