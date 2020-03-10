import { Device } from "./device";
import { User } from "./user";
import { Address } from "./address";

export class Client {
    
    clientId: string;
    firmId: string;
    firstName: string;
    lastName: string;
    address: Address;
    user: User;
    device: Device[]
}