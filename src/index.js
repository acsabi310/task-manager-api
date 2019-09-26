const app = require("./app");
const port = process.env.PORT;
// run server
app.listen(port, () => console.log("Server started at port " + port));
