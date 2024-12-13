const projects= require('../Models/projectSchema')

exports.addProjectAPI=async(req,res)=>{
    console.log('Inside add ProjectAPI');
    const {title,language,gitHub,website,overview}=req.body
    const projectImg = req.file.filename
    const userId = req.payload

    try{
        const project = await projects.findOne({gitHub})
        if(project){
            res.status(401).json("project already existing")
        }
        else{
            const newProject = new projects({title,language,gitHub,website,overview,projectImg,userId})
            await newProject.save()
            res.status(200).json(newProject)
        }
    }
    catch(err){
        res.status(402).json(err)
    }
    
}


exports.editProjectAPI=async(req,res)=>{
    console.log('Inside edit ProjectAPI');
    const {title,language,gitHub,website,overview,projectImg}=req.body
    const updateImg = req.file? req.file.filename:projectImg
    const userId = req.payload
    const {projectId}=req.params
    console.log(projectImg);
    console.log(title,language,gitHub,website,overview,userId);
    
    

    try{
        console.log('Inside Try');
        const project = await projects.findByAndUpdate(
            {_id:projectId},
            {
                title:title,
                language:language,
                gitHub:gitHub,
                website:website,
                overview:overview,
                projectImg:updateImg
            }
        )
       await project.save()
       res.status(200).json("Project Updated...")
    }
    catch(err){
        res.status(402).json(err)
    }
    
}

exports.getHomeProjectAPI=async(req,res)=>{
    try{
        const response= await projects.find().limit(3)
        res.status(200).json(response)
    }catch(err){
        res.status(402).json(err)
    }
}
exports.getAllUserProjectAPI=async(req,res)=>{
    try{
        const response= await projects.find()
        res.status(200).json(response)
    }catch(err){
        res.status(402).json(err)
    }
}
exports.getUserProjectAPI=async(req,res)=>{
    const userId = req.payload
    try{
        const response= await projects.find({userId})
        res.status(200).json(response)
    }catch(err){
        res.status(402).json(err)
    }
}
