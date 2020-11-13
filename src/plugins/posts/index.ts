import { Photo } from './entity/posts';
import Plugin from "../../plugin";
import * as path from "path";
import {getRepository, Repository} from "typeorm";
declare global{
  module Express {
    interface Application {
      posts:Photo[]
   }
 }
}
export default class PostsPlugin extends Plugin {
  install() {
      const router = {
        name: "文章",
        path: "/posts",
        content: path.resolve(__dirname,"views/posts.ejs"),
        children:[
          {
            path:"/posts/all",
            name:"全部文章",
            content: path.resolve(__dirname,"views/posts.ejs"),
            data: async ()=>{
             const posts =  await getRepository(Photo).find()
             return {
               posts
             }
            }
          },
          {
            path:"/posts/create",
            name:"新建文章",
            content: path.resolve(__dirname,"views/create.ejs"),

          }
        ]
      }
   
      console.log(this.app.posts)
      this.app.registerSidebar(router)
  }
}
