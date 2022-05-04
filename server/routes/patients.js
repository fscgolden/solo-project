const express = require('express');
const router = express.Router();

const patientsController = require('../controllers/patientsController');

router.get('/', patientsController.getPatients, (req, res) => res.status(200).json(res.locals));

router.post('/', patientsController.createPatient, (req, res) => res.status(200).json(res.locals));

module.exports = router;