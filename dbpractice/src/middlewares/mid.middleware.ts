import { NestMiddleware } from "@nestjs/common";

export class mid implements NestMiddleware{
    use(req: Request, res: Response, next: (error?: any) => void) {
        console.log('req.headers');
        next();
        
    }
}