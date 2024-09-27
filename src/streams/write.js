import {createWriteStream} from 'fs';
import {pipeline} from 'stream/promises';
const fileWay ='files/fileToWrite.txt';
const fileURL = new URL(fileWay, import.meta.url);
const write = async () => {
   await pipeline(process.stdin,createWriteStream(fileURL));
};

await write();