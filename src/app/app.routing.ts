import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';

import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';

import { AuthGuard } from './services/auth-guard.service';
import { MatchCalenderComponent } from './components/matches/match-calender/match-calender.component';
import { SearchMatchObjectsComponent } from './components/matches/search-match-objects/search-match-objects.component';
import { MatchDetailsComponent } from './components/matches/match-details/match-details.component';
import { UserManageFavoritesComponent } from './components/user/user-manage-favorites/user-manage-favorites.component';

import { UserSearchFavoritesComponent } from './components/user/user-search-favorites/user-search-favorites.component';
import { RegisteredUserHomeComponent } from './components/home/registered-user-home/registered-user-home.component';
import {LeagueComponent} from './components/league/league.component';
import {TeamComponent} from './components/team/team.component';
import { PlayerComponent } from './components/player/player.component';
import { FriendProfileComponent } from './components/user/friend-profile/friend-profile.component';
import {SearchUsersComponent} from './components/user/search-users/search-users.component';
import {ReviewNewComponent} from './components/review/review-new/review-new.component';
import {ReviewEditComponent} from './components/review/review-edit/review-edit.component';
import {AdminHomeComponent} from './components/user/admin/admin-home/admin-home.component';
import {UserHomeNewComponent} from './components/home/user-home-new/user-home-new.component';

const APP_ROUTES: Routes = [
  { path : '', component : HomeComponent},
  { path : 'test', component: TestComponent},
  { path : 'login' , component: LoginComponent},
  { path : 'register' , component: RegisterComponent },
  { path : 'calender' , component: MatchCalenderComponent},
  { path : 'search' , component: SearchMatchObjectsComponent},
  { path : 'admin/:userID/home' , component: AdminHomeComponent, canActivate: [AuthGuard] },
  { path : 'user/:userID' , component: ProfileComponent, canActivate: [AuthGuard] },
  { path : 'user/:userID/favorites' , component: UserManageFavoritesComponent, canActivate: [AuthGuard]},
  { path : 'user/:userID/favorites/searchFavorites' , component: UserSearchFavoritesComponent, canActivate: [AuthGuard]},
  { path : 'user/:userID/home' , component: RegisteredUserHomeComponent, canActivate: [AuthGuard]},
  { path : 'league/:leagueID' , component: LeagueComponent, canActivate: [AuthGuard]},
  { path : 'team/:teamID' , component: TeamComponent, canActivate: [AuthGuard]},
  { path : 'player/:playerID' , component: PlayerComponent, canActivate: [AuthGuard]},
  { path : 'match/:matchID' , component: MatchDetailsComponent, canActivate: [AuthGuard]},
  { path : 'profile/:friendID' , component: FriendProfileComponent, canActivate: [AuthGuard]},
  { path : 'users/search' , component: SearchUsersComponent, canActivate: [AuthGuard]},
  { path : 'review/new' , component: ReviewNewComponent, canActivate: [AuthGuard]},
  { path : 'review/:reviewID' , component: ReviewEditComponent, canActivate: [AuthGuard]},
  { path : 'home/new' , component: UserHomeNewComponent},
];

// Export the routes as module providers
export const Routing = RouterModule.forRoot(APP_ROUTES);
