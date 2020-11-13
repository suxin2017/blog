import { SidebarInfo } from "initExpress";

export function registRoute(routes: SidebarInfo[],cb:(route: SidebarInfo)=>void){
    routes.forEach(route=>{
        cb(route);
        if(route.children){
            registRoute(route.children,cb)
        }
    })
}