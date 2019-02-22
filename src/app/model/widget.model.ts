export class Widget {
  id: string;
  widgetType: string;
  pageId: string;
  size: string;
  text: string;
  url: string;
  width: string;
  constructor(id: string, widgetType: string, pageId: string, size: string, text: string, width: string, url: string) {
    this.id = id;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this.size = size;
    this.text = text;
    this.url = url;
    this.width = width;
  }
}
