import { Application } from 'express';

export default class Plugin {
    static instance: Plugin | null;
    app: Application;
    /**
     * 
     * @param {Express.Application} app 
     */
    constructor(app: Application){
        this.app = app;
    }
    /**
     * 安装时候
     */
    install(){};
    /**
     * 激活
     */
    active(){};
    /**
     * 禁用
     */
    disable(){}
    /**
     * 卸载
     */
    uninstall(){};
}

