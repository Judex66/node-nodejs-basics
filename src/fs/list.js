import {readdir} from 'fs/promises';
const list = async () => {
    const fileWay = 'src/fs/files';
    try {
        console.log(await readdir(fileWay));
    } catch (error) {
        console.log("FS operation failed");
        // console.log(error);
    }
};

await list();