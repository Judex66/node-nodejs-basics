import { copyFile, readdir, mkdir } from 'fs/promises';
const copy = async () => {
  const fileWay ='src/fs/files'
    const newFileCopy='new_file_copy'
    try{
    const [files]= await Promise.all([readdir(fileWay), mkdir(`${fileWay}/${newFileCopy}`)])
    const copyFiles = files.map((newFiles)=>
      copyFile(`${fileWay}/${newFiles}`, `${fileWay}/${newFileCopy}/${newFiles}`)
    )
    await Promise.all(copyFiles)}
    catch(error){
      console.log('FS operation failed')
      //console.log(error)
    }
};

copy();
