# Control Panel: Next Gen O360 Create Dashboard & Looker/Power BI SDK Integration

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `Power BI-Client-React`
This library lets you embed Power BI report, dashboard, dashboard tile, report visual, or Q&A in your React application.

The install command: ```npm i powerbi-client-react``` can be used in the terminal.

[Tutorial of importing libraries and embedding report](https://www.youtube.com/watch?v=A5KFY5Jh1Uc)


### `React-Grid-Layout`

Pulls the [React-Grid-Layout](https://github.com/react-grid-layout/react-grid-layout#demos) to use as a component in having users create their own personalized dashboard. These dashboards/reports will depend on the current data visualizations available within Power BI.

The install command: ```npm i react-grid-layout```

### `Power BI Authentication`

### `Power BI: Create Dashboard`

Using the Power BI REST API, [create dashboard](https://docs.microsoft.com/en-us/rest/api/power-bi/dashboards/add-dashboard), the user will be able to make new dashboards within their own workspace on Power BI.

### `Create Visual`
Creating a visual will allow the user to decide what kind of out of the box data visualization they create. EX.) bar chart, donut chart, column chart, etc. More info about visuals [here](https://docs.microsoft.com/en-us/javascript/api/overview/powerbi/create-add-visual)
```if (!authoringPage) {
    console.log("Authoring page is undefined. Please run 'Create an authoring page' first.");
} else {
    // Creating new visual
    // For more information about report authoring, see https://go.microsoft.com/fwlink/?linkid=2153366
    try {
        await authoringPage.setActive();
        const response = await authoringPage.createVisual('clusteredColumnChart');
        window.lastCreatedVisual = response.visual;

        // Defining data fields
        const regionColumn = { column: 'Region', table: 'Geo', schema: 'http://powerbi.com/product/schema#column' };
        const totalUnitsMeasure = { measure: 'Total Units', table: 'SalesFact', schema: 'http://powerbi.com/product/schema#measure' };
        const totalVanArsdelUnitsMeasure = { measure: 'Total VanArsdel Units', table: 'SalesFact', schema: 'http://powerbi.com/product/schema#measure' };

        // Adding visual data fields
        lastCreatedVisual.addDataField('Category', regionColumn);
        lastCreatedVisual.addDataField('Y', totalUnitsMeasure);
        lastCreatedVisual.addDataField('Y', totalVanArsdelUnitsMeasure);
    }
    catch (errors) {
        console.log(errors);
    }
}
```


### `Power BI: Get Report ID & Get Group IDs`

The Power BI REST APIs use Report IDs and Group IDs, their are two ways to find theses needed IDs.
#### `First Method`

 The IDs can be found in the URL of the published Power BI Dashboard/Report.
https://app.powerbi.com/groups/"GROUPID"/reports/"REPORTID"/ReportSection000000000000000000?redirectedFromSignup=1
#### `Second Method`
This call can be made to an existing report/dashboard created:
```
// Retrieve the report id.
let reportId = report.getId();

console.log("Report id: \"" + reportId + "\"");
```


### `Power BI: Get Reports`



### `Power BI: Get Reports in Group`
Using the Power BI REST API, [Get Reports in Group](https://docs.microsoft.com/en-us/rest/api/power-bi/reports/get-report-in-group), the user will be able to add the dashboards/report from their workspace on Power BI to the 0360 dashboard.

### `Edit Report`
