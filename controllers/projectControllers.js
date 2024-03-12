const getProjects = (req, res)=>{
    res.json({message: "get projects"})
}

const getSingleProject = (req, res)=>{
    const id = req.params.id
    res.json({message: "get Single Project", id: id})
}

module.exports = {getProjects, getSingleProject}