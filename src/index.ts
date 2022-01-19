import express, { Express } from 'express';
import usersController from './components/users/controller';
import jobController from './components/jobs/controller';
import swaggerUi from 'swagger-ui-express';
import openapi from "./openapi.json";
import cors from "cors";

const app: Express = express();
app.use(cors());
app.use(express.json())
const port: number = 3000;
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapi));
/////////////////////////////////////////////////////
//  USERS
app.get("/users", usersController.getAllUsers);
app.get("/users/:id", usersController.getUserbyId);
app.post("/users", usersController.addUser);
app.delete("/users/:id", usersController.deleteUser);
// JOBS
app.get("/jobs", jobController.getAllJobs);
app.get("/jobs/:id", jobController.getAJob);
app.post("/jobs", jobController.addAJob);
app.delete("/jobs/:id", jobController.deleteJob);
app.patch("/jobs/:id", jobController.updateJob);
/////////////////////////////////////////////////////
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});