export class User {
  id: string;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string
  constructor(id: string, userName: string, password: string, firstName: string, lastName: string, email: string) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }


}
