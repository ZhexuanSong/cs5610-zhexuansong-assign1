import { Injectable } from '@angular/core';
import {Website} from '../model/website.model';


@Injectable()
export class WebsiteService {


constructor() { }

  websites: Website[] = [
    new Website('456', 'Gizmode', '456', 'Lorem'),
    new Website('123', 'Facebook', '456', 'Lorem'),
    new Website('234', 'Tweeter', '456', 'Lorem'),
    new Website('890', 'Go', '123', 'Lorem'),
    new Website('567', 'Tic Tac Toe', '123', 'Lorem'),
    new Website('678', 'Checkers', '123', 'Lorem'),
    new Website('789', 'Chess', '234', 'Lorem'),
  ];



  createWebsite(userId: string, name: string, description: string) {
    const id = Math.random().toString();
    this.websites.push(new Website(id, name, userId, description));
  }

  findWebsitesByUser(userId: string) {
    const userWeb = [];
    this.websites.forEach(function (website) {
      if (website.developerId === userId) {
        userWeb.push(website);
      }
    });
    return userWeb;
  }
  findWebsiteById(websiteId: string) {
    const web = this.websites.find(website => website.id === websiteId);
    return new Website(web.id, web.name, web.developerId, web.description);
  }
  updateWebsite(websiteId: string, newWebsite: Website) {
    const index: number = this.websites.findIndex(website => website.id === websiteId);
    this.websites[index] = newWebsite;
  }
  deleteWebsite(websiteId: string) {
    const index: number = this.websites.findIndex(website => website.id === websiteId);
    this.websites.splice(index, 1);
  }




}
