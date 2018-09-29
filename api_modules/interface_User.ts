export interface User {
    id: number;
    name: string;
    password: string;
    dateOfBirth: Date;
    dateOfFirstLogin: Date;
    dateOfNextNotification: Date;
    information: string;
    deleted?: boolean;
}