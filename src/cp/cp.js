import { fork } from 'child_process';
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const spawnChildProcess = async (args) => {
  const dirname_new = dirname(fileURLToPath(import.meta.url));
let child = fork(join(dirname_new, "files", "script.js"), args);

child.on('message', function (args) {
    console.log(args);
});
};

spawnChildProcess(['test1', 'test2', 'test3']);