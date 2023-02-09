var express = require("express")
var router = express.Router();

let client = require("../dbConnect");
let projectCollection;
let controller = require("../controller");

/*router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
  });*/

router.get('/',(req,res) => {
    controller.projectController.retrieveProjects(req,res)
    //alert(req.params.user);
    
    /*getProjects((err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
            alert(err);
        }
        else {
            // alert(result);
            res.json({statusCode: 200, message:"Success", data: result})
        }
    })*/
  })
  

  
router.post('/',(req,res) => {
    controller.projectController.createProjects(req,res)
    /*console.log("New Project added", req.body)
    var newProject = req.body;
    insertProjects(newProject,(err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Project Successfully added", data: result})
        }
    })*/
  })
  

module.exports = router;