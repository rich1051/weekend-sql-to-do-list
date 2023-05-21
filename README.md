# Weekend SQL To-Do List 

## Description
The SQL To-Do List is my first project utilizing all of the tools within the full-stack. The to-do list can be added to via two input fields and a submit button at the top of the page. When the submit button is clicked, a chain reaction is triggered which begins communication (GET and POST) between the client and server-side files. Each task inputted adds a table row which is stored in a database using SQL. Rows can be deleted using the delete button, or tasks can be marked as "completed" using the complete button. When the complete button is clicked, a hidden boolean value stored in the SQL database changes its value to TRUE, which flags the table row. The user will see the complete button change to a check mark icon and the entire row will turn green. Because this flagging is done in the database, these changes remain even through a server reboot. 

Additional README details jcan be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
