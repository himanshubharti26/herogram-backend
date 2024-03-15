
const authService = require('../services/authService')
exports.login = async(req, res)=>{
    try{
        
        const {email, password} = req.body;
        console.log("in login", email, password);
        const resp = await authService.login(email, password);
        res.status(200).send(resp);
    }catch(err){
        res.status(500).send(`Error in login ${err}`);
    }
}

exports.logout = async(req, res) => {
    try{
        const resp = await authService.logout(email, password);
        return resp;
    }catch(err){
        return err;
    }

}
