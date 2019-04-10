import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './views/user/login/login.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {RegisterComponent} from './views/user/register/register.component';
import {HomeComponent} from './views/home/home.component';
import {WebsiteListComponent} from './views/website/website-list/website-list.component';
import {PageListComponent} from './views/page/page-list/page-list.component';
import {WebsiteNewComponent} from './views/website/website-new/website-new.component';
import {WebsiteEditComponent} from './views/website/website-edit/website-edit.component';
import {PageNewComponent} from './views/page/page-new/page-new.component';
import {PageEditComponent} from './views/page/page-edit/page-edit.component';
import {WidgetListComponent} from './views/widget/widget-list/widget-list.component';
import {WidgetChooserComponent} from './views/widget/widget-chooser/widget-chooser.component';
import {WidgetHeaderComponent} from './views/widget/widget-edit/widget-header/widget-header.component';
import {WidgetImageComponent} from './views/widget/widget-edit/widget-image/widget-image.component';
import {WidgetYoutubeComponent} from './views/widget/widget-edit/widget-youtube/widget-youtube.component';
import {WebsiteFooterComponent} from './views/website/website-footer/website-footer.component';
import {PageFooterComponent} from './views/page/page-footer/page-footer.component';
import {FlickrImageSearchComponent} from './views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';
import {WidgetHtmlComponent} from './views/widget/widget-edit/widget-html/widget-html.component';
import {WidgetTextComponent} from './views/widget/widget-edit/widget-text/widget-text.component';
import {AuthGuard} from './services/auth-guard.service.client';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'profile/website', component: WebsiteListComponent},
  {path: 'profile/website/new', component: WebsiteNewComponent},
  {path: 'profile/website/:websiteId/edit', component: WebsiteEditComponent},
  {path: 'profile/website/:websiteId/page', component: PageListComponent},
  {path: 'profile/website/:websiteId/page/new', component: PageNewComponent},
  {path: 'profile/website/:websiteId/page/:pageId/edit', component: PageEditComponent},
  {path: 'profile/website/:websiteId/page/:pageId/widget', component: WidgetListComponent},
  {path: 'profile/website/:websiteId/page/:pageId/widget/new', component: WidgetChooserComponent},
  {path: 'profile/website/:websiteId/page/:pageId/widget/new/header', component: WidgetHeaderComponent},
  {path: 'profile/website/:websiteId/page/:pageId/widget/new/image', component: WidgetImageComponent},
  {path: 'profile/website/:websiteId/page/:pageId/widget/new/html', component: WidgetHtmlComponent},
  {path: 'profile/website/:websiteId/page/:pageId/widget/new/text', component: WidgetTextComponent},
  {path: 'profile/website/:websiteId/page/:pageId/widget/new/youtube', component: WidgetYoutubeComponent},
  {path: 'profile/website/:websiteId/page/:pageId/widget/:widgetId/edit/header', component: WidgetHeaderComponent},
  {path: 'profile/website/:websiteId/page/:pageId/widget/:widgetId/edit/image', component: WidgetImageComponent},
  {path: 'profile/website/:websiteId/page/:pageId/widget/:widgetId/edit/html', component: WidgetHtmlComponent},
  {path: 'profile/website/:websiteId/page/:pageId/widget/:widgetId/edit/text', component: WidgetTextComponent},
  {path: 'profile/website/:websiteId/page/:pageId/widget/:widgetId/flickr', component: FlickrImageSearchComponent},
  {path: 'profile/website/:websiteId/page/:pageId/widget/:widgetId/edit/youtube', component: WidgetYoutubeComponent},
  {path: 'website/footer', component: WebsiteFooterComponent},
  {path: 'page/footer', component: PageFooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
