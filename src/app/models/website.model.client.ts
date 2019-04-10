export class Website {
    websiteId: string;
    name: string;
    developerId: string;
    description: string;

    constructor(websiteId, name, developerId, description) {
        this.websiteId = websiteId;
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
}
