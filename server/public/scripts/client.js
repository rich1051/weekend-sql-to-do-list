$(document).ready(onReady);

function onReady() {
    getSongs();
    $('#submit-button').on('click', postTasks);
    $('#tasksTableBody').on('click', '.delete-button', deleteTask);
    $('#tasksTableBody').on('click', 'complete-button', upvoteSong);
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
