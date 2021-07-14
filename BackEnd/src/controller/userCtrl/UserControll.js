const User =require("../../models/userModel/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/**
 * sign in controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */

const signin =async (req,res)=>{
    const{email,password} = req.body;

    try{

        //find user by email
        const getUser =await  User.findOne({email});
        if (!getUser) return res.status(404).json({message:"user not found"});

        //check is input password and data base password both are same
        const isPassCorrect = await  bcrypt.compare(password,getUser.password);
        if(!isPassCorrect) return res.status(404).json({message:"Invalid password"});

        //get user
        const token = jwt.sign({email: getUser.email,id:getUser.id},process.env.USERSTRING,{expiresIn:'1h'});

        res.status(200).json({result:getUser,token:token});

    }catch (e) {

        res.status(500).json({message: "Server error" + e});

    }
}
/**
 * sign up controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const signup =async (req,res)=>{

    //get date from request body
    const {email,password,name,contactNo,type} =req.body;

    try{

        //check user is already exist
        const getUser =await  User.findOne({email});
        if (getUser) return res.status(404).json({message:"user already exist"});

        //hash password for security security level 12
        const hashpassword  = await  bcrypt.hash(password,12);

        //create user
        const result = await User.create({email,password:hashpassword,name:name,type:type,contactNo:contactNo });
        console.log("user : " +email + password + name + contactNo +type);

        //create jwt token
        const token = jwt.sign({email: result.email,id:result.id},process.env.USERSTRING,{expiresIn:'1h'});

        res.status(200).json({result,token});

    }catch (e) {

        res.status(500).json({message: "Server error" + e});

    }
}

/**
 * Delete user
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
 const deleteUser = async (req, res) => {
    const id = req.params.id
    await User.findByIdAndRemove(id).exec()
    res.send('itemDeleted');
}


/**
 * Get all users controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
 const getAllUsers = async (req, res) => {
    await User.find({})
        .populate('User', '_id name email contactNo type')
        .then(data=>{
            res.status(200).send({data: data});
        })
        .catch(error =>{
            res.status(500).send({error: error.message});
        });
}

/**
 * export controllers
 * @type {{signin: signin, signup: signup, deleteUser: deleteUser , getAllUsers: getAllUsers}}
 */
module.exports = {
    signup,
    signin,
    deleteUser,
    getAllUsers
};
