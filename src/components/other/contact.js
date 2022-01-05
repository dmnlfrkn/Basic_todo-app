import React from 'react'
export default function Contact() {
    return (
        <div>
            <h3>Contact Form</h3>

            <div class="main">
                <div class="login-div">
                    <div class="login-form">
                        <form id="myform" action="homepage.html">
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" id="name" class="form-control" placeholder="User Name" required />
                            </div>
                            <div class="form-group ui-widget">
                                <label for="tags">Country </label>
                                <input id="tags" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label></label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write something"
                                    required></textarea>
                            </div>
                            <input type="button" id="submit-buton" class="dropbtn btn btn-success btn-ladda" data-style="expand-right"
                                value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
