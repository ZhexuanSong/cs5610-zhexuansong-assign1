
export class Website {
  id: string;
  name: string;
  developerId: string;
  description: string;
  constructor(id: string, name: string, developerId: string, description: string) {
    this.id = id;
    this.name = name;
    this.developerId = developerId;
    this.description = description;
  }
}
