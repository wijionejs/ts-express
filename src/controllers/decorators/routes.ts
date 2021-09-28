import 'reflect-metadata';
import {Methods} from "./Methods";

function bindMethod(method: Methods) {
    return function(path: string) {
        return function(target: any, key: string) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        }
    }
}

export const post = bindMethod(Methods.post);
export const get = bindMethod(Methods.get);
export const put = bindMethod(Methods.put);
export const patch = bindMethod(Methods.patch);
export const del = bindMethod(Methods.del);
