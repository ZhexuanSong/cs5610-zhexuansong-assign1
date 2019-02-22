import { Injectable } from '@angular/core';
import {Page} from '../model/page.model';


@Injectable()
export class PageService {

  pages: Page[] = [
    new Page('321', 'Post 1', '456', 'Lorem'),
    new Page('432', 'Post 2', '456', 'Lorem'),
    new Page('543', 'Post 3', '456', 'Lorem')
  ];


  constructor() { }



  createPage(websiteId: string, name: string, title: string) {
    // actually this should done in the server side
    const id = Math.random().toString();
    this.pages.push(new Page(id, name, websiteId, title));
  }

  findPageByWebsiteId(websiteId: string): Page[] {
    const webPages = [];
    this.pages.forEach(function (page) {
      if (page.websiteId === websiteId) {
        webPages.push(page);
      }
    });
    return webPages;
  }

  findPageById(pageId: string) {
    const page = this.pages.find(page =>  page.id === pageId);
    return new Page(page.id, page.name, page.websiteId, page.title);
  }

  updatePage(pageId: string, newPage: Page) {
    const index = this.pages.findIndex(page => page.id === pageId);
    this.pages[index] = newPage;
  }
  deletePage(pageId: string) {
    const index = this.pages.findIndex(page => page.id === pageId);
    this.pages.splice(index, 1);
  }
}
