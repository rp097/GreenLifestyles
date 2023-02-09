// server (built my Emily when she created the landing page)


//DB connections made by Rahul
var express = require("express");
const path = require("path");

var app = express();
var cors = require('cors')
let dbConnect = require("./dbConnect");
let projectRoutes = require("./routes/projectRoutes");
var port = process.env.PORT || 8080;
var http = require('http').createServer(app);
var io = require('socket.io')(http);


/*const createCollection = (collectionName) => {
 
}*/

//Socket Connections

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  /*setInterval(()=>{
    socket.emit('number', parseInt(Math.random()*10));
  }, 1000);*/
});


app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api/projects',projectRoutes)

app.get("/test", function (request, response) {
  var user_name = request.query.user_name;
  response.end("Hello " + user_name + "!");
});

/*app.get('/addTwoNumbers/:firstNumber/:secondNumber', function(req,res,next){
  var firstNumber = parseInt(req.params.firstNumber) 
  var secondNumber = parseInt(req.params.secondNumber)  
  var result = firstNumber + secondNumber || null  
  if(result == null) {  
    res.json({result: result, statusCode: 400}).status(400)  
  }  
  else { res.json({result: result, statusCode: 200}).status(200) }  
})*/

/*app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.get('/api/projects/',(req,res) => {
  //alert(req.params.user);
  
  getProjects((err,result) => {
      if(err) {
          res.json({statusCode: 400, message: err})
          alert(err);
      }
      else {
          // alert(result);
          res.json({statusCode: 200, message:"Success", data: result})
      }
  })
})

// get project...​
const getProjects = (callback) => {
  projectCollection.find({}).toArray(callback);
}

app.post('/api/projects',(req,res) => {
  console.log("New Project added", req.body)
  var newProject = req.body;
  insertProjects(newProject,(err,result) => {
      if(err) {
          res.json({statusCode: 400, message: err})
      }
      else {
          res.json({statusCode: 200, message:"Project Successfully added", data: result})
      }
  })
})

// insert project...​
const insertProjects = (project,callback) => {
  projectCollection.insert(project,callback);
}*/



http.listen(port,()=>{
  console.log("Server started at http://localhost:" + port)
  //createCollection("users")
})

