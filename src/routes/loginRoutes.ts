import { Router, Request, Response } from "express";

const router = Router();

router.get('/login', (req: Request, res: Response): void => {
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
});

router.post('/login', (req: Request, res: Response): void => {
   const {email, password} = req.body;

   res.send(email + password);
});

export { router };
