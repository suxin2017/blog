import { Application } from 'express';
import Plugin from './plugin';
import PostsPlugin from './plugins/posts';
import AdminPlugin from './admin';

function initPlugin(app: Application){
    let corePlugins: Plugin[] = [];
    corePlugins.push(new PostsPlugin(app))
    corePlugins.push(new AdminPlugin(app))
    for(let corePlugin of corePlugins){
        corePlugin.install();
    }
}
export default initPlugin;

function getPlugins(pluginsModule: any[]) {
    const plugins = {};
    for (let module of pluginsModule) {
        const plugin = module.default;
        if (plugin.name) {
            plugins[plugin.name] = new plugin();
            plugins[plugin.name].install();
        }
    }
    return plugins
}
