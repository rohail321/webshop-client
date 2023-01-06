import React from "react"
import ReactDOM  from "react-dom"

it("renders without issues",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);})
