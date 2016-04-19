

exports.Index = function(req, res) {
   res.render('default', {
   title: 'NotifyMe -- Home page'
  });
}

exports.AddIncident = function(req, res) {
  //IncidentDescription
  //IncidentPriority
  //IncidentTitle
  //IncidentTime
  //IncidentTeamId
 console.log(req.body);
  console.log(env);
  var body = 'From: ' + req.body.name + '\n' +
    'IncidentDescription: ' + req.body.IncidentDescription+ '\n' +
    'IncidentPriority: ' + req.body.IncidentPriority + '\n' +
    'IncidentTime: ' + req.body.IncidentTime + '\n' +
    'IncidentId: ' + req.body.IncidentId + '\n' +
    'Incidentsubmit: ' + req.body.Incidentsubmit + '\n' +
    'Incidentclear: ' + req.body.Incidentclear;

  //2 pass the data to NotifyAPI using POST 
      res.render('addIncident', {
      title: 'Inicident List'
  });
}

exports.GetIncident = function(req, res) {
  console.log('i am on the get Incident')

      res.render('addIncident', {
      title: 'Incident List'
  });
}
