import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { TestComponent } from './components/test/test.component';

import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';

import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';

import { PageListComponent } from './components/page/page-list/page-list.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';

import { WidgetChooserComponent } from './components/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';

import { AuthGuard } from './services/auth-guard.service';
import { MatchCalenderComponent } from './components/matches/match-calender/match-calender.component';
import { SearchMatchObjectsComponent } from './components/matches/search-match-objects/search-match-objects.component';
import { MatchDetailsComponent } from './components/matches/match-details/match-details.component';
import { UserManageFavoritesComponent } from './components/user/user-manage-favorites/user-manage-favorites.component';

import { UserSearchLeaguesComponent } from './components/user/user-search-leagues/user-search-leagues.component';

const APP_ROUTES: Routes = [
  { path : '', component : HomeComponent},
  { path : 'test', component: TestComponent},
  { path : 'login' , component: LoginComponent},
  { path : 'register' , component: RegisterComponent },
  { path : 'user/:userID' , component: ProfileComponent, canActivate: [AuthGuard] },
  { path : 'user/:userID/website' , component: WebsiteListComponent, canActivate: [AuthGuard]},
  { path : 'user/:userID/website/new' , component: WebsiteNewComponent, canActivate: [AuthGuard]},
  { path : 'user/:userID/website/:websiteID' , component: WebsiteEditComponent, canActivate: [AuthGuard]},
  { path : 'user/:userID/website/:websiteID/page' , component: PageListComponent, canActivate: [AuthGuard]},
  { path : 'user/:userID/website/:websiteID/page/new' , component: PageNewComponent, canActivate: [AuthGuard]},
  { path : 'user/:userID/website/:websiteID/page/:pageID' , component: PageEditComponent, canActivate: [AuthGuard]},
  { path : 'user/:userID/website/:websiteID/page/:pageID/widget' , component: WidgetListComponent, canActivate: [AuthGuard]},
  { path : 'user/:userID/website/:websiteID/page/:pageID/widget/new' , component: WidgetChooserComponent, canActivate: [AuthGuard]},
  { path : 'user/:userID/website/:websiteID/page/:pageID/widget/:widgetID' , component: WidgetEditComponent, canActivate: [AuthGuard]},
  { path : 'calender' , component: MatchCalenderComponent},
  { path : 'search' , component: SearchMatchObjectsComponent},
  { path : 'match/:matchID' , component: MatchDetailsComponent},
  { path : 'user/:userID/favorites' , component: UserManageFavoritesComponent},
  { path : 'user/:userID/favorites/searchLeagues' , component: UserSearchLeaguesComponent},
];

// Export the routes as module providers
export const Routing = RouterModule.forRoot(APP_ROUTES);
