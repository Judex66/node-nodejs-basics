import {createReadStream, createWriteStream} from 'fs'
import {pipeline} from 'stream/promises'
import { createGunzip } from 'zlib';
const decompress = async () => {
    const fileWay ='files/fileToCompress2.txt';
    const fileCompress = 'files/compress.gz'
    const fileURL2 = new URL(fileWay, import.meta.url)
    const fileCompressURL = new URL(fileCompress, import.meta.url)
    await pipeline(createReadStream(fileCompressURL), createGunzip(),createWriteStream(fileURL2))
};

await decompress();