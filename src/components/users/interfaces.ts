/**
 * User interface
 */
 interface NewUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: 'Admin' | 'User';
  }
  interface User extends NewUser{
    id: number;
    dateCreated: Date;
    dateDeleted: Date | null;
    dateUpdated: Date;
  }


  
  export {NewUser, User};