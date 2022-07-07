/**
 * @fileoverview This File is the entry point of the application
 * @author Marco Expósito Pérez
 */
//Css
import bt_css from "../node_modules/bootstrap/dist/css/bootstrap.css";
import css from "../css/base.css";
//Local classes
import InitialOptions from "./initialOptions.js";


window.onload = function () {
	let isLocalhost;
	if(window.location.hostname === "localhost"){
		isLocalhost = true;
		console.log("App running as localhost")
	}else{
		isLocalhost = false;
		console.log("App running in an external server: " + window.location.hostname)
	}

	new InitialOptions(isLocalhost);
}


