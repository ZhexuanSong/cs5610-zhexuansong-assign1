export class Page {
    pageId: string;
    name: string;
    websiteId: string;
    description: string;

    constructor(pageId, name, websiteId, description) {
        this.pageId = pageId;
        this.name = name;
        this.websiteId = websiteId;
        this.description = description;
    }
}
