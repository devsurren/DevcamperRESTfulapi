exports.getAllBootcamps=(req,res,next)=>{
    res.status(200).json({success:true,data:{id:1}});
}

exports.getSingleBootcamp=(req,res,next)=>{
    res.status(202).json({success:true,data:{id:req.params.id}});
    }

exports.createBootcamp=(req,res,next)=>{
    res.status(201).json({success:true,data:{id:1},msg:"Bootcamp Created"});
}

exports.updateBootcamp=(req,res,next)=>{
    res.status(202).json({success:true,data:{id:req.params.id},msg:"Updated"});
    }

exports.deleteBootcamp=(req,res,next)=>{
    res.status(202).json({success:true,data:{id:req.params.id},msg:"Deleted"});
    }