import { createUserDto } from 'src/users/dtos/createuser.dto';
import { UsersService } from 'src/users/services/users/users.service';
import { updateuserdto } from 'src/users/dtos/updateuser.dto';
export declare class UsersController {
    private userservice;
    constructor(userservice: UsersService);
    getusers(): unknown;
    createuser(createuserdto: createUserDto): unknown;
    updateuser(id: number, updateuserdto: updateuserdto): string;
    deleteuser(id: number): any;
}
