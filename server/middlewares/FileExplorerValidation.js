const isValidPath=(req, res, next)=>{

    try{
        const url = req.body.url;
       if(!url) throw new Error("There is no url");
       if(url) throw new Error("Url is Empthy");
       var pattern = /^([A-Za-z]:)(\\[A-Za-z_\-\s0-9\.]+)+$/; 
       if(pattern.test(url)){
           console.log("url valid");
           next();
       }else{
        new Error("Url is not a valid pattern");
       }

    }catch(error){
        res.json({
            message: error,
          });
    }
}

module.exports = isValidPath;