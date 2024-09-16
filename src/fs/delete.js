import {rm} from 'fs/promises';
const remove = async () => {
    const fileWay = 'src/fs/files';
    const removeFile = 'fileToRemove.txt';
    try {
        await rm(`${fileWay}/${removeFile}`);
    } catch (error) {
        console.log("FS operation failed");
        console.log(error);
    }
}

await remove();