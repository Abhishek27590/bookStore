import Admin from "../model/admin.model.js"
import bcryptjs from "bcryptjs"

export const loginAdmin=async(req,res)=>{
    try{
        const{email,password}=req.body;
        if(!email||!password){
            return res.status(400).json({
                message:"Enter Details please"
            })
        }
        const foundAdmin=await Admin.findOne({email})
        if(!foundAdmin){
            return res.status(400).json({
                status:"false",
                message:"User not found"
            })
        }
        // const isMatch=await bcryptjs.compare(password,foundAdmin.password)
        if(password==foundAdmin.password){
            return res.status(200).json({
                status:"true",
                message:"Successful Login"
            })
        }
        else{
            return res.status(400).json({
                status:"false",
                message:"Wrong Password contact Support"
            })
        }
    }
    catch(e){
        res.status(400).json({
            message:"Something broke at admin login"
        })
    }
}