//Not currently in use
function emptyChatbot(req,res,next){
    const chatData = req.body.data;
    if(!chatData){
        return next({
            status: 400,
            message: "input value cannot be empty"
        })
    }
    console.log("at emptyChatbot")
    next()
}

module.exports = emptyChatbot;