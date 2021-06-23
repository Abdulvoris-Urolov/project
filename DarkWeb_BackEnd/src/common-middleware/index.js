exports.requireSignin = (req, res, next) =>{

    if(req.headers.authorization){
        const token = req.headers.authorization.slipt(" ")[1];
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    }
    return res.status(400).json({ message: 'Authorization required' });


    //jwt.decode()
}

exports.userMiddleware = (req, res, next) => {

}

exports.adminMiddleware = (req, res, next) => {
    if(req.user.role !== 'admin'){
        return res.status(400).json({ message: 'Access denied'})
    }
    next();
}