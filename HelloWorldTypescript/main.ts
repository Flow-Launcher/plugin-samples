const { method, parameters } = JSON.parse(process.argv[2])

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

