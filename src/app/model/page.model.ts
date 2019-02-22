export class Page{
  id: string;
  name: string;
  websiteId: string;
  title: string;
  constructor(id: string, name: string, websiteId: string, title: string){
    this.id = id;
    this.name = name;
    this.websiteId = websiteId;
    this.title = title;
  }
}
