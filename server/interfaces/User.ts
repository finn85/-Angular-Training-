export interface User {
  id?: number;
  loginName: string;
  name: string;
  password: string;
  dateOfBirth: string;
  dateOfLogin: string;
  dateOfNotif: string;
  information: string;
  deleted?: boolean;
}
