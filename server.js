// server (built my Emily when she created the landing page)


//DB connections made by Rahul
var express = require("express");
const path = require("path");

var app = express();
var cors = require('cors')
var port = process.env.PORT || 8080;

const MongoClient = require('mongoDb').MongoClient;
//Database Connections
const uri = 'mongodb+srv://group4:group4321@greenlifestylescluster.bvsakmv.mongodb.net/?retryWrites=true&w=majority'
const client =  new MongoClient(uri,{ useNewUrlParser: true })

const createCollection = (collectionName) => {
  client.connect((err,db) => {
      projectCollection = client.db().collection(collectionName);
      if(!err) {
          console.log('MongoDB Connected')
      }
      else {
          console.log("DB Error: ", err);
          process.exit(1);
      }
  })
}




app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", function (req, res) {
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
}

//app.listen(port);
//console.log("Server started at http://localhost:" + port);

app.listen(port,()=>{
  console.log("Server started at http://localhost:" + port)
  createCollection("users")
})

