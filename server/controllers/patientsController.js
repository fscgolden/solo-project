const db = require('../models/patientsModels');

const patientsController = {};

patientsController.getPatients = (req, res, next) => {

  const query = 'SELECT * FROM patients';

  db.query(query)
    .then((data) => {
      res.locals = data.rows;
      return next();
    })
    .catch(error => next({
      log: 'patientsController.getPatients ERROR',
      message: {err: 'patientsController.getPatients ERROR'}
    }));

};

module.exports = patientsController;