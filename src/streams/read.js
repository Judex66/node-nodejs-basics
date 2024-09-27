import {createReadStream} from 'fs';
import {pipeline} from 'stream/promises';
const fileWay ='files/fileToRead.txt';
const fileURL = new URL(fileWay, import.meta.url);
const read = async () => {
    await pipeline(createReadStream(fileURL), process.stdout);
};

await read();