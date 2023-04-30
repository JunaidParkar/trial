const express = require("express")
const app = express()
const port = 4258

app.post("/", (req, res) => {
    res.send("yoo")
})

app.post("/about", (req, res) => {
    res.send("abt")
})

app.listen(port, () => {
    console.log(`port ${port}`)
})
