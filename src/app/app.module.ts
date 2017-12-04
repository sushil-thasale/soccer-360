import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { Routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { TestService } from './services/test.service.client';

import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { PageListComponent } from './components/page/page-list/page-list.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';
import { WidgetHeaderComponent } from './components/widget/widget-edit//widget-header/widget-header.component';
import { WidgetImageComponent } from './components/widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import { WidgetHtmlComponent} from './components/widget/widget-edit/widget-html/widget-html.component';
import { WidgetChooserComponent } from './components/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';

import { HeaderViewComponent } from './components/widget/widget-view/header-view/header-view.component';
import { YoutubeViewComponent } from './components/widget/widget-view/youtube-view/youtube-view.component';
import { ImageViewComponent } from './components/widget/widget-view/image-view/image-view.component';
import { HtmlViewComponent } from './components/widget/widget-view/html-view/html-view.component';

import { UserService } from './services/user.service.client';
import { WebsiteService } from './services/website.service.client';
import { PageService } from './services/page.service.client';
import { WidgetService } from './services/widget.service.client';
import { FlickrService } from './services/flickr.service.client';

import { SortableDirective } from '../../server-side/directives/sortable.directive';

import { QuillEditorModule } from 'ngx-quill-editor';
import { WidgetTextComponent } from './components/widget/widget-edit/widget-text/widget-text.component';
import { TextViewComponent } from './components/widget/widget-view/text-view/text-view.component';
import { FlickrImageSearchComponent } from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';

import { SharedService } from './services/shared.service';
import { AuthGuard } from './services/auth-guard.service';

import { MatchesComponent } from './components/matches/matches.component';
import { SoccerServiceClient } from './services/soccer.service.client';
import { MatchListComponent } from './components/matches/match-list/match-list.component';

import { MatchCalenderComponent } from './components/matches/match-calender/match-calender.component';
import { DpDatePickerModule } from 'ng2-date-picker';
import { SearchMatchObjectsComponent } from './components/matches/search-match-objects/search-match-objects.component';
import { HomeFooterComponent } from './components/home/home-footer/home-footer.component';
import { HomeUserProfileComponent } from './components/user/home-user-profile/home-user-profile.component';
import { HomeHeaderComponent } from "./components/home/home-header/home-header.component";

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    WebsiteListComponent,
    PageListComponent,
    PageEditComponent,
    PageNewComponent,
    WidgetHeaderComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent,
    WidgetHtmlComponent,
    WidgetTextComponent,
    WidgetChooserComponent,
    WidgetEditComponent,
    WidgetListComponent,
    HeaderViewComponent,
    YoutubeViewComponent,
    ImageViewComponent,
    HtmlViewComponent,
    SortableDirective,
    TextViewComponent,
    FlickrImageSearchComponent,
    MatchesComponent,
    MatchListComponent,
    MatchCalenderComponent,
    SearchMatchObjectsComponent,
    HomeFooterComponent,
    HomeHeaderComponent,
    HomeUserProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing,
    QuillEditorModule,
    DpDatePickerModule
  ],
  providers: [
    TestService,
    UserService,
    WebsiteService,
    PageService,
    WidgetService,
    SortableDirective,
    FlickrService,
    SharedService,
    AuthGuard,
    SoccerServiceClient
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
