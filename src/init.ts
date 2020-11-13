import { createConnection } from "typeorm";
import {appHook, hook} from "./utils/hook";
import initExpress from "./initExpress";
import initPlugins from "./initPlugins";
import initThemes from "./initThemes";
export default function init(){
    createConnection().then(async connection => {
        hook.emit(appHook.init);
        const app = initExpress();
        initPlugins(app);
        // initThemes(app)
    }).catch(error => console.log("TypeORM connection error: ", error));
};