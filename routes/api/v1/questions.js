const express = require('express');
const router = express.Router();

const QuestionsController = require('../../../controllers/home_controller')
//this is used to create question
router.post('/create',QuestionsController.createQuestion);
//this is used to create option
router.post('/:id/create-option', QuestionsController.createOption);
//this is used to delete question
router.delete('/:id/delete', QuestionsController.deleteQuestion);
//this is used to view the question
router.get('/:id', QuestionsController.viewQuestion);




module.exports =router;