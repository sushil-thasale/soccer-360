webpackJsonp(["main"],{

/***/ "../../../../../server-side/directives/sortable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortableDirective = (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                console.log('Old position: ' + ui.item.index());
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                console.log('New position: ' + ui.item.index());
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    return SortableDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SortableDirective.prototype, "newIndexes", void 0);
SortableDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appSortable]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], SortableDirective);

var _a;
//# sourceMappingURL=sortable.directive.js.map

/***/ }),

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__server_side_directives_sortable_directive__ = __webpack_require__("../../../../../server-side/directives/sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_matches_matches_component__ = __webpack_require__("../../../../../src/app/components/matches/matches.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_soccer_service_client__ = __webpack_require__("../../../../../src/app/services/soccer.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_matches_match_list_match_list_component__ = __webpack_require__("../../../../../src/app/components/matches/match-list/match-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_matches_match_calender_match_calender_component__ = __webpack_require__("../../../../../src/app/components/matches/match-calender/match-calender.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_date_picker__ = __webpack_require__("../../../../ng2-date-picker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_date_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng2_date_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_matches_search_match_objects_search_match_objects_component__ = __webpack_require__("../../../../../src/app/components/matches/search-match-objects/search-match-objects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_home_registered_home_footer_registered_home_footer_component__ = __webpack_require__("../../../../../src/app/components/home/registered-home-footer/registered-home-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_user_home_user_profile_home_user_profile_component__ = __webpack_require__("../../../../../src/app/components/user/home-user-profile/home-user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_home_registered_home_header_registered_home_header_component__ = __webpack_require__("../../../../../src/app/components/home/registered-home-header/registered-home-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_matches_match_details_match_details_component__ = __webpack_require__("../../../../../src/app/components/matches/match-details/match-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_matches_match_details_match_events_match_events_component__ = __webpack_require__("../../../../../src/app/components/matches/match-details/match-events/match-events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_matches_match_details_match_facts_match_facts_component__ = __webpack_require__("../../../../../src/app/components/matches/match-details/match-facts/match-facts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_matches_match_details_match_lineup_match_lineup_component__ = __webpack_require__("../../../../../src/app/components/matches/match-details/match-lineup/match-lineup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_matches_match_details_match_commentary_match_commentary_component__ = __webpack_require__("../../../../../src/app/components/matches/match-details/match-commentary/match-commentary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_matches_match_details_match_stats_match_stats_component__ = __webpack_require__("../../../../../src/app/components/matches/match-details/match-stats/match-stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_matches_match_details_match_player_stats_match_player_stats_component__ = __webpack_require__("../../../../../src/app/components/matches/match-details/match-player-stats/match-player-stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_matches_match_details_match_team_standings_match_team_standings_component__ = __webpack_require__("../../../../../src/app/components/matches/match-details/match-team-standings/match-team-standings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_user_user_manage_favorites_user_manage_favorites_component__ = __webpack_require__("../../../../../src/app/components/user/user-manage-favorites/user-manage-favorites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_league_service_client__ = __webpack_require__("../../../../../src/app/services/league.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_user_user_search_favorites_user_search_favorites_component__ = __webpack_require__("../../../../../src/app/components/user/user-search-favorites/user-search-favorites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_team_service_client__ = __webpack_require__("../../../../../src/app/services/team.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_player_service_client__ = __webpack_require__("../../../../../src/app/services/player.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_home_registered_user_home_registered_user_home_component__ = __webpack_require__("../../../../../src/app/components/home/registered-user-home/registered-user-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_home_unregistered_home_footer_unregistered_home_footer_component__ = __webpack_require__("../../../../../src/app/components/home/unregistered-home-footer/unregistered-home-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_home_unregistered_home_header_unregistered_home_header_component__ = __webpack_require__("../../../../../src/app/components/home/unregistered-home-header/unregistered-home-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_user_unregistered_home_user_profile_unregistered_home_user_profile_component__ = __webpack_require__("../../../../../src/app/components/user/unregistered-home-user-profile/unregistered-home-user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_league_league_component__ = __webpack_require__("../../../../../src/app/components/league/league.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_league_league_stats_league_stats_component__ = __webpack_require__("../../../../../src/app/components/league/league-stats/league-stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_team_team_component__ = __webpack_require__("../../../../../src/app/components/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_team_team_overview_team_overview_component__ = __webpack_require__("../../../../../src/app/components/team/team-overview/team-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_team_team_stats_team_stats_component__ = __webpack_require__("../../../../../src/app/components/team/team-stats/team-stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_team_team_squad_team_squad_component__ = __webpack_require__("../../../../../src/app/components/team/team-squad/team-squad.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__components_team_team_transfers_team_transfers_component__ = __webpack_require__("../../../../../src/app/components/team/team-transfers/team-transfers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__components_player_player_component__ = __webpack_require__("../../../../../src/app/components/player/player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_player_player_facts_player_facts_component__ = __webpack_require__("../../../../../src/app/components/player/player-facts/player-facts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__components_player_player_club_player_club_component__ = __webpack_require__("../../../../../src/app/components/player/player-club/player-club.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__components_player_player_cups_player_cups_component__ = __webpack_require__("../../../../../src/app/components/player/player-cups/player-cups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__components_player_player_club_international_player_club_international_component__ = __webpack_require__("../../../../../src/app/components/player/player-club-international/player-club-international.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__components_player_player_national_player_national_component__ = __webpack_require__("../../../../../src/app/components/player/player-national/player-national.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__components_matches_search_match_objects_search_objects_search_objects_component__ = __webpack_require__("../../../../../src/app/components/matches/search-match-objects/search-objects/search-objects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__components_user_follows_sidebar_follows_sidebar_component__ = __webpack_require__("../../../../../src/app/components/user/follows-sidebar/follows-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__components_user_friend_profile_friend_profile_component__ = __webpack_require__("../../../../../src/app/components/user/friend-profile/friend-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__components_user_search_users_search_users_component__ = __webpack_require__("../../../../../src/app/components/user/search-users/search-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__components_user_search_users_users_search_bar_users_search_bar_component__ = __webpack_require__("../../../../../src/app/components/user/search-users/users-search-bar/users-search-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__components_review_review_new_review_new_component__ = __webpack_require__("../../../../../src/app/components/review/review-new/review-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__components_review_review_edit_review_edit_component__ = __webpack_require__("../../../../../src/app/components/review/review-edit/review-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__services_review_service_client__ = __webpack_require__("../../../../../src/app/services/review.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__components_review_review_list_review_list_component__ = __webpack_require__("../../../../../src/app/components/review/review-list/review-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__components_review_review_display_review_display_component__ = __webpack_require__("../../../../../src/app/components/review/review-display/review-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__services_critic_service_client__ = __webpack_require__("../../../../../src/app/services/critic.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__components_user_admin_admin_home_admin_home_component__ = __webpack_require__("../../../../../src/app/components/user/admin/admin-home/admin-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__components_user_admin_all_users_all_users_component__ = __webpack_require__("../../../../../src/app/components/user/admin/all-users/all-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__components_user_admin_all_critics_all_critics_component__ = __webpack_require__("../../../../../src/app/components/user/admin/all-critics/all-critics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__components_user_admin_pending_requests_pending_requests_component__ = __webpack_require__("../../../../../src/app/components/user/admin/pending-requests/pending-requests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__components_home_user_home_new_user_home_new_component__ = __webpack_require__("../../../../../src/app/components/home/user-home-new/user-home-new.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__server_side_directives_sortable_directive__["a" /* SortableDirective */],
            __WEBPACK_IMPORTED_MODULE_18__components_matches_matches_component__["a" /* MatchesComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_matches_match_list_match_list_component__["a" /* MatchListComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_matches_match_calender_match_calender_component__["a" /* MatchCalenderComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_matches_search_match_objects_search_match_objects_component__["a" /* SearchMatchObjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_home_registered_home_footer_registered_home_footer_component__["a" /* HomeFooterComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_home_registered_home_header_registered_home_header_component__["a" /* HomeHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_user_home_user_profile_home_user_profile_component__["a" /* HomeUserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_matches_match_details_match_details_component__["a" /* MatchDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_matches_match_details_match_events_match_events_component__["a" /* MatchEventsComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_matches_match_details_match_facts_match_facts_component__["a" /* MatchFactsComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_matches_match_details_match_lineup_match_lineup_component__["a" /* MatchLineupComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_matches_match_details_match_commentary_match_commentary_component__["a" /* MatchCommentaryComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_matches_match_details_match_stats_match_stats_component__["a" /* MatchStatsComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_matches_match_details_match_player_stats_match_player_stats_component__["a" /* MatchPlayerStatsComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_matches_match_details_match_team_standings_match_team_standings_component__["a" /* MatchTeamStandingsComponent */],
            __WEBPACK_IMPORTED_MODULE_35__components_user_user_manage_favorites_user_manage_favorites_component__["a" /* UserManageFavoritesComponent */],
            __WEBPACK_IMPORTED_MODULE_37__components_user_user_search_favorites_user_search_favorites_component__["a" /* UserSearchFavoritesComponent */],
            __WEBPACK_IMPORTED_MODULE_40__components_home_registered_user_home_registered_user_home_component__["a" /* RegisteredUserHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_41__components_home_unregistered_home_footer_unregistered_home_footer_component__["a" /* UnregisteredHomeFooterComponent */],
            __WEBPACK_IMPORTED_MODULE_42__components_home_unregistered_home_header_unregistered_home_header_component__["a" /* UnregisteredHomeHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_43__components_user_unregistered_home_user_profile_unregistered_home_user_profile_component__["a" /* UnregisteredHomeUserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_44__components_league_league_component__["a" /* LeagueComponent */],
            __WEBPACK_IMPORTED_MODULE_45__components_league_league_stats_league_stats_component__["a" /* LeagueStatsComponent */],
            __WEBPACK_IMPORTED_MODULE_46__components_team_team_component__["a" /* TeamComponent */],
            __WEBPACK_IMPORTED_MODULE_47__components_team_team_overview_team_overview_component__["a" /* TeamOverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_48__components_team_team_stats_team_stats_component__["a" /* TeamStatsComponent */],
            __WEBPACK_IMPORTED_MODULE_49__components_team_team_squad_team_squad_component__["a" /* TeamSquadComponent */],
            __WEBPACK_IMPORTED_MODULE_50__components_team_team_transfers_team_transfers_component__["a" /* TeamTransfersComponent */],
            __WEBPACK_IMPORTED_MODULE_51__components_player_player_component__["a" /* PlayerComponent */],
            __WEBPACK_IMPORTED_MODULE_53__components_player_player_club_player_club_component__["a" /* PlayerClubComponent */],
            __WEBPACK_IMPORTED_MODULE_54__components_player_player_cups_player_cups_component__["a" /* PlayerCupsComponent */],
            __WEBPACK_IMPORTED_MODULE_55__components_player_player_club_international_player_club_international_component__["a" /* PlayerClubInternationalComponent */],
            __WEBPACK_IMPORTED_MODULE_56__components_player_player_national_player_national_component__["a" /* PlayerNationalComponent */],
            __WEBPACK_IMPORTED_MODULE_52__components_player_player_facts_player_facts_component__["a" /* PlayerFactsComponent */],
            __WEBPACK_IMPORTED_MODULE_57__components_matches_search_match_objects_search_objects_search_objects_component__["a" /* SearchObjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_58__components_user_follows_sidebar_follows_sidebar_component__["a" /* FollowsSidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_59__components_user_friend_profile_friend_profile_component__["a" /* FriendProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_60__components_user_search_users_search_users_component__["a" /* SearchUsersComponent */],
            __WEBPACK_IMPORTED_MODULE_61__components_user_search_users_users_search_bar_users_search_bar_component__["a" /* UsersSearchBarComponent */],
            __WEBPACK_IMPORTED_MODULE_62__components_review_review_new_review_new_component__["a" /* ReviewNewComponent */],
            __WEBPACK_IMPORTED_MODULE_63__components_review_review_edit_review_edit_component__["a" /* ReviewEditComponent */],
            __WEBPACK_IMPORTED_MODULE_65__components_review_review_list_review_list_component__["a" /* ReviewListComponent */],
            __WEBPACK_IMPORTED_MODULE_66__components_review_review_display_review_display_component__["a" /* ReviewDisplayComponent */],
            __WEBPACK_IMPORTED_MODULE_68__components_user_admin_admin_home_admin_home_component__["a" /* AdminHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_69__components_user_admin_all_users_all_users_component__["a" /* AllUsersComponent */],
            __WEBPACK_IMPORTED_MODULE_70__components_user_admin_all_critics_all_critics_component__["a" /* AllCriticsComponent */],
            __WEBPACK_IMPORTED_MODULE_71__components_user_admin_pending_requests_pending_requests_component__["a" /* PendingRequestsComponent */],
            __WEBPACK_IMPORTED_MODULE_72__components_home_user_home_new_user_home_new_component__["a" /* UserHomeNewComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_15_ngx_quill_editor__["a" /* QuillEditorModule */],
            __WEBPACK_IMPORTED_MODULE_22_ng2_date_picker__["DpDatePickerModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__["a" /* TestService */],
            __WEBPACK_IMPORTED_MODULE_12__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_14__server_side_directives_sortable_directive__["a" /* SortableDirective */],
            __WEBPACK_IMPORTED_MODULE_13__services_flickr_service_client__["a" /* FlickrService */],
            __WEBPACK_IMPORTED_MODULE_16__services_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_17__services_auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_19__services_soccer_service_client__["a" /* SoccerServiceClient */],
            __WEBPACK_IMPORTED_MODULE_36__services_league_service_client__["a" /* LeagueService */],
            __WEBPACK_IMPORTED_MODULE_38__services_team_service_client__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_39__services_player_service_client__["a" /* PlayerService */],
            __WEBPACK_IMPORTED_MODULE_64__services_review_service_client__["a" /* ReviewService */],
            __WEBPACK_IMPORTED_MODULE_67__services_critic_service_client__["a" /* CriticService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_matches_match_calender_match_calender_component__ = __webpack_require__("../../../../../src/app/components/matches/match-calender/match-calender.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_matches_search_match_objects_search_match_objects_component__ = __webpack_require__("../../../../../src/app/components/matches/search-match-objects/search-match-objects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_matches_match_details_match_details_component__ = __webpack_require__("../../../../../src/app/components/matches/match-details/match-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_user_manage_favorites_user_manage_favorites_component__ = __webpack_require__("../../../../../src/app/components/user/user-manage-favorites/user-manage-favorites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_user_search_favorites_user_search_favorites_component__ = __webpack_require__("../../../../../src/app/components/user/user-search-favorites/user-search-favorites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_registered_user_home_registered_user_home_component__ = __webpack_require__("../../../../../src/app/components/home/registered-user-home/registered-user-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_league_league_component__ = __webpack_require__("../../../../../src/app/components/league/league.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_team_team_component__ = __webpack_require__("../../../../../src/app/components/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_player_player_component__ = __webpack_require__("../../../../../src/app/components/player/player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_user_friend_profile_friend_profile_component__ = __webpack_require__("../../../../../src/app/components/user/friend-profile/friend-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_user_search_users_search_users_component__ = __webpack_require__("../../../../../src/app/components/user/search-users/search-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_review_review_new_review_new_component__ = __webpack_require__("../../../../../src/app/components/review/review-new/review-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_review_review_edit_review_edit_component__ = __webpack_require__("../../../../../src/app/components/review/review-edit/review-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_user_admin_admin_home_admin_home_component__ = __webpack_require__("../../../../../src/app/components/user/admin/admin-home/admin-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_home_user_home_new_user_home_new_component__ = __webpack_require__("../../../../../src/app/components/home/user-home-new/user-home-new.component.ts");






















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__["a" /* TestComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'calender', component: __WEBPACK_IMPORTED_MODULE_7__components_matches_match_calender_match_calender_component__["a" /* MatchCalenderComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_8__components_matches_search_match_objects_search_match_objects_component__["a" /* SearchMatchObjectsComponent */] },
    { path: 'admin/:userID/home', component: __WEBPACK_IMPORTED_MODULE_20__components_user_admin_admin_home_admin_home_component__["a" /* AdminHomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:userID', component: __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:userID/favorites', component: __WEBPACK_IMPORTED_MODULE_10__components_user_user_manage_favorites_user_manage_favorites_component__["a" /* UserManageFavoritesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:userID/favorites/searchFavorites', component: __WEBPACK_IMPORTED_MODULE_11__components_user_user_search_favorites_user_search_favorites_component__["a" /* UserSearchFavoritesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:userID/home', component: __WEBPACK_IMPORTED_MODULE_12__components_home_registered_user_home_registered_user_home_component__["a" /* RegisteredUserHomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'league/:leagueID', component: __WEBPACK_IMPORTED_MODULE_13__components_league_league_component__["a" /* LeagueComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'team/:teamID', component: __WEBPACK_IMPORTED_MODULE_14__components_team_team_component__["a" /* TeamComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'player/:playerID', component: __WEBPACK_IMPORTED_MODULE_15__components_player_player_component__["a" /* PlayerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'match/:matchID', component: __WEBPACK_IMPORTED_MODULE_9__components_matches_match_details_match_details_component__["a" /* MatchDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'profile/:friendID', component: __WEBPACK_IMPORTED_MODULE_16__components_user_friend_profile_friend_profile_component__["a" /* FriendProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'users/search', component: __WEBPACK_IMPORTED_MODULE_17__components_user_search_users_search_users_component__["a" /* SearchUsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'review/new', component: __WEBPACK_IMPORTED_MODULE_18__components_review_review_new_review_new_component__["a" /* ReviewNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'review/:reviewID', component: __WEBPACK_IMPORTED_MODULE_19__components_review_review_edit_review_edit_component__["a" /* ReviewEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'home/new', component: __WEBPACK_IMPORTED_MODULE_21__components_home_user_home_new_user_home_new_component__["a" /* UserHomeNewComponent */] },
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n\n  <!--app header-->\n  <div *ngIf=\"!isLoggedIn\">\n    <app-unregistered-home-header></app-unregistered-home-header>\n  </div>\n  <div *ngIf=\"isLoggedIn\">\n    <app-home-header></app-home-header>\n  </div>\n\n  <!--main body-->\n  <div class=\"row container-fluid\">\n\n    <!-- Left Pane - User details -->\n    <div class=\"col-sm-4 hidden-xs my-left-pane my-right-border\">\n      <div *ngIf=\"!isLoggedIn\">\n        <app-unregistered-home-user-profile></app-unregistered-home-user-profile>\n      </div>\n      <div *ngIf=\"isLoggedIn\">\n        <app-home-user-profile></app-home-user-profile>\n      </div>\n    </div>\n\n    <!-- Right Pane - Matches -->\n    <div class=\"col-sm-8 col-xs-12 my-right-pane\">\n      <app-matches date=\"{{currDate.toDateString()}}\"></app-matches>\n    </div>\n\n  </div>\n\n  <!--app footer-->\n  <div *ngIf=\"!isLoggedIn\">\n    <app-unregistered-home-footer></app-unregistered-home-footer>\n  </div>\n  <div *ngIf=\"isLoggedIn\">\n    <app-home-footer></app-home-footer>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(userService, sharedService) {
        this.userService = userService;
        this.sharedService = sharedService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currDate = new Date();
        this.userService.loggedIn()
            .subscribe(function (isLoggedIn) {
            _this.isLoggedIn = isLoggedIn;
            // console.log(isLoggedIn);
            if (_this.isLoggedIn) {
                _this.user = _this.sharedService.user;
            }
            else {
                _this.user = true;
            }
            // console.log(this.user);
        }, function (error) {
            console.log(error + ' cannot check if user is logged in');
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/registered-home-footer/registered-home-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/registered-home-footer/registered-home-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n\n  <!--home-->\n  <div class=\"pull-left my-header-left-margin\">\n    <a class=\"navbar-brand\">\n      <span class=\"glyphicon glyphicon-home\" (click)=\"navigateToHome()\"></span>\n    </a>\n  </div>\n\n  <!--profile and settings-->\n  <div class=\"pull-right my-header-right-margin\">\n    <a class=\"navbar-brand\">\n      <span class=\"glyphicon glyphicon-user\" (click)=\"navigateToProfile()\"></span>\n    </a>\n  </div>\n\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/registered-home-footer/registered-home-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeFooterComponent = (function () {
    function HomeFooterComponent(router, sharedService) {
        this.router = router;
        this.sharedService = sharedService;
    }
    HomeFooterComponent.prototype.ngOnInit = function () {
        // get user profile from SharedService
        this.user = this.sharedService.user;
        this.userID = this.user._id;
    };
    HomeFooterComponent.prototype.navigateToProfile = function () {
        this.router.navigate(['/user', this.userID]);
    };
    HomeFooterComponent.prototype.navigateToHome = function () {
        this.router.navigate(['/user', this.userID, 'home']);
    };
    return HomeFooterComponent;
}());
HomeFooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home-footer',
        template: __webpack_require__("../../../../../src/app/components/home/registered-home-footer/registered-home-footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/registered-home-footer/registered-home-footer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */]) === "function" && _b || Object])
], HomeFooterComponent);

var _a, _b;
//# sourceMappingURL=registered-home-footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/registered-home-header/registered-home-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/registered-home-header/registered-home-header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n\n    <!--profile drop-down button-->\n    <div class=\"col-xs-2 hidden-sm hidden-md hidden-lg\">\n      <button type=\"button\" class=\"navbar-toggle pull-left\"\n              data-toggle=\"collapse\" data-target=\"#profile-sidebar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n\n    <!--app-logo and other options -->\n    <div class=\"col-xs-10 col-sm-12\">\n      <!--hamburger - collapse-->\n      <button type=\"button\" class=\"navbar-toggle pull-right\"\n              data-toggle=\"collapse\" data-target=\"#extraOption\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n\n      <!--app logo and name-->\n      <div class=\"pull-left my-header-left-margin\">\n        <a class=\"navbar-brand\" (click)=\"navigateToHome()\">\n          <span class=\"fa fa-futbol-o\"></span>\n          <b>Soccer 360</b>\n        </a>\n      </div>\n\n      <!--collapse options-->\n      <div class=\"collapse navbar-collapse pull-right\" id=\"extraOption\">\n        <!--options-->\n        <!--calender-->\n        <a class=\"navbar-brand\" (click)=\"navigateToCalender()\">\n          <span class=\"glyphicon glyphicon-calendar\"></span>\n        </a>\n\n        <!--search-->\n        <a class=\"navbar-brand\" (click)=\"navigateToSearch()\">\n          <span class=\"glyphicon glyphicon-search\"></span>\n        </a>\n\n        <!--logout-->\n        <a class=\"navbar-brand\" (click)=\"logout()\">\n          <span class=\"glyphicon glyphicon-off\"></span>\n        </a>\n      </div>\n    </div>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/registered-home-header/registered-home-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeHeaderComponent = (function () {
    function HomeHeaderComponent(router, sharedService, userService) {
        this.router = router;
        this.sharedService = sharedService;
        this.userService = userService;
    }
    HomeHeaderComponent.prototype.ngOnInit = function () {
        // get user profile from SharedService
        this.user = this.sharedService.user;
        this.userID = this.user._id;
    };
    HomeHeaderComponent.prototype.navigateToCalender = function () {
        this.router.navigate(['/calender']);
    };
    HomeHeaderComponent.prototype.navigateToSearch = function () {
        this.router.navigate(['/search']);
    };
    HomeHeaderComponent.prototype.navigateToHome = function () {
        this.router.navigate(['/user', this.userID, 'home']);
    };
    HomeHeaderComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/']); });
    };
    return HomeHeaderComponent;
}());
HomeHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home-header',
        template: __webpack_require__("../../../../../src/app/components/home/registered-home-header/registered-home-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/registered-home-header/registered-home-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], HomeHeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=registered-home-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/registered-user-home/registered-user-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/registered-user-home/registered-user-home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--app header-->\n<app-home-header></app-home-header>\n\n<!--main body-->\n<div class=\"row container-fluid\">\n\n  <!-- Left Pane - User details -->\n  <div class=\"col-sm-4 hidden-xs my-left-pane my-right-border\">\n    <app-home-user-profile></app-home-user-profile>\n  </div>\n\n  <!-- Right Pane - Matches -->\n  <div class=\"col-sm-8 col-xs-12 my-right-pane\">\n    <app-matches date=\"{{currDate.toDateString()}}\"></app-matches>\n  </div>\n\n</div>\n\n<!--app footer-->\n<app-home-footer></app-home-footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/registered-user-home/registered-user-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisteredUserHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisteredUserHomeComponent = (function () {
    function RegisteredUserHomeComponent(router) {
        this.router = router;
    }
    RegisteredUserHomeComponent.prototype.ngOnInit = function () {
        this.currDate = new Date();
    };
    return RegisteredUserHomeComponent;
}());
RegisteredUserHomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-registered-user-home',
        template: __webpack_require__("../../../../../src/app/components/home/registered-user-home/registered-user-home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/registered-user-home/registered-user-home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], RegisteredUserHomeComponent);

var _a;
//# sourceMappingURL=registered-user-home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/unregistered-home-footer/unregistered-home-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/unregistered-home-footer/unregistered-home-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n\n  <!--profile and settings-->\n  <div class=\"pull-right my-header-right-margin\">\n    <a class=\"navbar-brand\">\n      <span class=\"glyphicon glyphicon-user\" (click)=\"navigateToLogin()\"></span>\n    </a>\n  </div>\n\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/unregistered-home-footer/unregistered-home-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnregisteredHomeFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnregisteredHomeFooterComponent = (function () {
    function UnregisteredHomeFooterComponent(router) {
        this.router = router;
    }
    UnregisteredHomeFooterComponent.prototype.ngOnInit = function () {
    };
    UnregisteredHomeFooterComponent.prototype.navigateToLogin = function () {
        this.router.navigate(['/login']);
    };
    return UnregisteredHomeFooterComponent;
}());
UnregisteredHomeFooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-unregistered-home-footer',
        template: __webpack_require__("../../../../../src/app/components/home/unregistered-home-footer/unregistered-home-footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/unregistered-home-footer/unregistered-home-footer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], UnregisteredHomeFooterComponent);

var _a;
//# sourceMappingURL=unregistered-home-footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/unregistered-home-header/unregistered-home-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/unregistered-home-header/unregistered-home-header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n\n    <!--profile drop-down button-->\n    <div class=\"col-xs-2 hidden-sm hidden-md hidden-lg\">\n      <button type=\"button\" class=\"navbar-toggle pull-left\"\n              data-toggle=\"collapse\" data-target=\"#profile-sidebar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n\n    <!--app-logo and other options -->\n    <div class=\"col-xs-10 col-sm-12\">\n      <!--hamburger - collapse-->\n      <button type=\"button\" class=\"navbar-toggle pull-right\"\n              data-toggle=\"collapse\" data-target=\"#extraOption\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n\n      <!--app logo and name-->\n      <div class=\"pull-left my-header-left-margin\">\n        <a class=\"navbar-brand\" href=\"#\">\n          <span class=\"fa fa-futbol-o\"></span>\n          <b>Soccer 360</b>\n        </a>\n      </div>\n\n      <!--collapse options-->\n      <div class=\"collapse navbar-collapse pull-right\" id=\"extraOption\">\n        <!--options-->\n        <!--calender-->\n        <a class=\"navbar-brand\" (click)=\"navigateToCalender()\">\n          <span class=\"glyphicon glyphicon-calendar\"></span>\n        </a>\n\n        <!--search-->\n        <a class=\"navbar-brand\" (click)=\"navigateToSearch()\">\n          <span class=\"glyphicon glyphicon-search\"></span>\n        </a>\n      </div>\n    </div>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/unregistered-home-header/unregistered-home-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnregisteredHomeHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnregisteredHomeHeaderComponent = (function () {
    function UnregisteredHomeHeaderComponent(router) {
        this.router = router;
    }
    UnregisteredHomeHeaderComponent.prototype.ngOnInit = function () {
    };
    UnregisteredHomeHeaderComponent.prototype.navigateToCalender = function () {
        this.router.navigate(['/calender']);
    };
    UnregisteredHomeHeaderComponent.prototype.navigateToSearch = function () {
        this.router.navigate(['/search']);
    };
    return UnregisteredHomeHeaderComponent;
}());
UnregisteredHomeHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-unregistered-home-header',
        template: __webpack_require__("../../../../../src/app/components/home/unregistered-home-header/unregistered-home-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/unregistered-home-header/unregistered-home-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], UnregisteredHomeHeaderComponent);

var _a;
//# sourceMappingURL=unregistered-home-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/user-home-new/user-home-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/user-home-new/user-home-new.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"row container-fluid\">\n\n      <!--profile drop-down button-->\n      <div class=\"col-xs-2 hidden-sm hidden-md hidden-lg\">\n        <button type=\"button\" class=\"navbar-toggle pull-left\"\n                data-toggle=\"collapse\" data-target=\"#profile-sidebar\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n      </div>\n\n      <!--app-logo and other options -->\n      <div class=\"col-xs-10 col-sm-12\">\n        <!--hamburger - collapse-->\n        <button type=\"button\" class=\"navbar-toggle pull-right\"\n                data-toggle=\"collapse\" data-target=\"#extraOption\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n\n        <!--app logo and name-->\n        <div class=\"pull-left my-header-left-margin\">\n          <a class=\"navbar-brand\">\n            <span class=\"fa fa-futbol-o\"></span>\n            <b>Soccer 360</b>\n          </a>\n        </div>\n\n        <!--collapse options-->\n        <div class=\"collapse navbar-collapse pull-right\" id=\"extraOption\">\n          <!--options-->\n            <!--calender-->\n            <a class=\"navbar-brand\">\n              <span class=\"glyphicon glyphicon-calendar\"></span>\n            </a>\n\n            <!--search-->\n            <a class=\"navbar-brand\">\n              <span class=\"glyphicon glyphicon-search\"></span>\n            </a>\n\n            <!--logout-->\n            <a class=\"navbar-brand\">\n              <span class=\"glyphicon glyphicon-off\"></span>\n            </a>\n        </div>\n      </div>\n\n    </div>\n</nav>\n\n<!--main body-->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n\n    <app-unregistered-home-user-profile></app-unregistered-home-user-profile>\n\n    <div class=\"col-xs-12 col-sm-8\">\n      <app-matches date=\"{{currDate.toDateString()}}\"></app-matches>\n    </div>\n\n  </div>\n</div>\n\n<!--footer-->\n<app-unregistered-home-footer></app-unregistered-home-footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/user-home-new/user-home-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserHomeNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserHomeNewComponent = (function () {
    function UserHomeNewComponent() {
    }
    UserHomeNewComponent.prototype.ngOnInit = function () {
        this.currDate = new Date();
    };
    return UserHomeNewComponent;
}());
UserHomeNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-home-new',
        template: __webpack_require__("../../../../../src/app/components/home/user-home-new/user-home-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/user-home-new/user-home-new.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserHomeNewComponent);

//# sourceMappingURL=user-home-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/league/league-stats/league-stats.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/league/league-stats/league-stats.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  league-stats works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/league/league-stats/league-stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeagueStatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeagueStatsComponent = (function () {
    function LeagueStatsComponent() {
    }
    LeagueStatsComponent.prototype.ngOnInit = function () {
    };
    return LeagueStatsComponent;
}());
LeagueStatsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-league-stats',
        template: __webpack_require__("../../../../../src/app/components/league/league-stats/league-stats.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/league/league-stats/league-stats.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LeagueStatsComponent);

//# sourceMappingURL=league-stats.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/league/league.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/league/league.component.html":
/***/ (function(module, exports) {

module.exports = "<!--app header-->\n<app-home-header></app-home-header>\n\n<!--main body-->\n<div class=\"row container-fluid\">\n\n  <!-- Left Pane - User details -->\n  <div class=\"col-sm-4 hidden-xs my-left-pane my-right-border\">\n    <app-home-user-profile></app-home-user-profile>\n  </div>\n\n  <!-- Right Pane - League Details -->\n  <div class=\"col-sm-8 col-xs-12 my-right-pane\">\n\n    <div *ngIf=\"league\">\n      <!--league name-->\n      <div class=\"text-center\">\n        <h2><span class=\"label label-default\">\n          {{league.name}}\n        </span></h2>\n      </div>\n\n      <!--league details menu scrollbar-->\n      <div class=\"scrollmenu\">\n        <a (click)=\"changeLeagueDetailsType('STANDINGS')\">Table</a>\n        <a (click)=\"changeLeagueDetailsType('PREVIOUS')\">Previous Fixtures</a>\n        <a (click)=\"changeLeagueDetailsType('UPCOMING')\">Upcoming Fixtures</a>\n        <a (click)=\"changeLeagueDetailsType('NEWS')\">News</a>\n        <a (click)=\"changeLeagueDetailsType('STATS')\">Stats</a>\n      </div>\n\n      <!--match details component-->\n      <div [ngSwitch]=\"leagueDetailsType\">\n        <div *ngSwitchCase=\"'STANDINGS'\">\n          <app-match-team-standings compId=\"{{league.id}}\"></app-match-team-standings>\n        </div>\n\n        <div *ngSwitchCase=\"'PREVIOUS'\">\n          <app-match-list searchType=\"PREVIOUS_COMP\" compId={{league.id}} toDate=\"{{formattedDate}}\"></app-match-list>\n        </div>\n\n        <div *ngSwitchCase=\"'UPCOMING'\">\n          <app-match-list searchType=\"UPCOMING_COMP\" compId={{league.id}} fromDate=\"{{formattedDate}}\"></app-match-list>\n        </div>\n\n        <div *ngSwitchCase=\"'NEWS'\">\n          <div *ngIf=\"!isSelected\">\n          <app-review-list (reviewSelection)=\"updateReviewSelection($event.isSelected, $event.reviewId)\"\n                           itemType=\"league\"\n                           itemID=\"{{league.id}}\"></app-review-list>\n          </div>\n\n          <div *ngIf=\"isSelected\">\n            <app-review-display reviewId=\"{{reviewId}}\"></app-review-display>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'STATS'\">\n          <app-league-stats></app-league-stats>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<!--app footer-->\n<app-home-footer></app-home-footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/league/league.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeagueComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_soccer_service_client__ = __webpack_require__("../../../../../src/app/services/soccer.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LeagueComponent = (function () {
    function LeagueComponent(soccerService, router, route) {
        this.soccerService = soccerService;
        this.router = router;
        this.route = route;
    }
    LeagueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSelected = false;
        this.currentDate = new Date();
        this.formatDate();
        this.leagueDetailsType = 'STANDINGS';
        this.route.params.subscribe(function (params) {
            _this.leagueID = params['leagueID'];
            _this.soccerService.getCompetitionById(_this.leagueID)
                .subscribe(function (league) {
                _this.league = _this.parseBody(league);
                _this.errorFlag = false;
                // console.log(league);
            }, function (error) {
                _this.errorFlag = true;
                _this.errorMsg = 'Unable to retrieve league details!';
            });
        });
    };
    LeagueComponent.prototype.parseBody = function (data) {
        var val = data._body;
        val = JSON.parse(val);
        return val;
    };
    LeagueComponent.prototype.changeLeagueDetailsType = function (type) {
        this.leagueDetailsType = type;
    };
    LeagueComponent.prototype.formatDate = function () {
        var dd = this.currentDate.getDate();
        var mm = this.currentDate.getMonth() + 1;
        var yyyy = this.currentDate.getFullYear();
        this.formattedDate = (mm + '/' + dd + '/' + yyyy);
    };
    LeagueComponent.prototype.updateReviewSelection = function (isSelected, reviewId) {
        this.isSelected = isSelected;
        this.reviewId = reviewId;
    };
    return LeagueComponent;
}());
LeagueComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-league',
        template: __webpack_require__("../../../../../src/app/components/league/league.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/league/league.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_soccer_service_client__["a" /* SoccerServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_soccer_service_client__["a" /* SoccerServiceClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], LeagueComponent);

var _a, _b, _c;
//# sourceMappingURL=league.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/matches/match-calender/match-calender.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/matches/match-calender/match-calender.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n\n  <!--app header-->\n  <div *ngIf=\"!isLoggedIn\">\n    <app-unregistered-home-header></app-unregistered-home-header>\n  </div>\n  <div *ngIf=\"isLoggedIn\">\n    <app-home-header></app-home-header>\n  </div>\n\n  <!--main body-->\n  <div class=\"row container-fluid\">\n\n    <!-- Left Pane - User details -->\n    <div class=\"col-sm-4 hidden-xs my-left-pane my-right-border\">\n      <div *ngIf=\"!isLoggedIn\">\n        <app-unregistered-home-user-profile></app-unregistered-home-user-profile>\n      </div>\n      <div *ngIf=\"isLoggedIn\">\n        <app-home-user-profile></app-home-user-profile>\n      </div>\n    </div>\n\n    <!-- Right Pane - Match Calender -->\n    <div class=\"col-sm-8 col-xs-12 my-right-pane\">\n      <div class=\"text-center\">\n        <dp-day-calendar [(ngModel)]=\"selectedDate\"></dp-day-calendar>\n      </div>\n      <hr style=\"border: 4px solid black !important;\"/>\n\n      <app-match-list searchType=\"BY_DAY\" currDate=\"{{selectedDate}}\"></app-match-list>\n    </div>\n\n  </div>\n\n  <!--app footer-->\n  <div *ngIf=\"!isLoggedIn\">\n    <app-unregistered-home-footer></app-unregistered-home-footer>\n  </div>\n  <div *ngIf=\"isLoggedIn\">\n    <app-home-footer></app-home-footer>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/matches/match-calender/match-calender.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchCalenderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MatchCalenderComponent = (function () {
    function MatchCalenderComponent(userService, sharedService) {
        this.userService = userService;
        this.sharedService = sharedService;
    }
    MatchCalenderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.loggedIn()
            .subscribe(function (isLoggedIn) {
            _this.isLoggedIn = isLoggedIn;
            // console.log(isLoggedIn);
            if (_this.isLoggedIn) {
                _this.user = _this.sharedService.user;
            }
            else {
                _this.user = true;
            }
            // console.log(this.user);
        }, function (error) {
            console.log(error + ' cannot check if user is logged in');
        });
    };
    return MatchCalenderComponent;
}());
MatchCalenderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-match-calender',
        template: __webpack_require__("../../../../../src/app/components/matches/match-calender/match-calender.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/matches/match-calender/match-calender.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */]) === "function" && _b || Object])
], MatchCalenderComponent);

var _a, _b;
//# sourceMappingURL=match-calender.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/matches/match-details/match-commentary/match-commentary.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/matches/match-details/match-commentary/match-commentary.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"comments\">\n  <div *ngFor=\"let event of comments\">\n\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n          <!--unimportant event-->\n          <div *ngIf=\"event.important == '0'\">\n            <span class=\"badge badge-pill\">{{event.minute}}</span>\n            {{event.comment}}\n          </div>\n\n          <!--important event but not goal-->\n          <div *ngIf=\"event.important == '1' && event.isgoal == '0'\">\n            <span class=\"badge badge-pill\">{{event.minute}}</span>\n            <span class=\"glyphicon glyphicon-alert\"></span>\n            {{event.comment}}\n          </div>\n\n          <!--goal!!-->\n          <div *ngIf=\"event.isgoal == '1'\">\n            <span class=\"badge badge-pill\">{{event.minute}}</span>\n            <span class=\"fa fa-futbol-o\"></span>\n            {{event.comment}}\n          </div>\n\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/matches/match-details/match-commentary/match-commentary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchCommentaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__ = __webpack_require__("../../../../../src/app/services/soccer.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MatchCommentaryComponent = (function () {
    function MatchCommentaryComponent(soccerService) {
        this.soccerService = soccerService;
    }
    MatchCommentaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        // match commentary - lineup & bench
        this.soccerService.getMatchCommentary(this.matchID)
            .subscribe(function (match) {
            var commentary = _this.parseBody(match);
            _this.comments = commentary.comments;
            _this.errorFlag = false;
        }, function (error) {
            console.log(error + ' unable to retrieve match commentary!');
            _this.errorFlag = true;
            _this.errorMsg = 'Unable to retrieve match commentary!';
        });
    };
    MatchCommentaryComponent.prototype.parseBody = function (data) {
        var val = data._body;
        val = JSON.parse(val);
        return val;
    };
    return MatchCommentaryComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MatchCommentaryComponent.prototype, "matchID", void 0);
MatchCommentaryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-match-commentary',
        template: __webpack_require__("../../../../../src/app/components/matches/match-details/match-commentary/match-commentary.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/matches/match-details/match-commentary/match-commentary.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */]) === "function" && _a || Object])
], MatchCommentaryComponent);

var _a;
//# sourceMappingURL=match-commentary.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/matches/match-details/match-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/matches/match-details/match-details.component.html":
/***/ (function(module, exports) {

module.exports = "<!--app header-->\n<app-home-header></app-home-header>\n\n<!--main body-->\n<div class=\"row container-fluid\">\n\n  <!-- Left Pane - User details -->\n  <div class=\"col-sm-4 hidden-xs my-left-pane my-right-border\">\n    <app-home-user-profile></app-home-user-profile>\n  </div>\n\n  <!-- Right Pane - Match Details -->\n  <div class=\"col-sm-8 col-xs-12 my-right-pane\">\n\n    <!--match score-->\n    <div *ngIf=\"match\" class=\"text-center\">\n      <table class=\"table table-responsive\">\n        <tbody>\n          <h2><span class=\"label label-default\">\n            <!--home team-->\n            <td class=\"col-xs-3 text-right\">\n              {{match.localteam_name}}\n            </td>\n\n            <!--score-->\n            <td class=\"col-xs-2 text-center\"\n                *ngIf=\"match.localteam_score == '?' || match.localteam_score == ''\">\n              -\n            </td>\n\n            <!--score-->\n            <td class=\"col-xs-2 text-center\"\n                *ngIf=\"match.localteam_score != '?' && match.localteam_score != ''\">\n                ({{match.localteam_score}})  -  ({{match.visitorteam_score}})\n            </td>\n\n            <!--away team-->\n            <td class=\"col-xs-3 text-left\">\n              {{match.visitorteam_name}}\n            </td>\n          </span></h2>\n\n          <!--match status-->\n          <td class=\"col-xs-2 text-left\">\n            <h3>\n              <span class=\"badge badge-success pull-right\"><h4>{{match.status}}</h4></span>\n            </h3>\n          </td>\n\n          <!--match time-->\n          <td class=\"col-xs-2 text-left\" *ngIf=\"match.timer != ''\">\n            <h3>\n              <span class=\"badge badge-success pull-right\"><h4>{{match.timer}}</h4></span>\n            </h3>\n          </td>\n        </tbody>\n      </table>\n    </div>\n\n    <!--match details menu scrollbar-->\n    <div class=\"scrollmenu\">\n      <a (click)=\"changeMatchDetailsType('FACTS')\">Match Facts</a>\n      <a (click)=\"changeMatchDetailsType('LINEUP')\">Line Up</a>\n      <a (click)=\"changeMatchDetailsType('COMMENTARY')\">Commentary</a>\n      <a (click)=\"changeMatchDetailsType('MATCH_STATS')\">Match Stats</a>\n      <a (click)=\"changeMatchDetailsType('PLAYER_STATS')\">Player Stats</a>\n      <a (click)=\"changeMatchDetailsType('STANDINGS')\">Standings</a>\n    </div>\n\n    <!--match details component-->\n    <div [ngSwitch]=\"matchDetailsType\">\n\n      <div *ngSwitchCase=\"'FACTS'\">\n        <app-match-facts matchID=\"{{matchID}}\"></app-match-facts>\n      </div>\n\n      <div *ngSwitchCase=\"'LINEUP'\">\n        <app-match-lineup matchID=\"{{matchID}}\"></app-match-lineup>\n      </div>\n\n      <div *ngSwitchCase=\"'COMMENTARY'\">\n        <app-match-commentary matchID=\"{{matchID}}\"></app-match-commentary>\n      </div>\n\n      <div *ngSwitchCase=\"'MATCH_STATS'\">\n        <app-match-stats matchID=\"{{matchID}}\"></app-match-stats>\n      </div>\n\n      <div *ngSwitchCase=\"'PLAYER_STATS'\">\n        <app-match-player-stats matchID=\"{{matchID}}\"></app-match-player-stats>\n      </div>\n\n      <div *ngSwitchCase=\"'STANDINGS'\">\n        <app-match-team-standings compId=\"{{match.comp_id}}\"></app-match-team-standings>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n<!--app footer-->\n<app-home-footer></app-home-footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/matches/match-details/match-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_soccer_service_client__ = __webpack_require__("../../../../../src/app/services/soccer.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MatchDetailsComponent = (function () {
    function MatchDetailsComponent(soccerService, router, route) {
        this.soccerService = soccerService;
        this.router = router;
        this.route = route;
    }
    MatchDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.matchDetailsType = 'FACTS';
        this.route.params.subscribe(function (params) {
            _this.matchID = params['matchID'];
        });
        this.soccerService.getMatchDetails(this.matchID)
            .subscribe(function (match) {
            _this.match = _this.parseBody(match);
            _this.errorFlag = false;
            console.log(match);
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'Unable to retrieve match details!';
        });
    };
    MatchDetailsComponent.prototype.parseBody = function (data) {
        var val = data._body;
        val = JSON.parse(val);
        return val;
    };
    MatchDetailsComponent.prototype.changeMatchDetailsType = function (type) {
        this.matchDetailsType = type;
    };
    return MatchDetailsComponent;
}());
MatchDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-match-details',
        template: __webpack_require__("../../../../../src/app/components/matches/match-details/match-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/matches/match-details/match-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_soccer_service_client__["a" /* SoccerServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_soccer_service_client__["a" /* SoccerServiceClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], MatchDetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=match-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/matches/match-details/match-events/match-events.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/matches/match-details/match-events/match-events.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"matchEvents\">\n\n  <table class=\"table table-responsive\">\n    <tbody *ngFor=\"let event of matchEvents\">\n      <tr *ngIf=\"event.team=='localteam'\">\n        <td class=\"col-xs-6 text-left\">\n          <!--local team-->\n          <div [ngSwitch]=\"event.type\">\n            <!--substitutions-->\n            <div *ngSwitchCase=\"'subst'\">\n              <span class=\"badge badge-pill\">{{event.minute}}'</span>\n              <span class=\"glyphicon glyphicon-arrow-up\"></span>\n              {{event.player}}\n              <span class=\"glyphicon glyphicon-arrow-down\"></span>\n              {{event.assist}}\n            </div>\n\n            <!--yellow card-->\n            <div *ngSwitchCase=\"'yellowcard'\">\n              <span class=\"badge badge-pill\">{{event.minute}}'</span>\n              <span class=\"glyphicon glyphicon-tag\"></span>\n              {{event.player}}\n            </div>\n\n            <!--red card-->\n            <div *ngSwitchCase=\"'redcard'\">\n              <span class=\"badge badge-pill\">{{event.minute}}'</span>\n              <span class=\"glyphicon glyphicon-tags\"></span>\n              {{event.player}}\n            </div>\n\n            <!--goal-->\n            <div *ngSwitchCase=\"'goal'\">\n              <span class=\"badge badge-pill\">{{event.minute}}'</span>\n              <span class=\"fa fa-futbol-o\"></span>\n              {{event.player}}\n            </div>\n          </div>\n        </td>\n        <td class=\"col-xs-6\"></td>\n      </tr>\n\n      <tr *ngIf=\"event.team=='visitorteam'\">\n        <!--away team-->\n        <td class=\"col-xs-6\"></td>\n        <td class=\"col-xs-6 text-right\">\n          <div [ngSwitch]=\"event.type\">\n\n            <!--substitutions-->\n            <div *ngSwitchCase=\"'subst'\">\n              <span class=\"glyphicon glyphicon-arrow-up\"></span>\n              {{event.player}}\n              <span class=\"glyphicon glyphicon-arrow-down\"></span>\n              {{event.assist}}\n              <span class=\"badge badge-pill\">{{event.minute}}'</span>\n            </div>\n\n            <!--yellow card-->\n            <div *ngSwitchCase=\"'yellowcard'\">\n              {{event.player}}\n              <span class=\"glyphicon glyphicon-tag\"></span>\n              <span class=\"badge badge-pill\">{{event.minute}}'</span>\n            </div>\n\n            <!--red card-->\n            <div *ngSwitchCase=\"'redcard'\">\n              {{event.player}}\n              <span class=\"glyphicon glyphicon-tags\"></span>\n              <span class=\"badge badge-pill\">{{event.minute}}'</span>\n            </div>\n\n            <!--goal-->\n            <div *ngSwitchCase=\"'goal'\">\n              {{event.player}}\n              <span class=\"fa fa-futbol-o\"></span>\n              <span class=\"badge badge-pill\">{{event.minute}}'</span>\n            </div>\n\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n  <hr style=\"border: 4px solid black !important;\"/>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/matches/match-details/match-events/match-events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchEventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__ = __webpack_require__("../../../../../src/app/services/soccer.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MatchEventsComponent = (function () {
    function MatchEventsComponent(soccerService) {
        this.soccerService = soccerService;
    }
    MatchEventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // match details
        this.soccerService.getMatchDetails(this.matchID)
            .subscribe(function (match) {
            _this.match = _this.parseBody(match);
            _this.matchEvents = _this.match.events;
            _this.errorFlag = false;
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'Unable to retrieve match details!';
            console.log(error + ' unable to retrieve match events!');
        });
    };
    MatchEventsComponent.prototype.parseBody = function (data) {
        var val = data._body;
        val = JSON.parse(val);
        return val;
    };
    return MatchEventsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MatchEventsComponent.prototype, "matchID", void 0);
MatchEventsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-match-events',
        template: __webpack_require__("../../../../../src/app/components/matches/match-details/match-events/match-events.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/matches/match-details/match-events/match-events.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */]) === "function" && _a || Object])
], MatchEventsComponent);

var _a;
//# sourceMappingURL=match-events.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/matches/match-details/match-facts/match-facts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/matches/match-details/match-facts/match-facts.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"match && match.events && match.events.length>0\">\n  <app-match-events matchID=\"{{matchID}}\"></app-match-events>\n</div>\n\n<div *ngIf=\"match && competition\">\n    <table class=\"table table-responsive table-striped\" id=\"table\">\n      <tbody>\n        <tr><td>Competition</td><td>{{competition.name}}</td></tr>\n        <tr><td>Season</td><td>{{match.season}}</td></tr>\n        <tr><td>Week</td><td>{{match.week}}</td></tr>\n        <tr><td>Stadium</td><td>{{match.venue}}</td></tr>\n        <tr><td>Venue City</td><td>{{match.venue_city}}</td></tr>\n        <tr><td>Date</td><td>{{match.formatted_date}}</td></tr>\n        <tr><td>Time</td><td>{{match.time}}</td></tr>\n      </tbody>\n    </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/matches/match-details/match-facts/match-facts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchFactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__ = __webpack_require__("../../../../../src/app/services/soccer.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MatchFactsComponent = (function () {
    function MatchFactsComponent(soccerService) {
        this.soccerService = soccerService;
    }
    MatchFactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // match details
        this.soccerService.getMatchDetails(this.matchID)
            .subscribe(function (match) {
            _this.match = _this.parseBody(match);
            _this.errorFlag = false;
            _this.getCompetition();
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'Unable to retrieve match details!';
        });
    };
    MatchFactsComponent.prototype.getCompetition = function () {
        var _this = this;
        this.soccerService.getCompetitionById(this.match.comp_id)
            .subscribe(function (competition) {
            _this.competition = _this.parseBody(competition);
            _this.errorFlag = false;
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'Unable to retrieve competition details!';
        });
    };
    MatchFactsComponent.prototype.parseBody = function (data) {
        var val = data._body;
        val = JSON.parse(val);
        return val;
    };
    return MatchFactsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MatchFactsComponent.prototype, "matchID", void 0);
MatchFactsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-match-facts',
        template: __webpack_require__("../../../../../src/app/components/matches/match-details/match-facts/match-facts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/matches/match-details/match-facts/match-facts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */]) === "function" && _a || Object])
], MatchFactsComponent);

var _a;
//# sourceMappingURL=match-facts.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/matches/match-details/match-lineup/match-lineup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/matches/match-details/match-lineup/match-lineup.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Match Lineup-->\n<div *ngIf=\"lineup\">\n  <!--first team-->\n  <div class=\"text-left\">\n    <h3><span class=\"label label-default\">\n      First Team\n    </span></h3>\n  </div>\n\n  <div class=\"row container-fluid\">\n    <!-- Left Pane - Home team -->\n    <div class=\"col-sm-6 col-md-6 my-left-pane-lineup pull-left\">\n      <!--first team-->\n      <ul *ngFor=\"let player of lineup.localteam\"\n          style=\"list-style: none\"\n          class=\"list-group\">\n        <li>\n          <span class=\"badge badge-pill\">{{player.number}}</span>\n          {{player.name}}\n          <span class=\"label label-info\">({{player.pos}})</span>\n        </li>\n      </ul>\n    </div>\n\n    <!-- Right Pane - Away Team -->\n    <div class=\"col-sm-6 col-md-6 my-right-pane-lineup pull-right\">\n      <!--first team-->\n      <ul *ngFor=\"let player of lineup.visitorteam\"\n          style=\"list-style: none\"\n          class=\"list-group\">\n        <li>\n          <span class=\"badge badge-pill\">{{player.number}}</span>\n          {{player.name}}\n          <span class=\"label label-info\">({{player.pos}})</span>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <!--subs/ bench-->\n  <div class=\"text-left\">\n    <h3><span class=\"label label-default\">\n      Bench\n    </span></h3>\n  </div>\n\n  <div class=\"row container-fluid\">\n    <!-- Left Pane - Home team -->\n    <div class=\"col-sm-6 col-md-6 my-left-pane-lineup pull-left\">\n      <!--first team-->\n      <ul *ngFor=\"let player of subs.localteam\"\n          style=\"list-style: none\"\n          class=\"list-group\">\n        <li>\n          <span class=\"badge badge-pill\">{{player.number}}</span>\n          {{player.name}}\n          <span class=\"label label-info\">({{player.pos}})</span>\n        </li>\n      </ul>\n    </div>\n\n    <!-- Right Pane - Away Team -->\n    <div class=\"col-sm-6 col-md-6 my-right-pane-lineup pull-right\">\n      <!--first team-->\n      <ul *ngFor=\"let player of subs.visitorteam\"\n          style=\"list-style: none\"\n          class=\"list-group\">\n        <li>\n          <span class=\"badge badge-pill\">{{player.number}}</span>\n          {{player.name}}\n          <span class=\"label label-info\">({{player.pos}})</span>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/matches/match-details/match-lineup/match-lineup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchLineupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__ = __webpack_require__("../../../../../src/app/services/soccer.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MatchLineupComponent = (function () {
    function MatchLineupComponent(soccerService) {
        this.soccerService = soccerService;
    }
    MatchLineupComponent.prototype.ngOnInit = function () {
        var _this = this;
        // match commentary - lineup & bench
        this.soccerService.getMatchCommentary(this.matchID)
            .subscribe(function (match) {
            var commentary = _this.parseBody(match);
            _this.lineup = commentary.lineup;
            _this.subs = commentary.subs;
            _this.errorFlag = false;
        }, function (error) {
            console.log(error + ' unable to retrieve match lineup!');
            _this.errorFlag = true;
            _this.errorMsg = 'Unable to retrieve match lineup!';
        });
    };
    MatchLineupComponent.prototype.parseBody = function (data) {
        var val = data._body;
        val = JSON.parse(val);
        return val;
    };
    return MatchLineupComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MatchLineupComponent.prototype, "matchID", void 0);
MatchLineupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-match-lineup',
        template: __webpack_require__("../../../../../src/app/components/matches/match-details/match-lineup/match-lineup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/matches/match-details/match-lineup/match-lineup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */]) === "function" && _a || Object])
], MatchLineupComponent);

var _a;
//# sourceMappingURL=match-lineup.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/matches/match-details/match-player-stats/match-player-stats.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/matches/match-details/match-player-stats/match-player-stats.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"match && playerStats && localTeamPlayers.length>0 && visitorTeamPlayers.length>0\">\n  <select id=\"myselect\">\n    <!--<optgroup label=\"{{match.localteam_name}}\">-->\n      <!--<div *ngFor=\"let player of localTeamPlayers\">-->\n        <!--<option>{{player}}</option>-->\n      <!--</div>-->\n    <!--</optgroup>-->\n\n    <!--<optgroup label=\"{{match.visitorteam_name}}\">-->\n      <!--<div *ngFor=\"let player of visitorTeamPlayers\">-->\n        <!--<option>{{player}}</option>-->\n      <!--</div>-->\n    <!--</optgroup>-->\n  </select>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/matches/match-details/match-player-stats/match-player-stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchPlayerStatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__ = __webpack_require__("../../../../../src/app/services/soccer.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MatchPlayerStatsComponent = (function () {
    function MatchPlayerStatsComponent(soccerService) {
        this.soccerService = soccerService;
    }
    MatchPlayerStatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // match details - local-team-name & away-team-name
        this.soccerService.getMatchDetails(this.matchID)
            .subscribe(function (matchDetails) {
            _this.match = _this.parseBody(matchDetails);
            _this.errorFlag = false;
        }, function (error) {
            console.log(error);
            _this.errorFlag = true;
            _this.errorMsg = 'Unable to retrieve match details!';
        });
        // all player stats
        this.soccerService.getMatchCommentary(this.matchID)
            .subscribe(function (matchCommentary) {
            var commentary = _this.parseBody(matchCommentary);
            _this.playerStats = commentary.player_stats;
            _this.errorFlag = false;
            if (_this.playerStats) {
                _this.localTeamPlayers = _this.getPlayerNames('localteam');
                _this.visitorTeamPlayers = _this.getPlayerNames('visitorteam');
            }
        }, function (error) {
            console.log(error + ' unable to retrieve player stats!');
            _this.errorFlag = true;
            _this.errorMsg = 'Unable to retrieve player stats!';
        });
    };
    MatchPlayerStatsComponent.prototype.parseBody = function (data) {
        var val = data._body;
        val = JSON.parse(val);
        return val;
    };
    MatchPlayerStatsComponent.prototype.getPlayerNames = function (teamType) {
        var playerNames = [];
        if (teamType === 'localteam') {
            for (var i = 0; i < this.playerStats.localteam.player.length; i++) {
                playerNames.push(this.playerStats.localteam.player[i].name);
            }
        }
        else if (teamType === 'visitorteam') {
            for (var i = 0; i < this.playerStats.visitorteam.player.length; i++) {
                playerNames.push(this.playerStats.visitorteam.player[i].name);
            }
        }
        return playerNames;
    };
    return MatchPlayerStatsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MatchPlayerStatsComponent.prototype, "matchID", void 0);
MatchPlayerStatsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-match-player-stats',
        template: __webpack_require__("../../../../../src/app/components/matches/match-details/match-player-stats/match-player-stats.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/matches/match-details/match-player-stats/match-player-stats.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */]) === "function" && _a || Object])
], MatchPlayerStatsComponent);

var _a;
//# sourceMappingURL=match-player-stats.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/matches/match-details/match-stats/match-stats.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/matches/match-details/match-stats/match-stats.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"stats\">\n  <!--Match stats-->\n  <table class=\"table table-responsive table-striped\">\n    <tbody>\n      <tr>\n        <td class=\"col-xs-3 text-left\">{{localTeamStats.shots_total}}</td>\n        <td class=\"col-xs-6 text-center\">Total Shots</td>\n        <td class=\"col-xs-3 text-right\">{{awayTeamStats.shots_total}}</td>\n      </tr>\n\n      <tr>\n        <td class=\"col-xs-3 text-left\">{{localTeamStats.shots_ongoal}}</td>\n        <td class=\"col-xs-6 text-center\">Shots On Goal</td>\n        <td class=\"col-xs-3 text-right\">{{awayTeamStats.shots_ongoal}}</td>\n      </tr>\n\n      <tr>\n        <td class=\"col-xs-3 text-left\">{{localTeamStats.fouls}}</td>\n        <td class=\"col-xs-6 text-center\">Fouls</td>\n        <td class=\"col-xs-3 text-right\">{{awayTeamStats.fouls}}</td>\n      </tr>\n\n      <tr>\n        <td class=\"col-xs-3 text-left\">{{localTeamStats.corners}}</td>\n        <td class=\"col-xs-6 text-center\">Corners</td>\n        <td class=\"col-xs-3 text-right\">{{awayTeamStats.corners}}</td>\n      </tr>\n\n      <tr>\n        <td class=\"col-xs-3 text-left\">{{localTeamStats.offsides}}</td>\n        <td class=\"col-xs-6 text-center\">Offsides</td>\n        <td class=\"col-xs-3 text-right\">{{awayTeamStats.offsides}}</td>\n      </tr>\n\n      <tr>\n        <td class=\"col-xs-3 text-left\">{{localTeamStats.possesiontime}}</td>\n        <td class=\"col-xs-6 text-center\">Possession</td>\n        <td class=\"col-xs-3 text-right\">{{awayTeamStats.possesiontime}}</td>\n      </tr>\n\n      <tr>\n        <td class=\"col-xs-3 text-left\">{{localTeamStats.yellowcards}}</td>\n        <td class=\"col-xs-6 text-center\">Yellow Cards</td>\n        <td class=\"col-xs-3 text-right\">{{awayTeamStats.yellowcards}}</td>\n      </tr>\n\n      <tr>\n        <td class=\"col-xs-3 text-left\">{{localTeamStats.redcards}}</td>\n        <td class=\"col-xs-6 text-center\">Red Cards</td>\n        <td class=\"col-xs-3 text-right\">{{awayTeamStats.redcards}}</td>\n      </tr>\n\n      <tr>\n        <td class=\"col-xs-3 text-left\">{{localTeamStats.saves}}</td>\n        <td class=\"col-xs-6 text-center\">Saves</td>\n        <td class=\"col-xs-3 text-right\">{{awayTeamStats.saves}}</td>\n      </tr>\n\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/matches/match-details/match-stats/match-stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchStatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__ = __webpack_require__("../../../../../src/app/services/soccer.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MatchStatsComponent = (function () {
    function MatchStatsComponent(soccerService) {
        this.soccerService = soccerService;
    }
    MatchStatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // match commentary - lineup & bench
        this.soccerService.getMatchCommentary(this.matchID)
            .subscribe(function (match) {
            var commentary = _this.parseBody(match);
            _this.stats = commentary.match_stats;
            _this.localTeamStats = _this.stats.localteam[0];
            _this.awayTeamStats = _this.stats.visitorteam[0];
            _this.errorFlag = false;
        }, function (error) {
            console.log(error + ' unable to retrieve match stats!');
            _this.errorFlag = true;
            _this.errorMsg = 'Unable to retrieve match stats!';
        });
    };
    MatchStatsComponent.prototype.parseBody = function (data) {
        var val = data._body;
        val = JSON.parse(val);
        return val;
    };
    return MatchStatsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MatchStatsComponent.prototype, "matchID", void 0);
MatchStatsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-match-stats',
        template: __webpack_require__("../../../../../src/app/components/matches/match-details/match-stats/match-stats.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/matches/match-details/match-stats/match-stats.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */]) === "function" && _a || Object])
], MatchStatsComponent);

var _a;
//# sourceMappingURL=match-stats.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/matches/match-details/match-team-standings/match-team-standings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/matches/match-details/match-team-standings/match-team-standings.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"standings\">\n    <table class=\"points_table\">\n\n      <thead>\n        <tr>\n          <th class=\"col-xs-1\">Rank</th>\n          <th class=\"col-xs-3\">Team</th>\n          <th class=\"col-xs-1\">PL</th>\n          <th class=\"col-xs-1\">W</th>\n          <th class=\"col-xs-1\">D</th>\n          <th class=\"col-xs-1\">L</th>\n          <th class=\"col-xs-1\">GS</th>\n          <th class=\"col-xs-1\">GA</th>\n          <th class=\"col-xs-1\">GD</th>\n          <th class=\"col-xs-1\">P</th>\n        </tr>\n      </thead>\n\n      <tbody class=\"points_table_scrollbar\">\n        <div *ngFor=\"let team of standings\">\n          <tr class=\"even\">\n            <td class=\"col-xs-1 text-center\">{{team.position}}</td>\n            <td class=\"col-xs-3 text-left\">{{team.team_name}}</td>\n            <td class=\"col-xs-1 text-center\">{{team.overall_gp}}</td>\n            <td class=\"col-xs-1 text-center\">{{team.overall_w}}</td>\n            <td class=\"col-xs-1 text-center\">{{team.overall_d}}</td>\n            <td class=\"col-xs-1 text-center\">{{team.overall_l}}</td>\n            <td class=\"col-xs-1 text-center\">{{team.overall_gs}}</td>\n            <td class=\"col-xs-1 text-center\">{{team.overall_ga}}</td>\n            <td class=\"col-xs-1 text-center\">{{team.gd}}</td>\n            <td class=\"col-xs-1 text-center\">{{team.points}}</td>\n          </tr>\n        </div>\n      </tbody>\n\n    </table>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/matches/match-details/match-team-standings/match-team-standings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchTeamStandingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__ = __webpack_require__("../../../../../src/app/services/soccer.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MatchTeamStandingsComponent = (function () {
    function MatchTeamStandingsComponent(soccerService) {
        this.soccerService = soccerService;
    }
    MatchTeamStandingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // match commentary - lineup & bench
        this.soccerService.getCompetitionStandings(this.compId)
            .subscribe(function (compDetails) {
            _this.standings = _this.parseBody(compDetails);
            _this.standings.sort(function (t1, t2) { return Number(t1.position) - Number(t2.position); });
            _this.errorFlag = false;
        }, function (error) {
            console.log(error + ' unable to retrieve competition standings!');
            _this.errorFlag = true;
            _this.errorMsg = 'Unable to retrieve competition standings!';
        });
    };
    MatchTeamStandingsComponent.prototype.ngOnChanges = function () {
        this.ngOnInit();
    };
    MatchTeamStandingsComponent.prototype.parseBody = function (data) {
        var val = data._body;
        val = JSON.parse(val);
        return val;
    };
    return MatchTeamStandingsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MatchTeamStandingsComponent.prototype, "compId", void 0);
MatchTeamStandingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-match-team-standings',
        template: __webpack_require__("../../../../../src/app/components/matches/match-details/match-team-standings/match-team-standings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/matches/match-details/match-team-standings/match-team-standings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */]) === "function" && _a || Object])
], MatchTeamStandingsComponent);

var _a;
//# sourceMappingURL=match-team-standings.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/matches/match-list/match-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/matches/match-list/match-list.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-responsive table-striped\">\n  <tbody>\n    <tr *ngFor=\"let match of matches\"\n        class=\"tr-match-score\"\n        (click)=\"navigateToMatchDetails(match.id)\">\n        <td class=\"col-xs-4 text-right\">{{match.localteam_name}}</td>\n        <td class=\"col-xs-4 text-center\"\n            *ngIf=\"match.localteam_score == '?' || match.localteam_score == ''\">\n          -</td>\n        <td class=\"col-xs-4 text-center\"\n            *ngIf=\"match.localteam_score != '?' && match.localteam_score != ''\">\n          ({{match.localteam_score}}) - ({{match.visitorteam_score}})</td>\n        <td class=\"col-xs-4 text-left\">{{match.visitorteam_name}}</td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/components/matches/match-list/match-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__ = __webpack_require__("../../../../../src/app/services/soccer.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MatchListComponent = (function () {
    function MatchListComponent(soccerService, router) {
        this.soccerService = soccerService;
        this.router = router;
    }
    MatchListComponent.prototype.ngOnInit = function () {
        switch (this.searchType) {
            case 'BY_DAY': {
                this.getMatchesByDate();
                break;
            }
            case 'PREVIOUS_COMP': {
                this.getPreviousMatchesOfCompetition();
                break;
            }
            case 'UPCOMING_COMP': {
                this.getUpcomingMatchesOfCompetition();
                break;
            }
            case 'PREVIOUS_TEAM': {
                this.getPreviousMatchesOfTeam();
                break;
            }
            case 'UPCOMING_TEAM': {
                this.getUpcomingMatchesOfTeam();
                break;
            }
        }
    };
    MatchListComponent.prototype.ngOnChanges = function () {
        this.ngOnInit();
    };
    MatchListComponent.prototype.getMatchesByDate = function () {
        var _this = this;
        this.soccerService
            .getMatchesByDate(this.currDate)
            .subscribe(function (data) {
            _this.matches = _this.parseBody(data);
        });
    };
    MatchListComponent.prototype.getPreviousMatchesOfCompetition = function () {
        var _this = this;
        this.soccerService
            .getPreviousMatchesOfCompetition(this.compId, this.toDate)
            .subscribe(function (data) {
            _this.matches = _this.parseBody(data);
        });
    };
    MatchListComponent.prototype.getUpcomingMatchesOfCompetition = function () {
        var _this = this;
        this.soccerService
            .getUpcomingMatchesOfCompetition(this.compId, this.fromDate)
            .subscribe(function (data) {
            _this.matches = _this.parseBody(data);
        });
    };
    MatchListComponent.prototype.getPreviousMatchesOfTeam = function () {
        var _this = this;
        this.soccerService
            .getPreviousMatchesOfTeam(this.teamId, this.toDate)
            .subscribe(function (data) {
            _this.matches = _this.parseBody(data);
        });
    };
    MatchListComponent.prototype.getUpcomingMatchesOfTeam = function () {
        var _this = this;
        this.soccerService
            .getUpcomingMatchesOfTeam(this.teamId, this.fromDate)
            .subscribe(function (data) {
            _this.matches = _this.parseBody(data);
        });
    };
    MatchListComponent.prototype.parseBody = function (data) {
        var val = data._body;
        val = JSON.parse(val);
        return val;
    };
    MatchListComponent.prototype.navigateToMatchDetails = function (matchId) {
        this.router.navigate(['/match', matchId]);
    };
    return MatchListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MatchListComponent.prototype, "currDate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MatchListComponent.prototype, "fromDate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MatchListComponent.prototype, "toDate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MatchListComponent.prototype, "compId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MatchListComponent.prototype, "teamId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MatchListComponent.prototype, "searchType", void 0);
MatchListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-match-list',
        template: __webpack_require__("../../../../../src/app/components/matches/match-list/match-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/matches/match-list/match-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MatchListComponent);

var _a, _b;
//# sourceMappingURL=match-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/matches/matches.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/matches/matches.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Date Scroll -->\n<nav class=\"navbar navbar-inverse\">\n\n  <div class=\"row container-fluid\">\n    <!--previous date-->\n    <div class=\"col-xs-4\">\n      <a class=\"navbar-brand pull-left\" (click)=\"decrementDate()\">\n        <span class=\"glyphicon glyphicon-hand-left pull-left\"></span>\n      </a>\n    </div>\n\n    <!--matches-->\n    <div class=\"col-xs-4\">\n      <a class=\"navbar-brand text-center\">\n        {{formattedDate}}\n      </a>\n    </div>\n\n    <!--next date-->\n    <div class=\"col-xs-4\">\n      <a class=\"navbar-brand pull-right\" (click)=\"incrementDate()\">\n        <span class=\"glyphicon glyphicon-hand-right pull-right\"></span>\n      </a>\n    </div>\n  </div>\n\n</nav>\n\n<app-match-list searchType=\"BY_DAY\" currDate=\"{{formattedDate}}\"></app-match-list>\n"

/***/ }),

/***/ "../../../../../src/app/components/matches/matches.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MatchesComponent = (function () {
    function MatchesComponent(userService, sharedService) {
        this.userService = userService;
        this.sharedService = sharedService;
    }
    MatchesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.loggedIn()
            .subscribe(function (isLoggedIn) {
            _this.isLoggedIn = isLoggedIn;
            // console.log(isLoggedIn);
            if (_this.isLoggedIn) {
                _this.user = _this.sharedService.user;
            }
            // console.log(this.user);
        }, function (error) {
            console.log(error + ' cannot check if user is logged in');
        });
        this.selectedDate = new Date(this.date);
        this.formatDate();
    };
    MatchesComponent.prototype.incrementDate = function () {
        this.selectedDate.setDate(this.selectedDate.getDate() + 1);
        this.formatDate();
    };
    MatchesComponent.prototype.decrementDate = function () {
        this.selectedDate.setDate(this.selectedDate.getDate() - 1);
        this.formatDate();
    };
    MatchesComponent.prototype.formatDate = function () {
        var dd = this.selectedDate.getDate();
        var mm = this.selectedDate.getMonth() + 1;
        var yyyy = this.selectedDate.getFullYear();
        this.formattedDate = (mm + '/' + dd + '/' + yyyy);
    };
    return MatchesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MatchesComponent.prototype, "date", void 0);
MatchesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-matches',
        template: __webpack_require__("../../../../../src/app/components/matches/matches.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/matches/matches.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */]) === "function" && _b || Object])
], MatchesComponent);

var _a, _b;
//# sourceMappingURL=matches.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/matches/search-match-objects/search-match-objects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/matches/search-match-objects/search-match-objects.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n\n  <!--app header-->\n  <div *ngIf=\"!isLoggedIn\">\n    <app-unregistered-home-header></app-unregistered-home-header>\n  </div>\n  <div *ngIf=\"isLoggedIn\">\n    <app-home-header></app-home-header>\n  </div>\n\n  <!--main body-->\n  <div class=\"row container-fluid\">\n\n    <!-- Left Pane - User details -->\n    <div class=\"col-sm-4 hidden-xs my-left-pane my-right-border\">\n      <div *ngIf=\"!isLoggedIn\">\n        <app-unregistered-home-user-profile></app-unregistered-home-user-profile>\n      </div>\n      <div *ngIf=\"isLoggedIn\">\n        <app-home-user-profile></app-home-user-profile>\n      </div>\n    </div>\n\n    <!-- Right Pane - Match Search Objects -->\n    <div class=\"col-sm-8 col-xs-12 my-right-pane\">\n      <app-search-objects></app-search-objects>\n    </div>\n  </div>\n\n  <!--app footer-->\n  <div *ngIf=\"!isLoggedIn\">\n    <app-unregistered-home-footer></app-unregistered-home-footer>\n  </div>\n  <div *ngIf=\"isLoggedIn\">\n    <app-home-footer></app-home-footer>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/matches/search-match-objects/search-match-objects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchMatchObjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchMatchObjectsComponent = (function () {
    function SearchMatchObjectsComponent(userService, sharedService) {
        this.userService = userService;
        this.sharedService = sharedService;
    }
    SearchMatchObjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.loggedIn()
            .subscribe(function (isLoggedIn) {
            _this.isLoggedIn = isLoggedIn;
            // console.log(isLoggedIn);
            if (_this.isLoggedIn) {
                _this.user = _this.sharedService.user;
            }
            else {
                _this.user = true;
            }
            // console.log(this.user);
        }, function (error) {
            console.log(error + ' cannot check if user is logged in');
        });
    };
    return SearchMatchObjectsComponent;
}());
SearchMatchObjectsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search-match-objects',
        template: __webpack_require__("../../../../../src/app/components/matches/search-match-objects/search-match-objects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/matches/search-match-objects/search-match-objects.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */]) === "function" && _b || Object])
], SearchMatchObjectsComponent);

var _a, _b;
//# sourceMappingURL=search-match-objects.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/matches/search-match-objects/search-objects/search-objects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/matches/search-match-objects/search-objects/search-objects.component.html":
/***/ (function(module, exports) {

module.exports = "<!--search body-->\n<nav class=\"navbar navbar-default text-center\">\n  <form class=\"form-inline text-center\">\n    <div class=\"form-group\">\n      <select class=\"form-control\" name=\"selectType\"\n              [(ngModel)]=\"selectedValue\">\n        <option value=\"LEAGUES\"><strong>Leagues</strong></option>\n        <option value=\"TEAMS\"><strong>Teams</strong></option>\n        <option value=\"PLAYERS\"><strong>Players</strong></option>\n      </select>\n    </div>\n\n    <div class=\"form-group\">\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"searchTerm\"\n             name=\"searchTerm\"\n             required\n             placeholder=\"Search...\"\n             [(ngModel)] = \"searchTerm\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <button class=\"btn btn-success btn-block\"\n              (click)=\"searchItems()\">\n        Search\n      </button>\n    </div>\n  </form>\n</nav>\n\n<table class=\"table table-responsive table-striped\">\n  <tbody>\n    <tr *ngFor=\"let item of items\"\n        class=\"tr-match-score text-center\"\n        (click)=\"navigateToSearchedItem(item.apiId)\">\n      <h4><strong>{{item.name}}</strong></h4>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/components/matches/search-match-objects/search-objects/search-objects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchObjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_league_service_client__ = __webpack_require__("../../../../../src/app/services/league.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_player_service_client__ = __webpack_require__("../../../../../src/app/services/player.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_team_service_client__ = __webpack_require__("../../../../../src/app/services/team.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SearchObjectsComponent = (function () {
    function SearchObjectsComponent(userService, router, route, leagueService, teamService, playerService, sharedService) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.leagueService = leagueService;
        this.teamService = teamService;
        this.playerService = playerService;
        this.sharedService = sharedService;
    }
    SearchObjectsComponent.prototype.ngOnInit = function () {
        this.options = [];
        this.searchTerm = '';
        this.user = this.sharedService.user;
        this.userID = this.user._id;
    };
    SearchObjectsComponent.prototype.searchItems = function () {
        if (this.searchTerm === '' || this.searchTerm.length <= 2) {
            console.log('please enter valid name');
            return;
        }
        switch (this.selectedValue) {
            case 'LEAGUES': {
                this.searchLeagues();
                break;
            }
            case 'TEAMS': {
                this.searchTeams();
                break;
            }
            case 'PLAYERS': {
                this.searchPlayers();
                break;
            }
        }
        this.items = [];
        this.itemsCounter = 0;
        this.options = [];
    };
    SearchObjectsComponent.prototype.searchLeagues = function () {
        var _this = this;
        this.leagueService.searchLeaguesByName(this.userID, this.searchTerm)
            .subscribe(function (items) {
            _this.items = items;
            // console.log(items);
        }, function (error) {
            console.log(error);
        });
    };
    SearchObjectsComponent.prototype.searchPlayers = function () {
        var _this = this;
        this.playerService.searchPlayersByName(this.userID, this.searchTerm)
            .subscribe(function (items) {
            _this.items = items;
            // console.log(items);
        }, function (error) {
            console.log(error);
        });
    };
    SearchObjectsComponent.prototype.searchTeams = function () {
        var _this = this;
        this.teamService.searchTeamsByName(this.userID, this.searchTerm)
            .subscribe(function (items) {
            _this.items = items;
            // console.log(items);
        }, function (error) {
            console.log(error);
        });
    };
    SearchObjectsComponent.prototype.navigateToSearchedItem = function (id) {
        switch (this.selectedValue) {
            case 'LEAGUES': {
                this.navigateToSearchedLeague(id);
                break;
            }
            case 'TEAMS': {
                this.navigateToSearchedTeam(id);
                break;
            }
            case 'PLAYERS': {
                this.navigateToSearchedPlayer(id);
                break;
            }
        }
    };
    SearchObjectsComponent.prototype.navigateToSearchedLeague = function (leagueId) {
        this.router.navigate(['/league', leagueId]);
    };
    SearchObjectsComponent.prototype.navigateToSearchedTeam = function (teamId) {
        this.router.navigate(['/team', teamId]);
    };
    SearchObjectsComponent.prototype.navigateToSearchedPlayer = function (playerId) {
        this.router.navigate(['/player', playerId]);
    };
    return SearchObjectsComponent;
}());
SearchObjectsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search-objects',
        template: __webpack_require__("../../../../../src/app/components/matches/search-match-objects/search-objects/search-objects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/matches/search-match-objects/search-objects/search-objects.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_league_service_client__["a" /* LeagueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_league_service_client__["a" /* LeagueService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_team_service_client__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_team_service_client__["a" /* TeamService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_player_service_client__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_player_service_client__["a" /* PlayerService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_shared_service__["a" /* SharedService */]) === "function" && _g || Object])
], SearchObjectsComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=search-objects.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/player/player-club-international/player-club-international.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/player/player-club-international/player-club-international.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"intlSeasons\">\n  <table class=\"points_table\">\n\n    <thead>\n    <tr>\n      <th class=\"col-xs-2\">Season</th>\n      <th class=\"col-xs-3\">League</th>\n      <th class=\"col-xs-2\">Team</th>\n      <th class=\"col-xs-1\">App</th>\n      <th class=\"col-xs-1\">Min</th>\n      <th class=\"col-xs-1\">G</th>\n      <th class=\"col-xs-1\">Y</th>\n      <th class=\"col-xs-1\">R</th>\n    </tr>\n    </thead>\n\n    <tbody class=\"points_table_scrollbar\">\n    <div *ngFor=\"let season of intlSeasons\">\n      <tr class=\"even\">\n        <td class=\"col-xs-2 text-center\">{{season.season}}</td>\n        <td class=\"col-xs-3 text-center\">{{season.league}}</td>\n        <td class=\"col-xs-2 text-center\">{{season.name}}</td>\n        <td class=\"col-xs-1 text-center\">{{season.appearances}}</td>\n        <td class=\"col-xs-1 text-center\">{{season.minutes}}</td>\n        <td class=\"col-xs-1 text-center\">{{season.goals}}</td>\n        <td class=\"col-xs-1 text-center\">{{season.yellowcards}}</td>\n        <td class=\"col-xs-1 text-center\">{{season.redcards}}</td>\n      </tr>\n    </div>\n    </tbody>\n\n  </table>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/player/player-club-international/player-club-international.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerClubInternationalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__ = __webpack_require__("../../../../../src/app/services/soccer.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerClubInternationalComponent = (function () {
    function PlayerClubInternationalComponent(soccerService) {
        this.soccerService = soccerService;
    }
    PlayerClubInternationalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.soccerService.getPlayerInformation(this.playerId)
            .subscribe(function (player) {
            _this.player = _this.parseBody(player);
            _this.intlSeasons = _this.player.player_statistics.club_intl;
            _this.errorFlag = false;
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'Unable to retrieve player details!';
        });
    };
    PlayerClubInternationalComponent.prototype.parseBody = function (data) {
        var val = data._body;
        val = JSON.parse(val);
        return val;
    };
    return PlayerClubInternationalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PlayerClubInternationalComponent.prototype, "playerId", void 0);
PlayerClubInternationalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-player-club-international',
        template: __webpack_require__("../../../../../src/app/components/player/player-club-international/player-club-international.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/player/player-club-international/player-club-international.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */]) === "function" && _a || Object])
], PlayerClubInternationalComponent);

var _a;
//# sourceMappingURL=player-club-international.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/player/player-club/player-club.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/player/player-club/player-club.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"leaguesSeasons\">\n  <table class=\"points_table\">\n\n    <thead>\n    <tr>\n      <th class=\"col-xs-2\">Season</th>\n      <th class=\"col-xs-3\">League</th>\n      <th class=\"col-xs-2\">Team</th>\n      <th class=\"col-xs-1\">App</th>\n      <th class=\"col-xs-1\">Min</th>\n      <th class=\"col-xs-1\">G</th>\n      <th class=\"col-xs-1\">Y</th>\n      <th class=\"col-xs-1\">R</th>\n    </tr>\n    </thead>\n\n    <tbody class=\"points_table_scrollbar\">\n    <div *ngFor=\"let season of leaguesSeasons\">\n      <tr class=\"even\">\n        <td class=\"col-xs-2 text-center\">{{season.season}}</td>\n        <td class=\"col-xs-3 text-center\">{{season.league}}</td>\n        <td class=\"col-xs-2 text-center\">{{season.name}}</td>\n        <td class=\"col-xs-1 text-center\">{{season.appearances}}</td>\n        <td class=\"col-xs-1 text-center\">{{season.minutes}}</td>\n        <td class=\"col-xs-1 text-center\">{{season.goals}}</td>\n        <td class=\"col-xs-1 text-center\">{{season.yellowcards}}</td>\n        <td class=\"col-xs-1 text-center\">{{season.redcards}}</td>\n      </tr>\n    </div>\n    </tbody>\n\n  </table>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/player/player-club/player-club.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerClubComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__ = __webpack_require__("../../../../../src/app/services/soccer.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerClubComponent = (function () {
    function PlayerClubComponent(soccerService) {
        this.soccerService = soccerService;
    }
    PlayerClubComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.soccerService.getPlayerInformation(this.playerId)
            .subscribe(function (player) {
            _this.player = _this.parseBody(player);
            _this.leaguesSeasons = _this.player.player_statistics.club;
            _this.errorFlag = false;
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'Unable to retrieve player details!';
        });
    };
    PlayerClubComponent.prototype.parseBody = function (data) {
        var val = data._body;
        val = JSON.parse(val);
        return val;
    };
    return PlayerClubComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PlayerClubComponent.prototype, "playerId", void 0);
PlayerClubComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-player-club',
        template: __webpack_require__("../../../../../src/app/components/player/player-club/player-club.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/player/player-club/player-club.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */]) === "function" && _a || Object])
], PlayerClubComponent);

var _a;
//# sourceMappingURL=player-club.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/player/player-cups/player-cups.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/player/player-cups/player-cups.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"cupSeasons\">\n  <table class=\"points_table\">\n\n    <thead>\n    <tr>\n      <th class=\"col-xs-2\">Season</th>\n      <th class=\"col-xs-3\">League</th>\n      <th class=\"col-xs-2\">Team</th>\n      <th class=\"col-xs-1\">App</th>\n      <th class=\"col-xs-1\">Min</th>\n      <th class=\"col-xs-1\">G</th>\n      <th class=\"col-xs-1\">Y</th>\n      <th class=\"col-xs-1\">R</th>\n    </tr>\n    </thead>\n\n    <tbody class=\"points_table_scrollbar\">\n    <div *ngFor=\"let season of cupSeasons\">\n      <tr class=\"even\">\n        <td class=\"col-xs-2 text-center\">{{season.season}}</td>\n        <td class=\"col-xs-3 text-center\">{{season.league}}</td>\n        <td class=\"col-xs-2 text-center\">{{season.name}}</td>\n        <td class=\"col-xs-1 text-center\">{{season.appearances}}</td>\n        <td class=\"col-xs-1 text-center\">{{season.minutes}}</td>\n        <td class=\"col-xs-1 text-center\">{{season.goals}}</td>\n        <td class=\"col-xs-1 text-center\">{{season.yellowcards}}</td>\n        <td class=\"col-xs-1 text-center\">{{season.redcards}}</td>\n      </tr>\n    </div>\n    </tbody>\n\n  </table>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/player/player-cups/player-cups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerCupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__ = __webpack_require__("../../../../../src/app/services/soccer.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerCupsComponent = (function () {
    function PlayerCupsComponent(soccerService) {
        this.soccerService = soccerService;
    }
    PlayerCupsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.soccerService.getPlayerInformation(this.playerId)
            .subscribe(function (player) {
            _this.player = _this.parseBody(player);
            _this.cupSeasons = _this.player.player_statistics.cups;
            _this.errorFlag = false;
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'Unable to retrieve player details!';
        });
    };
    PlayerCupsComponent.prototype.parseBody = function (data) {
        var val = data._body;
        val = JSON.parse(val);
        return val;
    };
    return PlayerCupsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PlayerCupsComponent.prototype, "playerId", void 0);
PlayerCupsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-player-cups',
        template: __webpack_require__("../../../../../src/app/components/player/player-cups/player-cups.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/player/player-cups/player-cups.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */]) === "function" && _a || Object])
], PlayerCupsComponent);

var _a;
//# sourceMappingURL=player-cups.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/player/player-facts/player-facts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/player/player-facts/player-facts.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"player\">\n  <div class=\"col-lg-12\">\n    <table class=\"table table-responsive table-striped\" id=\"table\">\n      <tbody>\n      <tr><td>Common Name</td><td>{{player.common_name}}</td></tr>\n      <tr><td>First Name</td><td>{{player.firstname}}</td></tr>\n      <tr><td>Last Name</td><td>{{player.lastname}}</td></tr>\n      <tr><td>Current Team</td><td>{{player.team}}</td></tr>\n      <tr><td>Nationality</td><td>{{player.nationality}}</td></tr>\n      <tr><td>Birth Date</td><td>{{player.birthdate}}</td></tr>\n      <tr><td>Age</td><td>{{player.age}}</td></tr>\n      <tr><td>Birth Country</td><td>{{player.birthcountry}}</td></tr>\n      <tr><td>Birth Place</td><td>{{player.birthplace}}</td></tr>\n      <tr><td>Position</td><td>{{player.position}}</td></tr>\n      <tr><td>Height</td><td>{{player.height}}</td></tr>\n      <tr><td>Weight</td><td>{{player.weight}}</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/player/player-facts/player-facts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerFactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__ = __webpack_require__("../../../../../src/app/services/soccer.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerFactsComponent = (function () {
    function PlayerFactsComponent(soccerService) {
        this.soccerService = soccerService;
    }
    PlayerFactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.soccerService.getPlayerInformation(this.playerId)
            .subscribe(function (player) {
            _this.player = _this.parseBody(player);
            _this.errorFlag = false;
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'Unable to retrieve player details!';
        });
    };
    PlayerFactsComponent.prototype.ngOnChanges = function () {
        this.ngOnInit();
    };
    PlayerFactsComponent.prototype.parseBody = function (data) {
        var val = data._body;
        val = JSON.parse(val);
        return val;
    };
    return PlayerFactsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PlayerFactsComponent.prototype, "playerId", void 0);
PlayerFactsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-player-facts',
        template: __webpack_require__("../../../../../src/app/components/player/player-facts/player-facts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/player/player-facts/player-facts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */]) === "function" && _a || Object])
], PlayerFactsComponent);

var _a;
//# sourceMappingURL=player-facts.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/player/player-national/player-national.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/player/player-national/player-national.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"nationalSeasons\">\n  <table class=\"points_table\">\n\n    <thead>\n    <tr>\n      <th class=\"col-xs-2\">Season</th>\n      <th class=\"col-xs-3\">League</th>\n      <th class=\"col-xs-2\">Team</th>\n      <th class=\"col-xs-1\">App</th>\n      <th class=\"col-xs-1\">Min</th>\n      <th class=\"col-xs-1\">G</th>\n      <th class=\"col-xs-1\">Y</th>\n      <th class=\"col-xs-1\">R</th>\n    </tr>\n    </thead>\n\n    <tbody class=\"points_table_scrollbar\">\n    <div *ngFor=\"let season of nationalSeasons\">\n      <tr class=\"even\">\n        <td class=\"col-xs-2 text-center\">{{season.season}}</td>\n        <td class=\"col-xs-3 text-center\">{{season.league}}</td>\n        <td class=\"col-xs-2 text-center\">{{season.name}}</td>\n        <td class=\"col-xs-1 text-center\">{{season.appearances}}</td>\n        <td class=\"col-xs-1 text-center\">{{season.minutes}}</td>\n        <td class=\"col-xs-1 text-center\">{{season.goals}}</td>\n        <td class=\"col-xs-1 text-center\">{{season.yellowcards}}</td>\n        <td class=\"col-xs-1 text-center\">{{season.redcards}}</td>\n      </tr>\n    </div>\n    </tbody>\n\n  </table>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/player/player-national/player-national.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerNationalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__ = __webpack_require__("../../../../../src/app/services/soccer.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerNationalComponent = (function () {
    function PlayerNationalComponent(soccerService) {
        this.soccerService = soccerService;
    }
    PlayerNationalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.soccerService.getPlayerInformation(this.playerId)
            .subscribe(function (player) {
            _this.player = _this.parseBody(player);
            _this.nationalSeasons = _this.player.player_statistics.national;
            _this.errorFlag = false;
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'Unable to retrieve player details!';
        });
    };
    PlayerNationalComponent.prototype.parseBody = function (data) {
        var val = data._body;
        val = JSON.parse(val);
        return val;
    };
    return PlayerNationalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PlayerNationalComponent.prototype, "playerId", void 0);
PlayerNationalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-player-national',
        template: __webpack_require__("../../../../../src/app/components/player/player-national/player-national.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/player/player-national/player-national.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */]) === "function" && _a || Object])
], PlayerNationalComponent);

var _a;
//# sourceMappingURL=player-national.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/player/player.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/player/player.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--app header-->\n<app-home-header></app-home-header>\n\n<!--main body-->\n<div class=\"row container-fluid\">\n\n  <!-- Left Pane - User details -->\n  <div class=\"col-sm-4 hidden-xs my-left-pane my-right-border\">\n    <app-home-user-profile></app-home-user-profile>\n  </div>\n\n  <!-- Right Pane - Player Details -->\n  <div class=\"col-sm-8 col-xs-12 my-right-pane\">\n\n    <div *ngIf=\"player\">\n      <!--player name-->\n      <div class=\"text-center\">\n        <h2><span class=\"label label-default\">{{player.name}}</span></h2>\n      </div>\n\n      <!--player details menu scrollbar-->\n      <div class=\"scrollmenu\">\n        <a (click)=\"changePlayerDetailsType('FACTS')\">Facts</a>\n        <a (click)=\"changePlayerDetailsType('LEAGUE')\">Club History (Leagues)</a>\n        <a (click)=\"changePlayerDetailsType('CUP')\">Club History (Cups)</a>\n        <a (click)=\"changePlayerDetailsType('CLUB_INTL')\">Club History (International)</a>\n        <a (click)=\"changePlayerDetailsType('NATIONAL')\">National Team</a>\n        <a (click)=\"changePlayerDetailsType('NEWS')\">News</a>\n      </div>\n\n      <!--match details component-->\n      <div [ngSwitch]=\"playerDetailsType\">\n\n        <div *ngSwitchCase=\"'FACTS'\">\n          <app-player-facts playerId=\"{{player.id}}\"></app-player-facts>\n        </div>\n\n        <div *ngSwitchCase=\"'LEAGUE'\">\n          <app-player-club playerId=\"{{player.id}}\"></app-player-club>\n        </div>\n\n        <div *ngSwitchCase=\"'CUP'\">\n          <app-player-cups playerId=\"{{player.id}}\"></app-player-cups>\n        </div>\n\n        <div *ngSwitchCase=\"'CLUB_INTL'\">\n          <app-player-club-international playerId=\"{{player.id}}\"></app-player-club-international>\n        </div>\n\n        <div *ngSwitchCase=\"'NATIONAL'\">\n          <app-player-national playerId=\"{{player.id}}\"></app-player-national>\n        </div>\n\n        <div *ngSwitchCase=\"'NEWS'\">\n          <div *ngIf=\"!isSelected\">\n            <app-review-list (reviewSelection)=\"updateReviewSelection($event.isSelected, $event.reviewId)\"\n                             itemType=\"player\"\n                             itemID=\"{{player.id}}\"></app-review-list>\n          </div>\n\n          <div *ngIf=\"isSelected\">\n            <app-review-display reviewId=\"{{reviewId}}\"></app-review-display>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<!--app footer-->\n<app-home-footer></app-home-footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/player/player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__ = __webpack_require__("../../../../../src/app/services/soccer.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayerComponent = (function () {
    function PlayerComponent(soccerService, router, route) {
        this.soccerService = soccerService;
        this.router = router;
        this.route = route;
    }
    PlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playerDetailsType = 'FACTS';
        this.route.params.subscribe(function (params) {
            _this.playerID = params['playerID'];
            _this.soccerService.getPlayerInformation(_this.playerID)
                .subscribe(function (player) {
                _this.player = _this.parseBody(player);
                _this.errorFlag = false;
            }, function (error) {
                _this.errorFlag = true;
                _this.errorMsg = 'Unable to retrieve player details!';
            });
        });
    };
    PlayerComponent.prototype.parseBody = function (data) {
        var val = data._body;
        val = JSON.parse(val);
        return val;
    };
    PlayerComponent.prototype.changePlayerDetailsType = function (type) {
        this.playerDetailsType = type;
    };
    PlayerComponent.prototype.updateReviewSelection = function (isSelected, reviewId) {
        this.isSelected = isSelected;
        this.reviewId = reviewId;
    };
    return PlayerComponent;
}());
PlayerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-player',
        template: __webpack_require__("../../../../../src/app/components/player/player.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/player/player.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], PlayerComponent);

var _a, _b, _c;
//# sourceMappingURL=player.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/review/review-display/review-display.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/review/review-display/review-display.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"review\" class=\"list-group\">\n\n  <div class=\"text-center text-capitalize\">\n    <h1>{{review.title}}</h1>\n  </div>\n\n  <div *ngIf=\"!isEmptyOrSpaces(review.imageUrl)\">\n    <img width=\"100%\"\n         height=\"300px\"\n         [src]=\"review.imageUrl\"/>\n  </div>\n\n  <div class=\"text-justify\">\n    <h5><p>{{review.comment}}</p></h5>\n  </div>\n\n  <div *ngIf=\"!isEmptyOrSpaces(review.videoUrl)\">\n    <iframe [src]=\"sanitizedURL\"\n            frameborder=\"0\"\n            width=\"100%\"\n            height=\"300px\"\n            allowfullscreen>\n    </iframe>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/review/review-display/review-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_review_service_client__ = __webpack_require__("../../../../../src/app/services/review.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewDisplayComponent = (function () {
    function ReviewDisplayComponent(reviewService, sanitizer) {
        this.reviewService = reviewService;
        this.sanitizer = sanitizer;
    }
    ReviewDisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.reviewId != null && !this.isEmptyOrSpaces(this.reviewId)) {
            this.reviewService.findReviewById(this.reviewId)
                .subscribe(function (review) {
                _this.review = review;
                if (!_this.isEmptyOrSpaces(_this.review.videoUrl)) {
                    _this.sanitizedURL = _this.getEmbededUrl();
                }
                _this.errorFlag = false;
                _this.errorMsg = '';
            }, function (error) {
                _this.errorMsg = 'Error in finding Review!!';
                _this.errorFlag = true;
                console.log(error + ' error in finding review!');
            });
        }
    };
    ReviewDisplayComponent.prototype.isEmptyOrSpaces = function (str) {
        return !str || str.trim() === '';
    };
    ReviewDisplayComponent.prototype.getEmbededUrl = function () {
        var urlParts = this.review.videoUrl.split('/');
        var videoId = urlParts[urlParts.length - 1];
        var embededUrl = 'https://www.youtube.com/embed/' + videoId;
        return this.sanitizer.bypassSecurityTrustResourceUrl(embededUrl);
    };
    return ReviewDisplayComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ReviewDisplayComponent.prototype, "reviewId", void 0);
ReviewDisplayComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-review-display',
        template: __webpack_require__("../../../../../src/app/components/review/review-display/review-display.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/review/review-display/review-display.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_review_service_client__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_review_service_client__["a" /* ReviewService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _b || Object])
], ReviewDisplayComponent);

var _a, _b;
//# sourceMappingURL=review-display.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/review/review-edit/review-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/review/review-edit/review-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!--app header-->\n<app-home-header></app-home-header>\n\n<!--main body-->\n<div class=\"row container-fluid\">\n\n  <!-- Left Pane - User details -->\n  <div class=\"col-sm-4 hidden-xs my-left-pane my-right-border\">\n    <app-home-user-profile></app-home-user-profile>\n  </div>\n\n  <!-- Right Pane - Review Details -->\n  <div class=\"col-sm-8 col-xs-12 my-right-pane\">\n    <form #f=\"ngForm\">\n\n      <div class=\"form-group\">\n        <label for=\"title\">Review Title</label>\n        <input type=\"text\"\n               id=\"title\"\n               name=\"title\"\n               class=\"form-control\"\n               placeholder=\"Title...\"\n               required\n               [(ngModel)] = \"title\"\n               ngModel\n               #o_title = \"ngModel\"/>\n      </div>\n\n      <span class=\"help-block\"\n            *ngIf=\"o_title.touched && title.length == 0\">\n      Please enter review title!\n      </span>\n\n      <div class=\"form-group\">\n        <label for=\"imageUrl\">Image URL</label>\n        <input type=\"text\"\n               id=\"imageUrl\"\n               name=\"imageUrl\"\n               class=\"form-control\"\n               placeholder=\"URL\"\n               required\n               [(ngModel)] = \"imageUrl\"\n               ngModel\n               #o_imageUrl = \"ngModel\"/>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"videoUrl\">Video URL</label>\n        <input type=\"text\"\n               id=\"videoUrl\"\n               name=\"videoUrl\"\n               class=\"form-control\"\n               placeholder=\"URL\"\n               required\n               [(ngModel)] = \"videoUrl\"\n               ngModel\n               #o_videoUrl = \"ngModel\"/>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"comment\">Analysis</label>\n        <textarea id=\"comment\"\n                  name = \"comment\"\n                  class=\"form-control span6\"\n                  rows=\"5\"\n                  placeholder=\"Analysis...\"\n                  [(ngModel)] = \"comment\"\n                  ngModel\n                  #o_comment = \"ngModel\">\n        </textarea>\n      </div>\n\n      <div class=\"form-group\">\n        <a (click)=\"updateReview()\"\n           class=\"btn btn-block btn-success\">\n          Update\n        </a>\n      </div>\n\n      <div class=\"form-group\">\n        <a (click)=\"navigateBackToNews()\"\n           class=\"btn btn-block btn-danger\">\n          Cancel\n        </a>\n      </div>\n\n    </form>\n  </div>\n\n</div>\n\n<!--app footer-->\n<app-home-footer></app-home-footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/review/review-edit/review-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_review_service_client__ = __webpack_require__("../../../../../src/app/services/review.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReviewEditComponent = (function () {
    function ReviewEditComponent(reviewService, router, route, sharedService) {
        this.reviewService = reviewService;
        this.router = router;
        this.route = route;
        this.sharedService = sharedService;
        this.errorMsg = '';
    }
    ReviewEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get reviewId from path
        this.route.params.subscribe(function (params) {
            _this.reviewId = params['reviewID'];
            _this.reviewService.findReviewById(_this.reviewId)
                .subscribe(function (review) {
                // console.log(review);
                _this.review = review;
                _this.title = _this.review.title;
                _this.imageUrl = _this.review.imageUrl;
                _this.videoUrl = _this.review.videoUrl;
                _this.comment = _this.review.comment;
                _this.errorFlag = false;
                _this.errorMsg = '';
            }, function (error) {
                _this.errorMsg = 'Error in finding Review!!';
                _this.errorFlag = true;
                console.log(error + ' error in finding review!');
            });
        });
        // get user profile from SharedService
        this.user = this.sharedService.user;
        this.criticId = this.user._id;
        // get itemId and itemType from query params
        this.route.queryParams.subscribe(function (params) {
            _this.itemID = params['itemID'];
            _this.itemType = params['itemType'];
        });
    };
    ReviewEditComponent.prototype.updateReview = function () {
        var _this = this;
        if (!this.title || this.isEmptyOrSpaces(this.title) || this.title.length < 2) {
            this.errorMsg = 'Appropriate Review Title is required!';
            this.errorFlag = true;
        }
        else {
            // check if website exists
            var newReview = { 'title': this.title,
                'imageUrl': this.imageUrl,
                'videoUrl': this.videoUrl,
                'comment': this.comment,
                'itemType': this.itemType,
                'itemId': this.itemID,
                'criticId': this.criticId };
            this.reviewService.updateReview(this.reviewId, newReview)
                .subscribe(function (review) {
                // console.log(review);
                _this.errorFlag = false;
                _this.errorMsg = '';
                _this.navigateBackToNews();
            }, function (error) {
                _this.errorMsg = 'Error in updating Review!!';
                _this.errorFlag = true;
                console.log(error + ' error in updating review!');
            });
        }
    };
    ReviewEditComponent.prototype.isEmptyOrSpaces = function (str) {
        return !str || str.trim() === '';
    };
    ReviewEditComponent.prototype.navigateBackToNews = function () {
        this.router.navigate([this.itemType, this.itemID]);
    };
    return ReviewEditComponent;
}());
ReviewEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-review-edit',
        template: __webpack_require__("../../../../../src/app/components/review/review-edit/review-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/review/review-edit/review-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_review_service_client__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_review_service_client__["a" /* ReviewService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _d || Object])
], ReviewEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=review-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/review/review-list/review-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/review/review-list/review-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isCritic\">\n  <div class=\"text-center\">\n    <button class=\"btn btn-success btn-block\"\n            (click)=\"navigateToNewReview()\"\n            type=\"button\">Post New Reviews!\n      <span class=\"glyphicon glyphicon-plus pull-right\"></span>\n    </button>\n  </div>\n</div>\n\n<div *ngIf=\"reviews.length == 0\"\n     class=\"alert alert-danger text-center\">\n  No Review as of now!!\n</div>\n\n<!-- Reviews List -->\n<div *ngIf=\"reviews.length > 0\">\n  <ul class=\"list-group\">\n\n    <li class=\"list-group-item\"\n        *ngFor=\"let review of reviews\">\n      <a (click)=\"navigateToReview(review)\"\n         class=\"no-underline-hover\">\n        <strong>{{review.title}}</strong></a>\n      <a *ngIf=\"isCritic && review.criticId == criticId\"\n         (click)=\"navigateToReviewEdit(review)\"\n         class=\"pull-right\">\n        <span class=\"glyphicon glyphicon-cog my-right-margin\"></span>\n      </a>\n    </li>\n\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/review/review-list/review-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_review_service_client__ = __webpack_require__("../../../../../src/app/services/review.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReviewListComponent = (function () {
    function ReviewListComponent(reviewService, router, sharedService) {
        this.reviewService = reviewService;
        this.router = router;
        this.sharedService = sharedService;
        this.reviewSelection = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ReviewListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reviews = [];
        this.isCritic = false;
        // get critic details from shared service
        this.user = this.sharedService.user;
        this.criticId = this.user._id;
        if (this.user.roles === 'critic') {
            this.isCritic = true;
        }
        this.reviewService.findReviewsForItem(this.itemID)
            .subscribe(function (reviews) {
            _this.reviews = reviews;
        }, function (error) {
            console.log(error + ' Reviews cannot be loaded');
        });
    };
    ReviewListComponent.prototype.navigateToReview = function (review) {
        this.reviewSelection.emit({
            isSelected: true,
            reviewId: review._id
        });
    };
    ReviewListComponent.prototype.navigateToReviewEdit = function (review) {
        this.router.navigate(['/review', review._id], { queryParams: { itemType: this.itemType, itemID: this.itemID } });
    };
    ReviewListComponent.prototype.navigateToNewReview = function () {
        this.router.navigate(['/review/new'], { queryParams: { itemType: this.itemType, itemID: this.itemID } });
    };
    return ReviewListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ReviewListComponent.prototype, "itemID", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ReviewListComponent.prototype, "itemType", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ReviewListComponent.prototype, "reviewSelection", void 0);
ReviewListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-review-list',
        template: __webpack_require__("../../../../../src/app/components/review/review-list/review-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/review/review-list/review-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_review_service_client__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_review_service_client__["a" /* ReviewService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _c || Object])
], ReviewListComponent);

var _a, _b, _c;
//# sourceMappingURL=review-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/review/review-new/review-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/review/review-new/review-new.component.html":
/***/ (function(module, exports) {

module.exports = "<!--app header-->\n<app-home-header></app-home-header>\n\n<!--main body-->\n<div class=\"row container-fluid\">\n\n  <!-- Left Pane - User details -->\n  <div class=\"col-sm-4 hidden-xs my-left-pane my-right-border\">\n    <app-home-user-profile></app-home-user-profile>\n  </div>\n\n  <!-- Right Pane - Review Details -->\n  <div class=\"col-sm-8 col-xs-12 my-right-pane\">\n    <form #f=\"ngForm\">\n\n      <div class=\"form-group\">\n        <label for=\"title\">Review Title</label>\n        <input type=\"text\"\n               id=\"title\"\n               name=\"title\"\n               class=\"form-control\"\n               placeholder=\"Title...\"\n               required\n               [(ngModel)] = \"title\"\n               ngModel\n               #o_title = \"ngModel\"/>\n      </div>\n\n      <span class=\"help-block\"\n            *ngIf=\"o_title.touched && title.length == 0\">\n      Please enter review title!\n      </span>\n\n      <div class=\"form-group\">\n        <label for=\"imageUrl\">Image URL</label>\n        <input type=\"text\"\n               id=\"imageUrl\"\n               name=\"imageUrl\"\n               class=\"form-control\"\n               placeholder=\"URL\"\n               required\n               [(ngModel)] = \"imageUrl\"\n               ngModel\n               #o_imageUrl = \"ngModel\"/>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"videoUrl\">Video URL</label>\n        <input type=\"text\"\n               id=\"videoUrl\"\n               name=\"videoUrl\"\n               class=\"form-control\"\n               placeholder=\"URL\"\n               required\n               [(ngModel)] = \"videoUrl\"\n               ngModel\n               #o_videoUrl = \"ngModel\"/>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"comment\">Analysis</label>\n        <textarea id=\"comment\"\n                  name = \"comment\"\n                  class=\"form-control span6\"\n                  rows=\"5\"\n                  placeholder=\"Analysis...\"\n                  [(ngModel)] = \"comment\"\n                  ngModel\n                  #o_comment = \"ngModel\">\n        </textarea>\n      </div>\n\n      <div class=\"form-group\">\n        <a (click)=\"createReview()\"\n           class=\"btn btn-block btn-success\">\n          Post\n        </a>\n      </div>\n\n      <div class=\"form-group\">\n        <a (click)=\"navigateBackToNews()\"\n           class=\"btn btn-block btn-danger\">\n          Cancel\n        </a>\n      </div>\n\n    </form>\n  </div>\n\n</div>\n\n<!--app footer-->\n<app-home-footer></app-home-footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/review/review-new/review-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_review_service_client__ = __webpack_require__("../../../../../src/app/services/review.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReviewNewComponent = (function () {
    function ReviewNewComponent(reviewService, router, route, sharedService) {
        this.reviewService = reviewService;
        this.router = router;
        this.route = route;
        this.sharedService = sharedService;
        this.errorMsg = '';
    }
    ReviewNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get user profile from SharedService
        this.user = this.sharedService.user;
        this.criticId = this.user._id;
        // get itemId and itemType from query params
        this.route.queryParams.subscribe(function (params) {
            _this.itemID = params['itemID'];
            _this.itemType = params['itemType'];
        });
    };
    ReviewNewComponent.prototype.createReview = function () {
        var _this = this;
        if (!this.title || this.isEmptyOrSpaces(this.title) || this.title.length < 2) {
            this.errorMsg = 'Appropriate Review Title is required!';
            this.errorFlag = true;
        }
        else {
            // check if website exists
            var newReview = { 'title': this.title,
                'imageUrl': this.imageUrl,
                'videoUrl': this.videoUrl,
                'comment': this.comment,
                'itemType': this.itemType,
                'itemId': this.itemID,
                'criticId': this.criticId };
            // console.log('new review' + newReview);
            this.reviewService.createReview(newReview)
                .subscribe(function (review) {
                // console.log(review);
                _this.errorFlag = false;
                _this.errorMsg = '';
                _this.navigateBackToNews();
            }, function (error) {
                _this.errorMsg = 'Error in creating new Review!!';
                _this.errorFlag = true;
                console.log(error + ' error in creating review!');
            });
        }
    };
    ReviewNewComponent.prototype.isEmptyOrSpaces = function (str) {
        return !str || str.trim() === '';
    };
    ReviewNewComponent.prototype.navigateBackToNews = function () {
        this.router.navigate([this.itemType, this.itemID]);
    };
    return ReviewNewComponent;
}());
ReviewNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-review-new',
        template: __webpack_require__("../../../../../src/app/components/review/review-new/review-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/review/review-new/review-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_review_service_client__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_review_service_client__["a" /* ReviewService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _d || Object])
], ReviewNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=review-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/team/team-overview/team-overview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/team/team-overview/team-overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"team\">\n  <table class=\"table table-responsive table-striped\" id=\"table\">\n    <tbody>\n    <tr><td>Name</td><td>{{team.name}}</td></tr>\n    <tr><td>Founded</td><td>{{team.founded}}</td></tr>\n    <tr><td>Stadium</td><td>{{team.venue_name}}</td></tr>\n    <tr><td>Stadium Capacity</td><td>{{team.venue_capacity}}</td></tr>\n    <tr><td>City</td><td>{{team.venue_city}}</td></tr>\n    <tr><td>Country</td><td>{{team.country}}</td></tr>\n    <tr><td>Current Manager</td><td>{{team.coach_name}}</td></tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/team/team-overview/team-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamOverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__ = __webpack_require__("../../../../../src/app/services/soccer.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamOverviewComponent = (function () {
    function TeamOverviewComponent(soccerService) {
        this.soccerService = soccerService;
    }
    TeamOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.soccerService.getTeamInformation(this.teamId)
            .subscribe(function (team) {
            _this.team = _this.parseBody(team);
            _this.errorFlag = false;
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'Unable to retrieve team details!';
        });
    };
    TeamOverviewComponent.prototype.ngOnChanges = function () {
        this.ngOnInit();
    };
    TeamOverviewComponent.prototype.parseBody = function (data) {
        var val = data._body;
        val = JSON.parse(val);
        return val;
    };
    return TeamOverviewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TeamOverviewComponent.prototype, "teamId", void 0);
TeamOverviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-team-overview',
        template: __webpack_require__("../../../../../src/app/components/team/team-overview/team-overview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/team/team-overview/team-overview.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */]) === "function" && _a || Object])
], TeamOverviewComponent);

var _a;
//# sourceMappingURL=team-overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/team/team-squad/team-squad.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/team/team-squad/team-squad.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"squad\">\n  <table class=\"points_table\">\n\n    <thead>\n    <tr>\n      <th class=\"col-xs-1\">No.</th>\n      <th class=\"col-xs-3\">Name</th>\n      <th class=\"col-xs-2\">Age</th>\n      <th class=\"col-xs-2\">Position</th>\n      <th class=\"col-xs-2\">Apps</th>\n      <th class=\"col-xs-2\">Minutes</th>\n    </tr>\n    </thead>\n\n    <tbody class=\"points_table_scrollbar\">\n    <div *ngFor=\"let player of squad\">\n      <tr class=\"even\">\n        <td class=\"col-xs-1 text-center\">{{player.number}}</td>\n        <td class=\"col-xs-3 text-left\">{{player.name}}</td>\n        <td class=\"col-xs-2 text-center\">{{player.age}}</td>\n        <td class=\"col-xs-2 text-center\">{{player.position}}</td>\n        <td class=\"col-xs-2 text-center\">{{player.appearences}}</td>\n        <td class=\"col-xs-2 text-center\">{{player.minutes}}</td>\n      </tr>\n    </div>\n    </tbody>\n\n  </table>\n\n</div>\n\n<div>\n  <h2><span class=\"label label-default\">Side Lined</span></h2>\n</div>\n\n<div *ngIf=\"sideLined\">\n  <table class=\"points_table\">\n\n    <thead>\n    <tr>\n      <th class=\"col-xs-3\">Name</th>\n      <th class=\"col-xs-2\">Start Date</th>\n      <th class=\"col-xs-3\">Expected End Date</th>\n      <th class=\"col-xs-4\">Injury Description</th>\n    </tr>\n    </thead>\n\n    <tbody class=\"points_table_scrollbar\">\n    <div *ngFor=\"let player of sideLined\">\n      <tr class=\"even\">\n        <td class=\"col-xs-3 text-center\">{{player.name}}</td>\n        <td class=\"col-xs-2 text-center\">{{player.startdate}}</td>\n        <td class=\"col-xs-3 text-center\">{{player.enddate}}</td>\n        <td class=\"col-xs-4 text-center\">{{player.description}}</td>\n      </tr>\n    </div>\n    </tbody>\n\n  </table>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/team/team-squad/team-squad.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamSquadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__ = __webpack_require__("../../../../../src/app/services/soccer.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamSquadComponent = (function () {
    function TeamSquadComponent(soccerService) {
        this.soccerService = soccerService;
    }
    TeamSquadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.soccerService.getTeamInformation(this.teamId)
            .subscribe(function (team) {
            _this.team = _this.parseBody(team);
            _this.squad = _this.team.squad;
            _this.sideLined = _this.team.sidelined;
            _this.errorFlag = false;
            // console.log(this.team);
            // console.log(this.squad);
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'Unable to retrieve team details!';
        });
    };
    TeamSquadComponent.prototype.parseBody = function (data) {
        var val = data._body;
        val = JSON.parse(val);
        return val;
    };
    return TeamSquadComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TeamSquadComponent.prototype, "teamId", void 0);
TeamSquadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-team-squad',
        template: __webpack_require__("../../../../../src/app/components/team/team-squad/team-squad.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/team/team-squad/team-squad.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */]) === "function" && _a || Object])
], TeamSquadComponent);

var _a;
//# sourceMappingURL=team-squad.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/team/team-stats/team-stats.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/team/team-stats/team-stats.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"stats\">\n  <div class=\"col-lg-12\">\n    <table class=\"table table-responsive table-striped\" id=\"table\">\n      <thead>\n      <tr><th>Statistic</th><th>Value</th></tr>\n      </thead>\n\n      <tbody>\n      <tr><td>Rank</td><td>{{stats.rank}}</td></tr>\n      <tr><td>Wins</td><td>{{stats.wins}}</td></tr>\n      <tr><td>Wins Home</td><td>{{stats.wins_home}}</td></tr>\n      <tr><td>Wins Away</td><td>{{stats.wins_away}}</td></tr>\n      <tr><td>Draws</td><td>{{stats.draws}}</td></tr>\n      <tr><td>Draws Home</td><td>{{stats.draws_home}}</td></tr>\n      <tr><td>Draws Away</td><td>{{stats.draws_away}}</td></tr>\n      <tr><td>Losses</td><td>{{stats.losses}}</td></tr>\n      <tr><td>Losses Home</td><td>{{stats.losses_home}}</td></tr>\n      <tr><td>Losses Away</td><td>{{stats.losses_away}}</td></tr>\n      <tr><td>Clean Sheets</td><td>{{stats.clean_sheets}}</td></tr>\n      <tr><td>Clean Sheets Home</td><td>{{stats.clean_sheets_home}}</td></tr>\n      <tr><td>Clean Sheets Away</td><td>{{stats.clean_sheets_away}}</td></tr>\n      <tr><td>Goals</td><td>{{stats.goals}}</td></tr>\n      <tr><td>Goals Home</td><td>{{stats.goals_home}}</td></tr>\n      <tr><td>Goals Away</td><td>{{stats.goals_away}}</td></tr>\n      <tr><td>Goals Conceded</td><td>{{stats.goals_conceded}}</td></tr>\n      <tr><td>Goals Conceded Home</td><td>{{stats.goals_conceded_home}}</td></tr>\n      <tr><td>Goals Conceded Away</td><td>{{stats.goals_conceded_away}}</td></tr>\n      <tr><td>Avg Goals Scored Per Game</td><td>{{stats.avg_goals_per_game_scored}}</td></tr>\n      <tr><td>Avg Goals Scored Per Game (Home)</td><td>{{stats.avg_goals_per_game_scored_home}}</td></tr>\n      <tr><td>Avg Goals Scored Per Game (Away)</td><td>{{stats.avg_goals_per_game_scored_away}}</td></tr>\n      <tr><td>Avg Goals Conceded Per Game</td><td>{{stats.avg_goals_per_game_conceded}}</td></tr>\n      <tr><td>Avg Goals Conceded Per Game (Home)</td><td>{{stats.avg_goals_per_game_conceded_home}}</td></tr>\n      <tr><td>Avg Goals Conceded Per Game (Away)</td><td>{{stats.avg_goals_per_game_conceded_away}}</td></tr>\n      <tr><td>Avg time to score first goal</td><td>{{stats.avg_first_goal_scored}}</td></tr>\n      <tr><td>Avg time to score first goal (Home)</td><td>{{stats.avg_first_goal_scored_home}}</td></tr>\n      <tr><td>Avg time to score first goal (Away)</td><td>{{stats.avg_first_goal_scored_away}}</td></tr>\n      <tr><td>Avg time to concede first goal</td><td>{{stats.avg_first_goal_conceded}}</td></tr>\n      <tr><td>Avg time to concede first goal (Home)</td><td>{{stats.avg_first_goal_conceded_home}}</td></tr>\n      <tr><td>Avg time to concede first goal (Away)</td><td>{{stats.avg_first_goal_conceded_away}}</td></tr>\n      <tr><td>No. of Matches Failed to Score</td><td>{{stats.failed_to_score}}</td></tr>\n      <tr><td>No. of Matches Failed to Score (Home)</td><td>{{stats.failed_to_score_home}}</td></tr>\n      <tr><td>No. of Matches Failed to Score (Away)</td><td>{{stats.failed_to_score_away}}</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/team/team-stats/team-stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamStatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__ = __webpack_require__("../../../../../src/app/services/soccer.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamStatsComponent = (function () {
    function TeamStatsComponent(soccerService) {
        this.soccerService = soccerService;
    }
    TeamStatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.soccerService.getTeamInformation(this.teamId)
            .subscribe(function (team) {
            _this.team = _this.parseBody(team);
            _this.stats = _this.team.statistics[0];
            _this.errorFlag = false;
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'Unable to retrieve team details!';
        });
    };
    TeamStatsComponent.prototype.parseBody = function (data) {
        var val = data._body;
        val = JSON.parse(val);
        return val;
    };
    return TeamStatsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TeamStatsComponent.prototype, "teamId", void 0);
TeamStatsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-team-stats',
        template: __webpack_require__("../../../../../src/app/components/team/team-stats/team-stats.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/team/team-stats/team-stats.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */]) === "function" && _a || Object])
], TeamStatsComponent);

var _a;
//# sourceMappingURL=team-stats.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/team/team-transfers/team-transfers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/team/team-transfers/team-transfers.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2><span class=\"label label-default\">Transfers In</span></h2>\n  <div *ngIf=\"transfersIn\">\n    <table class=\"points_table\">\n\n      <thead>\n      <tr>\n        <th class=\"col-xs-3\">Player Name</th>\n        <th class=\"col-xs-3\">Transfer Date</th>\n        <th class=\"col-xs-3\">From Team</th>\n        <th class=\"col-xs-3\">Transfer Type</th>\n      </tr>\n      </thead>\n\n      <tbody class=\"points_table_scrollbar\">\n      <div *ngFor=\"let transfer of transfersIn\">\n        <tr class=\"even\">\n          <td class=\"col-xs-3 text-left\">{{transfer.name}}</td>\n          <td class=\"col-xs-3 text-center\">{{transfer.date}}</td>\n          <td class=\"col-xs-3 text-left\">{{transfer.from_team}}</td>\n          <td class=\"col-xs-3 text-center\">{{transfer.type}}</td>\n        </tr>\n      </div>\n      </tbody>\n\n    </table>\n\n  </div>\n</div>\n\n<div>\n  <h2><span class=\"label label-default\">Transfers Out</span></h2>\n  <div *ngIf=\"transfersOut\">\n    <table class=\"points_table\">\n\n      <thead>\n      <tr>\n        <th class=\"col-xs-3\">Player Name</th>\n        <th class=\"col-xs-3\">Transfer Date</th>\n        <th class=\"col-xs-3\">From Team</th>\n        <th class=\"col-xs-3\">Transfer Type</th>\n      </tr>\n      </thead>\n\n      <tbody class=\"points_table_scrollbar\">\n      <div *ngFor=\"let transfer of transfersOut\">\n        <tr class=\"even\">\n          <td class=\"col-xs-3 text-left\">{{transfer.name}}</td>\n          <td class=\"col-xs-3 text-center\">{{transfer.date}}</td>\n          <td class=\"col-xs-3 text-left\">{{transfer.from_team}}</td>\n          <td class=\"col-xs-3 text-center\">{{transfer.type}}</td>\n        </tr>\n      </div>\n      </tbody>\n\n    </table>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/team/team-transfers/team-transfers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamTransfersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__ = __webpack_require__("../../../../../src/app/services/soccer.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamTransfersComponent = (function () {
    function TeamTransfersComponent(soccerService) {
        this.soccerService = soccerService;
    }
    TeamTransfersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.soccerService.getTeamInformation(this.teamId)
            .subscribe(function (team) {
            _this.team = _this.parseBody(team);
            _this.transfersIn = _this.team.transfers_in;
            _this.transfersOut = _this.team.transfers_out;
            _this.errorFlag = false;
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'Unable to retrieve team details!';
        });
    };
    TeamTransfersComponent.prototype.parseBody = function (data) {
        var val = data._body;
        val = JSON.parse(val);
        return val;
    };
    return TeamTransfersComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TeamTransfersComponent.prototype, "teamId", void 0);
TeamTransfersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-team-transfers',
        template: __webpack_require__("../../../../../src/app/components/team/team-transfers/team-transfers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/team/team-transfers/team-transfers.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_soccer_service_client__["a" /* SoccerServiceClient */]) === "function" && _a || Object])
], TeamTransfersComponent);

var _a;
//# sourceMappingURL=team-transfers.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/team/team.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<!--app header-->\n<app-home-header></app-home-header>\n\n<!--main body-->\n<div class=\"row container-fluid\">\n\n  <!-- Left Pane - User details -->\n  <div class=\"col-sm-4 hidden-xs my-left-pane my-right-border\">\n    <app-home-user-profile></app-home-user-profile>\n  </div>\n\n  <!-- Right Pane - Team Details -->\n  <div class=\"col-sm-8 col-xs-12 my-right-pane\">\n\n    <div *ngIf=\"team\">\n      <!--team name-->\n      <div class=\"text-center\">\n        <h2><span class=\"label label-default\">\n          {{team.name}}\n        </span></h2>\n      </div>\n\n      <!--team details menu scrollbar-->\n      <div class=\"scrollmenu\">\n        <a (click)=\"changeTeamDetailsType('OVERVIEW')\">Overview</a>\n        <a (click)=\"changeTeamDetailsType('PREVIOUS')\">Previous Fixtures</a>\n        <a (click)=\"changeTeamDetailsType('UPCOMING')\">Upcoming Fixtures</a>\n        <a (click)=\"changeTeamDetailsType('STANDINGS')\">Table</a>\n        <a (click)=\"changeTeamDetailsType('NEWS')\">News</a>\n        <a (click)=\"changeTeamDetailsType('STATS')\">Stats</a>\n        <a (click)=\"changeTeamDetailsType('SQUAD')\">Squad</a>\n        <a (click)=\"changeTeamDetailsType('TRANSFERS')\">Transfers</a>\n      </div>\n\n      <!--match details component-->\n      <div [ngSwitch]=\"teamDetailsType\">\n\n        <div *ngSwitchCase=\"'OVERVIEW'\">\n          <app-team-overview teamId=\"{{team.team_id}}\"></app-team-overview>\n        </div>\n\n        <div *ngSwitchCase=\"'PREVIOUS'\">\n          <app-match-list searchType=\"PREVIOUS_TEAM\" teamId=\"{{team.team_id}}\" toDate=\"{{formattedDate}}\"></app-match-list>\n        </div>\n\n        <div *ngSwitchCase=\"'UPCOMING'\">\n          <app-match-list searchType=\"UPCOMING_TEAM\" teamId=\"{{team.team_id}}\" fromDate=\"{{formattedDate}}\"></app-match-list>\n        </div>\n\n        <div *ngSwitchCase=\"'STANDINGS'\">\n          <app-match-team-standings compId=\"{{team.id}}\"></app-match-team-standings>\n        </div>\n\n        <div *ngSwitchCase=\"'NEWS'\">\n          <div *ngIf=\"!isSelected\">\n            <app-review-list (reviewSelection)=\"updateReviewSelection($event.isSelected, $event.reviewId)\"\n                             itemType=\"team\"\n                             itemID=\"{{team.team_id}}\"></app-review-list>\n          </div>\n\n          <div *ngIf=\"isSelected\">\n            <app-review-display reviewId=\"{{reviewId}}\"></app-review-display>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'STATS'\">\n          <app-team-stats teamId=\"{{team.team_id}}\"></app-team-stats>\n        </div>\n\n        <div *ngSwitchCase=\"'SQUAD'\">\n          <app-team-squad teamId=\"{{team.team_id}}\"></app-team-squad>\n        </div>\n\n        <div *ngSwitchCase=\"'TRANSFERS'\">\n          <app-team-transfers teamId=\"{{team.team_id}}\"></app-team-transfers>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<!--app footer-->\n<app-home-footer></app-home-footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_soccer_service_client__ = __webpack_require__("../../../../../src/app/services/soccer.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeamComponent = (function () {
    function TeamComponent(soccerService, router, route) {
        this.soccerService = soccerService;
        this.router = router;
        this.route = route;
    }
    TeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentDate = new Date();
        this.formatDate();
        this.teamDetailsType = 'OVERVIEW';
        this.route.params.subscribe(function (params) {
            _this.teamID = params['teamID'];
            _this.soccerService.getTeamInformation(_this.teamID)
                .subscribe(function (team) {
                _this.team = _this.parseBody(team);
                _this.errorFlag = false;
            }, function (error) {
                _this.errorFlag = true;
                _this.errorMsg = 'Unable to retrieve team details!';
            });
        });
    };
    TeamComponent.prototype.parseBody = function (data) {
        var val = data._body;
        val = JSON.parse(val);
        return val;
    };
    TeamComponent.prototype.changeTeamDetailsType = function (type) {
        this.teamDetailsType = type;
    };
    TeamComponent.prototype.formatDate = function () {
        var dd = this.currentDate.getDate();
        var mm = this.currentDate.getMonth() + 1;
        var yyyy = this.currentDate.getFullYear();
        this.formattedDate = (mm + '/' + dd + '/' + yyyy);
    };
    TeamComponent.prototype.updateReviewSelection = function (isSelected, reviewId) {
        this.isSelected = isSelected;
        this.reviewId = reviewId;
    };
    return TeamComponent;
}());
TeamComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-team',
        template: __webpack_require__("../../../../../src/app/components/team/team.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/team/team.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_soccer_service_client__["a" /* SoccerServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_soccer_service_client__["a" /* SoccerServiceClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], TeamComponent);

var _a, _b, _c;
//# sourceMappingURL=team.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>Test</h1>\n\n  <div *ngIf=\"alertMessage\"\n       class=\"alert alert-danger\">\n    \"Failed to create\"\n  </div>\n\n  <div *ngIf=\"successMessage\"\n       class=\"alert alert-success\">\n    \"Succesfully created/deleted\"\n  </div>\n\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Test Message</th>\n      <th>&nbsp;</th>\n    </tr>\n\n\n    <tr>\n      <td>\n        <input [(ngModel)]=\"message\"\n               placeholder=\"message\"\n               class=\"form-control\"/>\n      </td>\n\n\n      <td>\n        <button (click)=\"createMessage()\"\n                class=\"btn btn-primary pull-right\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n      </td>\n    </tr>\n    </thead>\n\n\n    <tbody>\n    <tr *ngFor=\"let message of messages\">\n      <td>\n        {{message.message}}\n      </td>\n      <td>\n        <button (click)=\"deleteMessage(message._id)\"\n                class=\"btn btn-danger pull-right\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/admin/admin-home/admin-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/admin/admin-home/admin-home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n\n  <!--app logo and name-->\n  <div class=\"pull-left my-header-left-margin\">\n    <a class=\"navbar-brand\" href=\"#\">\n      <span class=\"fa fa-futbol-o\"></span>\n      <b>Soccer 360</b>\n    </a>\n  </div>\n\n  <!--logout-->\n  <div class=\"pull-right my-header-right-margin\">\n    <a class=\"navbar-brand\">\n      <span class=\"glyphicon glyphicon-off\" (click)=\"logout()\"></span>\n    </a>\n  </div>\n\n</nav>\n\n<!--main body-->\n<div class=\"row container-fluid\">\n\n  <!-- Left Pane - User details -->\n  <div class=\"col-sm-4 hidden-xs my-left-pane my-right-border\">\n    <div class=\"nav navbar-nav sider-navbar\">\n\n      <!--admin profile details-->\n      <div class=\"text-center\">\n        <figure class=\"profile-userpic\">\n          <img src=\"\" class=\"img-responsive\" alt=\"Profile Picture\">\n        </figure>\n\n        <div class=\"profile-usertitle\">\n          <div class=\"profile-usertitle-name\">{{user.username}}</div>\n          <div class=\"profile-usertitle-name\">{{user.firstName}} {{user.lastName}}</div>\n          <div class=\"profile-usertitle-title\">{{user.email}}</div>\n        </div>\n      </div>\n\n      <!--list of functions for admin-->\n      <div class=\"vertical-menu\">\n        <button class=\"btn btn-primary btn-block\"\n                (click)=\"changeSelectionType('USERS')\">Users</button>\n        <button class=\"btn btn-primary btn-block\"\n                (click)=\"changeSelectionType('CRITICS')\">Critics</button>\n        <button class=\"btn btn-primary btn-block\"\n                (click)=\"changeSelectionType('REQUESTS')\">Pending Requests Critics</button>\n      </div>\n\n    </div>\n  </div>\n\n  <!-- Right Pane - Matches -->\n  <div class=\"col-sm-8 col-xs-12 my-right-pane\">\n\n    <div [ngSwitch]=\"selectionType\">\n\n      <div *ngSwitchCase=\"'USERS'\">\n        <app-all-users></app-all-users>\n      </div>\n\n      <div *ngSwitchCase=\"'CRITICS'\">\n        <app-all-critics></app-all-critics>\n      </div>\n\n      <div *ngSwitchCase=\"'REQUESTS'\">\n        <app-pending-requests></app-pending-requests>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n\n  <!--profile and settings-->\n  <div class=\"pull-right my-header-right-margin\">\n    <a class=\"navbar-brand\">\n      <span class=\"glyphicon glyphicon-user\" (click)=\"navigateToProfile()\"></span>\n    </a>\n  </div>\n\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/admin/admin-home/admin-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminHomeComponent = (function () {
    function AdminHomeComponent(router, sharedService, userService) {
        this.router = router;
        this.sharedService = sharedService;
        this.userService = userService;
    }
    AdminHomeComponent.prototype.ngOnInit = function () {
        this.selectionType = '';
        // get user profile from SharedService
        this.user = this.sharedService.user;
        this.userID = this.user._id;
    };
    AdminHomeComponent.prototype.navigateToProfile = function () {
        this.router.navigate(['/user', this.userID]);
    };
    AdminHomeComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/']); });
    };
    AdminHomeComponent.prototype.changeSelectionType = function (type) {
        this.selectionType = type;
    };
    return AdminHomeComponent;
}());
AdminHomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-home',
        template: __webpack_require__("../../../../../src/app/components/user/admin/admin-home/admin-home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/admin/admin-home/admin-home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], AdminHomeComponent);

var _a, _b, _c;
//# sourceMappingURL=admin-home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/admin/all-critics/all-critics.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/admin/all-critics/all-critics.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"users\">\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Username</th>\n      <th>First Name</th>\n      <th>Last Name</th>\n      <th>Demote</th>\n      <th>Remove</th>\n    </tr>\n    </thead>\n\n    <tbody>\n      <tr *ngFor=\"let user of users\">\n        <td>{{user.username}}</td>\n        <td>{{user.firstName}}</td>\n        <td>{{user.lastName}}</td>\n        <td>\n          <button (click)=\"demoteToUser(user._id)\"\n                  class=\"btn btn-danger text-center\">\n            Demote\n            <span class=\"glyphicon glyphicon-remove\"></span>\n          </button>\n        </td>\n        <td>\n          <button (click)=\"removeUser(user._id)\"\n                  class=\"btn btn-danger text-center\">\n            Remove\n            <span class=\"glyphicon glyphicon-remove\"></span>\n          </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/admin/all-critics/all-critics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllCriticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_critic_service_client__ = __webpack_require__("../../../../../src/app/services/critic.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllCriticsComponent = (function () {
    function AllCriticsComponent(userService, sharedService, criticService) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.criticService = criticService;
    }
    AllCriticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get user profile from SharedService
        this.user = this.sharedService.user;
        this.userID = this.user._id;
        this.userService.getAllCritics()
            .subscribe(function (users) {
            _this.users = users;
        }, function (error) {
            console.log(error + ' error in finding all critics!');
        });
    };
    AllCriticsComponent.prototype.removeUser = function (criticId) {
        var _this = this;
        this.userService.deleteUser(criticId)
            .subscribe(function (user) {
            // console.log(user + ' this critic has been deleted!');
            _this.ngOnInit();
        }, function (error) {
            console.log(error + ' error in deleting this critic!');
        });
    };
    AllCriticsComponent.prototype.demoteToUser = function (criticId) {
        var _this = this;
        this.userService.demoteToUser(criticId)
            .subscribe(function (user) {
            // console.log(user + ' this critic has been demoted!');
            _this.ngOnInit();
        }, function (error) {
            console.log(error + ' error in demoting this critic!');
        });
    };
    return AllCriticsComponent;
}());
AllCriticsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-all-critics',
        template: __webpack_require__("../../../../../src/app/components/user/admin/all-critics/all-critics.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/admin/all-critics/all-critics.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_critic_service_client__["a" /* CriticService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_critic_service_client__["a" /* CriticService */]) === "function" && _c || Object])
], AllCriticsComponent);

var _a, _b, _c;
//# sourceMappingURL=all-critics.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/admin/all-users/all-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/admin/all-users/all-users.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"users\">\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Username</th>\n        <th>First Name</th>\n        <th>Last Name</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr *ngFor=\"let user of users\">\n        <td>{{user.username}}</td>\n        <td>{{user.firstName}}</td>\n        <td>{{user.lastName}}</td>\n        <td>\n          <button (click)=\"removeUser(user._id)\"\n                  class=\"btn btn-danger text-center\">\n            <span class=\"glyphicon glyphicon-remove\"></span>\n          </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/admin/all-users/all-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllUsersComponent = (function () {
    function AllUsersComponent(userService, sharedService) {
        this.userService = userService;
        this.sharedService = sharedService;
    }
    AllUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get user profile from SharedService
        this.user = this.sharedService.user;
        this.userID = this.user._id;
        this.userService.getAllUsers()
            .subscribe(function (users) {
            _this.users = users;
        }, function (error) {
            console.log(error + ' error in finding all users!');
        });
    };
    AllUsersComponent.prototype.removeUser = function (userId) {
        var _this = this;
        this.userService.deleteUser(userId)
            .subscribe(function (user) {
            // console.log(user + ' this user has been deleted!');
            _this.ngOnInit();
        }, function (error) {
            console.log(error + ' error in deleting this users!');
        });
    };
    return AllUsersComponent;
}());
AllUsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-all-users',
        template: __webpack_require__("../../../../../src/app/components/user/admin/all-users/all-users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/admin/all-users/all-users.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */]) === "function" && _b || Object])
], AllUsersComponent);

var _a, _b;
//# sourceMappingURL=all-users.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/admin/pending-requests/pending-requests.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/admin/pending-requests/pending-requests.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"requests\">\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>UserID</th>\n      <th>Date Created</th>\n      <th>Accept</th>\n      <th>Reject</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    <tr *ngFor=\"let request of requests\">\n      <td>{{request.applicant}}</td>\n      <td>{{request.dateCreated}}</td>\n      <td>\n        <button (click)=\"acceptCriticRequest(request.applicant)\"\n                class=\"btn btn-success text-center\">\n          Accept\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </button>\n      </td>\n      <td>\n        <button (click)=\"rejectCriticRequest(request._id)\"\n                class=\"btn btn-danger text-center\">\n          Reject\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/admin/pending-requests/pending-requests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingRequestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_critic_service_client__ = __webpack_require__("../../../../../src/app/services/critic.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PendingRequestsComponent = (function () {
    function PendingRequestsComponent(userService, sharedService, criticService) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.criticService = criticService;
    }
    PendingRequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get user profile from SharedService
        this.user = this.sharedService.user;
        this.userID = this.user._id;
        this.criticService.findAllPendingRequests()
            .subscribe(function (requests) {
            _this.requests = requests;
        }, function (error) {
            console.log(error + ' error in finding all pending requests!!');
        });
    };
    PendingRequestsComponent.prototype.acceptCriticRequest = function (userId) {
        var _this = this;
        this.criticService.promoteToCritic(userId)
            .subscribe(function (user) {
            // console.log(user + ' this user has been promoted!');
            _this.ngOnInit();
        }, function (error) {
            console.log(error + ' error in promoting this user!');
        });
    };
    PendingRequestsComponent.prototype.rejectCriticRequest = function (requestId) {
        var _this = this;
        this.criticService.deleteRequest(requestId)
            .subscribe(function (request) {
            // console.log(request + ' this request has been deleted!');
            _this.ngOnInit();
        }, function (error) {
            console.log(error + ' error in delete this request!');
        });
    };
    return PendingRequestsComponent;
}());
PendingRequestsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pending-requests',
        template: __webpack_require__("../../../../../src/app/components/user/admin/pending-requests/pending-requests.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/admin/pending-requests/pending-requests.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_critic_service_client__["a" /* CriticService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_critic_service_client__["a" /* CriticService */]) === "function" && _c || Object])
], PendingRequestsComponent);

var _a, _b, _c;
//# sourceMappingURL=pending-requests.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/follows-sidebar/follows-sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/follows-sidebar/follows-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <button class=\"btn btn-success btn-block\"\n          (click)=\"navigateToSearchAndAddFriends()\"\n          type=\"button\">Add Friends\n    <span class=\"glyphicon glyphicon-plus pull-right\"></span>\n  </button>\n</div>\n\n<div class=\"form-group\">\n  <!--Following-->\n  <div class=\"dropdown\">\n    <button class=\"btn btn-block dropdown-toggle\"\n            type=\"button\" data-toggle=\"dropdown\">\n      Following\n      <span class=\"badge badge-pill badge-danger\">{{following.length}}</span>\n      <span class=\"caret  pull-right\"></span>\n    </button>\n    <ul class=\"dropdown-menu\">\n      <div *ngFor=\"let user of following\">\n        <a class=\"btn btn-block btn-info\" (click)=\"navigateToFriendsProfile(user._id)\">\n          {{user.lastName}}, {{user.firstName}} ({{user.username}})\n        </a>\n      </div>\n    </ul>\n  </div>\n\n  <!--Followers-->\n  <div class=\"dropdown\">\n    <button class=\"btn btn-block dropdown-toggle\"\n            type=\"button\" data-toggle=\"dropdown\">\n      Followers\n      <span class=\"badge badge-pill badge-danger\">{{followers.length}}</span>\n      <span class=\"caret  pull-right\"></span>\n    </button>\n    <ul class=\"dropdown-menu\">\n      <div *ngFor=\"let user of followers\">\n        <a class=\"btn btn-block btn-info\" (click)=\"navigateToFriendsProfile(user._id)\">\n          {{user.lastName}}, {{user.firstName}} ({{user.username}})\n        </a>\n      </div>\n    </ul>\n  </div>\n\n</div>\n\n<div *ngIf=\"user && user.roles == 'user'\" class=\"text-center\">\n  <button class=\"btn btn-success btn-block\"\n          (click)=\"applyForCritic()\"\n          type=\"button\">Apply for Critic!\n    <span class=\"glyphicon glyphicon-plus pull-right\"></span>\n  </button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/user/follows-sidebar/follows-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowsSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_league_service_client__ = __webpack_require__("../../../../../src/app/services/league.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_team_service_client__ = __webpack_require__("../../../../../src/app/services/team.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_player_service_client__ = __webpack_require__("../../../../../src/app/services/player.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_critic_service_client__ = __webpack_require__("../../../../../src/app/services/critic.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FollowsSidebarComponent = (function () {
    function FollowsSidebarComponent(userService, router, route, leagueService, teamService, playerService, sharedService, criticService) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.leagueService = leagueService;
        this.teamService = teamService;
        this.playerService = playerService;
        this.sharedService = sharedService;
        this.criticService = criticService;
    }
    FollowsSidebarComponent.prototype.ngOnChanges = function () {
        this.ngOnInit();
    };
    FollowsSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.following = [];
        this.followers = [];
        // get user profile from SharedService
        this.user = this.sharedService.user;
        this.userID = this.user._id;
        this.userService.findFollowing(this.userID)
            .subscribe(function (following) {
            _this.following = following;
        }, function (error) {
            console.log(error + ' user following cannot be loaded');
        });
        this.userService.findFollowers(this.userID)
            .subscribe(function (followers) {
            _this.followers = followers;
        }, function (error) {
            console.log(error + ' user followers cannot be loaded');
        });
    };
    FollowsSidebarComponent.prototype.navigateToFriendsProfile = function (friendId) {
        this.router.navigate(['/profile', friendId]);
    };
    // navigate to search and add favorites components
    FollowsSidebarComponent.prototype.navigateToSearchAndAddFriends = function () {
        this.router.navigate(['/users/search']);
    };
    FollowsSidebarComponent.prototype.applyForCritic = function () {
        var criticRequest = { 'isApproved': false, 'applicant': this.userID };
        this.criticService.createCriticRequest(criticRequest)
            .subscribe(function (cRequest) {
            // console.log('Applied for critic!' + cRequest);
        }, function (error) {
            console.log(error + ' error in sending request for critic!');
        });
    };
    return FollowsSidebarComponent;
}());
FollowsSidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-follows-sidebar',
        template: __webpack_require__("../../../../../src/app/components/user/follows-sidebar/follows-sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/follows-sidebar/follows-sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_league_service_client__["a" /* LeagueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_league_service_client__["a" /* LeagueService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_team_service_client__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_team_service_client__["a" /* TeamService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_player_service_client__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_player_service_client__["a" /* PlayerService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_shared_service__["a" /* SharedService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__services_critic_service_client__["a" /* CriticService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_critic_service_client__["a" /* CriticService */]) === "function" && _h || Object])
], FollowsSidebarComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=follows-sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/friend-profile/friend-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/friend-profile/friend-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!--app header-->\n<app-home-header></app-home-header>\n\n<!--main body-->\n<div class=\"row container-fluid\">\n\n  <!-- Left Pane - User details -->\n  <div class=\"col-sm-4 hidden-xs my-left-pane my-right-border\">\n    <app-home-user-profile></app-home-user-profile>\n  </div>\n\n  <!-- Right Pane - Friend Details -->\n  <div class=\"col-sm-8 col-xs-12 my-right-pane\">\n\n      <div *ngIf=\"friendId && friend\">\n        <!--friend profile pic and user name/description-->\n        <div class=\"text-center\">\n          <figure class=\"profile-userpic\">\n            <img src=\"\" class=\"img-responsive\" alt=\"Profile Picture\">\n          </figure>\n\n          <div class=\"profile-usertitle\">\n            <div class=\"profile-usertitle-name\">{{friend.username}}</div>\n            <div class=\"profile-usertitle-name\">{{friend.firstName}} {{friend.lastName}}</div>\n            <div class=\"profile-usertitle-title\">{{friend.email}}</div>\n          </div>\n        </div>\n\n        <!--add as friend if not friend-->\n        <div *ngIf=\"!isFriend\">\n          <div class=\"text-center\">\n            <button class=\"btn btn-success btn-block\"\n                    (click)=\"followUser()\"\n                    type=\"button\">Add as Friend\n              <span class=\"glyphicon glyphicon-plus pull-right\"></span>\n            </button>\n          </div>\n        </div>\n        <div *ngIf=\"isFriend\">\n          <div class=\"text-center\">\n            <button class=\"btn btn-danger btn-block\"\n                    (click)=\"unfollowUser()\"\n                    type=\"button\">Unfollow\n              <span class=\"glyphicon glyphicon-remove pull-right\"></span>\n            </button>\n          </div>\n        </div>\n\n        <!--friends favorite leagues/ team/ players-->\n        <div class=\"form-group\">\n          <!--Leagues-->\n          <div class=\"dropdown\">\n            <button class=\"btn btn-block dropdown-toggle\"\n                    type=\"button\" data-toggle=\"dropdown\">\n              Leagues\n              <span class=\"badge badge-pill badge-danger\">{{leagues.length}}</span>\n              <span class=\"caret  pull-right\"></span>\n            </button>\n            <ul class=\"dropdown-menu\">\n              <div *ngFor=\"let league of leagues\">\n                <a class=\"btn btn-block btn-info\"\n                       (click)=\"navigateToLeague(league.apiId)\">\n                  {{league.name}}\n                </a>\n              </div>\n            </ul>\n          </div>\n\n          <!--Teams-->\n          <div class=\"dropdown\">\n            <button class=\"btn  btn-block dropdown-toggle\"\n                    type=\"button\" data-toggle=\"dropdown\">\n              Teams\n              <span class=\"badge badge-pill badge-danger\">{{teams.length}}</span>\n              <span class=\"caret  pull-right\"></span>\n            </button>\n            <ul class=\"dropdown-menu\">\n              <div *ngFor=\"let team of teams\">\n                <a class=\"btn btn-block btn-info\"\n                   (click)=\"navigateToTeam(team.apiId)\">\n                  {{team.name}}\n                </a>\n              </div>\n            </ul>\n          </div>\n\n          <!--Players-->\n          <div class=\"dropdown\">\n            <button class=\"btn  btn-block dropdown-toggle\"\n                    type=\"button\" data-toggle=\"dropdown\">\n              Players\n              <span class=\"badge badge-pill badge-danger\">{{players.length}}</span>\n              <span class=\"caret  pull-right\"></span>\n            </button>\n            <ul class=\"dropdown-menu\">\n              <div *ngFor=\"let player of players\">\n                <a class=\"btn btn-block btn-info\"\n                   (click)=\"navigateToPlayer(player.apiId)\">\n                  {{player.name}}\n                </a>\n              </div>\n            </ul>\n          </div>\n        </div>\n\n      </div>\n\n  </div>\n</div>\n\n<!--app footer-->\n<app-home-footer></app-home-footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/friend-profile/friend-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_league_service_client__ = __webpack_require__("../../../../../src/app/services/league.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_team_service_client__ = __webpack_require__("../../../../../src/app/services/team.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_player_service_client__ = __webpack_require__("../../../../../src/app/services/player.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FriendProfileComponent = (function () {
    function FriendProfileComponent(userService, router, route, leagueService, teamService, playerService, sharedService) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.leagueService = leagueService;
        this.teamService = teamService;
        this.playerService = playerService;
        this.sharedService = sharedService;
        this.errorMsg = 'All values are required to update the form!';
    }
    FriendProfileComponent.prototype.ngOnChanges = function () {
        this.ngOnInit();
    };
    FriendProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leagues = [];
        this.teams = [];
        this.players = [];
        // get friend's userId
        this.route.params.subscribe(function (params) {
            _this.friendId = params['friendID'];
            _this.userService.findUserById(_this.friendId)
                .subscribe(function (friend) {
                _this.friend = friend;
                _this.errorFlag = false;
            }, function (error) {
                _this.errorFlag = true;
                _this.errorMsg = 'User not found!!';
            });
            _this.leagueService.findLeaguesForUser(_this.friendId)
                .subscribe(function (leagues) {
                _this.leagues = leagues;
            }, function (error) {
                console.log(error + ' friends leagues cannot be loaded');
            });
            _this.teamService.findTeamsForUser(_this.friendId)
                .subscribe(function (teams) {
                _this.teams = teams;
            }, function (error) {
                console.log(error + ' friends teams cannot be loaded');
            });
            _this.playerService.findPlayersForUser(_this.friendId)
                .subscribe(function (players) {
                _this.players = players;
            }, function (error) {
                console.log(error + ' friends players cannot be loaded');
            });
        });
        // get user details from shared service
        // and check if the searched user is a friend or not
        this.user = this.sharedService.user;
        if (this.user.following.indexOf(this.friendId) > -1) {
            this.isFriend = true;
        }
        else {
            this.isFriend = false;
        }
    };
    FriendProfileComponent.prototype.followUser = function () {
        var _this = this;
        this.userService.followUser(this.user._id, this.friendId)
            .subscribe(function (friend) {
            _this.errorFlag = false;
            _this.isFriend = true;
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'Error in following the user!!';
        });
    };
    FriendProfileComponent.prototype.unfollowUser = function () {
        var _this = this;
        this.userService.unfollowUser(this.user._id, this.friendId)
            .subscribe(function (friend) {
            _this.errorFlag = false;
            _this.isFriend = false;
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'Error in unfollowing the user!!';
        });
    };
    FriendProfileComponent.prototype.navigateToLeague = function (leagueId) {
        this.router.navigate(['/league', leagueId]);
    };
    FriendProfileComponent.prototype.navigateToTeam = function (teamId) {
        this.router.navigate(['/team', teamId]);
    };
    FriendProfileComponent.prototype.navigateToPlayer = function (playerId) {
        this.router.navigate(['/player', playerId]);
    };
    return FriendProfileComponent;
}());
FriendProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-friend-profile',
        template: __webpack_require__("../../../../../src/app/components/user/friend-profile/friend-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/friend-profile/friend-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_league_service_client__["a" /* LeagueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_league_service_client__["a" /* LeagueService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_team_service_client__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_team_service_client__["a" /* TeamService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_player_service_client__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_player_service_client__["a" /* PlayerService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_shared_service__["a" /* SharedService */]) === "function" && _g || Object])
], FriendProfileComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=friend-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/home-user-profile/home-user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/home-user-profile/home-user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-4\">\n  <div class=\"collapse navbar-collapse\" id=\"profile-sidebar\">\n\n    <div *ngIf=\"user\">\n      <div class=\"nav navbar-nav sider-navbar\">\n\n        <div class=\"text-center\">\n            <figure class=\"profile-userpic\">\n              <img src=\"\" class=\"img-responsive\" alt=\"Profile Picture\">\n            </figure>\n\n            <div class=\"profile-usertitle\">\n              <div class=\"profile-usertitle-name\">{{user.username}}</div>\n              <div class=\"profile-usertitle-name\">{{user.firstName}} {{user.lastName}}</div>\n              <div class=\"profile-usertitle-title\">{{user.email}}</div>\n            </div>\n        </div>\n\n        <div class=\"text-center\">\n          <button class=\"btn btn-success btn-block\"\n                  (click)=\"navigateToAddFavorites()\"\n                  type=\"button\">Add New Favorites\n            <span class=\"glyphicon glyphicon-plus pull-right\"></span>\n          </button>\n        </div>\n\n        <div class=\"form-group\">\n          <!--Leagues-->\n          <div class=\"dropdown\">\n            <button class=\"btn btn-block dropdown-toggle\"\n                    type=\"button\" data-toggle=\"dropdown\">\n              Leagues\n              <span class=\"badge badge-pill badge-danger\">{{leagues.length}}</span>\n              <span class=\"caret  pull-right\"></span>\n            </button>\n            <ul class=\"dropdown-menu\">\n              <div *ngFor=\"let league of leagues\">\n                <a class=\"btn btn-block btn-info\"\n                   (click)=\"navigateToLeague(league.apiId)\">\n                  {{league.name}}\n                </a>\n              </div>\n            </ul>\n          </div>\n\n          <!--Teams-->\n          <div class=\"dropdown\">\n            <button class=\"btn btn-block dropdown-toggle\"\n                    type=\"button\" data-toggle=\"dropdown\">\n              Teams\n              <span class=\"badge badge-pill badge-danger\">{{teams.length}}</span>\n              <span class=\"caret  pull-right\"></span>\n            </button>\n            <ul class=\"dropdown-menu\">\n              <div *ngFor=\"let team of teams\">\n                <a class=\"btn btn-block btn-info\"\n                   (click)=\"navigateToTeam(team.apiId)\">\n                  {{team.name}}\n                </a>\n              </div>\n            </ul>\n          </div>\n\n          <!--Players-->\n          <div class=\"dropdown\">\n            <button class=\"btn  btn-block dropdown-toggle\"\n                    type=\"button\" data-toggle=\"dropdown\">\n              Players\n              <span class=\"badge badge-pill badge-danger\">{{players.length}}</span>\n              <span class=\"caret  pull-right\"></span>\n            </button>\n            <ul class=\"dropdown-menu\">\n              <div *ngFor=\"let player of players\">\n                <a class=\"btn btn-block btn-info\"\n                   (click)=\"navigateToPlayer(player.apiId)\">\n                  {{player.name}}\n                </a>\n              </div>\n            </ul>\n          </div>\n        </div>\n\n        <app-follows-sidebar></app-follows-sidebar>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/home-user-profile/home-user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeUserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_league_service_client__ = __webpack_require__("../../../../../src/app/services/league.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_team_service_client__ = __webpack_require__("../../../../../src/app/services/team.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_player_service_client__ = __webpack_require__("../../../../../src/app/services/player.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomeUserProfileComponent = (function () {
    function HomeUserProfileComponent(userService, router, route, leagueService, teamService, playerService, sharedService) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.leagueService = leagueService;
        this.teamService = teamService;
        this.playerService = playerService;
        this.sharedService = sharedService;
    }
    HomeUserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leagues = [];
        this.teams = [];
        this.players = [];
        // get user profile from SharedService
        this.user = this.sharedService.user;
        this.userID = this.user._id;
        this.leagueService.findLeaguesForUser(this.userID)
            .subscribe(function (leagues) {
            _this.leagues = leagues;
        }, function (error) {
            console.log(error + ' user leagues cannot be loaded');
        });
        this.teamService.findTeamsForUser(this.userID)
            .subscribe(function (teams) {
            // console.log('in api call' + teams);
            _this.teams = teams;
        }, function (error) {
            console.log(error + ' user teams cannot be loaded');
        });
        this.playerService.findPlayersForUser(this.userID)
            .subscribe(function (players) {
            // console.log('in api call' + players);
            _this.players = players;
        }, function (error) {
            console.log(error + ' user players cannot be loaded');
        });
    };
    HomeUserProfileComponent.prototype.navigateToLeague = function (leagueId) {
        this.router.navigate(['/league', leagueId]);
    };
    HomeUserProfileComponent.prototype.navigateToTeam = function (teamId) {
        this.router.navigate(['/team', teamId]);
    };
    HomeUserProfileComponent.prototype.navigateToPlayer = function (playerId) {
        this.router.navigate(['/player', playerId]);
    };
    // navigate to search and add favorites components
    HomeUserProfileComponent.prototype.navigateToAddFavorites = function () {
        this.router.navigate(['/user', this.userID, 'favorites', 'searchFavorites']);
    };
    return HomeUserProfileComponent;
}());
HomeUserProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home-user-profile',
        template: __webpack_require__("../../../../../src/app/components/user/home-user-profile/home-user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/home-user-profile/home-user-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_league_service_client__["a" /* LeagueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_league_service_client__["a" /* LeagueService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_team_service_client__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_team_service_client__["a" /* TeamService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_player_service_client__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_player_service_client__["a" /* PlayerService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_shared_service__["a" /* SharedService */]) === "function" && _g || Object])
], HomeUserProfileComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=home-user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-unregistered-home-header></app-unregistered-home-header>\n\n<div class=\"container\">\n\n<div *ngIf=\"errorFlag\"\n     class=\"alert alert-danger\">\n  {{errorMsg}}\n</div>\n\n<h1>Login</h1>\n\n<form #f=\"ngForm\">\n\n  <input placeholder=\"username\"\n         type=\"text\"\n         name=\"username\"\n         class=\"form-control\"\n         required\n         [(ngModel)]=\"username\"\n         ngModel\n         #o_username = \"ngModel\"/>\n\n  <span class=\"help-block\" *ngIf=\"o_username.touched && o_username.invalid\">\n      Please enter username!\n  </span>\n\n  <input placeholder=\"password\"\n         name=\"password\"\n         type=\"password\"\n         class=\"form-control input-margin-top\"\n         required\n         [(ngModel)]=\"password\"\n         ngModel\n         #o_password=\"ngModel\"/>\n\n  <span class=\"help-block\" *ngIf=\"o_password.touched && o_password.invalid\">\n      Please enter password!\n   </span>\n\n  <button class=\"btn btn-primary btn-block input-margin-top\"\n          type=\"submit\"\n          (click)=\"login()\"\n          [disabled]=\"f.invalid\">Login</button>\n\n  <button class=\"btn btn-success btn-block\"\n          routerLink='/register'>Register</button>\n\n  <a href=\"/auth/facebook\" class=\"btn btn-primary btn-block\">\n    <span class=\"fa fa-facebook\"></span>\n    Facebook\n  </a>\n\n</form>\n\n</div>\n\n<app-unregistered-home-footer></app-unregistered-home-footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.errorFlag = false;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.login(this.username, this.password)
            .subscribe(function (user) {
            _this.sharedService.user = user;
            _this.user = user;
            _this.userID = user._id;
            if (_this.user.roles === 'admin') {
                _this.navigateToAdminHome();
            }
            else {
                _this.navigateToHome();
            }
        }, function (error) {
            // console.log(error);
            _this.errorFlag = true;
            _this.errorMsg = 'Invalid username or password !';
        });
    };
    LoginComponent.prototype.navigateToHome = function () {
        this.router.navigate(['/user', this.userID, 'home']);
    };
    LoginComponent.prototype.navigateToAdminHome = function () {
        this.router.navigate(['/admin', this.userID, 'home']);
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["NgForm"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["NgForm"]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-xs-12\">\n\n      <!--app logo and name-->\n      <div class=\"pull-left\">\n        <a class=\"navbar-brand\" (click)=\"navigateToHome()\">\n          <span class=\"fa fa-futbol-o\"></span>\n          <b>Soccer 360</b>\n        </a>\n      </div>\n\n      <div class=\"navbar-text pull-right my-header-right-margin\">\n        <a (click)=\"updateProfile()\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\">\n          Profile\n        </a>\n      </div>\n\n    </div>\n  </div>\n</nav>\n\n<!-- Form for Profile -->\n<div class=\"container custom-padding-top-10\">\n\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <form (ngSubmit) = \"updateProfile()\" #f=\"ngForm\">\n\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\"\n             id=\"username\"\n             name=\"username\"\n             class=\"form-control\"\n             value=\"{{user.username}}\"\n             required\n             [(ngModel)] = \"user.username\"\n             placeholder=\"alice\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\"\n             class=\"form-control\"\n             id=\"email\"\n             name=\"email\"\n             value=\"{{user.email}}\"\n             placeholder=\"alice.wonderland@unicorn.com\"\n             required\n             [(ngModel)] = \"user.email\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"firstName\"\n             name=\"firstName\"\n             value=\"{{user.firstName}}\"\n             required\n             placeholder=\"Alice\"\n             [(ngModel)] = \"user.firstName\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"lastName\">Last Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"lastName\"\n             name=\"lastName\"\n             value=\"{{user.lastName}}\"\n             required\n             placeholder=\"Wonderland\"\n             [(ngModel)] = \"user.lastName\"/>\n    </div>\n\n  </form>\n\n  <div *ngIf=\"user.roles != 'admin'\">\n    <button class=\"btn btn-primary btn-block\"\n       (click)=\"navigateToFavorites()\">Add Favorites</button>\n  </div>\n  <button class=\"btn btn-danger btn-block input-margin-top\"\n     (click)=\"logout()\" >Logout</button>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a>\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_model_client__ = __webpack_require__("../../../../../src/app/components/user/user.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.errorMsg = 'All values are required to update the form!';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__user_model_client__["a" /* User */]('', '', '', '', '', '');
        this.route.params.subscribe(function (params) {
            _this.userID = params['userID'];
        });
        this.userService.findUserById(this.userID)
            .subscribe(function (user) {
            _this.user = user;
            _this.errorFlag = false;
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'User not found!!';
        });
    };
    ProfileComponent.prototype.updateProfile = function () {
        var _this = this;
        if (this.user) {
            this.user.username = this.loginForm.value.username;
            this.user.firstName = this.loginForm.value.firstName;
            this.user.lastName = this.loginForm.value.lastName;
            this.user.email = this.loginForm.value.email;
            if (!this.errorFlag) {
                this.userService.updateUser(this.userID, this.user)
                    .subscribe(function (user) {
                    if (_this.user.roles === 'admin') {
                        _this.navigateToAdminHome();
                    }
                    else {
                        _this.ngOnInit();
                    }
                }, function (error) {
                    _this.errorFlag = true;
                    _this.errorMsg = 'Some problems with update!!';
                });
            }
        }
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/']); });
    };
    ProfileComponent.prototype.navigateToFavorites = function () {
        this.router.navigate(['/user', this.userID, 'favorites']);
    };
    ProfileComponent.prototype.navigateToAdminHome = function () {
        this.router.navigate(['/admin', this.userID, 'home']);
    };
    ProfileComponent.prototype.navigateToHome = function () {
        if (this.user.roles === 'admin') {
            this.navigateToAdminHome();
        }
        else {
            this.router.navigate(['/user', this.userID, 'home']);
        }
    };
    return ProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["NgForm"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["NgForm"]) === "function" && _a || Object)
], ProfileComponent.prototype, "loginForm", void 0);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<app-unregistered-home-header></app-unregistered-home-header>\n\n<div class=\"container\">\n\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Register</h1>\n\n  <form>\n\n    <input placeholder=\"username\"\n           name=\"username\"\n           type=\"text\"\n           class=\"form-control\"\n           required\n           [(ngModel)]=\"username\"\n           ngModel\n           #o_username = \"ngModel\"/>\n\n    <span class=\"help-block\" *ngIf=\"o_username.touched && o_username.invalid\">\n      Please enter username!\n    </span>\n\n    <input placeholder=\"password\"\n           name=\"password\"\n           type=\"password\"\n           class=\"form-control input-margin-top\"\n           required\n           [(ngModel)]=\"password\"\n           ngModel\n           #o_password = \"ngModel\"/>\n\n    <span class=\"help-block\" *ngIf=\"o_password.touched && o_password.invalid\">\n      Please enter password!\n    </span>\n\n    <input placeholder=\"verify password\"\n           name=\"verifyPassword\"\n           type=\"password\"\n           class=\"form-control input-margin-top\"\n           required\n           [(ngModel)]=\"verifyPassword\"\n           ngModel\n           #o_verifyPassword = \"ngModel\"/>\n\n    <span class=\"help-block\" *ngIf=\"o_verifyPassword.touched && o_verifyPassword.invalid\">\n      Please verify password!\n    </span>\n\n    <span class=\"help-block\" *ngIf=\"o_verifyPassword.valid && verifyPassword != password\">\n      Passwords doesn't match!\n    </span>\n\n    <button class=\"btn btn-primary btn-block input-margin-top\"\n            type=\"submit\"\n            [disabled]=\"username.length == 0 || password.length == 0 ||  verifyPassword != password\"\n            (click)=\"register()\">\n      Register\n    </button>\n\n    <button class=\"btn btn-danger btn-block input-margin-top\"\n       routerLink=\"/login\" >Cancel</button>\n\n  </form>\n\n</div>\n\n<app-unregistered-home-footer></app-unregistered-home-footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.errorFlag = false;
        this.username = '';
        this.password = '';
        this.verifyPassword = '';
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.userService.findUserByUsername(this.username)
            .subscribe(function (user) {
            _this.errorFlag = true;
            _this.errorMsg = user.username + ' : Username already exists! Choose a different one!';
        }, function (error) {
            if (_this.password === _this.verifyPassword) {
                _this.userService.register(_this.username, _this.password)
                    .subscribe(function (newUser) {
                    _this.userId = newUser._id;
                    _this.sharedService.user = newUser;
                    _this.navigateToUserProfile();
                }, function (error2) {
                    // console.log(error2 + ' unable to register');
                });
            }
            else {
                _this.errorFlag = true;
                _this.errorMsg = 'Password doesn\'t match!!';
            }
        });
    };
    RegisterComponent.prototype.navigateToUserProfile = function () {
        this.router.navigate(['/user', this.userId]);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/search-users/search-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/search-users/search-users.component.html":
/***/ (function(module, exports) {

module.exports = "<app-home-header></app-home-header>\n\n<!--main body-->\n<div class=\"row container-fluid\">\n\n  <!-- Left Pane - User details -->\n  <div class=\"col-sm-4 hidden-xs my-left-pane my-right-border\">\n    <app-home-user-profile></app-home-user-profile>\n  </div>\n\n  <!-- Right Pane - Search Users -->\n  <div class=\"col-sm-8 col-xs-12 my-right-pane\">\n    <app-users-search-bar></app-users-search-bar>\n  </div>\n\n</div>\n\n<!--app footer-->\n<app-home-footer></app-home-footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/search-users/search-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchUsersComponent = (function () {
    function SearchUsersComponent() {
    }
    SearchUsersComponent.prototype.ngOnInit = function () {
    };
    return SearchUsersComponent;
}());
SearchUsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search-users',
        template: __webpack_require__("../../../../../src/app/components/user/search-users/search-users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/search-users/search-users.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SearchUsersComponent);

//# sourceMappingURL=search-users.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/search-users/users-search-bar/users-search-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/search-users/users-search-bar/users-search-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<!--search body-->\n<nav class=\"navbar navbar-default text-center\">\n\n    <form class=\"form-inline text-center\">\n      <div class=\"form-group\">\n        <input type=\"text\"\n               class=\"form-control\"\n               id=\"searchTerm\"\n               name=\"searchTerm\"\n               required\n               placeholder=\"Search Friends ...\"\n               [(ngModel)] = \"searchTerm\"/>\n      </div>\n\n      <div class=\"form-group\">\n        <button class=\"btn btn-success btn-block\"\n                (click)=\"searchItems()\">\n          Search\n        </button>\n      </div>\n    </form>\n\n</nav>\n\n<table class=\"table table-responsive table-striped\">\n  <tbody>\n    <tr *ngFor=\"let item of items\"\n        class=\"tr-match-score text-center\"\n        (click)=\"navigateToFriendProfile(item._id)\">\n        <h4><strong>{{item.lastName}}, {{item.firstName}} ({{item.username}})</strong></h4>\n    </tr>\n  </tbody>\n</table>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/user/search-users/users-search-bar/users-search-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersSearchBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_league_service_client__ = __webpack_require__("../../../../../src/app/services/league.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_player_service_client__ = __webpack_require__("../../../../../src/app/services/player.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_team_service_client__ = __webpack_require__("../../../../../src/app/services/team.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UsersSearchBarComponent = (function () {
    function UsersSearchBarComponent(userService, router, route, leagueService, teamService, playerService, sharedService) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.leagueService = leagueService;
        this.teamService = teamService;
        this.playerService = playerService;
        this.sharedService = sharedService;
    }
    UsersSearchBarComponent.prototype.ngOnInit = function () {
        this.options = [];
        this.searchTerm = '';
        this.user = this.sharedService.user;
        this.userID = this.user._id;
    };
    UsersSearchBarComponent.prototype.searchItems = function () {
        if (this.searchTerm === '' || this.searchTerm.length <= 2) {
            console.log('please enter valid name');
            return;
        }
        this.searchUsers();
        this.items = [];
        this.itemsCounter = 0;
        this.options = [];
    };
    UsersSearchBarComponent.prototype.searchUsers = function () {
        var _this = this;
        this.userService.getUsersByName(this.searchTerm)
            .subscribe(function (items) {
            _this.items = items;
        }, function (error) {
            console.log(error);
        });
    };
    UsersSearchBarComponent.prototype.navigateToFriendProfile = function (friendId) {
        this.router.navigate(['/profile', friendId]);
    };
    return UsersSearchBarComponent;
}());
UsersSearchBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users-search-bar',
        template: __webpack_require__("../../../../../src/app/components/user/search-users/users-search-bar/users-search-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/search-users/users-search-bar/users-search-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_league_service_client__["a" /* LeagueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_league_service_client__["a" /* LeagueService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_team_service_client__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_team_service_client__["a" /* TeamService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_player_service_client__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_player_service_client__["a" /* PlayerService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_shared_service__["a" /* SharedService */]) === "function" && _g || Object])
], UsersSearchBarComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=users-search-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/unregistered-home-user-profile/unregistered-home-user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/unregistered-home-user-profile/unregistered-home-user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-4\">\n  <div class=\"collapse navbar-collapse\" id=\"profile-sidebar\">\n\n      <div class=\"nav navbar-nav sider-navbar\">\n\n        <div class=\"text-center\">\n          <figure class=\"profile-userpic\">\n            <img src=\"\" class=\"img-responsive\" alt=\"Profile Picture\">\n          </figure>\n\n          <div class=\"profile-usertitle\">\n            <div class=\"profile-usertitle-name\">You are not logged in!</div>\n            <div class=\"profile-usertitle-title\">Please Login to access awesome features!</div>\n          </div>\n        </div>\n\n        <div class=\"vertical-menu\">\n          <button class=\"btn btn-primary btn-block\"\n                  (click)=\"navigateToLogin()\">Login</button>\n          <button class=\"btn btn-primary btn-block \"\n                  (click)=\"navigateToRegister()\" >Register</button>\n        </div>\n\n      </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/unregistered-home-user-profile/unregistered-home-user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnregisteredHomeUserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnregisteredHomeUserProfileComponent = (function () {
    function UnregisteredHomeUserProfileComponent(router) {
        this.router = router;
    }
    UnregisteredHomeUserProfileComponent.prototype.ngOnInit = function () {
    };
    UnregisteredHomeUserProfileComponent.prototype.navigateToLogin = function () {
        this.router.navigate(['/login']);
    };
    UnregisteredHomeUserProfileComponent.prototype.navigateToRegister = function () {
        this.router.navigate(['/register']);
    };
    return UnregisteredHomeUserProfileComponent;
}());
UnregisteredHomeUserProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-unregistered-home-user-profile',
        template: __webpack_require__("../../../../../src/app/components/user/unregistered-home-user-profile/unregistered-home-user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/unregistered-home-user-profile/unregistered-home-user-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], UnregisteredHomeUserProfileComponent);

var _a;
//# sourceMappingURL=unregistered-home-user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user-manage-favorites/user-manage-favorites.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user-manage-favorites/user-manage-favorites.component.html":
/***/ (function(module, exports) {

module.exports = " <!--Header-->\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-xs-12\">\n\n      <div class=\"navbar-text pull-left my-header-left-margin\">\n        <a (click)=\"navigateToProfile()\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <!--app logo and name-->\n      <div class=\"pull-left\">\n        <a class=\"navbar-brand\" (click)=\"navigateToHome()\">\n          <span class=\"fa fa-futbol-o\"></span>\n          <b>Soccer 360</b>\n        </a>\n      </div>\n\n      <div class=\"navbar-text pull-right my-header-right-margin\">\n        <a (click)=\"navigateToHome()\" >\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </div>\n\n    </div>\n  </div>\n</nav>\n\n<!-- favorites List -->\n<div class=\"container-fluid\">\n  <div class=\"col-xs-12\">\n\n    <!--user leagues -->\n    <div>\n      <span>\n        <h2><span class=\"label label-default\">Favorite Leagues:</span>\n          <a (click)=\"addFavorites()\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-plus btn btn-success\"></span>\n          </a>\n        </h2>\n      </span>\n\n      <div *ngIf=\"leagues\">\n        <div id=\"league\">\n          <ul class=\"list-group\">\n\n            <li class=\"list-group-item\"\n                *ngFor=\"let league of leagues\">\n              <a class=\"no-underline-hover\">{{league.name}}</a>\n              <a (click)=\"unfollowLeague(league.apiId)\" class=\"pull-right\">\n                <span class=\"glyphicon glyphicon-remove\"></span>\n              </a>\n            </li>\n\n          </ul>\n        </div>\n      </div>\n    </div>\n\n    <!--user teams -->\n    <div>\n      <span>\n        <h2><span class=\"label label-default\">Favorite Teams:</span>        </h2>\n      </span>\n\n      <div *ngIf=\"teams\">\n        <div id=\"teams\">\n          <ul class=\"list-group\">\n\n            <li class=\"list-group-item\"\n                *ngFor=\"let team of teams\">\n              <a class=\"no-underline-hover\">{{team.name}}</a>\n              <a (click)=\"unfollowTeam(team.apiId)\" class=\"pull-right\">\n                <span class=\"glyphicon glyphicon-remove my-right-margin\"></span>\n              </a>\n            </li>\n\n          </ul>\n        </div>\n      </div>\n    </div>\n\n    <!--user players -->\n    <div>\n      <span>\n        <h2><span class=\"label label-default\">Favorite Players:</span></h2>\n      </span>\n\n      <div *ngIf=\"players\">\n        <div id=\"players\">\n          <ul class=\"list-group\">\n\n            <li class=\"list-group-item\"\n                *ngFor=\"let player of players\">\n              <a class=\"no-underline-hover\">{{player.name}}</a>\n              <a (click)=\"unfollowPlayer(player.apiId)\" class=\"pull-right\">\n                <span class=\"glyphicon glyphicon-remove my-right-margin\"></span>\n              </a>\n            </li>\n\n          </ul>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n <!--Footer-->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-footer navbar-text pull-right\">\n      <a (click) = \"navigateToProfile()\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/user-manage-favorites/user-manage-favorites.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManageFavoritesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_league_service_client__ = __webpack_require__("../../../../../src/app/services/league.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_team_service_client__ = __webpack_require__("../../../../../src/app/services/team.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_player_service_client__ = __webpack_require__("../../../../../src/app/services/player.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserManageFavoritesComponent = (function () {
    function UserManageFavoritesComponent(userService, router, route, leagueService, teamService, playerService) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.leagueService = leagueService;
        this.teamService = teamService;
        this.playerService = playerService;
    }
    UserManageFavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leagues = [];
        this.route.params.subscribe(function (params) {
            _this.userID = params['userID'];
        });
        // console.log('in client' + this.userID);
        this.leagueService.findLeaguesForUser(this.userID)
            .subscribe(function (leagues) {
            // console.log('in api call' + leagues);
            _this.leagues = leagues;
        }, function (error) {
            console.log(error + ' user leagues cannot be loaded');
        });
        this.teamService.findTeamsForUser(this.userID)
            .subscribe(function (teams) {
            // console.log('in api call' + teams);
            _this.teams = teams;
        }, function (error) {
            console.log(error + ' user teams cannot be loaded');
        });
        this.playerService.findPlayersForUser(this.userID)
            .subscribe(function (players) {
            // console.log('in api call' + players);
            _this.players = players;
        }, function (error) {
            console.log(error + ' user players cannot be loaded');
        });
    };
    UserManageFavoritesComponent.prototype.navigateToProfile = function () {
        this.router.navigate(['/user', this.userID]);
    };
    // navigate to home
    UserManageFavoritesComponent.prototype.navigateToHome = function () {
        this.router.navigate(['/user', this.userID, 'home']);
    };
    // navigate to search and add favorites components
    UserManageFavoritesComponent.prototype.addFavorites = function () {
        this.router.navigate(['/user', this.userID, 'favorites', 'searchFavorites']);
    };
    UserManageFavoritesComponent.prototype.unfollowLeague = function (leagueID) {
        var _this = this;
        this.leagueService.unfollowLeague(this.userID, leagueID)
            .subscribe(function (league) {
            // console.log('in api call' + league);
            _this.ngOnInit();
        }, function (error) {
            // console.log(error);
            console.log(error + ' unable to unfollow a league');
        });
    };
    UserManageFavoritesComponent.prototype.unfollowTeam = function (teamID) {
        var _this = this;
        this.teamService.unfollowTeam(this.userID, teamID)
            .subscribe(function (team) {
            // console.log('in api call' + team);
            _this.ngOnInit();
        }, function (error) {
            // console.log(error);
            console.log(error + ' unable to unfollow a team');
        });
    };
    UserManageFavoritesComponent.prototype.unfollowPlayer = function (playerID) {
        var _this = this;
        this.playerService.unfollowPlayer(this.userID, playerID)
            .subscribe(function (player) {
            // console.log('in api call' + player);
            _this.ngOnInit();
        }, function (error) {
            // console.log(error);
            console.log(error + ' unable to unfollow a player');
        });
    };
    return UserManageFavoritesComponent;
}());
UserManageFavoritesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-manage-favorites',
        template: __webpack_require__("../../../../../src/app/components/user/user-manage-favorites/user-manage-favorites.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/user-manage-favorites/user-manage-favorites.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_league_service_client__["a" /* LeagueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_league_service_client__["a" /* LeagueService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_team_service_client__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_team_service_client__["a" /* TeamService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_player_service_client__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_player_service_client__["a" /* PlayerService */]) === "function" && _f || Object])
], UserManageFavoritesComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=user-manage-favorites.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user-search-favorites/user-search-favorites.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user-search-favorites/user-search-favorites.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Header-->\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-xs-12\">\n\n      <div class=\"navbar-text pull-left my-header-left-margin\">\n        <a (click)=\"navigateToManageFovorites()\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-text pull-right my-header-right-margin\">\n        <a (click)=\"updateFavorites()\" >\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" [routerLink]=\"[]\">\n          Search Favorites\n        </a>\n      </div>\n\n    </div>\n  </div>\n</nav>\n\n<!--search body-->\n<div class=\"container\">\n  <div class=\"row\">\n    <nav class=\"navbar navbar-default\">\n\n      <!--search form-->\n        <form class=\"form-inline text-center custom-padding-top-10\">\n          <div class=\"form-group\">\n            <select class=\"form-control\" name=\"selectType\"\n                    [(ngModel)]=\"selectedValue\">\n              <option value=\"LEAGUES\"><strong>Leagues</strong></option>\n              <option value=\"TEAMS\"><strong>Teams</strong></option>\n              <option value=\"PLAYERS\"><strong>Players</strong></option>\n            </select>\n          </div>\n\n          <div class=\"form-group\">\n            <input type=\"text\"\n                   class=\"form-control\"\n                   id=\"searchTerm\"\n                   name=\"searchTerm\"\n                   required\n                   placeholder=\"Search...\"\n                   [(ngModel)] = \"searchTerm\"/>\n          </div>\n\n          <div class=\"form-group\">\n            <button class=\"btn btn-success btn-block\"\n                    (click)=\"searchItems()\">\n              Search\n            </button>\n          </div>\n        </form>\n\n        <!--search result-->\n        <ul class=\"list-group\"\n            *ngFor=\"let option of options\"\n            style=\"list-style: none\">\n            <li class=\"list-group-item\">\n              <label>\n                <input type=\"checkbox\"\n                       name=\"options\"\n                       value=\"{{option.value}}\"\n                       [(ngModel)]=\"option.checked\"/>\n                {{option.name}}\n              </label>\n            </li>\n        </ul>\n    </nav>\n  </div>\n</div>\n\n<!--Footer-->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-footer navbar-text pull-right\">\n      <a (click) = \"navigateToProfile()\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/user-search-favorites/user-search-favorites.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSearchFavoritesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_league_service_client__ = __webpack_require__("../../../../../src/app/services/league.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_player_service_client__ = __webpack_require__("../../../../../src/app/services/player.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_team_service_client__ = __webpack_require__("../../../../../src/app/services/team.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserSearchFavoritesComponent = (function () {
    function UserSearchFavoritesComponent(userService, router, route, leagueService, teamService, playerService) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.leagueService = leagueService;
        this.teamService = teamService;
        this.playerService = playerService;
    }
    UserSearchFavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = [];
        this.searchTerm = '';
        this.route.params.subscribe(function (params) {
            _this.userID = params['userID'];
        });
    };
    UserSearchFavoritesComponent.prototype.searchItems = function () {
        if (this.searchTerm === '' || this.searchTerm.length <= 2) {
            console.log('please enter valid name!!');
            return;
        }
        switch (this.selectedValue) {
            case 'LEAGUES': {
                this.searchLeagues();
                break;
            }
            case 'TEAMS': {
                this.searchTeams();
                break;
            }
            case 'PLAYERS': {
                this.searchPlayers();
                break;
            }
        }
        this.items = [];
        this.itemsCounter = 0;
        this.options = [];
    };
    UserSearchFavoritesComponent.prototype.constructOptions = function () {
        if (this.items && this.items.length > 0) {
            for (var i = 0; i < this.items.length; i++) {
                var option = { name: this.items[i].name, value: this.items[i].apiId, checked: false };
                this.options.push(option);
            }
        }
    };
    UserSearchFavoritesComponent.prototype.selectedOptions = function () {
        return this.options
            .filter(function (opt) { return opt.checked; })
            .map(function (opt) { return opt.value; });
    };
    UserSearchFavoritesComponent.prototype.searchLeagues = function () {
        var _this = this;
        this.leagueService.searchLeaguesByName(this.userID, this.searchTerm)
            .subscribe(function (items) {
            _this.items = items;
            // console.log(items);
            _this.constructOptions();
        }, function (error) {
            console.log(error + ' unable to search league by name! The search keyword has to be greater than 2 letters!');
        });
    };
    UserSearchFavoritesComponent.prototype.searchPlayers = function () {
        var _this = this;
        this.playerService.searchPlayersByName(this.userID, this.searchTerm)
            .subscribe(function (items) {
            _this.items = items;
            // console.log(items);
            _this.constructOptions();
        }, function (error) {
            console.log(error + ' unable to search players by name! The search keyword has to be greater than 2 letters!');
        });
    };
    UserSearchFavoritesComponent.prototype.searchTeams = function () {
        var _this = this;
        this.teamService.searchTeamsByName(this.userID, this.searchTerm)
            .subscribe(function (items) {
            _this.items = items;
            // console.log(items);
            _this.constructOptions();
        }, function (error) {
            console.log(error + ' unable to search teams by name! The search keyword has to be greater than 2 letters!');
        });
    };
    UserSearchFavoritesComponent.prototype.navigateToProfile = function () {
        this.router.navigate(['/user', this.userID]);
    };
    // update followed leagues/team/player and navigate to favorites
    UserSearchFavoritesComponent.prototype.updateFavorites = function () {
        // console.log('in updateFavorites()');
        // console.log(this.selectedOptions());
        var selectedItems = this.selectedOptions();
        this.itemsCounter = selectedItems.length;
        if (this.itemsCounter > 0) {
            switch (this.selectedValue) {
                case 'LEAGUES': {
                    this.followLeagues(selectedItems);
                    break;
                }
                case 'TEAMS': {
                    this.followTeams(selectedItems);
                    break;
                }
                case 'PLAYERS': {
                    this.followPlayers(selectedItems);
                    break;
                }
            }
        }
        else {
            this.options = [];
            this.navigateToManageFovorites();
        }
    };
    UserSearchFavoritesComponent.prototype.followLeagues = function (leagues) {
        var _this = this;
        leagues.map(function (leagueId) { return _this.followLeague(leagueId); });
    };
    UserSearchFavoritesComponent.prototype.followTeams = function (teams) {
        var _this = this;
        teams.map(function (teamId) { return _this.followTeam(teamId); });
    };
    UserSearchFavoritesComponent.prototype.followPlayers = function (players) {
        var _this = this;
        players.map(function (playerId) { return _this.followPlayer(playerId); });
    };
    UserSearchFavoritesComponent.prototype.followLeague = function (leagueId) {
        var _this = this;
        this.leagueService.followLeague(this.userID, leagueId)
            .subscribe(function (res) {
            // console.log('in res' + res);
            _this.decrementCounter();
        }, function (error) {
            // console.log('in error');
            console.log(error + ' error in following league!');
        });
    };
    UserSearchFavoritesComponent.prototype.decrementCounter = function () {
        this.itemsCounter--;
        if (this.itemsCounter === 0) {
            this.navigateToManageFovorites();
        }
    };
    UserSearchFavoritesComponent.prototype.followTeam = function (teamId) {
        var _this = this;
        this.teamService.followTeam(this.userID, teamId)
            .subscribe(function (res) {
            // console.log(res);
            _this.decrementCounter();
        }, function (error) {
            console.log(error + ' error in following team!');
        });
    };
    UserSearchFavoritesComponent.prototype.followPlayer = function (playerId) {
        var _this = this;
        this.playerService.followPlayer(this.userID, playerId)
            .subscribe(function (res) {
            // console.log(res);
            _this.decrementCounter();
        }, function (error) {
            console.log(error + ' error in following player!');
        });
    };
    UserSearchFavoritesComponent.prototype.navigateToManageFovorites = function () {
        this.router.navigate(['/user', this.userID, 'favorites']);
    };
    return UserSearchFavoritesComponent;
}());
UserSearchFavoritesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-search-leagues',
        template: __webpack_require__("../../../../../src/app/components/user/user-search-favorites/user-search-favorites.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/user-search-favorites/user-search-favorites.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_league_service_client__["a" /* LeagueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_league_service_client__["a" /* LeagueService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_team_service_client__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_team_service_client__["a" /* TeamService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_player_service_client__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_player_service_client__["a" /* PlayerService */]) === "function" && _f || Object])
], UserSearchFavoritesComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=user-search-favorites.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_id, username, password, firstname, lastname, email) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.firstName = firstname;
        this.lastName = lastname;
        this.email = email;
    }
    return User;
}());

//# sourceMappingURL=user.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        this.userService.loggedIn()
            .subscribe(function (isLoggedIn) {
            _this.isLoggedIn = isLoggedIn;
            if (_this.isLoggedIn) {
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
        return this.userService.loggedIn();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/critic.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriticService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// injecting service into module
var CriticService = (function () {
    function CriticService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.api = {
            'createCriticRequest': this.createCriticRequest,
            'findAllCriticApplications': this.findAllCriticApplications,
            'findAllCritics': this.findAllCritics,
            'findAllPendingRequests': this.findAllPendingRequests,
            'promoteToCritic': this.promoteToCritic,
            'demoteToUser': this.demoteToUser,
            'deleteRequest': this.deleteRequest,
        };
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]();
    }
    CriticService.prototype.deleteRequest = function (requestId) {
        var url = this.baseUrl + '/api/request/delete/' + requestId;
        return this.http.delete(url)
            .map(function (res) {
            return res.json();
        });
    };
    CriticService.prototype.createCriticRequest = function (criticRequest) {
        var url = this.baseUrl + '/api/critic';
        return this.http.post(url, criticRequest)
            .map(function (res) {
            return res.json();
        });
    };
    CriticService.prototype.findAllCriticApplications = function () {
        var url = this.baseUrl + '/api/critic/apps';
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    CriticService.prototype.findAllCritics = function () {
        var url = this.baseUrl + '/api/critic';
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    CriticService.prototype.findAllPendingRequests = function () {
        var url = this.baseUrl + '/api/critic/pending';
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    CriticService.prototype.promoteToCritic = function (userId) {
        var url = this.baseUrl + '/api/critic/promote/' + userId;
        var body = {};
        return this.http.put(url, body)
            .map(function (res) {
            return res.json();
        });
    };
    CriticService.prototype.demoteToUser = function (criticId) {
        var url = this.baseUrl + '/api/critic/demote/' + criticId;
        var body = {};
        return this.http.put(url, body)
            .map(function (res) {
            return res.json();
        });
    };
    return CriticService;
}());
CriticService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _c || Object])
], CriticService);

var _a, _b, _c;
//# sourceMappingURL=critic.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/flickr.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// injecting service into module
var FlickrService = (function () {
    function FlickrService(http) {
        this.http = http;
        this.key = '714e904fbce05845ec8c849009350fed';
        this.secret = 'bfc8b619c18b9626';
        this.urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';
        this.api = {
            'searchPhotos': this.searchPhotos,
        };
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        return this.http.get(url);
        // .map((res: Response) => {
        //   return res.json();
        // });
    };
    return FlickrService;
}());
FlickrService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FlickrService);

var _a;
//# sourceMappingURL=flickr.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/league.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeagueService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var LeagueService = (function () {
    function LeagueService(http) {
        this.http = http;
        this.api = {
            'followLeague': this.followLeague,
            'unfollowLeague': this.unfollowLeague,
            'findLeagueById': this.findLeagueById,
            'findLeaguesForUser': this.findLeaguesForUser,
            'searchLeaguesByName': this.searchLeaguesByName
        };
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl;
    }
    LeagueService.prototype.searchLeaguesByName = function (userID, keyword) {
        var url = this.baseUrl + '/api/user/' + userID + '/league/' + keyword;
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    LeagueService.prototype.findLeaguesForUser = function (userID) {
        var url = this.baseUrl + '/api/user/' + userID + '/league';
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    LeagueService.prototype.findLeagueById = function (leagueID) {
        var url = this.baseUrl + '/api/league/' + leagueID;
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    LeagueService.prototype.followLeague = function (userID, leagueID) {
        var body = {
            leagueId: leagueID
        };
        var url = this.baseUrl + '/api/user/' + userID + '/followLeague';
        return this.http.put(url, body)
            .map(function (res) {
            // console.log('in client sevice' + res);
            return res;
        });
    };
    LeagueService.prototype.unfollowLeague = function (userID, leagueID) {
        var body = {
            leagueId: leagueID
        };
        var url = this.baseUrl + '/api/user/' + userID + '/unfollowLeague';
        return this.http.put(url, body)
            .map(function (res) {
            return res;
        });
    };
    return LeagueService;
}());
LeagueService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _a || Object])
], LeagueService);

var _a;
//# sourceMappingURL=league.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/player.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var PlayerService = (function () {
    function PlayerService(http) {
        this.http = http;
        this.api = {
            'followPlayer': this.followPlayer,
            'unfollowPlayer': this.unfollowPlayer,
            'findPlayerById': this.findPlayerById,
            'findPlayersForUser': this.findPlayersForUser,
            'searchPlayersByName': this.searchPlayersByName
        };
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl;
    }
    PlayerService.prototype.searchPlayersByName = function (userID, keyword) {
        var url = this.baseUrl + '/api/user/' + userID + '/player/' + keyword;
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    PlayerService.prototype.findPlayersForUser = function (userID) {
        var url = this.baseUrl + '/api/user/' + userID + '/player';
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    PlayerService.prototype.findPlayerById = function (playerID) {
        var url = this.baseUrl + '/api/player/' + playerID;
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    PlayerService.prototype.followPlayer = function (userID, playerID) {
        var body = {
            playerId: playerID
        };
        var url = this.baseUrl + '/api/user/' + userID + '/followPlayer';
        return this.http.put(url, body)
            .map(function (res) {
            return res;
        });
    };
    PlayerService.prototype.unfollowPlayer = function (userID, playerID) {
        var body = {
            playerId: playerID
        };
        var url = this.baseUrl + '/api/user/' + userID + '/unfollowPlayer';
        return this.http.put(url, body)
            .map(function (res) {
            return res;
        });
    };
    return PlayerService;
}());
PlayerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PlayerService);

var _a;
//# sourceMappingURL=player.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/review.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var ReviewService = (function () {
    function ReviewService(http) {
        this.http = http;
        this.api = {
            'findReviewsForItem': this.findReviewsForItem,
            'createReview': this.createReview,
            'updateReview': this.updateReview,
            'deleteReview': this.deleteReview,
            'findReviewById': this.findReviewById
        };
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]();
    }
    ReviewService.prototype.findReviewById = function (reviewId) {
        // console.log('in client service' + reviewId);
        var url = this.baseUrl + '/api/findReview/' + reviewId;
        return this.http.get(url)
            .map(function (res) {
            // console.log('in client service then' + res);
            return res.json();
        });
    };
    ReviewService.prototype.findReviewsForItem = function (itemId) {
        var url = this.baseUrl + '/api/review/' + itemId;
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    ReviewService.prototype.createReview = function (newReview) {
        // console.log('in client service' + newReview.title);
        var url = this.baseUrl + '/api/review';
        return this.http.post(url, newReview)
            .map(function (res) {
            return res.json();
        });
    };
    ReviewService.prototype.updateReview = function (reviewId, newReview) {
        var url = this.baseUrl + '/api/review/' + reviewId;
        return this.http.put(url, newReview)
            .map(function (res) {
            return res.json();
        });
    };
    ReviewService.prototype.deleteReview = function (reviewId) {
        var url = this.baseUrl + '/api/review/' + reviewId;
        return this.http.delete(url)
            .map(function (res) {
            return res.json();
        });
    };
    return ReviewService;
}());
ReviewService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ReviewService);

var _a;
//# sourceMappingURL=review.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = (function () {
    function SharedService() {
        this.user = '';
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SharedService);

//# sourceMappingURL=shared.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/soccer.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoccerServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// injecting service into module
var SoccerServiceClient = (function () {
    function SoccerServiceClient(http) {
        this.http = http;
        this.environment = {
            apiBaseUrl: 'http://api.football-api.com/2.0/',
            apiKey: '565ec012251f932ea4000001a46ed46b60254449570215f2e161e291',
        };
        this.urlBase = this.environment.apiBaseUrl + 'SEARCHDOMAIN' + '?' + 'SEARCHQUERY' + 'Authorization=' + this.environment.apiKey;
        this.api = {
            'getMatchesByDate': this.getMatchesByDate,
            'getAllCompetitions': this.getAllCompetitions,
            'getCompetitionById': this.getCompetitionById,
            'getCompetitionStandings': this.getCompetitionStandings,
            'getMatchCommentary': this.getMatchCommentary,
            'getTeamInformation': this.getTeamInformation,
            'getPlayerInformation': this.getPlayerInformation,
            'getMatchDetails': this.getMatchDetails,
            'getMatchesByTeam': this.getMatchesByTeam,
            'getMatchesByCompetition': this.getMatchesByCompetition,
            'getUpcomingMatchesOfTeam': this.getUpcomingMatchesOfTeam,
            'getUpcomingMatchesOfCompetition': this.getUpcomingMatchesOfCompetition,
            'getPreviousMatchesOfCompetition': this.getPreviousMatchesOfCompetition,
            'getPreviousMatchesOfTeam': this.getPreviousMatchesOfTeam,
        };
    }
    SoccerServiceClient.prototype.requestData = function (searchDomain, searchQuery) {
        var url = this.urlBase
            .replace('SEARCHDOMAIN', searchDomain)
            .replace('SEARCHQUERY', searchQuery);
        return this.http.get(url);
    };
    SoccerServiceClient.prototype.getPreviousMatchesOfCompetition = function (compId, toDate) {
        var fromDate = '7/1/2017';
        var searchDomain = 'matches';
        var searchQuery = 'comp_id=' + compId + '&from_date=' + fromDate + '&to_date=' + toDate + '&';
        return this.requestData(searchDomain, searchQuery);
    };
    SoccerServiceClient.prototype.getPreviousMatchesOfTeam = function (teamId, toDate) {
        var fromDate = '7/1/2017';
        var searchDomain = 'matches';
        var searchQuery = 'team_id=' + teamId + '&from_date=' + fromDate + '&to_date=' + toDate + '&';
        return this.requestData(searchDomain, searchQuery);
    };
    SoccerServiceClient.prototype.getUpcomingMatchesOfCompetition = function (compId, fromDate) {
        var toDate = '7/1/2018';
        var searchDomain = 'matches';
        var searchQuery = 'comp_id=' + compId + '&from_date=' + fromDate + '&to_date=' + toDate + '&';
        return this.requestData(searchDomain, searchQuery);
    };
    SoccerServiceClient.prototype.getUpcomingMatchesOfTeam = function (teamId, fromDate) {
        var toDate = '7/1/2018';
        var searchDomain = 'matches';
        var searchQuery = 'team_id=' + teamId + '&from_date=' + fromDate + '&to_date=' + toDate + '&';
        return this.requestData(searchDomain, searchQuery);
    };
    SoccerServiceClient.prototype.getMatchesByDate = function (date) {
        var searchDomain = 'matches';
        var searchQuery = 'match_date=' + date + '&';
        return this.requestData(searchDomain, searchQuery);
    };
    SoccerServiceClient.prototype.getMatchesByTeam = function (teamId) {
        var searchDomain = 'matches';
        var searchQuery = 'team_id=' + teamId + '&';
        return this.requestData(searchDomain, searchQuery);
    };
    SoccerServiceClient.prototype.getMatchesByCompetition = function (compId) {
        var searchDomain = 'matches';
        var searchQuery = 'comp_id=' + compId + '&';
        return this.requestData(searchDomain, searchQuery);
    };
    SoccerServiceClient.prototype.getAllCompetitions = function () {
        var searchDomain = 'competitions';
        var searchQuery = '';
        return this.requestData(searchDomain, searchQuery);
    };
    SoccerServiceClient.prototype.getCompetitionById = function (compId) {
        var searchDomain = 'competitions/' + compId;
        var searchQuery = '';
        return this.requestData(searchDomain, searchQuery);
    };
    SoccerServiceClient.prototype.getCompetitionStandings = function (compId) {
        var searchDomain = 'standings/' + compId;
        var searchQuery = '';
        return this.requestData(searchDomain, searchQuery);
    };
    SoccerServiceClient.prototype.getMatchCommentary = function (matchId) {
        var searchDomain = 'commentaries/' + matchId;
        var searchQuery = '';
        return this.requestData(searchDomain, searchQuery);
    };
    SoccerServiceClient.prototype.getTeamInformation = function (teamID) {
        var searchDomain = 'team/' + teamID;
        var searchQuery = '';
        return this.requestData(searchDomain, searchQuery);
    };
    SoccerServiceClient.prototype.getPlayerInformation = function (playerId) {
        var searchDomain = 'player/' + playerId;
        var searchQuery = '';
        return this.requestData(searchDomain, searchQuery);
    };
    SoccerServiceClient.prototype.getMatchDetails = function (matchId) {
        var searchDomain = 'matches/' + matchId;
        var searchQuery = '';
        return this.requestData(searchDomain, searchQuery);
    };
    return SoccerServiceClient;
}());
SoccerServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object])
], SoccerServiceClient);

var _a;
//# sourceMappingURL=soccer.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/team.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var TeamService = (function () {
    function TeamService(http) {
        this.http = http;
        this.api = {
            'followTeam': this.followTeam,
            'unfollowTeam': this.unfollowTeam,
            'findTeamById': this.findTeamById,
            'findTeamsForUser': this.findTeamsForUser,
            'searchTeamsByName': this.searchTeamsByName
        };
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl;
    }
    TeamService.prototype.searchTeamsByName = function (userID, keyword) {
        var url = this.baseUrl + '/api/user/' + userID + '/team/' + keyword;
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    TeamService.prototype.findTeamsForUser = function (userID) {
        var url = this.baseUrl + '/api/user/' + userID + '/team';
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    TeamService.prototype.findTeamById = function (teamID) {
        var url = this.baseUrl + '/api/team/' + teamID;
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    TeamService.prototype.followTeam = function (userID, teamID) {
        var body = {
            teamId: teamID
        };
        var url = this.baseUrl + '/api/user/' + userID + '/followTeam';
        return this.http.put(url, body)
            .map(function (res) {
            return res;
        });
    };
    TeamService.prototype.unfollowTeam = function (userID, teamID) {
        var body = {
            teamId: teamID
        };
        var url = this.baseUrl + '/api/user/' + userID + '/unfollowTeam';
        return this.http.put(url, body)
            .map(function (res) {
            return res;
        });
    };
    return TeamService;
}());
TeamService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TeamService);

var _a;
//# sourceMappingURL=team.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// injecting service into module
var UserService = (function () {
    function UserService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.api = {
            'createUser': this.createUser,
            'findUserByCredentials': this.findUserByCredentials,
            // 'findUserByUsername' : this.findUserByUsername,
            'findUserById': this.findUserById,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser,
            'followUser': this.followUser,
            'unfollowUser': this.unfollowUser,
            'findFollowing': this.findFollowing,
            'findFollowers': this.findFollowers,
            'getUsersByName': this.getUsersByName,
            'getAllUsers': this.getAllUsers,
            'getAllCritics': this.getAllCritics,
            'demoteToUser': this.demoteToUser,
        };
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]();
    }
    UserService.prototype.demoteToUser = function (criticId) {
        var url = this.baseUrl + '/api/user/demote/' + criticId;
        var body = {};
        return this.http.put(url, body)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.getAllCritics = function () {
        var url = this.baseUrl + '/api/allCritics';
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.getAllUsers = function () {
        var url = this.baseUrl + '/api/allUsers';
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.getUsersByName = function (userKeyword) {
        var url = this.baseUrl + '/api/users/' + userKeyword;
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findFollowing = function (userID) {
        var url = this.baseUrl + '/api/user/' + userID + '/following';
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findFollowers = function (userID) {
        var url = this.baseUrl + '/api/user/' + userID + '/followers';
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.login = function (username, password) {
        this.options.withCredentials = true;
        var body = {
            username: username,
            password: password
        };
        var url = this.baseUrl + '/api/login';
        return this.http.post(url, body, this.options)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.logout = function () {
        this.options.withCredentials = true;
        var url = this.baseUrl + '/api/logout';
        return this.http.post(url, '', this.options)
            .map(function (res) {
            var data = res;
        });
    };
    UserService.prototype.register = function (username, password) {
        this.options.withCredentials = true;
        var user = {
            username: username,
            password: password
        };
        var url = this.baseUrl + '/api/register';
        return this.http.post(url, user, this.options)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        var url = this.baseUrl + '/api/loggedIn';
        return this.http.post(url, '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else if (user === 0) {
                return false;
            }
        });
    };
    UserService.prototype.createUser = function (username, password) {
        var url = this.baseUrl + '/api/user';
        // const user: User = new User('', username, password, '', '', '');
        var user = { 'username': username, 'password': password };
        return this.http.post(url, user)
            .map(function (res) {
            // console.log('createUser service client ' + res.json());
            return res.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        var url = this.baseUrl + '/api/user?username=' + username;
        return this.http.get(url)
            .map(function (res) {
            // console.log('findUserByUsername service client ' + res.json());
            return res.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.put(url, user)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.delete(url)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.followUser = function (userId, followUserId) {
        var body = {
            followUserId: followUserId
        };
        var url = this.baseUrl + '/api/user/' + userId + '/follow';
        return this.http.put(url, body)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.unfollowUser = function (userId, unfollowUserId) {
        var body = {
            unfollowUserId: unfollowUserId
        };
        var url = this.baseUrl + '/api/user/' + userId + '/unfollow';
        return this.http.put(url, body)
            .map(function (res) {
            return res.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map