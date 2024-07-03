import React from "react"
import ReactDOM from "react-dom/client"

// const h1 = React.createElement("h1",{id:"h1"},"Hello Tarun Welcome")

const h1 = <h1 id="h1">Hello tarun from jsx</h1> // This is jsx syntax to write code in html like syntsx

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(h1)
