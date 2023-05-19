$(document).ready(onReady);

function onReady() {
    getTasks();
    $('#submit-button').on('click', postTasks);
    $('#tasksTableBody').on('click', '.delete-button', deleteTask);
    $('#tasksTableBody').on('click', '.complete-button', completeTask);
};

function getTasks() {
    $("#tasksTableBody").empty();
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then(function (response) {
        console.log("GET /tasks response", response);
        for (let i = 0; i < response.length; i++) {
            if (response[i].status === true){
            $('#tasksTableBody').append(`
                <tr data-id=${response[i].id}>
                    <td>${response[i].description}</td>
                    <td>${response[i].location}</td>
                    <td>✅</td>
                    <td><button class='delete-button'>Delete</button></td>
                </tr>
            `);
            }  
            else {
            $('#tasksTableBody').append(`
                <tr data-id=${response[i].id}>
                    <td>${response[i].description}</td>
                    <td>${response[i].location}</td>
                    <td><button class='complete-button'>Complete?</button></td>
                    <td><button class='delete-button'>Delete</button></td>
                </tr>
            `);  
             };      
        };
    });
};

function postTasks() {
    let payloadObject = {
        description: $('#task').val(),
        location: $('#location').val(),
    }
    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: payloadObject
    }).then( function (response) {
        $('#task').val(''),
        $('#location').val(''),
        getTasks();
    });
}

function deleteTask() {
    // data ('id') because our tr has a 'data-id' attribute
    // 'id' is whatever variable you choose ('data-id' matches 'id')
        const idToDelete = $(this).closest('tr').data('id');
    
        $.ajax({
            type: 'DELETE',
            url: `/tasks/${idToDelete}`
        }).then(function(response) {
            getTasks();
        }).catch(function(error) {
            console.log('error with deleting task', error);
        })
    };

function completeTask(event) {
    event.preventDefault();
    console.log('Complete button clicked!');
    let idToUpdate = $(this).closest('tr').data('id');
    $(this).parent().parent().css("background-color", "green");
    $.ajax({
        type: 'PUT',
        url: `/tasks/${idToUpdate}`,
    }).then(function(response) {
        getTasks();
        console.log(response);
    }).catch(function(error) {
        console.log('error with completing task', error);
    })
};

// function renderToDom() {
//     for (let i = 0; i < response.length; i++) {
//         $('#tasksTableBody').append(`
//             <tr data-id=${response[i].id}>
//                 <td>${response[i].task}</td>
//                 <td>${response[i].location}</td>
//                 <td><button class='complete-button'>Complete</button></td>
//                 <td><button class='delete-button'>Delete</button></td>
//             </tr>
//         `);
//     };
// };