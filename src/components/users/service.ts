import db from '../../db';
//import User from './interfaces';  Pole interfaced nii lahti kirjutatud, et saaks k6iki typescripti v6lusid kasutada, aga v2hemalt sain l6puks sellest interface systeemist aru.

const usersService = {
    getAllUsers: () => {
        const {users} = db;
        return users;
    },
    getUserById: (id: number) => {
        const user = db.users.find((element) => element.id === id);
        return user;
    },
    addUser: (newUser: any)=>{
        const id = db.users.length + 1;
        db.users.push({
          id,
          ...newUser
          
        });
        return id;
    },
    deleteUser: (id:number)=> {
        const index = db.users.findIndex((element) => element.id === id);
        db.users.splice(index,1)
    }
};

export default usersService;