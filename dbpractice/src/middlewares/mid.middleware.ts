import { NestMiddleware } from "@nestjs/common";

export class mid implements NestMiddleware{
    use(req: Request, res: Response, next: (error?: any) => void) {
<<<<<<< HEAD
=======
        console.log(req.headers);
        console.log(res.headers);
>>>>>>> parent of 13488e5 (Fixed the code and completed guards)
        next();
        
    }
}