

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

  //2 pass the data to NotifyAPI using POST 
  res.render('addIncident', {
    title: 'Inicident List'
  });
}

exports.GetIncident = function(req, res) {
  res.render('admin', {
    title: 'Incident List'
  });
}