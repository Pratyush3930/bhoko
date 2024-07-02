import jwt from 'jsonwebtoken';

const authMiddleware = async(req, res,next) => {
// next is the callback function
    const {token} = req.headers;
    if(!token){
        return res.json({success: false, message:"Not authorized. Login Again!"})
    }
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = decodedToken.id;
        next(); // will then move on to the next process 
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error"});
    }
}

export default authMiddleware;