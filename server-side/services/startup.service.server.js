module.exports = function(app, models) {

  const request = require('request');

  const apiBaseUrl = 'http://api.football-api.com/2.0/';
  const apiKey = '565ec012251f932ea4000001a46ed46b60254449570215f2e161e291';
  const urlBase = apiBaseUrl + 'SEARCHDOMAIN' + '?' + 'SEARCHQUERY' + 'Authorization=' + apiKey;

  const LeagueModel = models.leagueModel;
  const TeamModel = models.teamModel;
  const PlayerModel = models.playerModel;

  leagueModelStartUp();

  function leagueModelStartUp() {
    var leagues = getLeagues();
  }

  function queryApi(url) {
    console.log("in queryApi");
    request(url, { json: true }, function (err, res, result) {
      if (err) { return console.log(err); }
      updateLeagues(result);
      return result;
    });
  }

  function getLeagues() {
    var searchDomain = 'competitions';
    var searchQuery = '';
    var url = urlBase
      .replace('SEARCHDOMAIN', searchDomain)
      .replace('SEARCHQUERY', searchQuery);

    request(url, { json: true }, function (err, res, leagues) {
      if (err) { return console.log(err); }
      updateLeagues(leagues);
      for (var i = 0; i < leagues.length; i++) {
        teamModelStartUp(leagues[i]);
      }
    });
  }

  function updateLeagues(leagues) {
    for(var i=0; i<leagues.length; i++) {
      addLeagueIfAbsent(leagues[i]);
    }
  }

  function addLeagueIfAbsent(apiLeague) {
    return LeagueModel
      .findLeagueByApiId(apiLeague.id)
      .then(function(league){
        if(league.length == 0) addLeague(apiLeague);
        return;
      }, function (error) {
        console.log(error);
        return;
      });
  }

  function addLeague(apiLeague) {
    var newLeague = {'apiId':apiLeague.id, 'name': apiLeague.name, 'followers': []};
    LeagueModel.createLeague(newLeague)
      .then(function (league) {
        console(league + " new league added to database");
      }, function (error) {
        console.log(error + " error in adding new league to database");
      });
  }

  function teamModelStartUp(league) {
    const teams = getTeams(league.id);
    // updateTeams(teams);
    // for (var i = 0; i < teams.length; i++) {
    //   playerModelStartUp(teams[i]);
    // }
  }

  function getTeams(leagueId) {
    const searchDomain = 'standings/' + leagueId;
    const searchQuery = '';
    var url = urlBase
      .replace('SEARCHDOMAIN', searchDomain)
      .replace('SEARCHQUERY', searchQuery);

    request(url, { json: true }, function (err, res, teams) {
      if (err) { return console.log(err); }
      updateTeams(teams);
      for (var i = 0; i < teams.length; i++) {
        playerModelStartUp(teams[i]);
      }
    });
  }

  function updateTeams(teams) {
    for(var i=0; i<teams.length; i++) {
      addTeamIfAbsent(teams[i]);
    }
  }

  function addTeamIfAbsent(apiTeam) {
    return TeamModel
      .findTeamByApiId(apiTeam.team_id)
      .then(function(team){
        if(team.length == 0) addTeam(apiTeam);
        return;
      }, function (error) {
        console.log(error);
        return;
      });
  }

  function addTeam(apiTeam) {
    var newTeam = {'apiId':apiTeam.team_id, 'name': apiTeam.team_name, 'followers': []};
    TeamModel.createTeam(newTeam)
      .then(function (team) {
        console(team + " new team added to database");
      }, function (error) {
        console.log(error + " error in adding new team to database");
      });
  }

  function playerModelStartUp(team) {
    const players = getPlayers(team.team_id);
    // updatePlayers(players);
  }

  function getPlayers(teamId) {
    const searchDomain = 'team/' + teamId;
    const searchQuery = '';
    var url = urlBase
      .replace('SEARCHDOMAIN', searchDomain)
      .replace('SEARCHQUERY', searchQuery);

    request(url, { json: true }, function (err, res, teamInfo) {
      if (err) { return console.log(err); }
      var players = teamInfo.squad;
      if(players) updatePlayers(players);
    });
  }

  function updatePlayers(players) {
    for(var i=0; i<players.length; i++) {
      addPlayerIfAbsent(players[i]);
    }
  }

  function addPlayerIfAbsent(apiPlayer) {
    return PlayerModel
      .findPlayerByApiId(apiPlayer.id)
      .then(function(player){
        if(player.length == 0) addPlayer(apiPlayer);
        return;
      }, function (error) {
        console.log(error);
        return;
      });
  }

  function addPlayer(apiPlayer) {
    var newPlayer = {'apiId':apiPlayer.id, 'name': apiPlayer.name, 'followers': []};
    PlayerModel.createPlayer(newPlayer)
      .then(function (player) {
        console(player + " new player added to database");
      }, function (error) {
        console.log(error + " error in adding new player to database");
      });
  }
}
