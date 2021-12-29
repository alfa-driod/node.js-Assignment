const user= require('../user model/user_model');
function adduser(req,res) {
    user.create(req.body)
    .then(function (data) {
        res.status(200).json({success:true,message:'User has been created',data})
        
    })
    .catch(function (err) {
        res.status(401).json({success:false,message:'couldnt add try again'})
    })
    
}
function getalluser(req,res) {
    user.find({})
    .then(function(data) {
        res.status(200).json({
            success:true,message:'Theses are all 3 users',data
        })
    }).catch(function(data){
        res.status(401).json({
            success:false,message:'data has not been created '
        })
    });
}

module.exports={
    adduser,getalluser
}