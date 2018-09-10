var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     :  'root',
  password :  'password',
  database :  'sources'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM sources', function(err, results, fields) {
    if(err) {
      callback(err, null);
    }else{
      callback(null, results);
    }
  });
};

var displayResources = function(logo, name, description, url, function) {
  connection.query(
    "SELECT FROM resources(logo, name, description, url) VALUES (?, ?, ?, ?)",
    [logo, name, description, url],
    (err,results, fields) => {
      if(err) {
        callback(err, null);
      }else{
        console.log(results);
        callback(null, results)
      }
    }
  );
};

var displayTeamMembers = function(callback) {
  connection.query(
    "SELECT FROM teamMembers(photo, name, about) VALUES(?, ?, ?)",
    [photo, name, about],
    (err, results) => {
      if(err) {
      callback(err, null);
    }else{
      console.log(results);
      callback(null, results);
      }
    }
  );
};
module.exports.selectAll = selectAll;
module.exports.displayResources = displayResources;
module.exports.displayTeamMembers = displayTeamMembers;
