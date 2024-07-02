import React from "react"
import ReactDOM from "react-dom/client"
const child1 = React.createElement("h1",{id:"child1"},"Child1")
const child2 = React.createElement("h1",{id:"child2"},"Child2")
const parent = React.createElement("div",{id:"parent"},[child1,child2])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)