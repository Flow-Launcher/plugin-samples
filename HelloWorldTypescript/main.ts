const { method, parameters } = JSON.parse(process.argv[2])

if (method === "query") {
  console.log({
    "result": [{
      "Title": "Hello World Typescript",
      "Subtitle": `Query: ${parameters}`,
      "IcoPath": "Images\\app.png"
    }]
  })
}
