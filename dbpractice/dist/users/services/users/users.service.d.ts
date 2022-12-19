import { User } from 'src/typeorm/entities/User';
import { Repository } from 'typeorm';
import { createUserParams } from 'src/utils/types';
import { updateuserdto } from 'src/users/dtos/updateuser.dto';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    fetchusers(): any;
    createuser(userdetails: createUserParams): unknown;
    updateuser(id: number, userupdatedetails: updateuserdto): any;
    deleteuser(id: number): any;
    userexists(userdetails: updateuserdto): unknown;
    useridexists(userid: number): unknown;
}
