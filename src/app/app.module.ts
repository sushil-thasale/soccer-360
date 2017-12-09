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

import { UserService } from './services/user.service.client';
import { FlickrService } from './services/flickr.service.client';

import { SortableDirective } from '../../server-side/directives/sortable.directive';

import { QuillEditorModule } from 'ngx-quill-editor';

import { SharedService } from './services/shared.service';
import { AuthGuard } from './services/auth-guard.service';

import { MatchesComponent } from './components/matches/matches.component';
import { SoccerServiceClient } from './services/soccer.service.client';
import { MatchListComponent } from './components/matches/match-list/match-list.component';

import { MatchCalenderComponent } from './components/matches/match-calender/match-calender.component';
import { DpDatePickerModule } from 'ng2-date-picker';
import { SearchMatchObjectsComponent } from './components/matches/search-match-objects/search-match-objects.component';
import { HomeFooterComponent } from './components/home/registered-home-footer/registered-home-footer.component';
import { HomeUserProfileComponent } from './components/user/home-user-profile/home-user-profile.component';
import { HomeHeaderComponent } from './components/home/registered-home-header/registered-home-header.component';

import { MatchDetailsComponent } from './components/matches/match-details/match-details.component';
import { MatchEventsComponent} from './components/matches/match-details/match-events/match-events.component';
import { MatchFactsComponent} from './components/matches/match-details/match-facts/match-facts.component';
import { MatchLineupComponent} from './components/matches/match-details/match-lineup/match-lineup.component';
import { MatchCommentaryComponent} from './components/matches/match-details/match-commentary/match-commentary.component';
import { MatchStatsComponent} from './components/matches/match-details/match-stats/match-stats.component';
import { MatchPlayerStatsComponent} from './components/matches/match-details/match-player-stats/match-player-stats.component';
import { MatchTeamStandingsComponent} from './components/matches/match-details/match-team-standings/match-team-standings.component';
import { UserManageFavoritesComponent } from './components/user/user-manage-favorites/user-manage-favorites.component';
import { LeagueService } from './services/league.service.client';

import { UserSearchFavoritesComponent } from './components/user/user-search-favorites/user-search-favorites.component';
import {TeamService } from './services/team.service.client';
import { PlayerService } from './services/player.service.client';
import { RegisteredUserHomeComponent } from './components/home/registered-user-home/registered-user-home.component';
import {UnregisteredHomeFooterComponent } from './components/home/unregistered-home-footer/unregistered-home-footer.component';
import { UnregisteredHomeHeaderComponent} from './components/home/unregistered-home-header/unregistered-home-header.component';
import { UnregisteredHomeUserProfileComponent } from './components/user/unregistered-home-user-profile/unregistered-home-user-profile.component';
import { LeagueComponent } from './components/league/league.component';
import { SoccerNewsComponent } from './components/soccer-news/soccer-news.component';
import { LeagueStatsComponent } from './components/league/league-stats/league-stats.component';
import { TeamComponent } from './components/team/team.component';
import { TeamOverviewComponent} from './components/team/team-overview/team-overview.component';
import { TeamStatsComponent} from './components/team/team-stats/team-stats.component';
import { TeamSquadComponent} from './components/team/team-squad/team-squad.component';
import { TeamTransfersComponent } from './components/team/team-transfers/team-transfers.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayerFactsComponent} from './components/player/player-facts/player-facts.component';
import { PlayerClubComponent} from './components/player/player-club/player-club.component';
import { PlayerCupsComponent} from './components/player/player-cups/player-cups.component';
import { PlayerClubInternationalComponent} from './components/player/player-club-international/player-club-international.component';
import { PlayerNationalComponent } from './components/player/player-national/player-national.component';
import { SearchObjectsComponent } from './components/matches/search-match-objects/search-objects/search-objects.component';

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    SortableDirective,
    MatchesComponent,
    MatchListComponent,
    MatchCalenderComponent,
    SearchMatchObjectsComponent,
    HomeFooterComponent,
    HomeHeaderComponent,
    HomeUserProfileComponent,
    MatchDetailsComponent,
    MatchEventsComponent,
    MatchFactsComponent,
    MatchLineupComponent,
    MatchCommentaryComponent,
    MatchStatsComponent,
    MatchPlayerStatsComponent,
    MatchTeamStandingsComponent,
    UserManageFavoritesComponent,
    UserSearchFavoritesComponent,
    RegisteredUserHomeComponent,
    UnregisteredHomeFooterComponent,
    UnregisteredHomeHeaderComponent,
    UnregisteredHomeUserProfileComponent,
    LeagueComponent,
    SoccerNewsComponent,
    LeagueStatsComponent,
    TeamComponent,
    TeamOverviewComponent,
    TeamStatsComponent,
    TeamSquadComponent,
    TeamTransfersComponent,
    PlayerComponent,
    PlayerClubComponent,
    PlayerCupsComponent,
    PlayerClubInternationalComponent,
    PlayerNationalComponent,
    PlayerFactsComponent,
    SearchObjectsComponent
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
    SortableDirective,
    FlickrService,
    SharedService,
    AuthGuard,
    SoccerServiceClient,
    LeagueService,
    TeamService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
