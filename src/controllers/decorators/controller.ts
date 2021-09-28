import 'reflect-metadata';
import {AppRouter} from "../../router";
import {Methods} from "./Methods";

export function controller(prefix: string) {
    return function (target: Function) {
        const router = AppRouter.getInstance();
        for (const key in target.prototype) {
            if(target.prototype.hasOwnProperty(key)) {
                const path = Reflect.getMetadata('path', target.prototype, key);
                const method: Methods = Reflect.getMetadata('method', target.prototype, key);
                const middleware = Reflect.getMetadata('middleware', target.prototype, key) || [];
                console.log(middleware)

                router[method](prefix + path, ...middleware, target.prototype[key]);
            }
        }
    }
}
