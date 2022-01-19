import express, { Request, Response, Express } from 'express';
import db from './db';
import usersController from './components/users/controller';
import responseCodes from './components/general/responseCodes';

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
/////////////////////////////////////////////////////

// DELETING JOBS
app.delete("/jobs/:id", (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  if (!id) {
    return res.status(responseCodes.badRequest).json({
      error: "No valid id provided",
    });
  }
  const index = db.jobList.findIndex((element) => element.id === id);
  if (index < 0) {
    return res.status(responseCodes.badRequest).json({
      message: `Job not found with id: ${id}`,
    });
  }
  db.jobList.splice(index, 1);
  return res.status(responseCodes.noContent).send();
});

// CHANGING JOB STATUS
app.patch("/jobs/:id", (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  const { completion } = req.body;
  if (!id) {
    return res.status(responseCodes.badRequest).json({
      error: "No valid id provided",
    });
  }
  if (!completion) {
    return res.status(responseCodes.badRequest).json({
      error: "Nothing to update",
    });
  }
  const index = db.jobList.findIndex((element) => element.id === id);
  if (index < 0) {
    return res.status(400).json({
      error: `No job found with id: ${id}`,
    });
  }
  if (completion) {
    db.jobList[index].completion = true;
  }

  return res.status(responseCodes.noContent).send();
});
/////////////////////////////////////////////////////


app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App is running on port ${port}`);
});