import express from "express";
import * as url from "url";
import * as path from "path";
import bodyParser from "body-parser";
import env from "dotenv";
import Admin from "./router/Admin.js";
import Auth from "./router/Auth.js";
import session from "express-session";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("combined"));

var dirname = url.fileURLToPath(new URL("./", import.meta.url));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

env.config();
app.use(
  session({
    secret: "Gym Management Project",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(express.static(path.join(dirname, "public")));

app.use("/admin", Admin);
app.use("/gym", Auth);

app.listen(process.env.PORT);
console.log("server created successfully on http://localhost:3010");
