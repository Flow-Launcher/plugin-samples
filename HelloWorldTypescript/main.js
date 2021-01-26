var _a = JSON.parse(process.argv[2]), method = _a.method, parameters = _a.parameters;
if (method === "query") {
    console.log({
        "result": [{
            "Title": "Hello World Typescript",
            "Subtitle": "Query: " + parameters,
            "IcoPath": "Images\\app.png"
        }]
    });
}
