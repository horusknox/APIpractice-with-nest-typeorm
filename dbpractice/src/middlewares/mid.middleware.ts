import { NestMiddleware } from "@nestjs/common";
import { Roles } from "src/roles/roles.decorator";

export class mid implements NestMiddleware{
    use(req: Request, res: Response, next: (error?: any) => void) {
        console.log(req)   
        next();     
    }
}