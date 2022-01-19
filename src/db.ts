
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
        password: "juurikas",
        role: "Admin", },
        { 
          id: 2,
          firstName: "Sig",
          lastName: "Sauer",
          email: "kaalikas@porgand.ee",
          password: "porgand",
          role: "User", }],
  };

export default db;