import React from 'react'

import * as text from "./text.json";

function Home() {
    return (
        <div>
            <div className="box">
                <div className="def-size div1">
                    <div className="div-text div1-text">
                        <h3>{text.text1.col1}</h3>
                        <p>{text.text1.col2}<br />
                            {text.text1.col3}<br />
                            {text.text1.col4}
                        </p>
                        <h4>Crate / Manage / Delete</h4>
                    </div>
                    <img src="icons/index-first-div.jpg" alt="index-first-div" className="first-img" />
                </div>
                <div className="def-size div2">
                    <div className="div-text div2-text">
                        <h3>{text.text2.col1}</h3>
                        <p>{text.text2.col2}<br />
                            {text.text2.col3}<br />
                            {text.text2.col4}<br />
                            {text.text2.col5}<br />
                            {text.text2.col6}
                        </p>
                        <button type="button" onClick={()=>alert("download")}>Download</button>
                    </div>
                    <img src="icons/index-second-div.jpg" alt="index-second-div" className="second-img" />
                </div>
                <div className="def-size div3">
                    <div className="div-text div3-text">
                        <h3>{text.text3.col1}</h3>
                        <p>{text.text3.col2}<br />
                            {text.text3.col3}<br />
                            {text.text3.col4}<br />
                            {text.text3.col5}<br />
                            {text.text3.col6}
                        </p>
                        <button type="button" onClick={()=>alert("login")}>LOGIN</button>
                    </div>
                    <img src="icons/index-third-div.jpg" alt="index-first-div" className="third-img" />
                </div>
            </div>
        </div>
    )
}

export default Home;
