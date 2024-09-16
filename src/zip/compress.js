import {createReadStream, createWriteStream} from 'fs'
import {pipeline} from 'stream/promises'
import { createGzip } from 'zlib';
const compress = async () => {
    const fileWay ='files/fileToCompress.txt';
    const fileCompress = 'files/compress.gz'
    const fileURL = new URL(fileWay, import.meta.url)
    const fileCompressURL = new URL(fileCompress, import.meta.url)
    await pipeline(createReadStream(fileURL), createGzip(),createWriteStream(fileCompressURL))
};

await compress();