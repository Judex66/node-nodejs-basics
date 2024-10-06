import { Transform } from 'stream';
import { pipeline } from 'stream/promises';
const transform = async () => {
    const transformationProcces = new Transform({
        transform(chunk, _, transformation) {
            transformation(null, chunk.toString().split('').reverse().join(''));
        }
    })
    await pipeline(process.stdin, transformationProcces, process.stdout);
};

await transform();