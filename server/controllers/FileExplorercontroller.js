var {promises : fs} = require('fs');
var path = require('path'); 

const getFilesFromPath = async (req, res, next)=>{
    const dirPath = req.body.url;
    let data =[];
    let fileNames = [];
    const isPathExist = checkPathExistance(dirPath);
    if(isDirectory(dirPath)){
        readDirectory();
      
    }else{
    res.json({
            message: "Path needs to be for directory."
    })   
    }


}

 const readDirectory = async (dirPath)=>{
    try{
        fileNames = await fs.readdir(dirPath);
        res.json({
            message: "directory reading success.",
            data: fileNames
      })  

    }catch{
        res.json({
            message: "directory reading error."
      })   
    }
}
const checkPathExistance = (dirPath)=>{
    path.exists(dirPath, function(exists) { 
        if (exists) { 
         return true; 
        } 
        return false;
      });

}
const isDirectory = (dirPath)=>{
    var stats = fs.statSync(dirPath);
    return stats.isDirectory();
}


export{
    getFilesFromPath
}