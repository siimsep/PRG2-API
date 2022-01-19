import express, { Express } from 'express';
import usersController from './components/users/controller';

const app: Express = express();
app.use(express.json())
const port: number = 3000;
import cors from "cors";
import jobController from './components/jobs/controller';

app.use(cors());
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
  // eslint-disable-next-line no-console
  console.log(`App is running on port ${port}`);
});