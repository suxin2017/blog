import * as path from 'path';

const ABP = path.resolve(__dirname,"..");
export default {
    ABP,
    pluginPath:path.join(ABP,"admin/plugins"),
    themePath:path.join(ABP,"themes"),
    corePluginPath:path.join(ABP,"../core/plugins"),
}

