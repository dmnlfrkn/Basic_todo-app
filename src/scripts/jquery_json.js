


$(document).ready(function () {
    $(document).ready(function () {
        $.getJSON("datas.json", function (data) {
            
                $(".projects").append(
                    "<div id='project1' class='project'  onclick='selectProject(this)' ><p  >" + data[0].project_name + "</p>" +
                    "<button class='edit-btn' onclick='editProject(this)'>" + "Edit" + "</button>" +
                    "<button class='delete-btn' onclick='deleteProject(this)'>" + "Delete" + "</button>" +
                    "</div>"
                );

                for (let i = 0; i < 3; i++) {
                    $(".tasks").append(
                        "<div class='task' id='" + "task" + (i + 1) + "'>" +
                        "<h1>" + data[i].task_name + "</h1>" +
                        "<p>" + data[i].task_description + "</p>" +
                        "<button class='edit-btn' onclick='editTask(this)'>" + "Edit" + "</button>" +
                        "<button class='delete-btn' onclick='deleteTask(this)'>" + "Delete" + "</button>" +
                        "</div>"
                    );

                }
            

        });
    });

});
