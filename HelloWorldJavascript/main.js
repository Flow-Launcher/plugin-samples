const { method, parameters } = JSON.parse(process.argv.slice(2))

if (method === "query") {
  const result = [{
    "Title": "Hello World Javascript",
    "Subtitle": `Query: ${parameters}`,
    "IcoPath": "Images\\app.png"
  }]

  console.log({ result })
}
