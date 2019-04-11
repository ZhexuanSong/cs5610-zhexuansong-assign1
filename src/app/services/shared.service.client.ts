import {Injectable} from '@angular/core';
import {User} from '../models/user.model.client';
import {Website} from '../models/website.model.client';
import {Page} from '../models/page.model.client';
import {Widget} from '../models/widget.model.client';
@Injectable()

export class SharedService {
    user: User;
    websites: Website[];
    pages: Page[];
    widgets: Widget[];
    widget: Widget;
}
