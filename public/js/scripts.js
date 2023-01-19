/*const getProjects = () => {
    $.get('/api/projects',(response) => {
        if(response.statusCode==200){
            addCards(response.data);
        }
    })
}*/

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

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#hostFormSubmit').click(()=>{
        hostFormSubmit();
    })
    //getProjects();
    $('.modal').modal();
  });
       