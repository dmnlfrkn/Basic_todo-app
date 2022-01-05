import React from 'react'

export default function login() {
    return (
        <div>
            <div class="box">
                <div class="sidenav">
                    <div class="login-main-text">
                        <h2>Todo App</h2>
                        <p>
                            Just your email, you can sing in and start to use Todo-App. If you
                            have not account yet visit Login page And write your email and
                            password, it finished You can use Todo-App web.
                        </p>
                    </div>
                </div>
                <div class="main">
                    <div class="login-div">
                        <div class="login-form">
                            <form id="myform" action="homepage.html">
                                <div class="form-group">
                                    <label>User Name</label>
                                    <input type="text" id="username" class="form-control" placeholder="admin" required />
                                </div>
                                <div class="form-group ">
                                    <label>Password</label>
                                    <input type="password" id="password" class="form-control" placeholder="1234" required />
                                </div>

                                <input type="button" id="submit-buton" class="dropbtn btn btn-success btn-ladda" data-style="expand-right"
                                    value="Login" />
                            </form>
                        </div>
                        <div id="loader-div">
                            <img src="icons/loading-buffering.gif" alt='bos' class="loader" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
