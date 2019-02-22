import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  pages=[

    { "_id": "321", "name": "Post 1", "websiteId": "456", "title": "Lorem" },

    { "_id": "432", "name": "Post 2", "websiteId": "456", "title": "Lorem" },

    { "_id": "543", "name": "Post 3", "websiteId": "456", "title": "Lorem" }

  ];

  constructor() { }
  createPage(websiteId, page){
    var lastId = this.pages[this.pages.length-1]._id;
    page._id = (+(lastId)+1).toString();
    page.websiteId = websiteId;
    this.pages.push(page);

  }
  findPageByWebsiteId(websiteId){
    let res = [];
    for (var page of this.pages) {
      if (page.websiteId === websiteId) {
        res.push(page);
      }
    }
    return res;

  }
  findPageById(pageId){
    for (var page of this.pages) {
      if (page._id === pageId) {
        return page;
      }
    }
    return null;
  }
  updatePage(pageId, page){
    for (var i = 0; i < this.pages.length; i++) {
      if (this.pages[i]._id === pageId) {
        this.pages[i] = page;
        return;
      }
    }
    
  }
  deletePage(pageId){
    for (var i = 0; i < this.pages.length; i++) {
      if (this.pages[i]._id === pageId) {
        this.pages.splice(i, 1);
        return;
      }
    }
  }
}
