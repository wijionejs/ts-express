import 'reflect-metadata';

export function use(middleware: Function) {
    return function (target: any, key: string) {
        const middlewares = Reflect.getMetadata('middleware', target) || [];
        Reflect.defineMetadata('middleware', [...middlewares, middleware], target, key);
    }
}
