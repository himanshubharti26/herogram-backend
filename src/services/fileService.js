const HttpException = require('../HttpException');
const fileModel = require('../models/fileModel');
const userService = require('./userService');
exports.uploadFile = async(fileData, userId, tag)=>{

        try {
            const newFile = new fileModel({
                userId: userId,
                tag: tag,
                name: fileData.originalname,
                contentType: fileData.mimetype,
                size: fileData.size,
                data: fileData.buffer,
            });
            await newFile.save();
            
        } catch (error) {
            console.error(error);
            throw new HttpException(500, `Error in file upload ${err} `);
        }
}

exports.getuserFiles = async(email)=>{
    try{
        const user  = await userService.getUserByEmail(email);
        if(!user){
            throw new HttpException("404","user not found");
        }
        const userFiles = await fileModel.find({userId:user.userId});
        // console.log("fetched files==>", userFiles);
        return userFiles;
    }catch(err){
        throw new HttpException("500","Internal server err");
    }
}

