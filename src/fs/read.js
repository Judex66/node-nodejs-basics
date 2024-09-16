import {readFile} from "fs/promises";
const read = async () => {
    const fileWay = 'src/fs/files/fileToRead.txt';
    try {
        const readingContent = await readFile(fileWay, 'utf-8', import.meta.url);
        console.log(readingContent);
    } catch (error) {
        console.log("FS operation failed");
        // console.log(error);
    }
};

await read();

