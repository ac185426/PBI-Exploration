import React from "react";
import "./App.css";
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import MyGrid from './components/MyGrid'

//How to: https://www.google.com/search?q=how+to+embed+a+dashboard+from+Power+BI+in+react&oq=how+to+embed+a+dashboard+from+Power+BI+in+react&aqs=chrome..69i57j33i22i29i30.12619j0j7&sourceid=chrome&ie=UTF-8#kpvalbx=_VMUvYemdEO3I_QaMj5noBA87
//Power BI Install: https://www.npmjs.com/package/powerbi-client-react
//Power BI Rest APIs: https://docs.microsoft.com/en-us/rest/api/power-bi/reports/get-report-in-group#code-try-0

//Report ID and Group ID are located in URL of Power BI. Need a way to automatically find report ID

function Header(props) {
	return (
		<header>
			<h1>{props.name}</h1>
		</header>
	);
}

function Main() {
	return (
		<MyGrid></MyGrid>
	);

}

function Footer() {
	return (
		<footer>

		</footer>
	);
}



function App() {
	return (
		<div className="App">
			<Header name="Next Gen O360" />
			<Main />
			<Footer />
		</div>
	);
}

export default App;