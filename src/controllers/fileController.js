
const fileService = require('../services/fileService')


exports.uploadFile =  async(req, res)=>{
    try{
    const FileData = req.file;
    const {userId, tag} = req.body;
    console.log("user id==>", userId);
    console.log("file data received",FileData);
    await fileService.uploadFile(FileData, userId, tag); 
    res.status(201).send('File uploaded successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Failed to upload file');
    }
};

exports.getUserFiles = async(req, res)=>{
    try{
        const {email} = req.params;
        
        const resp = await fileService.getuserFiles(email);
        console.log("resp ====>", resp)
        res.status(200).send(resp);
    }catch(err){
        res.status(500).send("error in fetching user files")
    }
}

