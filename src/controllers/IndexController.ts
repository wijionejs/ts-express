import {Response, Request, NextFunction} from "express";
import {get, controller, use} from "./decorators";

function requiresAuth(req: Request, res: Response, next: NextFunction) {
    if(req.session && req.session.isLoggedIn) {
        next();
    } else {
        res.status(403).send('Access denied!');
    }
}

@controller('')
class IndexController {
    @get('/')
    getIndex(req: Request, res: Response) {
        if (req.session && req.session.isLoggedIn) {
            res.send(`
                <div>
                <p>You are logged in</p>
                <a href="/logout">Logout</a>
</div>
            `)
        } else {
            res.send(`
                <div>
                <p>You are not logged in</p>
                <a href="/login">Login</a>
</div>
            `)

        }
    }

    @get('/secret')
    @use(requiresAuth)
    getSecret(req: Request, res: Response) {
        res.send('You are on secret page');
    }
}
