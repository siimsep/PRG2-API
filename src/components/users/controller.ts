import { Request, Response } from 'express';
import db from '../../db';
import responseCodes from '../general/responseCodes'
import usersService from './service';



const usersController = {
    getAllUsers :(req: Request, res: Response) => {
        const users = usersService.getAllUsers();
        return res.status(responseCodes.ok).json({
          users,
        });
      },
    getUserbyId: (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id, 10);
        if (!id) {
          return res.status(responseCodes.badRequest).json({
            error: "No valid id provided",
          });
        }
        const user = usersService.getUserById(id);
        if (!user) {
          return res.status(responseCodes.badRequest).json({
            error: `No user found with id: ${id}`,
          });
        }
        return res.status(responseCodes.ok).json({
          user,
        });
      },
    addUser: (req: Request, res: Response) => {
        const { firstName, lastName, email, password, role } = req.body;
        if (!firstName) {
          return res.status(responseCodes.badRequest).json({
            error: "First name is required",
          });
        }
        if (!lastName) {
          return res.status(responseCodes.badRequest).json({
            error: "Last name is required",
          });
        }
        const id = usersService.addUser(firstName, lastName, email, password, role)
        return res.status(responseCodes.created).json({
          id,
        });
      },
      deleteUser: (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id, 10);
        if (!id) {
          return res.status(responseCodes.badRequest).json({
            error: "No valid id provided",
          });
        }
        const user = usersService.getUserById(id);
        if (!user) {
          return res.status(responseCodes.badRequest).json({
            message: `User not found with id: ${id}`,
          });
        }
        usersService.deleteUser(id);
        return res.status(responseCodes.noContent).send();
      }
};

export default usersController;