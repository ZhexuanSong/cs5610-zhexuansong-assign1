import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './views/user/login/login.component';
import { ProfileComponent } from './views/user/profile/profile.component';
import { RegisterComponent } from './views/user/register/register.component';
import {routing} from './app.routing';
import { WebsiteListComponent } from './views/website/website-list/website-list.component';
import { WidgetChoooserComponent } from './views/widget/widget-choooser/widget-choooser.component';
import { WidgetEditComponent } from './views/widget/widget-edit/widget-edit.component';
import { WidgetListComponent } from './views/widget/widget-list/widget-list.component';
import { WidgetHeaderComponent } from './views/widget/widget-edit/widget-header/widget-header.component';
import { WidgetImageComponent } from './views/widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './views/widget/widget-edit/widget-youtube/widget-youtube.component';
import { WebsiteEditComponent } from './views/website/website-edit/website-edit.component';
import {PageNewComponent} from './views/page/page-new/page-new.component';
import {PageEditComponent} from './views/page/page-edit/page-edit.component';
import {PageListComponent} from './views/page/page-list/page-list.component';
import {WebsiteNewComponent} from './views/website/website-new/website-new.component';
import {UserService} from './service/user.service';
import {PageService} from './service/page.service';
import {WebsiteService} from './service/website.service';
import {WidgetService} from './service/widget.service';
import { HeadingComponent } from './views/widget/widget-list/heading/heading.component';
import { ImageComponent } from './views/widget/widget-list/image/image.component';
import { YoutubeComponent } from './views/widget/widget-list/youtube/youtube.component';
import { HtmlComponent } from './views/widget/widget-list/html/html.component';
import { WidgetNewComponent } from './views/widget/widget-choooser/widget-new/widget-new.component';
import { NewHeadingComponent } from './views/widget/widget-choooser/widget-new/new-heading/new-heading.component';
import { NewImageComponent } from './views/widget/widget-choooser/widget-new/new-image/new-image.component';
import { NewYoutubeComponent } from './views/widget/widget-choooser/widget-new/new-youtube/new-youtube.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WebsiteListComponent,
    PageNewComponent,
    PageEditComponent,
    PageListComponent,
    WidgetChoooserComponent,
    WidgetEditComponent,
    WidgetListComponent,
    WidgetHeaderComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    HeadingComponent,
    ImageComponent,
    YoutubeComponent,
    HtmlComponent,
    NewHeadingComponent,
    NewImageComponent,
    NewYoutubeComponent,
    WidgetNewComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
  ],
  providers: [UserService, PageService, WebsiteService, WidgetService],
  bootstrap: [AppComponent]
  // decide where you start
})
export class AppModule { }
