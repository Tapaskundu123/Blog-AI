
import jwt from 'jsonwebtoken'
export const LoginAdmin= async(req,res)=>{
   
    const {email, password}= req.body;

    try{
        
    if(email!==process.env.ADMIN_EMAIL){
        return res.status(404)
                  .json({success:true, message:"Invalid Email"})
    }
    if(password!==process.env.ADMIN_PASSWORD){
        return res.status(404)
                  .json({success:true, message:"Invalid Password"})
    }

    const jwtToken= jwt.sign({email},process.env.JWT_SECRET_KEY);

    return res.status(200)
              .cookie('Token',jwtToken,{secure:true,httpOnly:false})
              .json({success:true, message:"Admin Logged in Successfully"})

}

catch(error){
        return res.status(500)
                  .json({success:false, message:error.message})
}
}