export class Page {
  _id: string;
  name: string;
  websiteId: string;
  description: string;

  constructor(name, websiteId, description) {
    this.name = name;
    this.websiteId = websiteId;
    this.description = description;
  }
}
