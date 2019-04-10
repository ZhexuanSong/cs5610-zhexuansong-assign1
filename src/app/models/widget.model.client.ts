export class Widget {
  _id: string;
  type: string;
  name: string;
  pageId: string;
  size: number;
  text: string;
  width: string;
  url: string;
  rows: string;
  formatted: boolean;
  placeholder: string;

  constructor(type, name, pageId, size, text, width, url,rows,formatted,placeholder) {
    this.type = type;
    this.pageId = pageId;
    this.size = size;
    this.text = text;
    this.url = url;
    this.width = width;
    this.rows = rows;
    this.formatted = formatted;
    this.placeholder = placeholder;
  }
}
