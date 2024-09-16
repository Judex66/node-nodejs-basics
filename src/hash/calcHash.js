import {readFile} from 'fs/promises'
import {createHash} from 'crypto'
const calculateHash = async () => {
    const fileWay ='src/hash/files/fileToCalculateHashFor.txt';
    const content =await readFile(`${fileWay}`,'utf-8',import.meta.url)
    const data = createHash('sha256').update(content)
    console.log(data.digest('hex'))
};

await calculateHash();