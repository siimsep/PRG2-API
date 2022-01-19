import db from '../../db';
//import User from './interfaces';  Pole interfaced nii lahti kirjutatud, et saaks k6iki typescripti v6lusid kasutada, aga v2hemalt sain l6puks sellest interface systeemist aru.
import hashService from '../general/services/hashService';
import { NewUser, User } from './interfaces';

const usersService = {
    getAllUsers: () => {
        const {users} = db;
        return users;
    },
    getUserById: (id: number) => {
        const user = db.users.find((element) => element.id === id);
        return user;
    },
    getUserByEmail: (email: string)/* : (User | undefined) */  => {
        const user = db.users.find((element) => element.email === email);
        return user;
    },
    addUser: async(newUser: NewUser)=>{
        const id = db.users.length + 1;
        const hashedPassword = await hashService.hash(newUser.password)
        db.users.push({
          id,
          ...newUser,
          password: hashedPassword
          
        });
        return id;
    },
    deleteUser: (id:number)=> {
        const index = db.users.findIndex((element) => element.id === id);
        db.users.splice(index,1)
    }
};

export default usersService;