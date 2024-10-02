import { cp } from 'fs/promises';

const copy = async () => {
  const fileWay ='src/fs/files'
    const newFileCopy='new_file_copy'
    try{
    await cp(fileWay, newFileCopy, { recursive: true });
  }
    catch(error){
      console.log('FS operation failed')
      console.log(error)
    }
};

copy();
