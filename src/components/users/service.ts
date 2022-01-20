import db from '../../db';
import hashService from '../general/services/hashService';
import { NewUser, User } from './interfaces';
import pool from '../../database'

const usersService = {
    getAllUsers: async() => {
        const [users]:any = await pool.query('SELECT * FROM users');
        

        //const {users} = db;
        return users;
    },
    getUserById: async (id: number) => {
        const [user] = await pool.query(`SELECT * FROM users WHERE id = ?`, [id])
        //const user = db.users.find((element) => element.id === id);
        return user;
    },
    getUserByEmail: async (email: string)/* : (User | undefined) */  => {
        const [user]:any = await pool.query('SELECT * FROM users WHERE email=?', [email]);
        //const user = db.users.find((element) => element.email === email);
        //console.log([user]);
        return user[0];
    },
    addUser: async(newUser: NewUser)=>{
        const id = db.users.length + 1;
        const hashedPassword = await hashService.hash(newUser.password)
        /* db.users.push({
          id,
          ...newUser,
          password: hashedPassword
          
        }); */
        return id;
    },
    deleteUser: (id:number)=> {
        const index = db.users.findIndex((element) => element.id === id);
        db.users.splice(index,1)
    }
};

export default usersService;