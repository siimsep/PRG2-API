import { Request, Response } from 'express';
import responseCodes from '../general/responseCodes'
import jobService from './service';

const jobController = {
   getAllJobs: (req: Request, res: Response) => {
        const jobList = jobService.getAllJobs();
        return res.status(responseCodes.ok).json({
          jobList,
        });
      },
    getAJob: (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id, 10);
        if (!id) {
          return res.status(responseCodes.badRequest).json({
            error: "No valid id provided",
          });
        }
        const job = jobService.getAJob(id);
        if (!job) {
          return res.status(responseCodes.badRequest).json({
            error: `No job found with id: ${id}`,
          });
        }
        return res.status(responseCodes.ok).json({
          job,
        });
      },
      addAJob: (req: Request, res: Response) => {
        const { lat, lng, note } = req.body;
        if (!lat) {
          return res.status(responseCodes.badRequest).json({
            error: "Error in coordinates: no latitude",
          });
        }
        if (!lng) {
          return res.status(responseCodes.badRequest).json({
            error: "Error in coordinates: no longitude",
          });
        }
        if (!note) {
          return res.status(responseCodes.badRequest).json({
            error: "Error, please add note",
          });
        }
        const id = jobService.addAJob(lat,lng,note)
        return res.status(responseCodes.created).json({
          message: `Great success! New job added with ID: `+id,
        });
      },
      deleteJob: (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id, 10);
        if (!id) {
          return res.status(responseCodes.badRequest).json({
            error: "No valid id provided",
          });
        }
        const job = jobService.getAJob(id);
        if (!job) {
          return res.status(responseCodes.badRequest).json({
            message: `Job not found with id: ${id}`,
          });
        }
        jobService.deleteJob(id);
        return res.status(responseCodes.noContent).json({
          message: `Job ${id} deleted`
        });
        
      },
      updateJob: (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id, 10);
        const { lat, lng, note, completion } = req.body;
        if (!id) {
          return res.status(responseCodes.badRequest).json({
            error: "No valid id provided",
          });
        }
        if (!lat && !lng && !note && !completion) {
          return res.status(responseCodes.badRequest).json({
            error: "Nothing to update",
          });
        }
        const job = jobService.getAJob(id);
        if (!job) {
          return res.status(responseCodes.badRequest).json({
            error: `No job found with id: ${id}`,
          });
        }
        jobService.updateJob({id, lat, lng, note, completion})
        return res.status(responseCodes.ok).json({
          message: `Job number: ${id} updated`,
        });
      }
}

export default jobController;