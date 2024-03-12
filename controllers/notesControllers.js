const getNotes = (req, res)=>{
    res.json({message: "get Notes"})
}

const getSingleNote = (req, res)=>{
    const id = req.params.id
    res.json({message: "get Single Note", id: id})
}

module.exports = {getNotes, getSingleNote}