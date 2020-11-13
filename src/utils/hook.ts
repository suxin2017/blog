import * as events from 'events';
export default class Hook extends events.EventEmitter {

}
export const appHook = {
    init: Symbol(),
    start: Symbol(),
    destroy: Symbol(),
}
export const hook = new Hook();
