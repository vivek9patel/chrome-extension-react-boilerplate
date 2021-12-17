import React from "react";
import { render } from "react-dom";
import './popup.css';

function Popup() {
    return (
        <div className="hello-world">
            hello world! <br /><br />
            made by <a className="link" onClick={() => {
                window.open("https://github.com/vivek9patel")
            }}> vivek9patel</a >
        </div >
    )
}

render(<Popup />, document.getElementById("popup-root"));