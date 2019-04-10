export class Widget {
  name: String;
  _id: String;
  widgetType: String;
  pageId: String;
  size: String;
  text: String;
  width: String;
  url: String;
  rows: number;
  placeholder: String;
  formatted: boolean;
  position: number;

  constructor(_id, name, widgetType, pageId, size, text, width, url,
              rows = 1, placeholder = 'placeholder', formatted = false, position = -1) {
    this._id = _id;
    this.name = name;
    this.widgetType = widgetType;
    this.size = size;
    this.pageId = pageId;
    this.url = url;
    this.width = width;
    this.text = text;
    this.rows = rows;
    this.placeholder = placeholder;
    this.formatted = formatted;
    this.position = position;
  }
}
