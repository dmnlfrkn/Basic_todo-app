import { useState } from 'react';
import Body from './body';

export default function Nav() {
    const [state, setstate] = useState("home");
    return (
        <div>
            <div className="logo" onClick={() => setstate("home")}>
                <img src="./icons/logo.png" alt="logo" />
                <p className="nav-p">Todo-App</p>
            </div>
            <div className="navbarr">
                <button className="login" onClick={() => setstate("login")}>Login</button>
                <button onClick={() => setstate("contact")}>Contact</button>
                <button className="dropbtn-download" onClick={() => setstate("download")} >Download</button>
                <button onClick={() => setstate("home")}>Home</button>
            </div>
            <Body page={state} />
        </div>
    )
}
