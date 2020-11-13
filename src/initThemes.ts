import { Application } from 'express';
import { requireDir } from '../utils/require';

function initPlugin(app: Application){
    const themePath = app.get("themePath");
}
export default initPlugin;