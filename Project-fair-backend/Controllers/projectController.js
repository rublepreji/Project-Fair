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

exports.getHomeProjectAPI=async(req,res)=>{

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

}
