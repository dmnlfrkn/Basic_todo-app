import React from 'react'
import Home from './home';
import Download from '../other/download';
import Login from '../other/login';
import Contact from '../other/contact';

function Body(props) {
    return (
        <div>
            { props.page==="home"?<Home/>:props.page==="download"?<Download/>:props.page==="contact"?<Contact/>:props.page==="login"?<Login/>:<Home/>
            }
        </div>
    )
}
export default  Body;