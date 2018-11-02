export interface User {
  id?: number;
  loginName: string;
  name: string;
  age: string;
  password: string;
  dateOfBirth: string;
  dateOfLogin: string;
  dateOfNotif: string;
  info: string;
  deleted?: boolean;
}
