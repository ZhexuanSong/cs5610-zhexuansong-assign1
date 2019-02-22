export class User {
  _id: String;
  username: String;
  password: String;
  firstName: String;
  lastName: String;


  constructor(id: String, username: String, password: String, firstName: String, lastName: String) {
    this._id = id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
