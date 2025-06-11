import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import App from "./App"

import "./app/globals.css"
import "./app/syntax.css"
// Load fonts
import "@fontsource-variable/inter"
import "@fontsource-variable/geist-mono"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)
