import * as express from "express";
import * as path from "path";
import baseConfig from "./config/base.config";
import { hook,appHook } from "./utils/hook";

export type SidebarInfo = {
  name: string,
  path?: string,
  children?: SidebarInfo[],
  content?: string,
  data?: ()=>Promise<any>
}
declare global{
   module Express {
     interface Application {
      registerSidebar: (sidebarInfo:SidebarInfo)=>void;
      getSidebar:()=>SidebarInfo[];
    }
  }
}

function defineGlobalConfig(app: express.Application,config: any){
  for(let key in config){
    app.set(key,config[key])
  }
}
function init() {
  const app = express();
  defineGlobalConfig(app,baseConfig)
  const port = process.env.PORT || 4399;
  app.listen(port, () => {
    hook.emit(appHook.start)
    console.log(`应用启动🚀 http://localhost:${port}`)
  });
  app.set("sidebar",[]);
  app.registerSidebar = (sidebarInfo:SidebarInfo)=>{
    app.set("sidebar",[...app.get('sidebar'),sidebarInfo])
  }
  app.getSidebar = ()=>app.get("sidebar")
  process.on('exit', function() {
    hook.emit(appHook.destroy)
  });

  return app
}

export default init;