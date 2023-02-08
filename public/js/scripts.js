// connect to the socket​
let socket = io();
socket.on('number', (msg) => {
    console.log('Random number: ' + msg);
})

const hostLoginSubmit = () => {
    let hostLoginData = {};
    hostLoginData.email = $('#hostemail').val();
    hostLoginData.pw = $('#hostpw').val();
    console.log("Email and Password: ", hostLoginData);
    //alert("login");
    $.get('/api/projects/',(response) => {
         //alert("Inside get");
        if(response.statusCode==200){
            //alert("hostloginsubmit- success response callback");
            //alert(response.data[0].email);
            if(response.data.find(x=> x.email == hostLoginData.email) == undefined)
                alert("User not found!");
            else if(response.data.find(x=> x.pw == hostLoginData.pw) != undefined)
            {
                alert("Login Successful!");
                window.location = "/content.html";
               // window.location = "../index.html";
                //window.location = "/public/index.html";
            }  
            else
                alert("Password Incorrect!");
        }
    });
   
}

const volunteerLoginSubmit = () => {
    let volunteerLoginData = {};
    volunteerLoginData.email = $('#Volunteeremail').val();
    volunteerLoginData.pw = $('#Volunteerpw').val();
    console.log("Email and Password: ", volunteerLoginData);
    //alert("login");
    $.get('/api/projects/', (response) => {
        //alert("Inside get");
        if (response.statusCode == 200) {
            //alert("hostloginsubmit- success response callback");
            //alert(response.data[0].email);
            if (response.data.find(x => x.email == volunteerLoginData.email) == undefined)
                alert("User not found!");
            else if (response.data.find(x => x.pw == volunteerLoginData.pw) != undefined) {
                alert("Login Successful!");
                window.location = "/index.html";
                // window.location = "../index.html";
                //window.location = "/public/index.html";
            }
            else
                alert("Password Incorrect!");
        }
    });

}

const hostFormSubmit = () => {
    let hostFormData = {};
    hostFormData.name = $('#name').val();
    hostFormData.email = $('#email').val();
    hostFormData.pw = $('#pw').val();
    hostFormData.cnum = $('#cnum').val();
    hostFormData.address = $('#address').val();
    hostFormData.bio = $('#bio').val();
    console.log("Form Data Submitted: ", hostFormData);
    addProjectToApp(hostFormData);

}

const formSubmit2 = () => {
    let volData = {};
    volData.name = $('#Volunteername').val();
    volData.email = $('#Volunteeremail').val();
    volData.pw = $('#Volunteerpw').val();
    volData.dob = $('#Date of Birth').val();
    volData.cnum = $('#Volunteercnum').val();
    console.log("Form Data Submitted: ", volData);
    addProjectToApp(volData);

}



//ajax function...​
const addProjectToApp = (project) => {
    $.ajax({
        url: '/api/projects',
        data: project,
        type: 'POST',
        success: (result) => {
            alert(result.message);
            location.reload(); // it automatically reloads the page ​
        }
    })
}


  $(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#hostFormSubmit').click(() => {
        hostFormSubmit();
    });
    $('#hostLoginSubmit').click((e) => {
        e.preventDefault();
        hostLoginSubmit();
    });
    $('#formSubmit2').click(() => {
        formSubmit2();
    });
    $('#volunteerLoginSubmit').click((e) => {
        e.preventDefault();
        volunteerLoginSubmit();
    });
    //getProjects();
    $('.modal').modal();
});  