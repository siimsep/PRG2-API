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
    },
    deleteJob: (id:number) => {
        const index = db.jobList.findIndex((element) => element.id === id);
        db.jobList.splice(index, 1);
        return id;
    },
    updateJob: (data: {
        id: number;
        lat?: number;
        lng?: number;
        note?: string;
        completion?: boolean;
      }) => {
        const { id, lat, lng, note, completion } = data;
        const index = db.jobList.findIndex((element) => element.id === id);
        if (lat) {
          db.jobList[index].lat = lat;
        }
        if (lng) {
          db.jobList[index].lng = lng;
        }
        if (note) {
          db.jobList[index].note = note;
        }
        if (completion) {
          db.jobList[index].completion = completion;
        }
        return id;
      },
};

export default jobService;