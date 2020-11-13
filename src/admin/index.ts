import Plugin from "../plugin";
import * as express from "express";
import * as path from "path";
import { registRoute } from "../utils/route";
import { renderFile } from "ejs";
export default class AdminPlugin extends Plugin {
  install() {
    const admin = express();
    this.app.use(
      "/static",
      express.static(path.join(__dirname, "./views/css"))
    );
    admin.set("view engine", "ejs");
    admin.on("mount", function (parent) {
      console.log("初始化管理");
      parent.set("admin", admin);
    });
    admin.set("views", path.join(__dirname, "views"));
    const routes = this.app.getSidebar();
    registRoute(routes,(route)=>{
      admin.get(route.path, async (req, res)=> {
        let data ={};
        if(route.data){
           data = await route.data();
        }
        const content = await renderFile(route.content,{req,app:this.app,...data});
        console.log(data)
        res.render("index",{
          req:req,
          content:content,
          app:this.app
        });
      });
    })
    admin.get("/",  (req, res)=> {
      res.render("index",{
        req:req,
        app:this.app
      });
    });
    
    console.log(admin.routes)
    this.app.use("/admin", admin);
  }
}
