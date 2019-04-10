export class Widget {
  _id: String;
  type: String;
  pageId: String;
  size: String;
  text: String;
  url: String;
  width: String;
  name: String;
  formatted: Boolean;
  rows: number;
  placeholder: String;

  constructor(_id, type, pageId, size, text, width, url, name, formatted = false, rows = 1, placeholder = 'placeholder') {
    this._id = _id;
    this.type = type;
    this.pageId = pageId;
    this.size = size;
    this.url = url;
    this.width = width;
    this.name = name;
    this.text = text;
    this.formatted = formatted;
    this.rows = rows;
    this.placeholder = placeholder;
  }
}
