
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
        password: "Juurikas",
        role: "Admin", }],
  };

export default db;