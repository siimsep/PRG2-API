import db from '../../db';
import Job from './interface';

const jobService = {
    getAllJobs: () => {
        const { jobList } = db;
        return jobList;
    },
    getAJob: (id: number) => {
        const job = db.jobList.find((element) => element.id === id);
        return job;
        },
    addAJob: (lat:number, lng:number, note:string) => {
        const id = db.jobList.length+1;
        db.jobList.push({
            id, 
            lat,
            lng,
            note,
            completion: false
        })
        return id;
    }
};

export default jobService;