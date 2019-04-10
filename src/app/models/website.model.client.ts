export class Website {
  _id: string;
  name: string;
  developerId: string;
  description: string;

  constructor(name, developerId, description) {
    this.name = name;
    this.developerId = developerId;
    this.description = description;
  }

}
