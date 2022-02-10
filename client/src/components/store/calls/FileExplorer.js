const axios = require('axios');

const getFilesfromPathCall  = (filePath)=>{
   
  return  axios.get(`http://localhost:3000/api/file-explorer/getFilesFromPath`, {
        params: {
          url: filePath
        }
      })
     
}

export {
    getFilesfromPathCall
}