import express, {Express} from 'express';
import usersController from './components/users/controller';
import jobController from './components/jobs/controller';
import swaggerUi from 'swagger-ui-express';
import openapi from "./openapi.json";
import cors from "cors";
import authController from './components/auth/authController';
import isLoggedIn from './components/auth/isLoggedInMiddleware';
import isAdmin from './components/auth/isAdminMiddleware';

const app: Express = express();
app.use(cors());
app.use(express.json())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapi));
/////////////////////////////////////////////////////
//  SOME MIDDLEWARE
var favicon = require("serve-favicon"); // Favicon middleware
var path = require('path')
const rateLimit = require("express-rate-limit"); // Middleware that limits the repeated API requests from the same IP address.
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))) // This is a favicon I use on all of my schoolwork.
/////////////////////////////////////////////////////
//  LOGIN
app.post("/login", authController.login);
app.post("/users", usersController.addUser);

app.use(isLoggedIn);
/////////////////////////////////////////////////////
//  USERS
app.get("/users", isAdmin, usersController.getAllUsers);
app.get("/users/:id", usersController.getUserbyId);
app.delete("/users/:id", usersController.deleteUser);
// JOBS
app.get("/jobs", jobController.getAllJobs);
app.get("/jobs/:id", jobController.getAJob);
app.post("/jobs", jobController.addAJob);
app.delete("/jobs/:id", jobController.deleteJob);
app.patch("/jobs/:id", jobController.updateJob);

export default app;