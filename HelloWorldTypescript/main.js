var _a = JSON.parse(process.argv[2]), method = _a.method, parameters = _a.parameters;

if (method === "query") {
    console.log(JSON.stringify(
		{
			"result": [{
				"Title": "Hello World Typescript",
				"Subtitle": "Showing your query parameters: " + parameters,
				"IcoPath": "Images\\app.png"
			}]
		}
	));
}

