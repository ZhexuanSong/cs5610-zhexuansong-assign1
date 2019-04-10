export class User {
    uid: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;

    constructor(uid, username, password, firstName, lastName, email) {
        this.uid = uid;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}
