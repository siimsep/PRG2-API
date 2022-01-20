import { Request, Response, NextFunction } from 'express';
import responseCodes from '../general/responseCodes'

const isAdmin = async(req: Request, res: Response, next: NextFunction) => {
  const { user} = res.locals;
  if (user.role !== 'Admin') {
    return res.status(responseCodes.notAuthorized).json({
      error: 'Need to be an admin for that'
    })
  }
  return next();
};

export default isAdmin;