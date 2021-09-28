import {Response, Request, NextFunction} from "express";
import {controller, get, post, use} from "./decorators";

function logger(req: Request, res: Response, next: NextFunction): void {
    console.log('ROUTE ENTERED');
    next();
}

@controller('')
class LoginController {
    @get('/login')
    @use(logger)
    getLogin(req: Request, res: Response) {
        res.send(`
            <form method="post">
                <div>
                <label> Email
                <input type="text" name="email">
                </label>
        </div>
                <div>
                <label> Password
                <input type="password" name="password">
                </label>
        </div>
        <button>Login</button>
            </form>
       `);
    }

    @post('/login')
    postLogin(req: Request, res: Response) {
        const {email, password} = req.body;
        if (email === 'hi@hi.com' && password === '12345') {
            req.session = {
                isLoggedIn: true
            }
            res.redirect('/');
        } else {
            res.status(403).send('Invalid credentials');
        }
    }

    @get('/logout')
    getLogout(req: Request, res: Response) {
        req.session = null;
        res.redirect('/');
    }
}
