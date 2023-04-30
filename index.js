const express = require("express")
const app = express()
const port = 4258

app.get("/", (req, res) => {
    res.send("yoo")
})

app.get("/about", (req, res) => {
    res.send("abt")
})

app.listen(port, () => {
    console.log(`port ${port}`)
})
