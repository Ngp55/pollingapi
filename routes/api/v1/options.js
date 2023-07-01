const express = require('express');
const router = express.Router();
//this is used to create question
const OptionsController = require('../../../controllers/option_controller');
//this is used to add vote
router.post('/:id/addVote', OptionsController.addVote);
//this is used to delete option
router.delete('/:id/delete', OptionsController.deleteOption);





module.exports =router;