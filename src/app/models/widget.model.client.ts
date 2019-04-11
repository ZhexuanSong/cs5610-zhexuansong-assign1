// export interface Widget {
//   _id: string;
//   widgetType: string;
//   pageId: string;
//   name: string;
// }
//
// export class WidgetHeading implements Widget {
//   _id: string;
//   pageId: string;
//   name: string;
//   widgetType: string;
//   size: number;
//   text: string;
//
//   constructor(_id: string, widgetType: string, name: string, pageId: string, size: number, text: string) {
//     this._id = _id;
//     this.widgetType = widgetType;
//     this.name = name;
//     this.pageId = pageId;
//     this.size = size;
//     this.text = text;
//   }
// }
//
// export class WidgetImage implements Widget {
//   _id: string;
//   pageId: string;
//   widgetType: string;
//   name: string;
//   text: string;
//   width: string;
//   url: string;
//
//   constructor(_id: string, widgetType: string, name: string, pageId: string, width: string, url: string) {
//     this._id = _id;
//     this.widgetType = widgetType;
//     this.name = name;
//     this.pageId = pageId;
//     this.width = width;
//     this.url = url;
//   }
// }
//
// export class WidgetHtml implements Widget {
//   _id: string;
//   pageId: string;
//   name: string;
//   widgetType: string;
//   text: string;
//
//   constructor(_id: string, widgetType: string, name: string, pageId: string, text: string) {
//     this._id = _id;
//     this.widgetType = widgetType;
//     this.name = name;
//     this.pageId = pageId;
//     this.text = text;
//   }
// }
//
// export class WidgetYoutube implements Widget {
//   _id: string;
//   pageId: string;
//   name: string;
//   widgetType: string;
//   width: string;
//   url: string;
//   text: string
//
//   constructor(_id: string, widgetType: string, name: string, pageId: string, text: string, width: string, url: string) {
//     this._id = _id;
//     this.widgetType = widgetType;
//     this.name = name;
//     this.pageId = pageId;
//     this.text = text;
//     this.width = width;
//     this.url = url;
//   }
// }
export class Widget {
  _id: String;
  widgetType: String;
  name: String;
  pageId: String;
  size: String;
  text: String;
  url: String;
  width: String;
  height: Number;
  rows: Number;
  class: String;
  icon: String;
  deletable: Boolean;
  formatted: Boolean;
  placeholder: String;

  constructor(_id, widgetType, name = '', pageId, size = '1', text = '', width = '100%', url = '') {
    this._id = _id;
    this.widgetType = widgetType;
    this.name = name;
    this.pageId = pageId;
    this.size = size;
    this.text = text;
    this.url = url;
    this.width = width;
    this.height = 0;
    this.rows = 0;
    this.class = '';
    this.icon = '';
    this.deletable = false;
    this.formatted = false;
    this.placeholder = '';
  }
}
