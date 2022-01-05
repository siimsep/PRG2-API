import db from '../../db';
import User from './interfaces';

const usersService = {
    getAllUsers: () => {
        const {users} = db;
        return users;
    },
    getUserById: (id: number): User | undefined => {
        const user = db.users.find((element) => element.id === id);
        return user;
    },
    addUser: (firstName: string,
        lastName: string,
        email: string,
        password: string,
        role: "Admin" | "User")=>{
        const id = db.users.length + 1;
        db.users.push({
          id,
          firstName,
          lastName,
          email,
          password,
          role
        });
        return id;
    },
    deleteUser: (id:number)=> {
        const index = db.users.findIndex((element) => element.id === id);
        db.users.splice(index,1)
    }
};

export default usersService;