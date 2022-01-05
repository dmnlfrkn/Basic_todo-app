import React from 'react'

export default function homepage() {
    return (
        <div>
            <div class="body-container">
        <div class="hmbrgr"><a href="javascript:void(0);"  onClick={()=>create_prjct_mobile()}>+</a></div>
        <div class="project-panel" id="project-panel">
            <div class="pp-container">
                <div class="create-buton-div">
                    <button class="create-btn project-btn" onClick={()=>showCreate()}>Create Project</button>
                    <div id="prjct-crt-frm" class="projcet-create-form">
                        <form>
                            <input type="text" class="name" id="prjct-name" placeholder="Project Name..."/><br/>
                            <div class="prjct-btns-div">
                                <input id="closeCreate" type="button" value="Cancel" onClick={()=>closeCrt()}/>
                                <input type="button" value="Create" onClick={()=>addProject()}/>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="projects" class="projects">
                </div>
            </div>
            <p class="ppb">Leftover From The Day</p>
            <div id="progressbar" class="progressbar"></div>
        </div>
        <div class="task-panel" id="task-panel">
            <div class="task-box" id="task-box">
                <div class="create-task-div" id="create-task-div">
                    <div class="project-name" id="project-name">
                    </div>
                    <div class="create-task-btn-div">
                        <button class="create-btn task-btn" onclick="showTask()">Create Task</button>
                        <div class="task-create-form" id="task-create-form">
                            <div class="task-create-box">
                                <form>
                                    <label class="label" for="name">Task Name:</label>
                                    <input type="text" class="name" id="task-name" required/><br/>
                                    <label class="label" for="description">Description:</label><br/>
                                    <textarea type="text" class="description" id="description" required></textarea><br/>
                                    <div id="task-btns-div" class="task-btns-div">
                                        <input type="button" value="Cancel" onClick={()=>closeTask()}/>
                                        <input type="button" value="Create" onClick={()=>addTask()}/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tasks" id="tasks">
                </div>
            </div>
            
        </div>
    </div>
        </div>
    )
}
