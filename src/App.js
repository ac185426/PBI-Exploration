import React from "react";
import "./App.css";
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

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
    <div>
		<div>
			<h2> Power BI Report</h2>
      		<PowerBIEmbed
	    		embedConfig = {{
		  			type: 'report',   // Supported types: report, dashboard, tile, visual and qna
					//Group ID: e86aa8ce-18f2-4fba-bb98-4bb45fdab66e
		  			id: '4d696ece-5cb7-4250-9be4-ce160931b242',
		  			embedUrl: "https://app.powerbi.com/reportEmbed?reportId=4d696ece-5cb7-4250-9be4-ce160931b242&groupId=e86aa8ce-18f2-4fba-bb98-4bb45fdab66e&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtRi1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwiY2VydGlmaWVkVGVsZW1ldHJ5RW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",
					
					//Power BI dashboard -> inspector -> console -> "copy(powerBIAccessToken)" -> enter
		  			accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYWU0ZGYxZjctNjExZS00NDRmLTg5N2UtZjk2NGUxMjA1MTcxLyIsImlhdCI6MTYzMTE5NjE4NCwibmJmIjoxNjMxMTk2MTg0LCJleHAiOjE2MzEyMDAwODQsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFKVTE3S2JJYXFmWlc4eGcydDlQQ0F1MkhkZVF2dlk5cHA4TFJid1MzMGk3UXlzd2MrUU5CcFhlL1FScjREM0xMIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiQ2FzaCIsImdpdmVuX25hbWUiOiJBbGV4IiwiaXBhZGRyIjoiMTY1LjIyNS41Ny4xNjkiLCJuYW1lIjoiQ2FzaCwgQWxleCIsIm9pZCI6IjBlNTQ3OTg2LTUwMzgtNDhlMC1hNjgxLTkzYTc1NmEyYWNiZCIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS02MDY3NDcxNDUtMTc3MDAyNzM3Mi02ODIwMDMzMzAtMTU5MTMzNCIsInB1aWQiOiIxMDAzMjAwMTUxNjIyQzhFIiwicmgiOiIwLkFRUUE5X0ZOcmg1aFQwU0pmdmxrNFNCUmNROEJISWRoWHJGUGc2eVlZUXAta1JBRUFQUS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiI2dkhrMUxkYmZ1ejRlSzE0aXItOE5lczRiT1I2d0VVSk9xeXI4MFZTS1NVIiwidGlkIjoiYWU0ZGYxZjctNjExZS00NDRmLTg5N2UtZjk2NGUxMjA1MTcxIiwidW5pcXVlX25hbWUiOiJhYzE4NTQyNkBuY3IuY29tIiwidXBuIjoiYWMxODU0MjZAbmNyLmNvbSIsInV0aSI6ImpNOFNiNGJTTUVhQlVNbUk4bXNyQVEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.Th1EtqqeT1AZDRfeCYM1Yr0tmy_Tzvnk9cu1mKfcFzkjRSklBQNpW5krhhPWhBI0uBgYnkDWOSCiimYbTA1Ddn3STJ9bviSDTJSNJ_vGh4_XoYSudV0bkzSr-ej-kXh1jb6cGhlAJyYdXFvB-iHSXf4Tc4gM1VlNvS520GnkuouZ6QtuKEE2PEjeUEvkH0iI-Ab_3E1UMVRnhAn26V6x-t4o_k9Bvet0VO8IoCEWJgpIk7cCXXm1XKr7nb3H4tjty51IcBb3hA9_nHwSD7wa21PjmydUtI3_vhR897QZQTvYBV2-mMX-bzls7iaBKnzQGJUUPKOZnz5_fYoaBKacUQ',
		  			tokenType: models.TokenType.Aad, //azure access directory
		  			settings: {
						panes: {
							filters: {
								expanded: false,
					  			visible: false
							}
						},
					}
				}}

				eventHandlers = { 
					new Map([
						['loaded', function () {console.log('Report loaded');}],
						['rendered', function () {console.log('Report rendered');}],
						['error', function (event) {console.log(event.detail);}]
					])
				}
		
				cssClassName = { "powerBIContainer" }

				getEmbeddedComponent = { (embeddedReport) => {
					window.report = embeddedReport;
				}}
			/>
		</div>

		<div>

		<h2>Power BI dashboard</h2>
		<p></p>
			<PowerBIEmbed
	    		embedConfig = {{
		  			type: 'dashboard',   // Supported types: report, dashboard, tile, visual and qna
					//dashboardID
		  			id: '87610360-83e4-4852-8f0a-bb1836080ae8',
		  			embedUrl: "https://app.powerbi.com/dashboardEmbed?dashboardId=87610360-83e4-4852-8f0a-bb1836080ae8&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtRi1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6ZmFsc2V9fQ%3d%3d",
					
					//Power BI dashboard -> inspector -> console -> "copy(powerBIAccessToken)" -> enter
		  			accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYWU0ZGYxZjctNjExZS00NDRmLTg5N2UtZjk2NGUxMjA1MTcxLyIsImlhdCI6MTYzMTE5NjE4NCwibmJmIjoxNjMxMTk2MTg0LCJleHAiOjE2MzEyMDAwODQsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFKVTE3S2JJYXFmWlc4eGcydDlQQ0F1MkhkZVF2dlk5cHA4TFJid1MzMGk3UXlzd2MrUU5CcFhlL1FScjREM0xMIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiQ2FzaCIsImdpdmVuX25hbWUiOiJBbGV4IiwiaXBhZGRyIjoiMTY1LjIyNS41Ny4xNjkiLCJuYW1lIjoiQ2FzaCwgQWxleCIsIm9pZCI6IjBlNTQ3OTg2LTUwMzgtNDhlMC1hNjgxLTkzYTc1NmEyYWNiZCIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS02MDY3NDcxNDUtMTc3MDAyNzM3Mi02ODIwMDMzMzAtMTU5MTMzNCIsInB1aWQiOiIxMDAzMjAwMTUxNjIyQzhFIiwicmgiOiIwLkFRUUE5X0ZOcmg1aFQwU0pmdmxrNFNCUmNROEJISWRoWHJGUGc2eVlZUXAta1JBRUFQUS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiI2dkhrMUxkYmZ1ejRlSzE0aXItOE5lczRiT1I2d0VVSk9xeXI4MFZTS1NVIiwidGlkIjoiYWU0ZGYxZjctNjExZS00NDRmLTg5N2UtZjk2NGUxMjA1MTcxIiwidW5pcXVlX25hbWUiOiJhYzE4NTQyNkBuY3IuY29tIiwidXBuIjoiYWMxODU0MjZAbmNyLmNvbSIsInV0aSI6ImpNOFNiNGJTTUVhQlVNbUk4bXNyQVEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.Th1EtqqeT1AZDRfeCYM1Yr0tmy_Tzvnk9cu1mKfcFzkjRSklBQNpW5krhhPWhBI0uBgYnkDWOSCiimYbTA1Ddn3STJ9bviSDTJSNJ_vGh4_XoYSudV0bkzSr-ej-kXh1jb6cGhlAJyYdXFvB-iHSXf4Tc4gM1VlNvS520GnkuouZ6QtuKEE2PEjeUEvkH0iI-Ab_3E1UMVRnhAn26V6x-t4o_k9Bvet0VO8IoCEWJgpIk7cCXXm1XKr7nb3H4tjty51IcBb3hA9_nHwSD7wa21PjmydUtI3_vhR897QZQTvYBV2-mMX-bzls7iaBKnzQGJUUPKOZnz5_fYoaBKacUQ',
		  			tokenType: models.TokenType.Aad, //azure access directory
		  			settings: {
						panes: {
							filters: {
								expanded: false,
					  			visible: false
							}
						},
					}
				}}

				eventHandlers = { 
					new Map([
						['loaded', function () {console.log('Report loaded');}],
						['rendered', function () {console.log('Report rendered');}],
						['error', function (event) {console.log(event.detail);}]
					])
				}
		
				cssClassName = { "powerBIContainer" }

				getEmbeddedComponent = { (embeddedReport) => {
					window.report = embeddedReport;
				}}
			/>

		</div>
	</div>
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
      <Header name="Next Gen O360"/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;