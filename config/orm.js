// Import MySQL connection.
var connection = require("./connection.js");

// object of functions to preform db queries
var orm = {
  // Select all record from burgers table
  selectAll: function(response) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, data){
      if (err) throw err;
      response(data);
    });
  },
  // Insert into the burgers table
  insertOne: function(burger, response) {
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?,?)";
    connection.query(queryString, [burger, false], function(err, data) {
      if (err) throw err;
      response(data);
    });
  },
  // Update devoured to true for a burger
  updateOne: function(id, response) {
    var queryString = "UPDATE burgers SET ? WHERE ?";
    connection.query(queryString, [{ devoured: true }, { id:id }], function(err, data) {
      if (err) throw err;
      response(data);
    });
  },
  //delete record form burgers table where refrenced id
  deleteOne: function(id, response) {
    var queryString = "DELETE FROM burgers WHERE ?";
    connection.query(queryString, [{ id:id }], function(err, data) {
      if (err) throw err;
      response(data);
    });
  }

};

// Export the orm object for the model (burger.js).
module.exports = orm;
