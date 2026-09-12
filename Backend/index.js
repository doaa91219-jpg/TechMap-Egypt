const express = require("express");
const { myMiddleware } = require("./middlewares/looged.middleware.js");
const { connectDB } = require("./config/db.config.js");
const { PORT } = require("./config/env.config.js");

const app = express();

app.use(express.json()); //middleware
app.use(myMiddleware);
/////////////////////
const { userRouter } = require("./routes/user.route.js");
// const { notificationRouter } = require("./routes/notification.route.js");
//Eman modules-companies&skills routes
const { companyRouter } = require("./routes/companies.route.js");
const { skillRouter } = require("./routes/skills.route.js");


/////////////////////

//*--ROUTES--(path)//endpoints
app.use("/users", userRouter);
// app.use("/notification", notificationRouter);
//Eman Endpoints
app.use("/companies", companyRouter);
app.use("/skills", skillRouter);








//*--CONNECT DB--
connectDB();

app.listen(PORT, () => {
  //logic
  console.log(`my app listening on port 5000 successfully`);
})
