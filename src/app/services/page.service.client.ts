import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Page } from '../models/page.model.client';

// import { Page } from '../models/page.model.client';

@Injectable()
export class PageService {

    constructor() { }

    pages: Page[] = [
        { _id: "321", name: "Post 1", websiteId: "456", title: "Lorem" },
        { _id: "432", name: "Post 2", websiteId: "456", title: "Lorem" },
        { _id: "543", name: "Post 3", websiteId: "456", title: "Lorem" }
    ];

    api = {
        'createPage': this.createPage,
        'findPageByWebsiteId': this.findPageByWebsiteId,
        'findPageById': this.findPageById,
        'updatePage': this.updatePage,
        'deletePage': this.deletePage
    };

    createPage(websiteId: String, page: any) {
        page._id = Math.random().toString();
        page.websiteId = websiteId;
        this.pages.push(page);
    }

    findPageByWebsiteId(websiteId: String) {
        const resultSet = [];
        for (let x = 0; x < this.pages.length; x++) {
            if (this.pages[x].websiteId === websiteId) {
                resultSet.push(this.pages[x]);
            }
        }
        return resultSet;
    }

    findPageById(pageId: String) {
        for (let x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                return this.pages[x];
            }
        }
    }

    updatePage(pageId: String, page: any) {
        for (let x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                this.pages[x].name = page.name;
                this.pages[x].title = page.title;
            }
        }
    }

    deletePage(pageId: String) {
        for (let x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                this.pages.splice(x, 1);
            }
        }
    }
}
