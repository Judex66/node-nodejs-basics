import {rename as renameFile} from 'fs/promises';

const rename = async () => {
    const fileWay = 'src/fs/files';
    const wrongName = 'wrongFilename.txt';
    const rightName = 'properFilename.md';
    try {
        renameFile(`${fileWay}/${wrongName}`, `${fileWay}/${rightName}`);
    } catch (error) {
        console.log("FS operation failed");
        // console.log(error);
    }
};

await rename();