import { readdirSync } from "fs";
import * as path from 'path'
import LoadThemeError from "../error/LoadThemeError";
/**
 * 
 * @param {string} dirPath 
 * @returns {any[]}
 */
export function requireDir(dirPath){
    try{
        console.log(dirPath)
       const moduleList =  readdirSync(dirPath);
       const modules = []
       for(let moduleName of moduleList){
            modules.push(require(path.join(dirPath,moduleName)))
       }
       return modules
    }catch(e){
        console.log(e)
    //    throw new LoadThemeError(e)
    }
}