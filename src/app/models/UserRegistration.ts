export class UserRegistration{
  login: string;
  password: string;
  name: string;
  surname: string;
  email: string;

  constructor(login: string, name: string, surname: string, email: string, password: string) {
    this.login = login;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
  }
}
