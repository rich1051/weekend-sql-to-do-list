$(document).ready(onReady);

function onReady() {
    getTasks();
    $('#submit-button').on('click', postTasks);
    // $('#tasksTableBody').on('click', '.delete-button', deleteTask);
    // $('#tasksTableBody').on('click', 'complete-button', upvoteSong);
};

function getTasks() {
    $("#tasksTableBody").empty();
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then(function (response) {
        console.log("GET /tasks response", response);
        renderToDom(response);
    });
};

function postTasks() {
    let payloadObject = {
        task: $('#task').val(),
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

function renderToDom() {
    for (let i = 0; i < response.length; i++) {
        $('#tasksTableBody').append(`
            <tr data-id=${response[i].id}>
                <td>${response[i].task}</td>
                <td>${response[i].location}</td>
                <td><button class='complete-button'>Complete</button></td>
                <td><button class='delete-button'>Delete</button></td>
            </tr>
        `);
    };
};