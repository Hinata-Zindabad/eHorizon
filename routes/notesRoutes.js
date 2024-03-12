const express = require("express")
const {getNotes, getSingleNote} = require("../controllers/notesControllers")

const router = express.Router()

router.get("/", getNotes)
router.get("/:id", getSingleNote)

module.exports = router