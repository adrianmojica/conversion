import React from "react";
import {Route, Switch} from "react-router-dom";
import EntryForm from "./entryForm";
import Results from "./Results";


function Routes(){
	return (
		<Switch>
			<Route exact path="/entry"><EntryForm/></Route>
			<Route exact path="/results"><Results /></Route>
		</Switch>
	);
}

export default Routes;