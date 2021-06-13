let task_count = 3;
let project_count = 2;
let projects = [];

$.getJSON("datas.json", function (data) {
  for (let i = 0; i < 3; i++) {
    projects.push({
      project_name: data[i].project_name,
      task_name: data[i].task_name,
      task_description: data[i].task_description,
      task_id: "task" + i,
      id: "project" + 1
    });
  }
});


function showCreate() {
  document.getElementById("prjct-crt-frm").style.display = "block";
}
function closeCrt() {
  document.getElementById("prjct-crt-frm").style.display = "none";
}

function showTask() {
  document.getElementById("task-create-form").style.display = "block";
}
function closeTask() {
  document.getElementById("task-create-form").style.display = "none";
}
function create_prjct_mobile() {

  let p_panel = document.getElementById("project-panel");
  let t_panel = document.getElementById("task-panel");
  if (p_panel.style.display === "block") {
    p_panel.style.display = "none";
    t_panel.style.display = "block";
  } else {
    t_panel.style.display = "none";
    p_panel.style.width = "100%";
    p_panel.style.display = "block";
  }

}

function addProject() {
  let name = document.getElementById("prjct-name").value;

  if (name == "") {
    alert("Please write a valid name!");
  } else {

    document.getElementById("prjct-crt-frm").style.display = "none";
    let project = document.getElementById("projects");
    projects.push({
      project_name: name,
      task_name: "Default Task",
      task_description: "Default Description",
      task_id: "task" + task_count,
      id: "project" + (project_count)
    });
    project.innerHTML +=
      "<div id='project" + project_count + "'class='project' onclick='selectProject(this)' ><p >" + name + "</p>" +
      "<button class='edit-btn' onclick='editProject(this)'>" + "Edit" + "</button>" +
      "<button class='delete-btn' id='jq_delete' onclick='deleteProject(this)'>" + "Delete" + "</button>" +
      "</div>";
    document.getElementById("prjct-name").value = "";
    project_count++;
  }

}

function selectProject(this_p) {
  
  let objectLength = Object.keys(projects).length;
  if (objectLength == 0) {
    document.getElementById("tasks").innerHTML = "";
    let pName = document.getElementById("project-name");
      pName.innerHTML = "<p id='ppp'></p>";
  }
  else {
    let name = this_p.children[0].innerHTML;
    if (document.getElementById("project-name") != null) {
      let pName = document.getElementById("project-name");
      pName.innerHTML = "<p id='ppp'>" + name + "</p>";
    }
    document.getElementById("tasks").innerHTML = "";
    showTasks(this_p);
  }

}

function showTasks(params) {
  var pName = document.getElementById("task-box");
  pName.style.display = "block";
  document.getElementById("task-panel").style.display = "block";
  let task = document.getElementById("tasks");

  let result = [];
  let objectLength = Object.keys(projects).length;
  for (let i = 0; i < objectLength; i++) {
    if (projects[i].id == params.id && projects[i].task_name != "") {
      result.push(projects[i]);
    }
  }

  for (let index = 0; index < result.length; index++) {
    task.innerHTML += "<div class='task' id='" + result[index].task_id + "'>" +
      "<h1>" + result[index].task_name + "</h1>" +
      "<p>" + result[index].task_description + "</p>" +
      "<button class='edit-btn' onclick='editTask(this)'>" + "Edit" + "</button>" +
      "<button class='delete-btn' onclick='deleteTask(this)'>" + "Delete" + "</button>" +
      "</div>";

  }
}

function addTask() {
  let name = document.getElementById("task-name").value;
  let description = document.getElementById("description").value;
  if (name == "" && description == "") {
    alert("Please write a valid  Task name and description!");
  } else {
    let p_name = document.getElementById("ppp").innerHTML;
    projects.push({
      project_name: p_name,
      task_name: name,
      task_description: description,
      task_id: "task" + task_count,
      id: "project" + (project_count - 1)
    });

    document.getElementById("task-create-form").style.display = "none";
    let task = document.getElementById("tasks");

    task.innerHTML += "<div class='task' id='" + "task" + task_count + "'>" +
      "<h1>" + name + "</h1>" +
      "<p>" + description + "</p>" +
      "<button class='edit-btn' onclick='editTask(this)'>" + "Edit" + "</button>" +
      "<button class='delete-btn' onclick='deleteTask(this)'>" + "Delete" + "</button>" +
      "</div>";

    document.getElementById("task-name").value = "";
    document.getElementById("description").value = "";

    task_count++;
  }
}
function editTask(this_t) {
  /*  Changing in HTML     */
  /*    tasl name part  */
  var default_pName = document.getElementById(this_t.parentElement.id);
  var txt;
  var edit_tn = prompt("Please enter new projcet name:", default_pName.children[0].innerHTML);
  if (edit_tn == null || edit_tn == "") {
    txt = default_pName.children[0].innerHTML;
  } else {
    txt = edit_tn;
  }
  default_pName.children[0].innerHTML = txt;

  /*    description part  */
  var dsc;
  var edit_dn = prompt("Please enter new projcet name:", default_pName.children[1].innerHTML);
  if (edit_dn == null || edit_dn == "") {
    dsc = default_pName.children[0].innerHTML;
  } else {
    dsc = edit_dn;
  }
  default_pName.children[1].innerHTML = dsc;
  //Changing in HTM end

  /*  Changing in js Object (projets)      */
  let objectLength = Object.keys(projects).length;
  for (let index = 0; index < objectLength; index++) {
    const isLargeNumber = (element) => element.task_id == this_t.parentElement.id;
    let tmp = projects.findIndex(isLargeNumber);
    projects[tmp].task_name = edit_tn;
    projects[tmp].task_description = edit_dn;
  }
  //Changing in js Object end


}

function editProject(this_p) {

  /*  Changing in HTML     */
  var default_pName = document.getElementById(this_p.parentElement.id);
  var txt;
  var edit = prompt("Please enter new projcet name:", default_pName.children[0].innerHTML);
  if (edit == null || edit == "") {
    txt = default_pName.children[0].innerHTML;
  } else {
    txt = edit;
  }
  default_pName.children[0].innerHTML = txt;
  //Changing in HTM end


  /*  Changing in js Object (projets)      */
  let objectLength = Object.keys(projects).length;
  for (let index = 0; index < objectLength; index++) {
    const obj_index = (element) => element.id == this_p.parentElement.id;
    let tmp = projects.findIndex(obj_index);
    if (tmp != -1) projects[tmp].project_name = edit;
  }
  //  Changing in js Object end
}

function deleteTask(params) {
  params.parentElement.remove();
  var index = projects.findIndex(function (o) {
    return o.task_id === params.parentElement.id;
  });
  if (index !== -1) projects.splice(index, 1);

}

function deleteProject(params) {
  let pName = document.getElementById("task-box");
  pName.style.display = "none !important ";
  let task = document.getElementById("tasks");

  for (var i = 0; i < task.children.length; i++) {
    var index = projects.findIndex(function (o) {
      return o.id === params.parentElement.id;
    });
    if (index !== -1) projects.splice(index, 1);

  }
  params.parentElement.remove();


}






