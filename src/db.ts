import {User} from './components/users/interfaces';
import {Job} from './components/jobs/interface';

/* interface Db {
  users: User[];
  jobList: Job[];
} */

const db = {
    jobList: [
      {
        id: 1,
        lat: 58.91741, // latitude
        lng: 23.698196, // longitude
        note: "On these coordinates is an issue to handle", //
        completion: false, // user can change status of completion if job is done
      },
    ],
    users: [
      { 
        id: 1,
        firstName: "Salim",
        lastName: "Shady",
        email: "juku@juurikas.ee",
        password: "$2b$10$DgO4i4EwpiQHW6Rd5ww6BeVIsDTj56J.6TQ9lnqBohswLvqAl1aCK",
        role: "Admin",
},
        { 
          id: 2,
          firstName: "Sig",
          lastName: "Sauer",
          email: "kaalikas@porgand.ee",
          password: "$2b$10$78lt0Bh8WpDSgGHjpK1O/eAONiDX8lA8PzTfRkga91MxBhZkvDASC",
          role: "User",
 },]
  };

export default db;