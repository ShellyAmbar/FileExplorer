import {getFilesfromPathCall} from '../calls/FileExplorer'

const getFilesfromPath  = async (filePath)=>{
   
    let files = await getFilesfromPathCall(filePath);
    return files;
  }
  
  export {
      getFilesfromPath
  }