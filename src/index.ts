console.clear();
console.log(123);

import express from "express";
import { router } from "express-file-routing";

const app = express();
app.use("/", await router({ directory: __dirname + "/routes" }));

app.listen(process.env.PORT || 3000);
