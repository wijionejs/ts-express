import {Router} from "express";

class AppRouter {
    static router: Router;

    static getInstance() {
        if(!AppRouter.router) {
            AppRouter.router = Router()
        }

        return AppRouter.router;
    }
}

export { AppRouter };
