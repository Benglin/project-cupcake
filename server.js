const path = require("path");
const express = require("express");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

const app = express();
const port = 3210;

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

app.use(connectLivereload());
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
    console.log(`Game server: http://localhost:${port}`);
});
