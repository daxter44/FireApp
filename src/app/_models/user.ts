export class User {
    constructor() {
        this.role = 'User';
    }
    id: number;
    username: string;
    eMail: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string;
    token: string;
}