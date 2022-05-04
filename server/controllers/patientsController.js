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


patientsController.createPatient = (req, res, next) => {

  const { name, identifier, date, procedure, notes, biopsy, discussed } = req.body;
  const dataArr = [name, identifier, date, procedure, notes, biopsy, discussed]

  const query = 'INSERT INTO patients (name, identifier, date, procedure, notes, biopsy, discussed) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';

  db.query(query, dataArr)
    .then((data) => {
      res.locals = data.rows[0];
      console.log('in then statement')
      console.log('data.rows[0] is: ', data.rows[0]);
      return next();
    })
    .catch(error => next({
      log: 'patientsController.createPatient ERROR',
      message: {err: 'patientsController.createPatient ERROR'}
    }));
};

module.exports = patientsController;