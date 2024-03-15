const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    contentType:{
        type:String,
        
    },
    tag:{
        type:String,
        
    },
    userId:{
        type:String,
        required:true
    },
    size: {
        type:Number,
    },
    data:{
        type: Buffer,
    }

})

const fileModel = mongoose.model('file', fileSchema);

module.exports = fileModel;