import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './components/user/login/login.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {RegisterComponent} from './components/user/register/register.component';
import {WebsiteNewComponent} from './components/website/website-new/website-new.component';
import {WebsiteEditComponent} from './components/website/website-edit/website-edit.component';
import {WebsiteListComponent} from './components/website/website-list/website-list.component';
import {PageListComponent} from './components/page/page-list/page-list.component';
import {PageEditComponent} from './components/page/page-edit/page-edit.component';
import {PageNewComponent} from './components/page/page-new/page-new.component';
import {WidgetChooserComponent} from './components/widget/widget-chooser/widget-chooser.component';
import {WidgetEditComponent} from './components/widget/widget-edit/widget-edit.component';
import {WidgetListComponent} from './components/widget/widget-list/widget-list.component';
import {WidgetHeaderComponent} from './components/widget/widget-edit/widget-header/widget-header.component';
import {WidgetImageComponent} from './components/widget/widget-edit/widget-image/widget-image.component';
import {WidgetYoutubeComponent} from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import {WidgetTextComponent} from './components/widget/widget-edit/widget-text/widget-text.component';
import {WidgetHtmlComponent} from './components/widget/widget-edit/widget-html/widget-html.component';
import {FlickrImageSearchComponent} from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';
import {AuthGuard} from './services/auth-guard.service';


const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'user/website', component: WebsiteListComponent, canActivate: [AuthGuard]},
  {path: 'user/website/new', component: WebsiteNewComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:wid', component: WebsiteEditComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:wid/page', component: PageListComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:wid/page/new', component: PageNewComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:wid/page/:pid', component: PageEditComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:wid/page/:pid/widget', component: WidgetListComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:wid/page/:pid/widget/new', component: WidgetChooserComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:wid/page/:pid/widget/new/header', component: WidgetHeaderComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:wid/page/:pid/widget/new/image', component: WidgetImageComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:wid/page/:pid/widget/new/youtube', component: WidgetYoutubeComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:wid/page/:pid/widget/new/html', component: WidgetHtmlComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:wid/page/:pid/widget/new/text', component: WidgetTextComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:wid/page/:pid/widget/:wgid/flickr', component: FlickrImageSearchComponent, canActivate: [AuthGuard]}
];

// const routes: Routes = [{path: '/login', component: LoginComponent},
//   {path: '/profile', component: ProfileComponent},
//   {path: '/register', component: RegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing = RouterModule.forRoot(appRoutes);

