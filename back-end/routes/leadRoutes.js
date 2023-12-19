const express = require('express');
const leadController = require('../controllers/leadController');

const router = express.Router();

router.route('/')
.get(leadController.getLeads)
.post(leadController.createLead)
.delete(leadController.deleteAllLeads);


router.route('/:id')
.delete(leadController.deleteLead)
.patch(leadController.updateLead)



module.exports = router;