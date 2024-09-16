import {writeFile} from "fs/promises";
const create = async () => {
    const fileWay = 'src/fs/files';
    const fileName = 'flesh.txt';
    const fileContent = 'I am fresh and young';
    try {
        await writeFile(`${fileWay}/${fileName}`, fileContent, 'utf-8', import.meta.url);
    } catch (error) {
        console.log("FS operation failed");
        // console.log(error);
    }
};

await create();