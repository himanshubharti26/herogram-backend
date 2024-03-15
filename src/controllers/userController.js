const userService = require('../services/userService');

exports.registerUser = async(req, res) =>{
    try{
        const userData = req.body;
        console.log("in register user",userData);
        const resp = await userService.createUser(userData);
        return res.status(201).send(resp);
    }catch(err){
        res.status(500).send(` ${err}`);
    }
}

exports.getUserById = async (req,res)=>{
    try{
        const userId = req.params.id;
        const resp = await userService.getUserById(userId);
        return res.status(200).send(resp);
    }catch(err){
        return err;
    }
}
exports.getUserByEmail = async (req,res)=>{
    try{
        const email = req.params.email;
        const resp = await userService.getUserByEmail(email);
        console.log("fetched user by email", email, resp);
        return res.status(200).send(resp);
    }catch(err){
        return err;
    }
}