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
    updateLeagues(leagues);

    for (var i = 0; i < leagues.length; i++) {
      teamModelStartUp(leagues[i]);
    }
  }

  function queryApi(url) {
    request(url, { json: true }, function (err, res, result) {
      if (err) { return console.log(err); }
      return result;
    });
  }

  function getLeagues() {
    var searchDomain = 'competitions';
    var searchQuery = '';
    var url = urlBase
      .replace('SEARCHDOMAIN', searchDomain)
      .replace('SEARCHQUERY', searchQuery);

    var leagues = queryApi(url);

    return leagues;
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
    updateTeams(teams);
    for (var i = 0; i < teams.length; i++) {
      playerModelStartUp(teams[i]);
    }
  }

  function getTeams(leagueId) {
    const searchDomain = 'standings/' + leagueId;
    const searchQuery = '';
    var url = urlBase
      .replace('SEARCHDOMAIN', searchDomain)
      .replace('SEARCHQUERY', searchQuery);

    var teams = queryApi(url);

    return teams;
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
    const players = getPlayers(team.id);
    updatePlayers(players);
  }

  function getPlayers(teamId) {
    const searchDomain = 'team/' + teamId;
    const searchQuery = '';
    var url = urlBase
      .replace('SEARCHDOMAIN', searchDomain)
      .replace('SEARCHQUERY', searchQuery);

    var teamInfo = queryApi(url);
    return teamInfo.squad;
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

  app.get("/api/league/:leagueId", findLeagueById);
  app.put("/api/user/:userId/followLeague", followLeague);
  app.put("/api/user/:userId/unfollowLeague", unfollowLeague);
  app.get("/api/user/:userID/league", findLeaguesByUser);

  function findLeagueById(req, res) {
    var leagueId = req.params.leagueId;
    LeagueModel
      .findLeagueById(leagueId)
      .then(function(league){
        res.json(league);
      });
  }

  function findLeaguesByUser(req, res) {
    var userID = req.params.userID;

    LeagueModel.findAllLeaguesForUser(userID)
      .then(function (leagues) {
        res.json(leagues);
      }, function (err) {
        res.send(err);
      });
  }

  function followLeague(req, res) {
    var loggedInUserId = req.params.userId;
    var followLeagueId = req.query.followLeagueId;

    LeagueModel
      .followLeague(loggedInUserId, followLeagueId)
      .then(function(league) {
          res.json(league);
        },
        function (error) {
          res.sendStatus(404).send(error);
        });
  }

  function unfollowLeague(req, res) {
    var loggedInUserId = req.params.userId;
    var unfollowLeagueId = req.query.unfollowLeagueId;

    LeagueModel
      .unfollowLeague(loggedInUserId, unfollowLeagueId)
      .then(function(league) {
          res.json(league);
        },
        function (error) {
          res.sendStatus(404).send(error);
        });
  }
}
