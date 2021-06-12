let task_count = 1;
let project_count = 2;
let projects = [];

  $.getJSON("datas.json", function (data) {
      for (let i = 0; i < 3; i++) {
        projects.push({
          project_name: data[i].project_name,
          task_name: data[i].task_name,
          task_description: data[i].task_description,
          task_id:"task"+i,
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

  let name = this_p.children[0].innerHTML;
  if (document.getElementById("project-name") != null) {
    let pName = document.getElementById("project-name");
    pName.innerHTML = "<p id='ppp'>" + name + "</p>";
  }
  document.getElementById("tasks").innerHTML = "";
  showTasks(this_p);
}

function showTasks(params) {
  document.getElementById("task-panel").style.display = "block ";
  let task = document.getElementById("tasks");
  let result=[];
  let objectLength = Object.keys(projects).length;
  for (let i = 0; i < objectLength; i++) {
      if(projects[i].id==params.id && projects[i].task_name!="" ){
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
    let p_name =document.getElementById("ppp").innerHTML;
    projects.push({
      project_name: p_name,
      task_name: name,
      task_description: description,
      task_id:"task"+task_count,
      id: "project" + project_count
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
  /*    tasl name part  */
  var default_pName = document.getElementById(this_t.parentElement.id);
  var txt;
  var edit = prompt("Please enter new projcet name:", default_pName.children[0].innerHTML);
  if (edit == null || edit == "") {
    txt = default_pName.children[0].innerHTML;
  } else {
    txt = edit;
  }
  default_pName.children[0].innerHTML = txt;

  /*    description part  */
  var dsc;
  var edit = prompt("Please enter new projcet name:", default_pName.children[1].innerHTML);
  if (edit == null || edit == "") {
    dsc = default_pName.children[0].innerHTML;
  } else {
    dsc = edit;
  }
  default_pName.children[1].innerHTML = dsc;
}
function editProject(this_p) {

  var default_pName = document.getElementById(this_p.parentElement.id);
  var txt;
  var edit = prompt("Please enter new projcet name:", default_pName.children[0].innerHTML);
  if (edit == null || edit == "") {
    txt = default_pName.children[0].innerHTML;
  } else {
    txt = edit;
  }
  default_pName.children[0].innerHTML = txt;
}

function deleteTask(params) {
  params.parentElement.remove();
}
function deleteProject(params) {

  

  let task =document.getElementById("tasks");

  for(var i=0;i<task.children.length;i++){
    var index = projects.findIndex(function (o) {
      return o.id === params.parentElement.id;
    });
    if (index !== -1) projects.splice(index, 1);
    params.parentElement.remove();
  }
  document.getElementById("task-panel").style.display = "none ";
}






