import { Injectable } from '@angular/core';
import {Website} from './model/Website';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {
  
  websites = [

    { "_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem" },

    { "_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem" },

    { "_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem" },

    { "_id": "890", "name": "Go", "developerId": "123", "description": "Lorem" },

    { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },

    { "_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem" },

    { "_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem" }

  ];
  constructor() { }
  createWebsite(website){
    var lastId = this.websites[this.websites.length-1]._id;
    website._id = (+(lastId)+1).toString();
    this.websites.push(website);
  }

  

  findWebsitesByUser(userId) {
    let res = [];
    for (var website of this.websites)  {
      if (website.developerId === userId) {
        res.push(website);
      }
    }
    return res;

  }
  findWebsiteById(websiteId){
    for (var website of this.websites)  {
      if (website._id === websiteId) {
        return website;
      }
    }
    return null;

  }

  updateWebsite(websiteId, website) {
    for (var i = 0; i < this.websites.length; i++) {
      if (this.websites[i]._id === websiteId) {
        this.websites[i] = website;
        return;
      }
    }
  }

  deleteWebsite(websiteId){
    for (var i = 0; i < this.websites.length; i++) {
      if (this.websites[i]._id === websiteId) {
        this.websites.splice(i,1);
        return;
      }
    }
  }

}
