import { Client } from "./client";

export class Device {
    id: string;
    client: Client;
    name: string;
    model: string;
    serialNumber: string;
    instalationDate: Date;
}