const express = require('express')

const router = express.Router()

// const {fileUpload} = require('../controllers/fileUpload')
const {imageUpload,videoUpload} = require('../controllers/imageUpload')
// imageUpload,videoUpload,imageReducerUpload   
// API Router 


router.post('/ImageUpload',imageUpload)
router.post('/videoUpload',videoUpload)
module.exports = router