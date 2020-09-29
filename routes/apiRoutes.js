var { v4: uuidv4 } = require('uuid');
var notesData=require("../db/db");
//=====================================================================
//Routing
//=====================================================================
module.exports = function (app) {

  //To get the data from JSON
  app.get("/api/notes", function (req, res) {
res.json(notesData);

  });

  //To post the data from JSON
  app.post("/api/notes", function (req, res) {
      req.body.id = uuidv4();
      notesData.push(req.body);
      res.send(notesData);
  });

  //To delete the data from JSON
  app.delete("/api/notes/:id",function(req,res){
    notesData = notesData.filter(note=> {
      if (note.id == req.params.id) {
        return false;
      }
      return true;
    });
    res.send(notesData);
  })
};



// // var fs = require("fs");
// // var path = require("path");
// var notesData = require("../db/db");
// const { v4: uuidv4 } = require('uuid');
// uuidv4();

// module.exports = function(app) {
// //     app.get('/notes', function(req, res) {
// //         res.sendFile(path.join(__dirname, "../public/notes.html"));
// //       });  

// //       app.get('*', function(req, res) {
// //         res.sendFile(path.join(__dirname, "../public/index.html"));
// //       });  

// // }
// app.get("/api/notes", function(req, res) {
//   res.json(notesData);
// });


// // app.post("/api/notes", function(req, res) {
// //     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
// //     // It will do this by sending out the value "true" have a table
// //     // req.body is available since we're using the body parsing middleware
// //     const newId = uuidv4();
// //     req.body.id = newId;
// //     notesData.push(req.body);
// //     res.send(notesData);
  
  

// //   fs.readFile("./db/db.json", "utf8", (err, data) => {
// //     if (err) throw err;

// //     const allNotes = JSON.parse(data);

// //     allNotes.push(newNote);

// //     fs.writeFile("./db/db.json", JSON.stringify(allNotes, null, 2), err => {
// //       if (err) throw err;
// //       res.send(db);
// //       console.log("Note created!")
// //     });
// //   });
// // });

// //   app.delete("/api/notes/:id", function(req, res){
// //     notesData = notesData.filter(note=> {
// //       if (note.id == req.params.id) {
// //         return false;
// //       }
// //       return true;
// //     })
// //     res.send(notesData);
// //   });
// // };
