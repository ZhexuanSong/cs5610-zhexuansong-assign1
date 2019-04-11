export class Page {
  _id: string;
  name: string;
  websiteId: string;
  description: string;

  constructor(pageId = '', name = '', websiteId = '', description = '') {
    this._id = pageId;
    this.name = name;
    this.websiteId = websiteId;
    this.description = description;
  }
}
